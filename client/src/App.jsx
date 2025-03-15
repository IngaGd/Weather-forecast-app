import { GlobalContextProvider } from "./common/context/GlobalContext";
import { Home } from "./pages/home/home";
import "./styles/main.scss";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
