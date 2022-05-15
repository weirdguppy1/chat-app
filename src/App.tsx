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
      <AuthProvider>
        <MiscProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute redirectPath="/">
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/rooms/:roomId" element={<Room />} />
            <Route path="*" element={<Error message="URL not found..." />} />
          </Routes>
        </MiscProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
