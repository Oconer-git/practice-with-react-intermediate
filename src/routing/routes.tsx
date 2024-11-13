import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path:'login', element: <LoginPage/>},
        ]
    },
   {
        element: <PrivateRoutes/>,
        children: [
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