# Shipping Box Application

A React-based single-page application for calculating shipping costs for boxes from India to specific destinations worldwide.

## Features

- **Add Box Form**: Create shipping box entries with receiver details, weight, color, and destination
- **Box List View**: Display all saved boxes in a responsive table format
- **Cost Calculation**: Automatic calculation of shipping costs based on weight and destination country
- **Form Validation**: Comprehensive validation with error messages
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Local Storage**: Data persistence using browser's localStorage

## Tech Stack

- **React 19** with TypeScript
- **React Router DOM** for navigation
- **Vite** for build tooling
- **CSS3** for styling

## Project Structure

The application follows an MVC-style architecture:

```
src/
├── components/          # View components
│   ├── Navbar.tsx      # Navigation component
│   ├── BoxForm.tsx     # Form view (View A)
│   └── BoxList.tsx     # Table view (View B)
├── controllers/        # Business logic
│   └── BoxController.ts
├── services/           # API/service layer
│   └── BoxService.ts
├── hooks/              # Custom React hooks
│   └── useBoxes.ts
├── types/              # TypeScript types/models
│   └── Box.ts
├── utils/              # Utility functions
│   └── rgbConverter.ts
└── App.tsx             # Main app component with routing
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (optional):
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Shipping Box
VITE_DEFAULT_CURRENCY=INR
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

### Adding a Box

1. Navigate to the "Add Box" page
2. Fill in the form fields:
   - **Receiver Name**: Name of the recipient (required)
   - **Weight**: Weight in kilograms (required, must be positive)
   - **Box Colour**: Select a color using the color picker (stored as RGB)
   - **Destination Country**: Select from available countries (required)
3. Click "Save Box" to store the entry

### Viewing Boxes

1. Navigate to the "Box List" page
2. View all saved boxes in a table format showing:
   - Receiver name
   - Weight in kilograms
   - Box color (visual display)
   - Destination country
   - Calculated shipping cost in INR

## Shipping Rates

The application uses the following shipping rates per kilogram:

- **Sweden**: 7.35 INR/kg
- **China**: 11.53 INR/kg
- **Brazil**: 15.63 INR/kg
- **Australia**: 50.09 INR/kg

Shipping cost = Weight (kg) × Country Multiplier (INR/kg)

## Validation Rules

- All form fields are required
- Weight must be a positive number (negative values default to 0)
- Error messages are displayed for invalid inputs

## Architecture

### MVC Pattern

- **Models**: TypeScript interfaces in `types/Box.ts`
- **Views**: React components in `components/`
- **Controllers**: Business logic in `controllers/BoxController.ts`

### State Management

- Uses React hooks (`useState`, `useEffect`) for local state
- Custom hook `useBoxes` for box data management
- Props passed between components for data flow

### Service Layer

- `BoxService` provides API endpoints:
  - `saveBox()`: Save a new box
  - `getAllBoxes()`: Retrieve all boxes
- Currently uses localStorage for persistence
- Can be easily replaced with actual API calls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for assessment purposes.
