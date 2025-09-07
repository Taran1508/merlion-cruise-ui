import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Photos from "@/pages/Photos";
import Videos from "@/pages/Videos";
import MyOrders from "@/pages/MyOrders";
import HostedEventStatusPage from "@/pages/hosted-event-status-page/HostedEventStatusPage";

// import Home from "@/pages/Home";
// import Photos from "@/pages/Photos";
// import Videos from "@/pages/Videos";
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
          <Route
            path="/hosted-events/:id"
            element={<HostedEventStatusPage />}
          />
          {/*
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
