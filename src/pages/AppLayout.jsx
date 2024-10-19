import { Outlet } from "react-router-dom";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";

function AppLayout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      {/* Navigation Tab */}
      <header>
        <Nav />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
