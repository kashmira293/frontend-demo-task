## Features

- User authentication with login form
- Protected dashboard route with dummy data
- Responsive design with MUI components
- Redux store with thunk middleware
- API calls to dummy API endpoints

## Getting Started

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

1. Run `npm run build` to build the application
2. Run `npm run start` to start the production server

## API Endpoints

- `GET /api/users`: Returns a list of dummy users
- `GET /api/posts`: Returns a list of dummy posts
- `POST /api/login`: Logs in a user and returns a token

## Redux Store

The application uses a Redux store to manage the state of the application. The store is created with the `createStore` function from `redux` and is configured to use the `thunk` middleware.

The store has the following reducers:

- `auth`: Handles user authentication
- `dashboard`: Handles the state of the dashboard

## Components

The application is built with the following components:

- `App`: The main application component
- `Login`: The login form component
- `Dashboard`: The dashboard component
- `Topbar`: The topbar component
- `Sidebar`: The sidebar component
- `DashboardContent`: The dashboard content component

## Styles

The application uses Material UI (MUI) components and styles. The styles are written in CSS-in-JS with the `styled` function from `@mui/material/styles`.

## Testing

The application has some basic tests written with Jest and React Testing Library. The tests are located in the `_tests` directory.

