import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import store from "./store";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/home";
import SkillsPage from "./pages/skills";
import PortfolioPage from "./pages/portfolio";
import ProjectDetails from "./components/projects/ProjectDetails";
import ContactMePage from "./pages/contactMe";
import ProjectList from "./components/projects/ProjectsList";
import ExperiencePage from "./pages/experience";

const NotFound = () => {
    return (
        <h1>The Page Not Found</h1>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'experience',
                element: <ExperiencePage />,
            },
            {
                path: 'skills',
                element: <SkillsPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
                children: [
                    {
                        index: true,
                        element: <ProjectList />,
                    },
                    {
                        path: ':nameUrl',
                        element: <ProjectDetails />,
                    }
                ]
            },
            {
                path: 'contact',
                element: <ContactMePage />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;