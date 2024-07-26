import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserNav from "./components/Navigation/UserNav";
import Footer from "./components/Footer/Footer";
import { twMerge } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const ShoeDetail = lazy(() => import("./pages/ShoeDetail"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <header className={twMerge("mt-5 px-[62px]")}>
        <UserNav />
      </header>

      <main className={twMerge("px-[62px]")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shoe-detail/:id" element={<ShoeDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className={twMerge("mt-[110px] px-[62px] mb-8")}>
        <Footer />
      </footer>
    </Suspense>
  );
}

export default App;
