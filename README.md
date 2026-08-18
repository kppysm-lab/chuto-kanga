# 中東閑雅 CHŪTŌ KANGA

日本の美意識で、中東を紐解く。— An independent editorial magazine covering Middle
Eastern hotels, dining, fashion & beauty, events, art & culture, and
architecture & travel, for a Japanese readership.

Built with Next.js + TypeScript + Tailwind CSS. **There is no database and no
CMS to log into.** Every story is a plain object in one file
(`lib/articles.ts`) — you add a story by editing that file, the same way
you'd edit a Word document, then publishing means running one command.

This README assumes you are **not** a professional developer. Every step is
spelled out.

---

## 1. One-time setup

You only need to do this once, the first time you work on the site.

1. **Install Node.js** (the program that runs the site on your computer). Go
   to [nodejs.org](https://nodejs.org) and install the "LTS" version if you
   don't already have it. To check whether you already have it, open a
   terminal and run:
   ```bash
   node -v
   ```
   If it prints a version number (e.g. `v20.11.0`), you're set.

2. **Install the project's dependencies.** Open a terminal, navigate into
   the project folder, and run:
   ```bash
   npm install
   ```
   This downloads all the code libraries the site depends on into a
   `node_modules` folder. It can take a minute. You only need to re-run this
   if `package.json` changes.

## 2. Running the site on your own computer

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
This is a live preview — as you edit and save files, the page updates
automatically. Press `Ctrl+C` in the terminal to stop it.

## 3. How to add a new story

Open [`lib/articles.ts`](lib/articles.ts) in any text editor (VS Code is a
good free option). Near the top of the file you'll see a long list of
article entries inside `[` and `]`. Copy one entire entry (from `{` to the
matching `},`), paste it at the top of the list, and edit the fields:

```ts
{
  slug: "your-article-url-slug",       // becomes chutokanga.com/stories/your-article-url-slug
  title: "記事タイトル",                  // the Japanese headline — required
  titleEn: "English Title",             // optional small English subtitle shown under the headline
  dek: "見出し下の一文（サブタイトル）",
  excerpt: "一覧ページに表示される要約文。2行程度。",
  category: "hotels",                   // one of: hotels, dining, fashion-beauty,
                                         // events, art-culture, architecture-travel
  location: "都市名、国名",
  date: "2026-08-18",                   // YYYY-MM-DD — controls sort order (newest first)
  author: "中東閑雅編集部",                // who wrote it — shown on the article page
  photographyCredit: "Photography — Chūtō Kanga",  // optional — omit the line to hide it
  readingTime: "5分",
  heroImage: "/images/articles/your-image.jpg",     // see "Adding an image" below
  featured: false,                      // true = eligible for the homepage's Featured spots
  body: [
    "第一段落。",
    "第二段落。",
    "第三段落…",
  ],
}
```

Every field is required except `titleEn`, `photographyCredit`, and
`featured` (which you can simply leave out). Save the file — that's it, no
other file needs to change. The story automatically appears on `/stories`
and on its category page. `featured: true` makes it eligible to appear in
the homepage's Featured section (see the next section for exactly which
stories the homepage shows).

To remove a story, delete its whole `{ ... }` entry from the array. To edit
an existing one, just change the text inside it and save.

## 4. Adding or replacing an image

1. Put your image file into the `public/images/articles/` folder (create
   that folder if it doesn't already exist — it's inside the project, at
   `chuto-kanga/public/images/articles/`). Use `.jpg` or `.webp`. Try to
   keep each file under roughly 500KB so pages load quickly — most photo
   editing tools and free online compressors (e.g. squoosh.app) can do this.
2. Set the article's `heroImage` field to that file's path, starting with
   `/images/articles/`, e.g. `"/images/articles/al-ula-hotel.jpg"`.

Images use Next.js's built-in image optimizer, so they're automatically
resized and lazy-loaded for you — you don't need to create multiple sizes
yourself.

The site currently ships with generated placeholder illustrations (soft
duotone shapes, not real photos) in `public/images/placeholders/`, used by
the ten sample stories and a couple of homepage sections. Swap any of them
out at any time by pointing `heroImage` at a real photo instead — no code
changes needed.

## 5. Changing which stories appear on the homepage

Unlike `/stories` (which lists everything automatically), the homepage is
hand-curated — each section names a specific story on purpose, the way a
print magazine's front page is laid out by an editor rather than generated
automatically. To change what's featured, open [`app/page.tsx`](app/page.tsx)
and look near the top of the file for lines like:

```ts
const feature = getArticle("amanoi-al-ula-desert-silence")!;
```

Each of these lines names one story by its `slug`. Replace the slug in the
quotes with the slug of any story from `lib/articles.ts` to swap it in. The
homepage has seven such slots: one large Feature Story, two "Latest" stories,
one Culture feature, two Dining stories, and one Travel/Hotels feature — plus
the "Events" list, which is edited separately (see below).

## 6. Editing the homepage Events list

The quiet text listing in the homepage's "Events" section is separate from
full articles — it's simple upcoming-event entries (title, location, date)
in [`lib/events.ts`](lib/events.ts), not tied to `/stories`. Edit that array
directly; no image or article body required.

## 7. Editing categories

Categories live in [`lib/categories.ts`](lib/categories.ts). There are six:
Hotels, Dining, Fashion & Beauty, Events, Art & Culture, Architecture &
Travel. Four of them (Fashion, Travel, Dining, Culture) also have their own
short web address — `/fashion`, `/travel`, `/dining`, `/culture` — set up in
[`lib/categories.ts`](lib/categories.ts) under `categoryHref`. Renaming or
re-describing a category only requires editing `lib/categories.ts` — just
make sure every article's `category` field still matches an existing
category `slug`.

## 8. Editing site-wide text (brand copy, contact email)

- Global site copy (nav labels, footer, homepage section text, About, Work
  With Us) lives directly in each page/component file under `app/` and
  `components/` — open the relevant page and edit the Japanese text in
  place.
- The contact email used across the site (Contact page, mailto links,
  "Request Media Kit" button) is set in **one place**:
  [`lib/site.ts`](lib/site.ts). Change `CONTACT_EMAIL` there and it updates
  everywhere.
- `SITE_URL` in the same file is used for SEO metadata and the sitemap —
  update it once you have a real domain.
- `SOCIAL_INSTAGRAM` in the same file is a placeholder — update it once a
  real Instagram account exists; it's linked from the footer.

## 9. Editing the top navigation

The header and mobile-menu links live in [`lib/nav.ts`](lib/nav.ts) as one
list — add, remove, or relabel an entry there and both the desktop nav and
the mobile full-screen menu update together.

## 10. How the Contact form works

It doesn't use a backend or database (intentionally, to keep this a
zero-maintenance side project). Submitting it opens the visitor's own email
app with a message pre-addressed and pre-filled — they just hit send. This
is honest and reliable but does mean the visitor needs a configured email
app on their device. If you later want a proper web form that emails you
directly (no reliance on the visitor's mail app), look into a service like
Formspree or Resend — the form logic to replace lives in
`components/ContactForm.tsx`.

There is no newsletter signup on the site — it was removed as unnecessary
for now. If you want one later, a service like Buttondown or Mailchimp can
be wired up with just a plain HTML form (no backend code needed on this
site's side).

## 11. Checking your work before publishing

Before you deploy, always run:

```bash
npm run build
```

This does the same thing the live website will do, and will tell you
immediately (in red text) if something is broken — for example, a typo in
`lib/articles.ts` that breaks the file's structure. If it finishes with a
route list and no red errors, you're safe to deploy. `npm run dev` (used for
day-to-day editing) is more forgiving and won't always catch every mistake.

## 12. Environment variables

**None are required.** This project has no database, no API keys, and no
`.env` file — every piece of content is a plain file in `lib/`, so there is
nothing to configure in Vercel's "Environment Variables" settings screen.
When you connect the repository to Vercel, you can leave that section empty
and deploy as-is.

## 13. Deploying to Vercel (putting the site on the internet)

[Vercel](https://vercel.com) is the company that makes Next.js, and hosting
a Next.js site there is free for a project this size and requires no server
setup.

1. Put this project in a GitHub repository if it isn't already (search
   "how to push a folder to GitHub" if you're new to this — GitHub Desktop
   is the easiest way for beginners).
2. Go to [vercel.com](https://vercel.com) and sign up using your GitHub
   account.
3. Click **"Add New" → "Project"**, and select this repository from the
   list.
4. Vercel automatically detects it's a Next.js project — you don't need to
   change any settings. Click **Deploy**.
5. After a minute or two, Vercel gives you a live URL (something like
   `chuto-kanga.vercel.app`). The site is now on the internet.
6. To use your own domain (e.g. `chutokanga.com`) instead of the
   `.vercel.app` one, go to your project's **Settings → Domains** in Vercel
   and follow the instructions there to connect it. Also update `SITE_URL`
   in `lib/site.ts` to match, and redeploy (see below).

## 14. Updating the site after it's already deployed

This is the normal day-to-day workflow once you're live:

1. Edit `lib/articles.ts` (or any file) on your computer, following the
   sections above.
2. Run `npm run dev` and check `http://localhost:3000` to make sure it
   looks right.
3. Run `npm run build` to confirm nothing is broken (see section 11).
4. Save (commit) and push your changes to GitHub.
5. Vercel automatically notices the update and redeploys the live site
   within a minute or two — you don't need to do anything else. Refresh the
   live URL once it's done.

## Motion and the opening sequence

Animation is deliberately lightweight — no animation library, just CSS
transitions plus small `IntersectionObserver`/`requestAnimationFrame`-based
hooks in `components/motion/` (`Reveal`, `RevealImage`, a subtle
cursor-tracked tilt on the homepage hero, and a single scroll-parallax
image). Everything respects `prefers-reduced-motion` automatically.

The opening seal/wordmark sequence (`components/IntroSequence.tsx`) plays
once per browser session — gated by `sessionStorage`, so it won't replay on
internal navigation or a page refresh within the same session, runs a
shorter/simpler version on mobile, and is skipped entirely for
reduced-motion visitors. To preview it again during development, clear the
`chuto-kanga-intro-seen` key from your browser's session storage and reload.

## Project structure

```
app/                    Pages (routes), one folder per URL
  page.tsx               Home — hand-curated, see section 5
  stories/                Stories index + /stories/[slug] article pages
  fashion/, travel/, dining/, culture/    The four featured category pages
  categories/              Full category index + /categories/[slug] (hotels, events)
  about/, work-with-us/, contact/
  not-found.tsx             Custom 404 page
  sitemap.ts, robots.ts

components/              Shared UI (Header, Footer, ArticleCard, etc.)
  motion/                  Reveal / RevealImage / tilt / parallax / reduced-motion hooks

lib/
  articles.ts             ← edit this to add/remove/update stories
  categories.ts             ← the 6 categories + their web addresses
  events.ts                   ← homepage Events list entries
  nav.ts                        ← top navigation links
  site.ts                          ← contact email, site URL, Instagram
  types.ts                            ← TypeScript shapes for Article/Category

public/images/           Static images (add your photography here)
scripts/generate-placeholders.mjs   Regenerates the placeholder SVG artwork
                                     (only needed if you want more placeholders)
```

## Deploying elsewhere

While section 13 covers Vercel (the easiest option), this is a standard
Next.js app and deploys equally well to Netlify or any Node hosting
provider. There's no database or environment variable required.
