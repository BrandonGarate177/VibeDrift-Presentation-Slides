# Runbook — San Diego AI Showcase, 1 Sep 2026

You're on at **7:00 pm**, third of six, 15-minute slots. Plan for **8 minutes**
of content, not 10. The squeeze lands on whoever isn't first.

## Before you leave

- [ ] `vibedrift --version` prints **0.20.1** (published, not the fork)
- [ ] `cd VibeDrift && vibedrift scan . --format terminal` runs clean in ~20s
- [ ] Terminal font size cranked up. The score block has to be readable from the back.
- [ ] Deck open at `#title`, browser fullscreen (`f`)

## The demo

In the `VibeDrift/` checkout, on slide 7:

```bash
vibedrift scan . --format terminal
```

Takes about 20 seconds. Slide 7 is what you talk through while it runs: directory
grouping, the 70% threshold, recency weighting. Don't fill the silence with
apologies for the silence.

It prints **583 lines**, so the score block scrolls off the top. **Scroll back up
to it** before you start talking about the number.

If it fails or the laptop misbehaves: slide 8 already has the real output on it.
Keep going, don't debug on stage.

Deep scan is deliberately **not** in this talk. It needs an account, hits a hosted
API with a 90-second timeout, and degrades silently on failure.

## Keys

| Key | Does |
| --- | --- |
| Down / Right / Space | Next |
| Up / Left | Previous |
| `f` | Fullscreen |
| `t` | Flip to light theme if the projector washes out the darks |
| Home / End | First / last slide |

## Shape

| Time | Slide | Beat |
| --- | --- | --- |
| 0:00 | 1 | Say the title line out loud before they read it |
| 0:15 | 2 | "Reasonable choices that are not *your* choices." Let the three examples land |
| 0:50 | 3 | Why it compounds. Shrinking view, forks breed forks, nothing checks the repo against itself |
| 1:40 | 4 | **No finding without a baseline.** Slow down here |
| 2:20 | 5 | The rules. Read them as constraints you chose, not features |
| 3:00 | 6 | In-loop via MCP. Unsure never blesses |
| 3:40 | 7 | **Start the scan.** Talk through the mechanism |
| 4:25 | 8 | Scroll back, read the score |
| 5:05 | 9 | It flags us for breaking our own written rule |
| 5:50 | 10 | Twelve open bugs, ours, public |
| 6:35 | 11 | **The experiment voided itself.** Don't rush it |
| 7:20 | 12 | **The ask.** Say it, then stop talking |
| — | 13 | Leave up during Q&A and afterwards |

## Things you'll get asked, and the honest answer

**"Does it actually work?"** We don't know yet. Run one of the experiment is void.
That's why the ask is what it is.

**"Is the #110 fix shipped?"** No. It's on a branch, no PR open yet.

**"What's the score measuring?"** Consistency with the repo's own dominant
patterns. Not quality. There's an open question internally about how much of it
is really tracking codebase size.
