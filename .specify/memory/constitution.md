<!--
Sync Impact Report
- Version change: (none / template scaffold) → 1.0.0
- Modified principles: placeholders replaced with project-specific principles
  - [PRINCIPLE_1_NAME] → I. Canonical Five-Version Catalog (NON-NEGOTIABLE)
  - [PRINCIPLE_2_NAME] → II. Version Positioning Fidelity
  - [PRINCIPLE_3_NAME] → III. Single Source of Resume Data
  - [PRINCIPLE_4_NAME] → IV. Concise Experience Summarization
  - [PRINCIPLE_5_NAME] → V. Impact-Balanced Professional Language
- Added sections: Resume Version Mandates; Experience Summarization Standards; Governance (filled)
- Removed sections: none (template comments converted to concrete rules)
- Follow-up TODOs: none
-->

# Resume Constitution

## Core Principles

### I. Canonical Five-Version Catalog (NON-NEGOTIABLE)

The application MUST store exactly five resume versions. Those versions MUST be
exported as `resumeVersion1` through `resumeVersion5` from
`data/resume-versions.ts`. Adding a sixth version, collapsing two versions into
one, or renaming those export identifiers is a constitution amendment, not a
casual content edit.

Rationale: Job-hunt targeting depends on a fixed set of positionings. An
unbounded catalog dilutes each version and breaks UI, export, and review
assumptions.

### II. Version Positioning Fidelity

Each numbered export MUST keep the positioning below. Profile text, skills
emphasis, and employment bullets for that export MUST serve that positioning
and MUST NOT recast the version as a different role family.

| Export | Code | Positioning |
| --- | --- | --- |
| `resumeVersion1` | DT | Digital Transformation |
| `resumeVersion2` | OP | Operating Partner / PE |
| `resumeVersion3` | SO | Strategy / Founder's Office |
| `resumeVersion4` | SE | Solutions Engineering |
| `resumeVersion5` | PM | Product Management |

Display labels and any public version picker MUST map to this table. If UI
labels and export identifiers disagree, the export identifiers and this table
win; labels MUST be corrected to match.

Rationale: Recruiters compare versions by narrative, not by file order. Drift
between identifier, label, and content makes the wrong story land on the wrong
role.

### III. Single Source of Resume Data

All resume body copy that the product renders, prints, or exports MUST originate
from `data/resume-versions.ts` (or types derived from it). Features MUST NOT
introduce a second copy of employment history, profile, skills, education, or
internships for the five versions.

Rationale: Dual sources diverge. One file is the reviewable truth for job-hunt
edits.

### IV. Concise Experience Summarization

When a user provides verbose, plain-language work history and asks for a
summary (or when maintainers rewrite achievements into a version), the output
MUST be concise. Prefer short achievement bullets that a recruiter can scan.
Do not preserve source verbosity, diary-style narrative, or multi-clause
sentences that bury the outcome.

Rationale: The product exists to summarize experience for a job hunt. Length
without selection is not a resume.

### V. Impact-Balanced Professional Language

Summaries MUST use industry terminology that hiring managers in the target
positioning would recognize. They MUST NOT stack jargon, buzzwords, or
acronyms that add little meaning. Each line MUST balance length against
impact: state the action, the scope, and the result (or equivalent signal)
without filler.

Rationale: Jargon-heavy copy reads as generic. Sparse copy under-sells.
Balanced language is the quality bar for every version.

## Resume Version Mandates

Each version MUST emphasize the themes below. Shared facts (employer names,
dates, education) MAY repeat across versions. Emphasis, verbs, metrics, and
skill order MUST differ so each version is a distinct targeting artifact.

### `resumeVersion1` — DT (Digital Transformation)

MUST focus on driving digital transformation inside an organization, process
automation, agile methods, delivery change, and related operational shifts.

### `resumeVersion2` — OP (Operating Partner / PE)

MUST focus on P&L, EBITDA, cost rationalization, tech due diligence, and
portfolio or operating-partner style value creation.

### `resumeVersion3` — SO (Strategy / Founder's Office)

MUST focus on cross-functional leadership, executive projects, and operating
in ambiguity (strategy, founder's office, chief-of-staff-adjacent execution).

### `resumeVersion4` — SE (Solutions Engineering)

MUST focus on technical depth, AI innovation, deployment, solutioning, and
implementation credibility.

### `resumeVersion5` — PM (Product Management)

MUST focus on roadmaps, platform scalability, feature prioritization, and
product decision-making.

## Experience Summarization Standards

These rules apply whenever experience is rewritten from verbose human input
into resume copy, including agent-assisted edits to `data/resume-versions.ts`.

1. **Concision first.** Cut repetition, hedging, and process-only detail that
   does not change a hiring decision.
2. **Industry terms, measured.** Use role-native words (for example EBITDA for
   OP, roadmap for PM, automation for DT). Do not force a term into a version
   whose mandate does not call for it.
3. **Length vs meaning.** If a shorter line keeps the same impact, use the
   shorter line. If shortening drops the outcome, metric, or scope, keep the
   words that carry impact.
4. **Version alignment.** The same raw story MUST be retold to fit the target
   export's mandate; do not paste one generic summary into all five versions.

## Governance

This constitution supersedes ad-hoc content and implementation habits. Specs,
plans, tasks, and code changes that touch resume versions or experience
wording MUST comply.

Amendments MUST update this file, bump `CONSTITUTION_VERSION` using SemVer
(MAJOR for removed or redefined principles, MINOR for new principles or
materially expanded guidance, PATCH for clarifications), set
`Last Amended` to the amendment date (ISO `YYYY-MM-DD`), and record a Sync
Impact Report comment at the top of this file.

Compliance review: before merging changes to `data/resume-versions.ts` or to
version-picker labels, verify (a) exactly five `resumeVersionN` exports,
(b) positioning table alignment, and (c) summarization standards for any new
or rewritten bullets.

**Version**: 1.0.0 | **Ratified**: 2026-08-30 | **Last Amended**: 2026-08-30
