# 📘 Next.js Basics - Milestone 13

## 🔰 Topics Covered

### 1. What is Next.js?

* Next.js is a React-based full-stack framework.
* Key features:

  * File-based routing
  * Server-side rendering (SSR)
  * Static site generation (SSG)
  * Built-in API routes
  * SEO optimized

---

### 2. Pages & Routing

* All files inside `pages/` become routes.

#### Example:

```
pages/
├── index.js       --> Route: /
├── about.js       --> Route: /about
├── contact.js     --> Route: /contact
```

```js
// pages/about.js
export default function About() {
  return <h1>This is About Page</h1>;
}
```

---

### 3. Linking and Navigation

* Use `Link` from `next/link` to navigate between pages without reloading.

```js
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
```

---

### 4. Static vs Server-side Rendering

#### ✅ Static Generation (default):

```js
export default function About() {
  return <h1>This page is statically generated</h1>;
}
```

#### ✅ Server-side Rendering (SSR):

```js
export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function SSRPage({ time }) {
  return <p>Server rendered at: {time}</p>;
}
```

---

### 5. API Routes

* All files inside `pages/api/` become API endpoints.

#### Example:

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API route!' });
}
```

Visit: `http://localhost:3000/api/hello`

#### Query param example:

```js
// pages/api/greet.js
export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ greet: `Hello, ${name || 'Guest'}!` });
}
```

---

## 🛠️ Practice Checklist

### ✅ Setup Project:

```bash
npx create-next-app@latest next13-basics
cd next13-basics
npm run dev
```

### ✅ Pages Practice

* Create: `pages/about.js`, `pages/contact.js`, `pages/ssr.js`
* Add Link navigation in `pages/index.js`

### ✅ SSR Page:

```js
// pages/ssr.js
export async function getServerSideProps() {
  return {
    props: {
      now: new Date().toISOString(),
    },
  };
}

export default function SSR({ now }) {
  return <div>Time now: {now}</div>;
}
```

### ✅ API Practice:

* Create `pages/api/hello.js`
* Create `pages/api/greet.js`
* Try visiting in browser: `/api/hello`, `/api/greet?name=Ismail`

---

## 🧠 Summary

| Feature      | Description                      |
| ------------ | -------------------------------- |
| Pages Folder | Auto-routes setup                |
| Link         | SPA-style routing                |
| SSR          | Dynamic server-rendered content  |
| API Routes   | Backend logic within the project |

---

