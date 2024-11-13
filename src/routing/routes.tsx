import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UserListPage/> },
            {path: 'users/:id', element: <UserDetailPage/>}
        ]
    }
]);

export default router;