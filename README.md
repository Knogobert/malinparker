[![Netlify Status](https://api.netlify.com/api/v1/badges/b8386346-cde7-4397-9d88-b18b3a664ff8/deploy-status)](https://app.netlify.com/sites/malinparker/deploys)

# Malin Parker’s Portfolio

The online portfolio for Malin Parker.

## 🎉 Getting Started

Use the deploy button to get your own copy of the repository.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/knogobert/malinparker&stack=cms)

This will setup everything needed for running the CMS:
 - A new repository in your GitHub account with the code
 - Full Continuous Deployment to Netlify's global CDN network
 - Control users and access with Netlify Identity
 - Manage content with Netlify CMS

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite. Start with by registering a regular email-account (not OAuth yet!) with a [generated password](https://passwordwolf.com/).

You should be up and running, ready for personalization!

### These extra steps are only necessary if you want to upload large media in Netlify CMS:
This way it doesn't clutter up your repo with large unmanageable files. But *do know* that it is easier to add later than undoing it later.

1. **[Install git-lfs](https://git-lfs.github.com/)** on your computer and remove the `#` in the project's `.gitattributes`

2. **Setup Netlify LM** by following [these steps](https://docs.netlify.com/large-media/setup/). (In short: `netlify plugins:install netlify-lm-plugin` → `netlify lm:install` → `netlify login` → `netlify link` → `netlify lm:setup` → commit the `.lfsconfig` file.)

---

## Project commands

1. 📦 Install dependencies.

```bash
npm install
```

2. 🏗 Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.

```bash
npm run dev
```

3. 🌌 Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).

```bash
npm run build

# And to serve that deployment...
npm run start
```

4. ⚡️ Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

```bash
npm run generate
```

### Personalize setup

1. Copy and change the .env-file

   - `cp .env-example .env`
   - Then change the values

2. Change the value on these lines

   - `static/admin/config.yml:1` — `site_url`
   - `static/admin/config.yml:2` — `logo_url`
   - `content/site/info.json` — `sitename`, `sitedescription` & `sitelang`
   - `package.json:1` — `name`, `description`, `author` & `repository.url`
   - `pages/index.vue` — The start page of your new website!

3. Change colors, favicon, content & content collections

   - Colors are managed in `assets/scss/_vars.scss` & `tailwind.config.js`
   - Favicon is generated by [@nuxt/pwa](https://pwa.nuxtjs.org/). You should change the `static/icon.png` to something new, and then match the new filename and source in `nuxt.config.js` under `pwa.icon`
   - Content is managed mainly in [local Netlify CMS](http://localhost:3000/admin) by going to your `/admin` or by hand in `content`
   - Content collections are managed in `static/admin/config.yml`, then added to vuex store in `store/index.js`

4. Change font

   1. Add/change your font link in `nuxt.config.js` under `head.link`. You can add a `<link rel="stylesheet" href="font.css">` as `link: [{ rel: 'stylesheet', href: 'font.css' }]`, like [this](https://vue-meta.nuxtjs.org/api/#link)
   2. Then append your font name in `tailwind.config.js` under `theme.extend.fontFamily.sans` (or other). Like `sans: ['Europa', ...defaultTheme.fontFamily.sans]`
   3. Then if you've installed the included netlify plugin "[Subfont](https://github.com/Munter/netlify-plugin-subfont#readme)", it will automatically post-processes your web page to use an optimal font loading strategy.

## More info

> This project was bootstrapped with `create-nuxt-app`. There are more detailed explanations of how everything works in the [Nuxt.js docs](https://nuxtjs.org).

### Netlify Identity

Make sure to set to "registration invite only" [here](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity#registration-preferences) if you don't want spam.

When you create your first account, _don’t_ sign up using OAuth, generate a new password and sign in that way locally, otherwise a successful login will send you to the URL you typed in instead of keeping you on localhost.

---

Originally based on [Henry Desroches' nuxt-netlify-cms-starter](https://github.com/xdesro/nuxt-netlify-cms-starter).

Deployed easily with their boilerplate via:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xdesro/nuxt-netlify-cms-starter&stack=cms)

---

## Troubleshooting

- > I added a CSS class, but it doesn't show

  - It is most likely purged by PurgeCSS, make sure it is whitelisted in `purgeCSS` in `nuxt.config.js`

- > I tried logging into/saving in Netlify CMS, but I can't

  - It may be that you haven't [enabled Netlify Identity](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity) or [setup the Git Gateway](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity#services) correctly, [check the docs](https://www.netlifycms.org/docs/git-gateway-backend/)

- > This repository is configured for Git LFS but 'git-lfs' was not found on your path. If you no longer wish to use Git LFS, remove this hook by deleting .git/hooks/pre-push.

  - Install git-lfs then run `git lfs install` in project root. Then to download the images, run `git lfs pull`.

- > I can’t get Git LFS to run correctly on Netlify

  - Make sure that you have in your [Netlify build settings](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/deploys#environment-variables), set the environment variable `GIT_LFS_ENABLED` : `true`. Then also make sure that Netlify LM is setup as [their docs](https://docs.netlify.com/large-media/setup/) specify.