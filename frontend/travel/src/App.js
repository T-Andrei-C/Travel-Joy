import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./pages/Home";
import Accommodations from "./pages/Accommodations"
import Package from "./pages/Package";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Checkout from "./pages/checkout/Checkout";
import ViewDetails from "./pages/ViewDetails";
import MyAccount from "./pages/MyAccount";
import ForgotPassword from "./pages/ForgotPassword";
import Payment from "./pages/test/Payment";
import Error from "./pages/Error";
import CheckoutTest from "./pages/test/CheckoutTest";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/accommodations/:itemsPerPage/:numberOfPage" element={<Accommodations/>}/>
            <Route path="/accommodations/:destination/:itemsPerPage/:numberOfPage" element={<Accommodations/>}/>
            <Route path="/accommodations/:destination/:checkIn/:checkOut/:numberOfPersons/:itemsPerPage/:numberOfPage" element={<Accommodations/>}/>
            <Route path="/packages/:itemsPerPage/:numberOfPage" element={<Package/>} />
            <Route path="/packages/:destination/:itemsPerPage/:numberOfPage" element={<Package/>}/>
            <Route path="/packages/:destination/:checkIn/:checkOut/:numberOfPersons/:itemsPerPage/:numberOfPage" element={<Package/>}/>
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/myaccount" element={<MyAccount/>}/>
            <Route path="/forgotpassword/:uuid" element={<ForgotPassword/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/test" element={<Payment/>}/>
            <Route path="/accommodations/details/:accommodationName/:destination/:checkIn/:checkOut/:numberOfPersons" element={<ViewDetails/>}/>
            <Route path="/:random" element={<Error/>}/>
        </Route>
    )
)

export default function App() {
    return <RouterProvider router={router}/>
}

