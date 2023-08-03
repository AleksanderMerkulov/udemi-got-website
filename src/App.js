import './App.css';
import Header from "./components/header/header";

import dotClass from "./services/gotDatabaseClass";

function App() {

  const dot = new dotClass()



  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
