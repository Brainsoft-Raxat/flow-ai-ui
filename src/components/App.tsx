import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Layout from './Layout/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="chat" element={<Layout />} />
        </Route>

    )
)

const App: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
