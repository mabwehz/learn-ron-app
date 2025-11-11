# Learn Ron App

**Learn Ron** is a mobile-first, open-source web application that helps English speakers, linguists, and Ron people learn and preserve the **Ron language**.  
It focuses on cultural context, direct English-to-Ron translations, and the history of the Ron people — built for speed, accessibility, and simplicity.

---

## 🌍 Project Overview

| **Aspect** | **Description** |
|-------------|-----------------|
| **Goal** | To create a fast, easy-to-use dictionary-style web app for learning the Ron language. |
| **Audience** | Linguists, general language enthusiasts, and Ron people interested in language preservation. |
| **Core Idea** | Emphasize cultural context, word-to-word translation, and educational materials like translations of common texts (e.g., *The Lord’s Prayer*). |
| **Frontend Repo** | [`learn-ron-app`](https://github.com/yourusername/learn-ron-app) |
| **Backend Repo** | [`learn-ron-api`](https://github.com/yourusername/learn-ron-api) |

---

## 🧠 Core Features

- **English → Ron Dictionary** — searchable and filterable word list  
- **Word Details** — forms, remarks, and (future) pronunciation audio  
- **Favorites** — logged-in users can bookmark words  
- **Cultural Section** — background on the Ron people and traditions  
- **Role-based Access Control**  
  - *Public*: view all words  
  - *Learner*: save favorites  
  - *Editor*: create/update words  
  - *Admin*: create/update/delete words  
  - *Super Admin*: manage users and roles  
- **Light/Dark Theme Switcher** — inspired by Ron colors (red, white)  
- **Fast & Mobile-First Design** — optimized for slow internet connections  

---

## 🏗️ Tech Stack

| **Layer** | **Technology** |
|------------|----------------|
| **Frontend** | Angular |
| **Backend** | Hono |
| **Database** | MongoDB |
| **Auth & Roles** | better-auth |
| **Infra & Hosting** | Cloudflare |
| **Data Source** | Initial English-to-Ron CSV (~1,000 words) |

---

## 🚀 Development Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
ng serve
```

Then open your browser at [`http://localhost:4200/`](http://localhost:4200/).  
The app will reload automatically whenever you modify source files.

### 3. Build for production
```bash
ng build
```
Build artifacts are stored in the `dist/` directory. Production builds are optimized for speed and performance.

### 4. Run tests
- **Unit tests:**  
  ```bash
  ng test
  ```
- **End-to-end tests:**  
  ```bash
  ng e2e
  ```

---

## 📁 Project Structure (Frontend)
```
learn-ron-app/
│
├── src/
│   ├── app/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Dictionary, Word Details, About
│   │   ├── services/         # API, Auth, and Data services
│   │   ├── models/           # TypeScript interfaces for word data
│   │   └── guards/           # Role-based access control
│   ├── assets/               # Icons, images, etc.
│   └── environments/         # Environment configs
└── ...
```

---

## 📜 License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  
That means all modified versions must remain open-source under the same license.

---

## 💬 Acknowledgments

- Inspired by the desire to preserve and promote the **Ron language and culture**.  
- Built with modern web technologies to make language learning accessible to all.

---

## 🔗 Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)  
- [Ron Language (Wikipedia)](https://en.wikipedia.org/wiki/Ron_language)

---
