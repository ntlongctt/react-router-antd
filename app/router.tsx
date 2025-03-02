import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Welcome } from './welcome/welcome';
import App from './api/example-usage';
import { NavBar } from './components/NavBar';
import { UserDetails } from './components/UserDetails';

// Shared layout component that wraps all routes
function Layout() {
  return (
    <div className="min-h-screen bg-base">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

// Error boundary component
function ErrorBoundary() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Something went wrong</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'profile',
        element: <App />,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
      },
    ],
  },
]);

// Router provider component
export function Router() {
  return <RouterProvider router={router} />;
}
