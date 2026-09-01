# Why your coding agent gets worse as the project grows

Talk deck for the San Diego AI Showcase, 1 September 2026. See `RUNBOOK.md`
for the presenter checklist, timings and demo commands.

A vertical, scroll-snapping slide site. One HTML file, two stylesheets, one script.
No build step, no dependencies, no network requests at runtime.

## Run it locally

```bash
python3 serve.py        # http://127.0.0.1:8000
```

Use `serve.py` rather than `python3 -m http.server`. The stdlib server sends no
cache headers, so browsers apply heuristic caching and keep serving the
stylesheet you just edited. `serve.py` sends `no-store`, which is the difference
between seeing your change and thinking you broke something.

Opening `index.html` over `file://` works too, and caches just as aggressively.

## Present it

| Key | Does |
| --- | --- |
| Down, Right, Space, PageDown | Next slide |
| Up, Left, PageUp | Previous slide |
| Home / End | First / last slide |
| `f` | Fullscreen |
| `t` | Toggle light and dark |

Scrolling and the dots on the right also work. The URL tracks the current
slide, so a reload puts you back where you were. Worth knowing if the laptop
sleeps between the tech check and the talk.

## Add a slide

Copy a `<section class="slide">` block in `index.html` and change the content.
Nothing else needs updating: the rail, the counter and the keyboard navigation
all read the DOM at load.

Variants, combinable:

| Class | Layout |
| --- | --- |
| `slide--center` | Centred text |
| `slide--split` | Two columns, collapses to one under 900px |
| `slide--accent` | Accent background |
| `slide--invert` | Dark panel |
| `slide--raised` | Slightly lighter panel |

Content helpers: `.display`, `.h1`, `.h2`, `.h3`, `.kicker`, `.lede`, `.note`,
`.rule`, `.points`, `.stat` / `.stat-row`, `.code`.

## Change the look

Everything visual is a custom property in `css/tokens.css`: colours, the type
scale, spacing, the accent. Start there. `css/deck.css` holds layout mechanics
and only reads those tokens.

The palette is lifted from vibedrift.ai's own custom properties, so the deck and
the site are the same object. One deliberate divergence: body text is `#e8e8e0`
rather than the site's `#9a9a92`, which is fine on a laptop and thin on a
projector that lifts the blacks.

Space Grotesk, Geist and Geist Mono are self-hosted in `fonts/` (68KB, three
variable-font files). Loading them from Google would make the deck depend on the
venue network at exactly the moment you cannot debug it. Press `t` during a talk
to flip to a light theme if the projector washes out the darks.

## Deploy

```bash
npx netlify-cli deploy --prod
```

Or connect the repo in the Netlify dashboard. `netlify.toml` already sets the
publish directory and disables caching on the deck files, so a redeploy shows
up immediately rather than serving a stale copy.

## Export to PDF

Print to PDF from the browser. `@media print` gives each slide its own page and
hides the rail and counter. Useful as a backup if the venue display fails.
