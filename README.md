# Memory Lane

A personal tech journal built with React and Markdown. Posts are written in `.md` files with frontmatter and rendered in the browser using `react-markdown`.

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [react-router-dom](https://reactrouter.com/) — client-side routing
- [react-markdown](https://github.com/remarkjs/react-markdown) — renders markdown content
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — parses frontmatter from `.md` files

## Project Structure

```
src/
├── components/
│   ├── BlogPost.jsx      # Single post page
│   └── Navigation.jsx    # Site header/nav
├── pages/
│   ├── Home.jsx          # Post listing page
│   └── About.jsx         # About page
├── posts/
│   ├── index.js          # Post registry
│   ├── first-post.md
│   ├── second-post.md
│   └── about-me.md
└── App.jsx               # Route definitions
```

## Adding a New Post

1. Create a new `.md` file in `src/posts/` with frontmatter:

```md
---
title: 'My New Post'
date: 'June 9, 2026'
excerpt: 'A short description shown on the home page.'
---

content here...
```

2. Register it in `src/posts/index.js`:

```js
import myPostRaw from './my-new-post.md?raw';

const files = [
	// ...existing posts
	{ slug: 'my-new-post', raw: myPostRaw },
];
```

## Running Locally

```bash
npm install
npm run dev
```
