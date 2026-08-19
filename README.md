# 中東閑雅 CHŪTŌ KANGA

日本の美意識で、中東を紐解く。— An independent editorial magazine covering Middle
Eastern hotels, dining, fashion & beauty, events, art & culture, and
architecture & travel, for a Japanese readership.

Built with Next.js + TypeScript + Tailwind CSS. **There is no database.**
Every story is a Markdown file in `content/articles/`. You can edit those
files by hand, or — easier — use the built-in **記事管理 (article admin)**
panel at `/admin`, a simple blog-style editor (think Ameba Blog): fill in a
form, click publish, and it saves the article to the site automatically.

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

## 3. Setting up the article admin panel (one-time)

The admin panel (`/admin` on your live site) lets you write and publish
articles from a form in your browser — no code, no text editor. It needs a
one-time setup so GitHub knows to trust it. This only has to be done once,
by whoever owns the GitHub account.

1. Go to [github.com/settings/developers](https://github.com/settings/developers)
   → **OAuth Apps** → **New OAuth App**.
2. Fill in:
   - **Application name**: anything, e.g. `中東閑雅 CMS`
   - **Homepage URL**: `https://chuto-kanga.vercel.app` (or your own domain)
   - **Authorization callback URL**: `https://chuto-kanga.vercel.app/api/callback`
3. Click **Register application**. You'll see a **Client ID** — copy it.
4. Click **Generate a new client secret** — copy that too (you won't be able
   to see it again, so copy it now).
5. In your [Vercel project](https://vercel.com), go to **Settings →
   Environment Variables** and add two variables:
   - `OAUTH_CLIENT_ID` — paste the Client ID
   - `OAUTH_CLIENT_SECRET` — paste the Client Secret
6. Redeploy the site (Vercel → **Deployments** → **⋯** → **Redeploy** on the
   latest one) so it picks up the new variables.

That's it — this never needs to be repeated unless you create a new OAuth
App. Anyone with push access to the GitHub repository can now log into
`/admin` with their GitHub account and publish articles.

## 4. How to add a new story (the easy way)

1. Go to `https://chuto-kanga.vercel.app/admin/index.html` (bookmark it).
2. Click **Login with GitHub** the first time.
3. Click **記事** in the sidebar, then **New 記事**.
4. Fill in the form — title, category, location, date, hero image, body
   text. Every field has a Japanese label explaining what it's for.
5. Click **Publish** (top right). That's it — within a minute or two the
   article is live on the site, automatically, no other steps required.

**Adding a photo inside the body** (not just the hero image): put your
cursor where you want it and use the image button in the body editor's
toolbar.

**Embedding an Instagram post**: paste the post's URL
(`https://www.instagram.com/p/...` or `/reel/...`) on its own line, with
nothing else in that paragraph. It renders as a live embedded post — no
extra setup needed.

Behind the scenes, publishing saves a Markdown file into
`content/articles/` and uploads any image you attached into
`public/images/articles/` — both committed straight to GitHub, which
triggers a new Vercel deployment automatically, the same way editing code
does.

**Editing or deleting an article** works the same way: open it from the
記事 list in `/admin`, change the fields (or click the trash icon to
delete), and publish.

### The manual way (optional, for advanced editing)

Each article is a Markdown file at `content/articles/your-slug.md`. You can
open and edit these directly in a text editor if you prefer — the format is
a block of `key: value` fields at the top, then the article body below:

```md
---
slug: "your-article-url-slug"
title: "記事タイトル"
titleEn: "English Title"
dek: "見出し下の一文"
excerpt: "一覧ページに表示される要約文。"
category: "hotels"
location: "都市名、国名"
date: "2026-08-18"
author: "中東閑雅編集部"
photographyCredit: "Photography — Chūtō Kanga"
heroImage: "/images/articles/your-image.jpg"
featured: false
---

第一段落。**太字**や[リンク](https://example.com)も使えます。

![説明文](/images/articles/inline-photo.jpg)

https://www.instagram.com/p/some-post-id/
```

`category` must be one of: `hotels`, `dining`, `fashion-beauty`, `events`,
`art-culture`, `architecture-travel`. Paragraphs (including images and
Instagram embeds) are separated by a blank line. Whichever way you edit —
panel or file — the result is identical.

## 5. Adding or replacing an image

**Via the admin panel:** the "メイン画像" field is an upload button — pick a
photo from your computer and it's handled automatically (uploaded,
optimized, and linked).

**Manually:** put the file in `public/images/articles/` (`.jpg` or `.webp`,
ideally under ~500KB — squoosh.app is a free online compressor), then set
`heroImage` to its path, e.g. `"/images/articles/al-ula-hotel.jpg"`.

The site currently ships with generated placeholder illustrations (soft
duotone shapes, not real photos) in `public/images/placeholders/`, used by
the ten sample stories. Swap any of them out at any time by pointing
`heroImage` at a real photo instead.

## 6. Changing which stories appear on the homepage

Unlike `/stories` (which lists everything automatically), the homepage is
hand-curated — each section names a specific story on purpose, the way a
print magazine's front page is laid out by an editor rather than generated
automatically. To change what's featured, open [`app/page.tsx`](app/page.tsx)
and look near the top of the file for lines like:

```ts
const feature = getArticle("amanoi-al-ula-desert-silence")!;
```

Each of these lines names one story by its `slug`. Replace the slug in the
quotes with the slug of any story to swap it in. The homepage has seven such
slots: one large Feature Story, two "Latest" stories, one Culture feature,
two Dining stories, and one Travel/Hotels feature — plus the "Events" list,
which is edited separately (see below). This is the one part of publishing
a story that still needs a code edit — the admin panel adds stories to
`/stories` and category pages automatically, but doesn't rearrange the
homepage for you.

## 7. Editing the homepage Events list

The quiet text listing in the homepage's "Events" section is separate from
full articles — it's simple upcoming-event entries (title, location, date)
in [`lib/events.ts`](lib/events.ts), not tied to `/stories`. Edit that array
directly; no image or article body required.

## 8. Editing categories

Categories live in [`lib/categories.ts`](lib/categories.ts). There are six:
Hotels, Dining, Fashion & Beauty, Events, Art & Culture, Architecture &
Travel. Four of them (Fashion, Travel, Dining, Culture) also have their own
short web address — `/fashion`, `/travel`, `/dining`, `/culture` — set up in
[`lib/categories.ts`](lib/categories.ts) under `categoryHref`. Renaming or
re-describing a category only requires editing `lib/categories.ts` — just
make sure every article's `category` field still matches an existing
category `slug`.

## 9. Editing site-wide text (brand copy, contact email)

- Global site copy (nav labels, footer, homepage section text, About,
  Partnerships) lives directly in each page/component file under `app/` and
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

## 10. Editing the top navigation

The header and mobile-menu links live in [`lib/nav.ts`](lib/nav.ts) as one
list — add, remove, or relabel an entry there and both the desktop nav and
the mobile full-screen menu update together.

## 11. How the Contact form works

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

## 12. Checking your work before publishing

If you edited files directly (not via `/admin`), always run this before
deploying:

```bash
npm run build
```

This does the same thing the live website will do, and will tell you
immediately (in red text) if something is broken — for example, a typo in
an article's frontmatter that breaks the file's structure. If it finishes
with a route list and no red errors, you're safe to deploy. `npm run dev`
(used for day-to-day editing) is more forgiving and won't always catch
every mistake. Articles published through `/admin` don't need this step —
the panel only lets you fill in valid fields.

## 13. Environment variables

Only needed for the `/admin` panel described in section 3:

- `OAUTH_CLIENT_ID` — from your GitHub OAuth App
- `OAUTH_CLIENT_SECRET` — from your GitHub OAuth App

Nothing else requires configuration — there's no database or other API key
anywhere in this project.

## 14. Deploying to Vercel (putting the site on the internet)

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
7. Set up the admin panel — see section 3.

## 15. Updating the site after it's already deployed

Two workflows, depending on what you're changing:

**Adding/editing an article** — just use `/admin` (section 4). Publishing
there commits straight to GitHub and Vercel redeploys automatically within
a minute or two.

**Everything else** (design, homepage layout, navigation, etc.):

1. Edit the relevant file on your computer, following the sections above.
2. Run `npm run dev` and check `http://localhost:3000` to make sure it
   looks right.
3. Run `npm run build` to confirm nothing is broken (see section 12).
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
  page.tsx               Home — hand-curated, see section 6
  stories/                Stories index + /stories/[slug] article pages
  fashion/, travel/, dining/, culture/    The four featured category pages
  categories/              Full category index + /categories/[slug] (hotels, events)
  about/, partnerships/, contact/
  api/auth/, api/callback/  GitHub OAuth for the /admin panel (section 3)
  not-found.tsx             Custom 404 page
  sitemap.ts, robots.ts

components/              Shared UI (Header, Footer, ArticleCard, etc.)
  motion/                  Reveal / RevealImage / tilt / parallax / reduced-motion hooks

content/articles/        ← one Markdown file per story (edit here or via /admin)

public/
  admin/                  The article admin panel (index.html + config.yml)
  images/                 Static images (add your photography here)

lib/
  articles.ts             Reads articles-data.json (generated — don't edit it directly)
  articles-data.json       Auto-generated from content/articles/*.md — not committed
  categories.ts             ← the 6 categories + their web addresses
  events.ts                   ← homepage Events list entries
  nav.ts                        ← top navigation links
  site.ts                          ← contact email, site URL, Instagram
  types.ts                            ← TypeScript shapes for Article/Category

scripts/
  build-articles.mjs       Converts content/articles/*.md into lib/articles-data.json
                            (runs automatically before `npm run dev` / `npm run build`)
  generate-placeholders.mjs  Regenerates the placeholder SVG artwork
                              (only needed if you want more placeholders)
```

## Deploying elsewhere

While section 14 covers Vercel (the easiest option), this is a standard
Next.js app and deploys equally well to Netlify or any Node hosting
provider. The `/admin` panel specifically needs the two OAuth environment
variables from section 13 wherever it's hosted.
