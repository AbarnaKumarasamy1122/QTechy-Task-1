import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/style.css";
import "aos/dist/aos.css";
import AllRoutes from "./routes/AllRoutes";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the pathname changes
  }, [location.pathname]);

  return (
    <div className="bg-white">
     
      <AllRoutes />
      
    </div>
  );
}

export default App;
