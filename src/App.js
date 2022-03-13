import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import HomeScreen from "./screens/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
