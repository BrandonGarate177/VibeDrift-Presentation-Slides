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
| 0:15 | 2 | "Everything compiles, everything passes review." They've lived it; name it, don't explain it |
| 0:45 | 3 | What we built, no adjectives. "That's the whole product" |
| 1:20 | 4 | **The rule we gave ourselves.** Say the cost: it makes this hard to prove |
| 1:50 | 5 | In-loop via MCP. "We'd rather say null than guess" |
| 2:30 | 6 | **Start the scan.** Talk through the vote while it runs |
| 3:30 | 7 | Scroll back. Point at N/A, point at the AGENTS.md finding |
| 4:15 | 8 | Twelve open bugs, ours. Two fail silently |
| 5:00 | 9 | "We don't know if it works." Mean it. Then the experiment design |
| 5:40 | 10 | **It voided itself.** Don't rush |
| 6:20 | 11 | Three things we got wrong. This is the educational part |
| 7:15 | 12 | **The ask.** Say it, then stop talking |
| — | 13 | Leave up during Q&A and afterwards |

## Two lines that are yours to cut

Both are true and both are what this event asked for. Neither cites a private
document. Delete the `<li>` in `index.html` if you'd rather not say it out loud.

- Slide 9: "We can't rule out that the score is partly measuring repo size."
- Slide 11: "Our control group read a design doc that told it it was the control."

## Things you'll get asked, and the honest answer

**"Does it actually work?"** We don't know yet. Run one of the experiment is void.
That's why the ask is what it is.

**"Is the #110 fix shipped?"** No. It's on a branch, no PR open yet.

**"What's the score measuring?"** Consistency with the repo's own dominant
patterns. Not quality. There's an open question internally about how much of it
is really tracking codebase size.
