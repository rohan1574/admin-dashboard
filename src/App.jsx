import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytic</h1>,
                },
                {
                    path: "reports",
                    element: <h1 className="title">Report</h1>,
                },
                {
                    path: "customers",
                    element: <h1 className="title">Customer</h1>,
                },
                {
                    path: "new-customer",
                    element: <h1 className="title">New Custome</h1>,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customer</h1>,
                },
                {
                    path: "products",
                    element: <h1 className="title">Product</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
