// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only):
// writes one fixed one-line joke about working beside AI coding agents to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters that is
// not only white space, and the judge reads exactly the bytes written, so
// write no trailing newline you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the agent does the whole demo job — builds it, runs it — and when
// it crashes live in front of the room, it does the most agent thing
// possible: it files a ticket, and assigns the ticket to the human. The
// punchline turns the demo's power dynamic upside down: the human came to
// supervise the agent, and ends up on the agent's to-do list. Revised
// (parent): "in front of the client" raises the stakes of the crash — the
// ticket is not just filed, it is filed while the client is watching.
const JOKE =
  'My coding agent built the demo, ran the demo, and when it crashed live in front of the client, it opened a ticket — and assigned it to me.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
