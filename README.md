<<<<<<< HEAD
**🌍 Country Explorer**
=======
🌍 Country Explorer
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

The Country Explorer is a React-based web application that allows users to explore detailed information about countries worldwide. Users can search, filter, and save their favorite countries for quick access.

---

🚀 Deployment

The application is live and accessible at:

👉 [Country Explorer](https://country-explorer-psi.vercel.app/)

---

✨ Features

🔒 User Authentication
<<<<<<< HEAD
- Register new accounts and log in with existing credentials.
=======
- Register new accounts and login with existing credentials.
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
- User sessions are managed using `localStorage`.

🌎 Country Exploration
- Browse all countries with essential details like name, population, and region.
- Search countries by name.
- Filter countries by region and language.

📋 Detailed Country View
- View country flags, official names, and detailed statistics.
- Interactive map showing the country's location.
- Real-time clock displaying local and country-specific times.

⭐ User Preferences
- Save countries to a personalized favorites list.
- Toggle between viewing all countries and only favorites.
<<<<<<< HEAD
- Upload and manage profile images.
=======
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

---

🛠️ Tech Stack

Frontend
- React 19: Core UI framework.
- React Router 7: For navigation and routing.
- Tailwind CSS 4: For responsive and modern styling.
- Framer Motion: For animations and transitions.
- Leaflet: For interactive maps.
- React Clock: For displaying real-time clocks.

Development Tools
- Vite: Build tool and development server.
- Jest & React Testing Library: For unit and integration testing.
- ESLint: For maintaining code quality.

Data Storage
- Browser's `localStorage` is used for user data and session management.

---

⚙️ Setup & Installation

<<<<<<< HEAD
1️ Clone the Repository
=======
1️⃣ Clone the Repository
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
```bash
git clone <repository-url>
cd af-2-SankalaniS
```

<<<<<<< HEAD
2️ Install Dependencies
=======
2️⃣ Install Dependencies
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
```bash
npm install
```

<<<<<<< HEAD
3️ Start the Development Server
=======
3️⃣ Start the Development Server
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
```bash
npm run dev
```

<<<<<<< HEAD
4️ Access the Application
=======
4️⃣ Access the Application
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
Open your browser and navigate to:  
👉 `http://localhost:5173`

---

📦 Building for Production

To create a production build:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

---

🧪 Running Tests

Run the test suite:
```bash
npm test
```

---

📂 Project Structure

```
af-2-SankalaniS/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── CountryCard.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   └── __tests__/    # Component tests
│   ├── contexts/         # React context providers
│   │   └── UserContext.jsx
│   ├── pages/            # Main application pages
│   │   ├── Home.jsx
│   │   ├── CountryDetail.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── __tests__/    # Page tests
│   ├── services/         # API services
│   │   └── api.js
│   └── __mocks__/        # Mock files for testing
└── public/
```

---

🌐 API Integration

The application uses the [REST Countries API](https://restcountries.com/v3.1) to fetch country data. Key endpoints include:

- `getAllCountries()` - Fetches all countries.
- `getCountryByName(name)` - Searches countries by name.
- `getCountriesByRegion(region)` - Filters countries by region.
- `getCountryByCode(code)` - Gets a specific country by its code.

---

📊 Technical Report

Why REST Countries API?
<<<<<<< HEAD
1 Rich Data Set: Provides comprehensive country information (flags, population, languages, currencies, etc.).
2 No Authentication Required: Freely accessible without API keys.
3 Well-Documented: Clear documentation and predictable response structure.
4 Reliability: Stable with good uptime and response times.

---
=======
1. Rich Data Set: Provides comprehensive country information (flags, population, languages, currencies, etc.).
2. No Authentication Required: Freely accessible without API keys.
3. Well-Documented: Clear documentation and predictable response structure.
4. Reliability: Stable with good uptime and response times.
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

Challenges & Solutions

1️ Client-Side Authentication
- Challenge: Implementing authentication without a backend.
- Solution: Used `localStorage` to manage user sessions and credentials.

<<<<<<< HEAD
2️ Testing Components with External Dependencies
- Challenge: Testing components dependent on API data and browser features.
- Solution: Used Jest mocks for API services and `localStorage`.
=======
2️Time Zone Handling
- Challenge: Displaying accurate local time for each country.
- Solution: Leveraged JavaScript's `Intl.DateTimeFormat` API for timezone conversions.
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

3️ Efficient Filtering & Searching
- Challenge: Implementing performant search and filter functionality.
- Solution: Used React's state management for client-side filtering.

<<<<<<< HEAD
4️ Interactive Maps Integration
- Challenge: Displaying country locations on an interactive map.
- Solution: Used `React-Leaflet` for embedding maps with country markers.

5️ Responsive Design
- Challenge: Ensuring the application is fully responsive across different devices and screen sizes.
- Solution: Used Tailwind CSS's responsive utilities to create a mobile-first design and tested the application on various screen resolutions.

6️ Performance Optimization
- Challenge: Handling large datasets (e.g., all countries) without slowing down the application.
- Solution: Implemented lazy loading for components and optimized API calls using caching mechanisms.

7️ Error Handling
- Challenge: Managing API errors and ensuring a smooth user experience during failures.
- Solution: Added error boundaries in React and displayed user-friendly error messages for API failures.

8️ Accessibility
- Challenge: Making the application accessible to users with disabilities.
- Solution: Followed WCAG guidelines, added ARIA attributes, and tested the application with screen readers.

9️ State Management
- Challenge: Managing complex application state across multiple components.
- Solution: Used React Context API for global state management and avoided prop drilling.

10 Deployment Issues
- Challenge: Ensuring smooth deployment and compatibility with hosting platforms.
- Solution: Used Vercel for deployment and configured environment variables for production builds.
=======
4️Interactive Maps Integration
- Challenge: Displaying country locations on an interactive map.
- Solution: Used `React-Leaflet` for embedding maps with country markers.

5️Testing Components with External Dependencies
- Challenge: Testing components dependent on API data and browser features.
- Solution: Used Jest mocks for API services and `localStorage`.
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

---

🚀 Future Improvements

1 Implement a secure backend for authentication.
2 Add more filtering options (e.g., population range, area).
3 Introduce a country comparison feature.
4 Add detailed statistics with visual charts.
5 Support offline mode using service workers.
6 Add multilingual support for the interface.

---

📜 License

<<<<<<< HEAD
This project was created as part of an academic assignment at SLIIT.
=======
This project was created as part of an academic assignment at **SLIIT**.
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55

---