import { useState } from "react";

import InputItem from "./component/InputItem.js";
import ItemList from "./component/ItemList.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="body">
      <div className="content">
        <h1>TO DO LIST!!</h1>
        <InputItem list={list} setList={setList} />
        <ItemList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
