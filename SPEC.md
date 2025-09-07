# Prism AI Solutions Website – Comprehensive Build Specification

## 1. Overview

This document encodes every technical decision, file layout, and deployment detail for an AI coding agent to generate, build, and ship the static one‑page PrismTech site. Content is structured for machine parsing—use the YAML and code blocks directly.

---

## 2. Stack Definition (YAML)

```yaml
project_name: prism-ai
hosting: netlify
frontend:
  framework: Vite
  language: TypeScript
  ui_library: React
  styling: TailwindCSS
  motion: FramerMotion
  state_management: none (local/component state)
booking:
  provider: Cal.com
  embed: "@calcom/embed-react"
contact_form:
  transport: Resend
  logging: Airtable
analytics: Plausible
cms: none (static TS data array)
```

---

## 3. Dependencies (package.json excerpt)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@calcom/embed-react": "latest",
    "framer-motion": "^11.0.0",
    "resend": "latest",
    "airtable": "^0.13.7"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@tailwindcss/typography": "^0.5.11",
    "@tailwindcss/forms": "^0.5.7"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## 4. File & Folder Layout

```text
prism-ai/
├─ public/
│  ├─ favicon.ico
│  └─ robots.txt
├─ src/
│  ├─ components/
│  │   └─ Button.tsx
│  ├─ sections/
│  │   ├─ Hero.tsx
│  │   ├─ Impact.tsx
│  │   ├─ Services.tsx
│  │   ├─ About.tsx
│  │   └─ Contact.tsx
│  ├─ data/
│  │   └─ caseStudies.ts
│  ├─ hooks/
│  └─ App.tsx
├─ netlify/
│  └─ functions/
│      └─ sendContact.ts
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ vite.config.ts
├─ .env                # never commit
└─ README.md
```

---

## 5. Tailwind Theme Snippet

```js
// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif"] },
      colors: {
        neon: "#FF6B00",
        gray: {
          900: "#0F0F0F",
          700: "#1F1F1F",
          500: "#3F3F3F",
        },
      },
      backgroundImage: {
        "hot-grad":
          "linear-gradient(90deg,#FF6B00 0%,#FF3366 45%,#FFC300 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
```

---

## 6. Netlify Function – `sendContact.ts`

```ts
import type { Handler } from "@netlify/functions";
import Resend from "resend";
import Airtable from "airtable";

const resend = new Resend(process.env.RESEND_KEY!);
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE!
);

export const handler: Handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body ?? "{}");

  await resend.emails.send({
    from: "hello@prismtech.ai",
    to: "hello@prismtech.ai",
    subject: `New inquiry from ${name}`,
    html: `<p>${message}</p><p>Reply ➜ ${email}</p>`,
  });

  await base
    .table("Contacts")
    .create({ Name: name, Email: email, Message: message });

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
```

---

## 7. Environment Variables

```env
# Netlify UI → Site settings → Environment
RESEND_KEY=your_resend_api_key
AIRTABLE_TOKEN=your_airtable_personal_access_token
AIRTABLE_BASE=appXXXXXXXXXXXXXX
```

---

## 8. Deployment Steps (pseudo‑shell)

```bash
# 1. Scaffold project
npx create-vite@latest prism-ai --template react-ts
cd prism-ai

# 2. Install deps
npm i
npm i -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms
npm i framer-motion @calcom/embed-react resend airtable

# 3. Init Tailwind
npx tailwindcss init -p

# 4. Netlify CLI (optional local dev)
npm i -g netlify-cli
netlify init   # framework = Vite, build = npm run build, publish = dist

# 5. Push to GitHub

# 6. Netlify dashboard
#   • connect repo
#   • set env vars
#   • trigger first build

# 7. Add custom domain in Netlify (prismtech.ai)
```

---

## 9. DNS Instructions (Namecheap)

### Option A – Use Netlify DNS

1. In Netlify → “Domains” → **Use Netlify DNS**. Copy the four NS values.
2. In Namecheap → Domain List → prismtech.ai → **Nameservers** → Custom DNS → paste NS records.
3. Wait up to 1 hour. Netlify now controls apex + www records.

### Option B – Keep Namecheap DNS

| Host | Type  | Value                 | TTL    |
| ---- | ----- | --------------------- | ------ |
| @    | A     | 75.2.60.5             | 30 min |
| www  | CNAME | your-site.netlify.app | 30 min |

Then, in Netlify, set primary domain = `www.prismtech.ai` and enable redirect.

---

## 10. Resend DKIM

Add two CNAME records (shown in Resend UI) in the same DNS host.
Example:

| Host           | Value                                   |
| -------------- | --------------------------------------- |
| s1.\_domainkey | s1.domainkey.u123456.wl123.sendgrid.net |
| s2.\_domainkey | s2.domainkey.u123456.wl123.sendgrid.net |

Once verified, outbound mail is signed.

---

## 11. Plausible Analytics Embed

```html
<script
  async
  defer
  data-domain="prismtech.ai"
  src="https://plausible.io/js/plausible.js"
></script>
```

No cookies ⇒ no banner.

---

## 12. Component Scaffold Examples (TSX)

### Hero

```tsx
<section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-6">
  {/* animated headline */}
</section>
```

### Booking Section

```tsx
import { InlineWidget } from "@calcom/embed-react";

<InlineWidget
  url="https://cal.com/your-username/30min"
  styles={{ height: "700px", background: "transparent" }}
/>;
```

---

## 13. Future Enhancements Matrix

```yaml
scroll_animations:
  lib: GSAP ScrollTrigger
  action: import when needed
lottie:
  lib: lottie-react
  action: npm i lottie-react
spam_protection:
  hcaptcha: "@hcaptcha/react"
  verify_in: netlify function
self_host_cal:
  deploy: docker on fly.io
  change_embed_url: "https://book.prismtech.ai/..."
```

---

**End of Spec**
