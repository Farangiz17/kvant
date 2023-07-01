import { Outlet } from "react-router-dom";
import Index from "./components/header";
import IndexNavigation from "./components/navigation";
import FooterContainer from "./components/footer/footer.container";

function App() {
  return (
    <div className="App">
    <Index/>
    <IndexNavigation/>
    <Outlet/>
   <FooterContainer/>
    </div>
  );
}

export default App;
