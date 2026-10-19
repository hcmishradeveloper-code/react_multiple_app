import React from "react";
import Todos from "./Todos";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
function Main() {
  return (
    <div style={{marginLeft:'4rem'}}>
      <h3 style={{marginBottom:'10px'}}>Todos By Redux</h3>
      <Provider store={store}>
        <Todos />
      </Provider>
      <Link className="link_click" to="/">Return To Home</Link>
    </div>
  );
}
export default Main;