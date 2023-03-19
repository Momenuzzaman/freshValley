import "./App.css";
import "flowbite";
import Login from "./components/Login/Login";
import CreateAccounts from "./components/CreateAccount/CreateAccounts";
import { Admin } from "./components/Admin/Admin";
import ManageProduct from "./components/dashBoardComponents/ManageProduct/ManageProduct";
import CheckOut from "./components/checkout/CheckOut";
import AddProduct from "./components/dashBoardComponents/addProduct/AddProduct";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProduct from "./components/dashBoardComponents/EditProduct/EditProduct";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Shop></Shop> },
        { path: "/order", element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute> },
      ],
    },
    { path: "/login", element: <Login></Login> },
    {
      path: "/admin",
      element: <Admin></Admin>,
      children: [
        { path: "/admin", element: <ManageProduct></ManageProduct> },
        { path: "/admin/addProduct", element: <AddProduct></AddProduct> },
        { path: "/admin/editProduct", element: <EditProduct></EditProduct> }
      ],
    },
    { path: "/register", element: <CreateAccounts></CreateAccounts> },
    { path: "*", element: <PageNotFound></PageNotFound> }
  ]);
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
