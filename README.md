# Card Management App – Frontend Engineer Test

This project is a **card management application** built as part of a Frontend Engineer challenge. Users can **add, edit, and delete payment cards** in a responsive, user-friendly interface.  

---

## 🌟 Features

- **Add new cards** with cardholder name, card number, expiry date, and CVC.  
- **Edit existing cards** with a smooth modal interface.  
- **Delete cards** quickly and safely.  
- **Responsive design** for mobile, tablet, and desktop screens.  
- **Form validation** using `react-hook-form` and `zod`.  
- **Custom fonts** loaded locally for consistent branding.  
- **Animated modals** with `Framer Motion`.  
- **State management** via `Zustand`.  

---

## 🛠 Technologies

- **Next.js** – React framework for routing and server-side rendering.  
- **React & TypeScript** – Component-based, type-safe UI development.  
- **Zustand** – Lightweight state management for card data.  
- **React Hook Form + Zod** – Form handling and validation.  
- **Framer Motion** – Smooth animations for modal dialogs.  
- **Tailwind CSS** – Utility-first CSS framework for fast styling.  
- **UUID** – Generate unique IDs for cards.  

---

## 📁 Project Structure (`src/`)

- `src/app/` – Root layout, metadata, and global styles.  
- `src/components/` – Reusable UI components:  
  - `ClientCards` – Main card list wrapper.  
  - `AddCardModal` – Add new card modal.  
  - `EditCardModal` – Edit card modal.  
  - `BankCardList` – Displays user cards.  
  - `Modal` – Generic modal component with animations.  
  - `Input` & `Button` – Form UI components.  
- `src/schemas/` – Zod schemas for form validation.  
- `src/stores/` – Zustand store for card state management.  
- `src/types/` – TypeScript interfaces for card data.  
- `public/fonts/` – Local custom fonts.  

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn install