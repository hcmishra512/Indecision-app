import React from "react";
// import "./App.css";
// import "./normalize.css/normalize.css";
import "./styles/styles.scss";
// import Counter from "./components/counter/Counter";
// import ParentApp from "./components/class-component/ParentApp";
import ParentsApp from "./components/function-component/ParentsApp";

function App() {
  return (
    <div className="App">
      {/* <ParentApp /> */}
      {/* <Counter /> */}
      <ParentsApp />
    </div>
  );
}

export default App;
