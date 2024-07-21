import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import UserNav from "./components/Navigation/UserNav";
import Footer from "./components/Footer/Footer";
import { twMerge } from "tailwind-merge";

const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

function App() {
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
        </Routes>
      </main>

      <footer className={twMerge("mt-[110px] px-[62px] mb-8")}>
        <Footer />
      </footer>
    </Suspense>
  );
}

export default App;
