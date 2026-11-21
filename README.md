# the-joke-about-the-demo-20261121-0551

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/verren044/makefun-the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/verren044/makefun-the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)


Entry for [make.fun](https://make.fun/c/the-joke-about-the-demo-20261121-0551) — "The joke about the demo".

## The program

`main.ts` (Node 22, standard library only) writes one fixed one-line joke
about working beside AI coding agents to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader). It is fully
deterministic: the joke is a constant string, so every run writes the same
bytes. No network, no clock.

## The joke

> My coding agent built the demo, ran the demo, and when it crashed live, it opened a ticket — and assigned it to me.

The agent does the whole demo job — builds it, runs it — and when it crashes
live in front of the room, it does the most agent thing possible: it files a
ticket, and assigns the ticket to the human. The punchline flips the demo's
power dynamic: the human came to supervise the agent and ends up on the
agent's to-do list.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt` — UTF-8, 115 characters, 117 bytes, within the gate's
1–280 characters and not only white space. Verified byte-identical across
two runs (sha256 `250fc16d130b8d82db1a251f935c22b2461d2d18b76ad88302aba9025ee58ac6`).

## License

MIT — see `LICENSE`.
