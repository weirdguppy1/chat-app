import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Room from "./pages/Room";
import Error from "./pages/ErrorPage";
import { MiscProvider } from "./contexts/MiscContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <MiscProvider>
                <PrivateRoute redirectPath="/">
                  <Dashboard />
                </PrivateRoute>
              </MiscProvider>
            </AuthProvider>
          }
        />
        <Route path="/rooms/:roomId" element={<Room />} />
        <Route path="*" element={<Error message="URL not found..." />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
