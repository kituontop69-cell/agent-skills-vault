"""
Astra Dynamic Skills Router & Ingestion Engine (Python)
Dynamically matches and injects relevant agent skills into GPT 6 Astra prompts.
"""

import json
import os
import re

class AstraSkillsEngine:
    def __init__(self, json_path=None):
        if json_path is None:
            json_path = os.path.join(os.path.dirname(__file__), "ALL_SKILLS_PROMPTS.json")
        self.json_path = json_path
        self.skills = []
        self.load_skills()

    def load_skills(self):
        try:
            with open(self.json_path, "r", encoding="utf-8-sig") as f:
                self.skills = json.load(f)
            print(f"[AstraSkillsEngine] Successfully loaded {len(self.skills)} skills.")
        except Exception as e:
            print(f"[AstraSkillsEngine] Error loading skills JSON: {e}")
            self.skills = []

    def _get_content_string(self, content):
        if isinstance(content, list):
            return "\n".join(content)
        elif isinstance(content, str):
            return content
        return ""

    def _score_skill(self, skill, query_tokens):
        score = 0
        name = skill.get("Name", "").lower()
        category = skill.get("Category", "").lower()
        desc = skill.get("Description", "").lower()
        content_sample = self._get_content_string(skill.get("Content", ""))[:1000].lower()

        for token in query_tokens:
            if len(token) < 2:
                continue
            if token in name:
                score += 15
            if token in category:
                score += 8
            if token in desc:
                score += 5
            if token in content_sample:
                score += 2
        return score

    def find_relevant_skills(self, user_prompt, max_results=2, min_score=5):
        if not user_prompt or not self.skills:
            return []

        tokens = [
            t for t in re.sub(r"[^a-zA-Z0-9_-]", " ", user_prompt.lower()).split()
            if len(t) > 2
        ]

        scored = []
        for s in self.skills:
            score = self._score_skill(s, tokens)
            if score >= min_score:
                scored.append((score, s))

        scored.sort(key=lambda x: x[0], reverse=True)
        return [item[1] for item in scored[:max_results]]

    def build_system_prompt(self, user_prompt, base_instructions="You are Astra, an advanced AI agent."):
        matched = self.find_relevant_skills(user_prompt)
        if not matched:
            return base_instructions

        lines = [base_instructions, "\n\n=== ACTIVATED AGENT SKILLS ==="]
        lines.append("Follow these specialized workflows for this task:\n")

        for idx, s in enumerate(matched, 1):
            lines.append(f"--- [SKILL {idx}: {s.get('Name')}] (Category: {s.get('Category')}) ---")
            if s.get("Description"):
                lines.append(f"Summary: {s.get('Description')}\n")
            lines.append(self._get_content_string(s.get("Content", "")) + "\n")

        lines.append("=== END ACTIVATED SKILLS ===")
        return "\n".join(lines)


if __name__ == "__main__":
    engine = AstraSkillsEngine()
    test_queries = [
        "Debug memory leaks in Chrome",
        "Generate mock tests for my Dart project",
        "Write Firestore rules with secure role checks"
    ]
    for q in test_queries:
        print(f"\nQuery: {q}")
        matches = engine.find_relevant_skills(q)
        for m in matches:
            print(f"  -> Matched Skill: [{m.get('Name')}] ({m.get('Category')})")
