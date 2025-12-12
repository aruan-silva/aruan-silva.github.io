# Aruan Silva — Personal Website

A clean, minimal portfolio website built for GitHub Pages.

---

## 🚀 Publishing to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `aruansilva.github.io` (replace with your username for the URL to work)
   - Or name it anything else (e.g., `portfolio`) and it will be at `username.github.io/portfolio`
3. Keep it **Public**
4. Don't initialize with README (we already have files)
5. Click **Create repository**

### Step 2: Push Your Code

Run these commands in terminal:

```bash
cd /Users/aruan.silva/Documents/aruansilva-github-page

git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then visit your site at `https://YOUR_USERNAME.github.io`

---

## ✏️ Editing Guide

### File Structure

```
├── index.html          ← Main page (all sections)
├── style.css           ← All styling
├── script.js           ← Animations & interactions
├── blog/
│   ├── post-1.html     ← Blog post 1
│   ├── post-2.html     ← Blog post 2
│   └── post-3.html     ← Blog post 3
└── README.md           ← This file
```

---

## 📝 Editing Texts

### Hero Section (Your Name & Intro)

Open `index.html` and find around line 30:

```html
<h1 class="hero-name">Aruan Silva</h1>
<div class="hero-divider"></div>
<p class="hero-intro">
  Hi! I'm a software engineer passionate about building products 
  that solve real problems and create meaningful experiences.
</p>
```

**Change:**
- `Aruan Silva` → Your name
- The intro paragraph → Your personal introduction

### About Section

Find around line 60:

```html
<p class="about-lead">
  I am a software engineer focused on building scalable applications 
  and exceptional user experiences.
</p>
<p class="about-text">
  I develop full-stack solutions using modern technologies...
</p>
```

**Change:** Both paragraphs to describe yourself.

### Timeline (Experience)

Find around line 75:

```html
<div class="timeline-item">
  <div class="timeline-year">2017</div>
  <div class="timeline-content">
    <h3>Junior Developer</h3>
    <p>First Company</p>
  </div>
</div>
```

**Change:**
- Years → Your actual years
- Job titles → Your actual titles
- Company names → Your actual companies

**To add more timeline items**, copy and paste a `timeline-item` div.

---

## 🔗 Editing Links

### Navigation Logo

Line ~20:
```html
<a href="#" class="logo">AS</a>
```
Change `AS` to your initials.

### Hero Links (GitHub & Contact)

Find around line 40:
```html
<a href="https://github.com" target="_blank" rel="noopener" class="hero-link">
```
Change `https://github.com` → `https://github.com/YOUR_USERNAME`

### About Section Links

Find around line 70:
```html
<div class="about-links">
  <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
  <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
</div>
```

**Change:**
- `https://linkedin.com` → `https://linkedin.com/in/YOUR_USERNAME`
- `https://github.com` → `https://github.com/YOUR_USERNAME`

### Contact Section Links

Find around line 180:
```html
<a href="mailto:hello@example.com" class="contact-btn">
```
Change `hello@example.com` → your actual email.

```html
<a href="https://linkedin.com" target="_blank" rel="noopener" class="contact-btn">
```
Change to your LinkedIn URL.

---

## 💼 Editing Projects

Projects are in the **Portfolio section** around line 95. Each project looks like this:

```html
<a href="#" class="portfolio-card">
  <div class="portfolio-image">
    <div class="portfolio-placeholder gradient-1">
      <!-- Icon SVG here -->
    </div>
  </div>
  <div class="portfolio-info">
    <h3>Project Alpha</h3>
    <p>A comprehensive platform for managing complex workflows with modern tech stack</p>
  </div>
</a>
```

### To Edit a Project:

1. **Title**: Change `<h3>Project Alpha</h3>` → `<h3>Your Project Name</h3>`
2. **Description**: Change the `<p>` text
3. **Link**: Change `href="#"` → `href="https://github.com/you/project"` or your live URL
4. **Color**: Change `gradient-1` to `gradient-2`, `gradient-3`, etc. (6 colors available)

### Available Gradient Colors:

| Class | Color |
|-------|-------|
| `gradient-1` | Purple → Violet |
| `gradient-2` | Pink → Red |
| `gradient-3` | Blue → Cyan |
| `gradient-4` | Green → Teal |
| `gradient-5` | Pink → Yellow |
| `gradient-6` | Teal → Pink |

### To Add a New Project:

Copy an existing `portfolio-card` block and paste it inside the `portfolio-grid` div.

### To Remove a Project:

Delete the entire `<a href="#" class="portfolio-card">...</a>` block.

### To Use an Image Instead of Gradient:

Replace:
```html
<div class="portfolio-placeholder gradient-1">
  <!-- SVG icon -->
</div>
```

With:
```html
<img src="images/project-screenshot.png" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

(Create an `images/` folder and add your screenshots)

---

## 📰 Editing Blog Posts

### Blog List on Homepage

The blog list is around line 160 in `index.html`:

```html
<a href="blog/post-1.html" class="blog-item">
  <time datetime="2024-12-01">Dec 2024</time>
  <h3>On Building Elegant Software Systems</h3>
  <span class="blog-arrow">→</span>
</a>
```

**Change:**
- `datetime="2024-12-01"` → actual date (YYYY-MM-DD format)
- `Dec 2024` → display date
- The `<h3>` title
- `href="blog/post-1.html"` → the link to your post file

### Editing a Blog Post

Open any file in `blog/` folder (e.g., `blog/post-1.html`):

```html
<header class="blog-header">
  <a href="../index.html#blog" class="back-link">← Back to all articles</a>
  <time datetime="2024-12-01">December 1, 2024</time>
  <h1>On Building Elegant Software Systems</h1>
</header>

<article class="blog-content">
  <p>Your first paragraph...</p>
  <p>Second paragraph...</p>
  
  <h2>Section Heading</h2>
  <p>More content...</p>
  
  <blockquote>
    "A quote here"
    <cite>— Author Name</cite>
  </blockquote>
</article>
```

### Adding a New Blog Post

1. **Copy** an existing post file (e.g., `post-1.html`)
2. **Rename** it (e.g., `post-4.html`)
3. **Edit** the content inside
4. **Add a link** to `index.html` in the blog list:

```html
<a href="blog/post-4.html" class="blog-item">
  <time datetime="2025-01-15">Jan 2025</time>
  <h3>Your New Post Title</h3>
  <span class="blog-arrow">→</span>
</a>
```

### Blog Content Formatting

| Element | HTML |
|---------|------|
| Paragraph | `<p>Your text here</p>` |
| Heading | `<h2>Section Title</h2>` |
| Quote | `<blockquote>"Quote"<cite>— Author</cite></blockquote>` |
| Code | `<code>inline code</code>` |
| Bold | `<strong>bold text</strong>` |
| Italic | `<em>italic text</em>` |
| Link | `<a href="url">link text</a>` |

---

## 🎨 Quick Style Customizations

### Change Primary Color

In `style.css`, line ~12:
```css
--color-primary: #0066ff;
```
Change to any hex color (e.g., `#10b981` for green, `#8b5cf6` for purple).

### Change Background

Line ~6:
```css
--color-bg: #fafafa;
```
Change to `#ffffff` for pure white, or any light color.

---

## 📤 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages will automatically update within 1-2 minutes.

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)

