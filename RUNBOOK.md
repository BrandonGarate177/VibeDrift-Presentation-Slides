# Runbook — San Diego AI Showcase, 1 Sep 2026

You're on at **7:00 pm**, third of six, 15-minute slots. Plan for **8 minutes**
of content, not 10. The squeeze lands on whoever isn't first.

## Before you leave

- [ ] `vibedrift --version` prints **0.20.1** (published, not the fork)
- [ ] `cd VibeDrift && vibedrift scan . --format terminal` runs clean in ~20s
- [ ] Terminal font size cranked up. The score block has to be readable from the back.
- [ ] Deck open at `#title`, browser fullscreen (`f`)

## The demo

Nothing is live. Two recordings, both real, both from this afternoon:

- **Slide 7**, the deep scan. Plays on its own when you land on the slide, 29s,
  loops. The 65-second wait is sped up 8x; everything else is real time.
  Transcript: `demo/deep-scan-output.txt`. Tape: `demo/deep-scan.tape`.
- **Slide 8**, the agent asking first. A real `validate_change` call over MCP:
  the agent about to write `escapeForRegExp`, the tool answering in 50ms that
  `escapeRegex` already exists at `src/core/regex.ts:6`, 96% similar. Request
  and response are in `demo/validate-change-*.json`.

If someone asks why nothing's live: the deep scan hits a hosted API with a
90-second timeout and fails silently; the agent session is nondeterministic.
Both are true and neither is embarrassing.

**One thing to know and not say unprompted:** I also gave `validate_change` a
function that broke four of the repo's declared conventions (default export,
snake_case, `.then()` chain, return-null-on-error). It came back `ok: true,
confidence: high`. Duplicate detection works; convention checking through that
tool apparently doesn't, or not for that directory. If it comes up in Q&A,
that's the honest answer, and it belongs on the bug tracker tomorrow.

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
| 1:55 | 5 | **Where we're at.** Introduce it by name. Say the numbers out loud: ~45 use it, one pays |
| 2:40 | 6 | How the vote works. The low-level bit; take it slowly |
| 3:20 | 7 | **The scan, recorded.** Plays on its own. Point at the AGENTS.md finding when it lands |
| 4:10 | 8 | **The agent asks first.** Read the response out loud: false, escapeRegex, line 6, 96% |
| 4:50 | 9 | The experiment, as designed. Intent only; next slide is what happened |
| 5:35 | 10 | **What went wrong running it.** The retraction first; it's the most credible thing you own. The 71 is real |
| 6:30 | 11 | #118 and #110. Both fail silently; that's the point |
| 7:20 | 12 | **The ask.** Say it, then stop talking |
| — | 13 | **Where we could use help.** Leave up during Q&A and afterwards. These are real questions, not rhetorical |

## Lines that are yours to cut

Slide 10 and slide 13 are built from the experiment repo's handoff document
(`GAPS.md`, `FORMWORK-RUN-1-FINDINGS.md`, `BLINDING-INTEGRITY-FINDINGS.md`).
They're methodology and failures, not results. Delete any `<li>` you'd rather
not say out loud.

## Things you'll get asked, and the honest answer

**"Does it actually work?"** We don't know. Generation one's headline finding was
retracted; the rest are n=1 and indistinguishable at that sample size. Generation
two is on its seventh attempt with three clean sprints. That's why the ask is what
it is.

**"What did you actually find?"** That our measurements were wrong more often
than the thing we were measuring. Five numbers corrected, one retracted, none of
the bugs in either track's code. And three separate ways the treatment arm
silently became the control arm.

**"Is the #110 fix shipped?"** No. It's on a branch, no PR open yet.

**"What's the score measuring?"** Consistency with the repo's own dominant
patterns. Not quality. There's an open question internally about how much of it
is really tracking codebase size.
