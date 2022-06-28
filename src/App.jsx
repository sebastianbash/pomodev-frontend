import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Loading from "./pages/loading/Loading";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Loading />} />
          <Route
            path="/settings"
            element={<h2>Settings Page - from pomodoro app</h2>}
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
  );
}

export default App;
