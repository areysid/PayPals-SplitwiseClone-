
# 💸 PayPals – The Quirky Splitwise Clone


PayPals is a full-stack **bill-splitting and expense-tracking app** inspired by Splitwise — but with more personality, humor, and a sprinkle of *Hera Pheri* charm.  
From splitting chai bills to managing Goa trip expenses, PayPals makes it easy to track who owes whom — **without anyone doing "25 din me paisa double" schemes**.

---

## 🚀 Features

- **👥 Group Management** – Create, edit, and delete groups for any trip, party, or event.
- **💵 Smart Expense Splitting** – Split bills equally or unequally, choose categories, and add participants.
- **📊 Dashboard Insights** – See balance summaries, expense breakdowns, and settlement histories.
- **🤝 Settlements** – Record payments and settle debts easily.
- **🔐 Auth & Permissions** – Secure authentication and role-based group permissions.
- **📩 Email Reminders** – Payment reminders powered by Convex & Inngest.
- **🎭 Fun UI & Branding** – Themed with Hera Pheri-style humor and a twist on traditional expense tracking.

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js 14](https://nextjs.org/) – App Router, layouts, API routes
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [Shadcn/ui](https://ui.shadcn.com/) – Accessible UI components
- [Sonner](https://sonner.emilkowal.ski/) – Toast notifications

**Backend**
- [Convex](https://convex.dev/) – Realtime database & serverless functions
- [Inngest](https://www.inngest.com/) – Background jobs & reminders

**Other**
- [Resend](https://resend.com/) – Transactional email delivery
- ESLint + Prettier – Code linting & formatting

---

## 📂 Project Structure

```

areysid-paypals-splitwiseclone-/
├── app/               # Next.js App Router pages & layouts
├── components/        # UI & feature components
├── convex/            # Convex backend functions & schema
├── hooks/             # Custom React hooks
├── lib/               # Utility functions & configs
└── public/            # Static assets (images, icons, etc.)

````

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/paypals.git
   cd paypals
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   * Copy `.env.example` to `.env.local`
   * Add your **Convex**, **Resend**, and **Inngest** API keys

4. **Run Convex backend**

   ```bash
   npx convex dev
   ```

5. **Run Next.js app**

   ```bash
   npm run dev
   ```

6. **Visit**

   ```
   http://localhost:3000
   ```

---

