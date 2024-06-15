import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} />
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
