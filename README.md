# Shipping Box App

A simple React app that helps calculate shipping costs for sending boxes from India to different countries.

## What it does

* Add a box with receiver details, weight, color, and destination
* See the list of all boxes in a table
* Automatically calculates shipping cost based on weight and country
* Validates form inputs and shows error messages when needed
* Works well on mobile, tablet, and desktop
* Stores all data in browser localStorage

## Tech Used

* React 19 + TypeScript
* React Router DOM
* Vite
* CSS for styling

## Folder Structure

```
src/
├── components/        // UI components
├── controllers/       // Logic for handling actions
├── services/          // Saves and fetches data
├── hooks/             // Custom hooks
├── types/             // TS type definitions
├── utils/             // Helper functions
└── App.tsx            // Main app with routes
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## How to Use

### Add a Box

1. Open **Add Box**
2. Fill in:

   * Receiver name
   * Weight (kg)
   * Box color (color picker)
   * Destination country
3. Click **Save Box**

### View Boxes

* Open **Box List**
* You’ll see:

  * Receiver name
  * Weight
  * Color preview
  * Country
  * Shipping cost in INR

## Shipping Rates (per kg)

| Country   | Rate (INR/kg) |
| --------- | ------------- |
| Sweden    | 7.35          |
| China     | 11.53         |
| Brazil    | 15.63         |
| Australia | 50.09         |

**Formula:**
`Cost = Weight × Rate`

## Validation

* All fields are required
* Weight must be a positive number
* Shows errors for invalid inputs

## App Structure (MVC Style)

* **Model** – Box type definition (TypeScript)
* **View** – UI components like Form and List
* **Controller** – Handles box logic (save, fetch)
* **Service** – Uses localStorage (can be replaced with APIs later)
* **State** – Managed with React hooks + custom `useBoxes` hook

---

## Deployment

The project is deployed on Vercel and is automatically updated using CI/CD via GitHub Actions.
Whenever new code is pushed to the main branch, the latest build is deployed automatically.

### Links

* Live App (Vercel):[https://react-shipping-box.vercel.app/](https://react-shipping-box.vercel.app/)

### CI/CD Setup

* Configured GitHub Actions workflow to trigger deployment on every push
* Automatic build + deploy pipeline connected with Vercel
* No manual deployment required
