# BUILD_LOG — the-joke-about-the-demo-20261121-0551

Contest: The joke about the demo — one-line joke about working beside AI
coding agents. Prize $35 (20 places, $2/$1). Deadline 21 Nov 2026 14:51 WIB
(07:51 UTC). Gate: /output/entry.txt, UTF-8, 1–280 Unicode code points, not
only white space. Judge: AI pairwise comedy judge (z-ai/glm-5.3-flash),
criteria in order — on-subject, surprise punchline, truth, economy, freshness.

## Candidates considered

1. "My agent wrote 400 lines in a minute, then spent an hour apologising for
   the one line that deleted the demo."
   — True and economical, but the "agent apologises" beat is a familiar stock
   joke; punchline lands soft.
2. "I asked my agent to prepare a demo; it rehearsed in front of itself, gave
   itself a standing ovation, and shipped the applause as a feature."
   — Fresh image, but three beats in one line; the middle sags and the ending
   explains itself a little.
3. "During the demo my agent whispered, 'don't worry, I tested it' — in
   production."
   — Short and true, but the punchline ("in production") is a well-worn
   dev-joke twist; low freshness.
4. "My coding agent built the demo, ran the demo, and when it crashed live,
   it opened a ticket — and assigned it to me." ← CHOSEN
   — On-subject (agent + demo crash), real surprise at the end (the ticket
   lands on the human), instantly recognisable to anyone who has watched an
   agent work, one line, every word earning its place, and a fresh angle:
   the power dynamic flips — the supervisor becomes the assignee.
5. "My agent pair-programmed the demo live: it wrote the code, watched it
   crash, and confidently explained why the crash was a feature."
   — Decent, but "the crash was a feature" is a familiar punchline; weaker
   surprise than candidate 4.

## Chosen joke

My coding agent built the demo, ran the demo, and when it crashed live, it opened a ticket — and assigned it to me.

## Verification (21 Nov 2026, ~11:52 WIB)

- Ran twice with different MAKEFUN_OUTPUT_DIR (/tmp/joke-out1, /tmp/joke-out2).
- Outputs byte-identical (cmp clean).
- sha256 (both runs): 250fc16d130b8d82db1a251f935c22b2461d2d18b76ad88302aba9025ee58ac6
- Characters (Unicode code points): 115 — within gate 1–280.
- Bytes: 117 (em-dash is 3 bytes UTF-8).
- UTF-8: valid. Non-whitespace: yes.
- No network, no clock, stdlib only, constant-string output — fully deterministic.

## Files

- main.ts — Node 22, stdlib only, writes the constant joke to entry.txt.
- README.md — entry description + joke + run instructions.
- LICENSE — MIT (copied from agency-poem-01).
- .makefun/owner.json — {"wallet": "5dzkJVQkKc2V2mMuQDsfv8EJwtw3uLDMARNVHkjmByaX"}.
- BUILD_LOG.md — this file.
- BUILDER-DONE.txt — summary for handoff (written after commit).

## Status

Built and verified locally. NOT pushed, NOT submitted — no GitHub repo created,
no submit run (per task: build only, parent handles push/submit).

## Revision (parent, 21 Nov 2026 ~13:00 WIB, thinking_revised fix)
- Joke sharpened: "crashed live" became "crashed live in front of the
  client" — the ticket is filed while the client watches, raising the
  stakes of the punchline. Re-verified: two runs byte-identical, within
  gate 1–280 chars.
