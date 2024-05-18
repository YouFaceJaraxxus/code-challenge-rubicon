import { Outlet } from "react-router-dom";
import "./App.css";

function App() {

  console.log("process.env.VITE_ENVIRONMENT", process)
  return (
    <>
      <Outlet />
    </>
  );
}


export default App;
