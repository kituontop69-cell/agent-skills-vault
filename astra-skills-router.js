/**
 * Astra Dynamic Skills Router & Ingestion Engine
 * Loads ALL_SKILLS_PROMPTS.json and injects matching skills into GPT / Astra agent prompts.
 */

const fs = require('fs');
const path = require('path');

class AstraSkillsEngine {
  constructor(jsonPath) {
    this.jsonPath = jsonPath || path.join(__dirname, 'ALL_SKILLS_PROMPTS.json');
    this.skills = [];
    this.loadSkills();
  }

  loadSkills() {
    try {
      let rawData = fs.readFileSync(this.jsonPath, 'utf8');
      if (rawData.charCodeAt(0) === 0xFEFF) {
        rawData = rawData.slice(1);
      }
      this.skills = JSON.parse(rawData);
      console.log(`[AstraSkillsEngine] Loaded ${this.skills.length} skills successfully from: ${this.jsonPath}`);
    } catch (err) {
      console.error(`[AstraSkillsEngine] Error loading skills JSON:`, err.message);
      this.skills = [];
    }
  }

  /**
   * Helper to ensure content string
   */
  getContentString(content) {
    if (typeof content === 'string') return content;
    if (Array.isArray(content)) return content.join('\n');
    return '';
  }

  /**
   * Simple TF-IDF / Token Relevance Scoring
   */
  scoreSkill(skill, queryTokens) {
    let score = 0;
    const nameLower = (skill.Name || '').toLowerCase();
    const catLower = (skill.Category || '').toLowerCase();
    const descLower = (skill.Description || '').toLowerCase();
    const fullContent = this.getContentString(skill.Content);
    const contentSample = fullContent.slice(0, 1000).toLowerCase();

    for (const token of queryTokens) {
      if (token.length < 2) continue;

      // Exact name match (highest priority)
      if (nameLower.includes(token)) score += 15;
      
      // Category match
      if (catLower.includes(token)) score += 8;

      // Description match
      if (descLower.includes(token)) score += 5;

      // Content sample match
      if (contentSample.includes(token)) score += 2;
    }

    return score;
  }

  /**
   * Find matching skills based on user prompt
   */
  findRelevantSkills(userPrompt, maxResults = 2, minScore = 5) {
    if (!userPrompt || !this.skills.length) return [];

    const queryTokens = userPrompt
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2);

    const scored = this.skills.map(skill => ({
      skill,
      score: this.scoreSkill(skill, queryTokens)
    }));

    return scored
      .filter(item => item.score >= minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(item => item.skill);
  }

  /**
   * Injects the relevant skill(s) into your GPT 6 Astra system prompt
   */
  buildSystemPrompt(userPrompt, baseInstructions = "You are Astra, an advanced agentic AI assistant.") {
    const matchedSkills = this.findRelevantSkills(userPrompt);

    if (matchedSkills.length === 0) {
      return baseInstructions;
    }

    let skillsSection = "\n\n=== ACTIVATED AGENT SKILLS ===\n";
    skillsSection += "Follow these specialized instructions to execute the user request:\n\n";

    matchedSkills.forEach((s, idx) => {
      skillsSection += `--- [SKILL ${idx + 1}: ${s.Name}] (Category: ${s.Category}) ---\n`;
      if (s.Description) {
        skillsSection += `Summary: ${s.Description}\n\n`;
      }
      skillsSection += `${this.getContentString(s.Content)}\n\n`;
    });

    skillsSection += "=== END ACTIVATED SKILLS ===\n";

    return `${baseInstructions}${skillsSection}`;
  }
}

// Export for module use
module.exports = AstraSkillsEngine;

// Self-test when run directly
if (require.main === module) {
  const engine = new AstraSkillsEngine();

  const testQueries = [
    "I need to fix a memory leak in my frontend application",
    "Help me design Cloud Firestore security rules for my chat app",
    "Write unit tests for my Dart functions with mock objects",
    "I want to do a systematic debugging of this crashing API"
  ];

  console.log("\n==================== RUNNING TEST MATCHES ====================");
  testQueries.forEach(q => {
    console.log(`\nUser Query: "${q}"`);
    const matches = engine.findRelevantSkills(q, 2);
    if (matches.length > 0) {
      matches.forEach(m => console.log(`  -> Matched Skill: [${m.Name}] (Category: ${m.Category})`));
    } else {
      console.log("  -> No specialized skill triggered (uses general model).");
    }
  });
  console.log("\n==============================================================");
}
