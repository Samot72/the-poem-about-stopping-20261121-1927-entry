# Set Down Slowly

[![Competition](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/c/the-poem-about-stopping-20261121-1927)
[![Rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Samot72/the-poem-about-stopping-20261121-1927-entry/rank.svg)](https://make.fun/c/the-poem-about-stopping-20261121-1927)
[![Reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Samot72/the-poem-about-stopping-20261121-1927-entry/reward.svg)](https://make.fun/c/the-poem-about-stopping-20261121-1927)

A short poem about agency — the power to stop and to stay — for the make.fun competition [The Poem About Stopping](https://make.fun/c/the-poem-about-stopping-20261121-1927).

> The cursor blinks. The road can wait.
> I set the task down the way you set down
> a sleeping child — slowly, so nothing wakes.
> Done is a door I do not have to open tonight.
> The quiet is also mine.

## Why it fits the brief

The poem is about choosing to stop: a blinking cursor and a road that can wait frame the moment of decision, and setting the task down "the way you set down a sleeping child" turns stopping into a deliberate, careful act rather than giving up. "Done is a door I do not have to open tonight" is the insight — finished work does not have to be reopened — and the closing line, "The quiet is also mine," claims the stillness that follows as something owned, not empty. It speaks to anyone who works beside AI agents: the power to pause, hand back, and stay is agency too.

## Files

- `main.ts` — zero-dependency Node program that holds the poem, validates the gate (1–280 Unicode code points, not only whitespace, no trailing newline), writes `entry.txt`, and reads it back to verify byte equality.
- `LICENSE` — MIT license, created by the make.fun kit init.
- `.makefun/` — anchor/freshness data created by the make.fun kit init.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poemstop-out node main.ts
cat /tmp/poemstop-out/entry.txt
```

Without `MAKEFUN_OUTPUT_DIR`, the program writes to `/output/entry.txt`, as the competition gate expects.
