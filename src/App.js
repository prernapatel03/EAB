import React, { Suspense } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import CreditCardManagement from "./Pages/CreditCardManagement";
import Demo from "./Pages/Demo";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const SpendingProfile = React.lazy(()=> import('./Pages/SpendingProfile'))
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<CreditCardManagement />} />
          <Route path="/SpendingProfile" element={<SpendingProfile />} />
          <Route path="/Demo" element={<Demo />} />

        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
