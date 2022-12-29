import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import Home from "../pages/Home";
import Login from "../components/Login";
import { getUser } from "../selectors/userSelector";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../components/Register";
import ArticleDetail from "../components/ArticleDetail";

function AppRouter() {
  const user = useAppSelector(getUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route
          path="/"
          element={
            <ProtectedRoute authenticated={user.isAuth}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
