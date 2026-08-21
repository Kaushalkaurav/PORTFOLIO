import { useEffect, useState } from "react";

import Navbar from "./Component/Navbar";
import LoodingScreen from "./Component/LoodingScreen";
import AppRoutes from "./Routs/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("TIMER STARTED");

    const timer = setTimeout(() => {
      console.log("TIMER FINISHED");
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      console.log("TIMER CLEANED");
    };
  }, []);

  console.log("Loading:", loading);

  return (
    <div className="min-h-screen bg-[#090304]">

      {loading && <LoodingScreen />}

      {!loading && (
        <>
          <Navbar />
          <AppRoutes />
        </>
      )}

    </div>
  );
}

export default App;