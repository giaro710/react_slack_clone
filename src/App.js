import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-Router */}
      </div>
    </div>
  );
};

export default App;
