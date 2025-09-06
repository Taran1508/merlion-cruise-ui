import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Photos from "@/pages/Photos";
import Videos from "@/pages/Videos";
import MyOrders from "@/pages/MyOrders";
import Bookings from "@/pages/bookings/Bookings";
// import Cart from "@/pages/Cart";
// import Payment from "@/pages/Payment";
// import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/bookings/:id" element={<Bookings />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/*
          <Route path="/payment" element={<Payment />} />
           */}
        </Route>
      </Routes>
    </Router>
  );
}
