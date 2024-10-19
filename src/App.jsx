import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoutes";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate replace to="/home" />} />

        {/* All public routes come under AppLayout */}
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product" element={<Product />} />
        </Route>
        {/* Protected Chat Route */}
        <Route path="/chat" element={<ProtectedRoute element={Chat} />} />
      </Routes>
    </Router>
  );
}

export default App;
