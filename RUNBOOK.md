# Runbook — San Diego AI Showcase, 1 Sep 2026

You're on at **7:00 pm**, third of six, 15-minute slots. Plan for **8 minutes**
of content, not 10. The squeeze lands on whoever isn't first.

## Before you leave

- [ ] `vibedrift --version` prints **0.20.1** (published, not the fork)
- [ ] `cd VibeDrift && vibedrift scan . --format terminal` runs clean in ~20s
- [ ] Terminal font size cranked up. The score block has to be readable from the back.
- [ ] Deck open at `#title`, browser fullscreen (`f`)

## The demo

Slide 6 has the command with a copy button. In the `VibeDrift/` checkout:

```bash
vibedrift scan . --format terminal
```

About 20 seconds. Advance to slide 7 while it runs and talk through the vote.
It prints **583 lines**, so when it finishes, **scroll the terminal back up to
the score block** and read it out. Point at `N/A` on security and say why.
Point at the top fix-plan item and say whose AGENTS.md it's contradicting.

If the scan fails or the laptop misbehaves, the same output is in the repo:

```bash
cat demo/scan-output.txt | head -45
```

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
| 0:15 | 2 | **The window.** Point at the diagram: same box, both rows. The repo grew, the box didn't |
| 0:55 | 3 | Why it compounds. Nothing carries over; the slice is task-shaped; forks breed forks |
| 1:30 | 4 | "Everything compiles, everything passes review." Name it, don't explain it |
| 1:55 | 5 | **Where we're at.** Introduce it by name. Read the four numbers as they are, including the 1 |
| 2:40 | 6 | The command. Say what it is and why this repo. Then hit enter |
| 3:00 | 7 | **It's running.** Talk through the vote. Then scroll the terminal back and read the score |
| 4:30 | 8 | The experiment, as designed. Intent only; next slide is what happened |
| 5:15 | 9 | **What went wrong running it.** Three things, don't soften them. The 63 is real |
| 6:10 | 10 | Two bugs. Say why each matters to you, not just what it does |
| 7:00 | 11 | **The ask.** Say it, then stop talking |
| — | 12 | Leave up during Q&A and afterwards |

## Lines that are yours to cut

These are true and they're what this event asked for. They come from a private
repo. Delete the `<li>` in `index.html` if you'd rather not say one out loud.

- Slide 9: the control-group-wasn't-blind line, the retraction, and the 63 numbered
  harness flaws. All three come from the experiment repo's own findings docs
  (`BLINDING-INTEGRITY-FINDINGS.md`, `FORMWORK-RUN-1-FINDINGS.md`, `GAPS.md`).
  They're methodology, not numbers, and they're what this event asked for.

## Things you'll get asked, and the honest answer

**"Does it actually work?"** We don't know yet. Run one of the experiment is void.
That's why the ask is what it is.

**"Is the #110 fix shipped?"** No. It's on a branch, no PR open yet.

**"What's the score measuring?"** Consistency with the repo's own dominant
patterns. Not quality. There's an open question internally about how much of it
is really tracking codebase size.
