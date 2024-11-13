import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', 
                element: <UsersPage/>, 
                children:[
                    {path: ':id', element: <UserDetailPage/>}
                ]
            },
        ]
    }
]);

export default router;