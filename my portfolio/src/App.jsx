import { useEffect, useState } from "react";

import Navbar from "./Component/Navbar";
import LoodingScreen from "./Component/LoodingScreen";
import AppRoutes from "./Routs/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#090304]">
      {loading ? (
        <LoodingScreen />
      ) : (
        <>
          <Navbar />
          <AppRoutes />
        </>
      )}
    </div>
  );
}

export default App;
