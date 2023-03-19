import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"
// import Main from "./components/Main.jsx";
import Cards from "./components/Cards.jsx";
import "./CSS/styles.css"
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main/> */}
      <Cards/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);