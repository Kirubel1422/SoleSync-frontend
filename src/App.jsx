import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import UserNav from "./components/Navigation/UserNav";
import { twMerge } from "tailwind-merge";
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
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
