import { useState } from "react";

import InputItem from "./component/InputItem.js";
import ItemList from "./component/ItemList.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

function App() {
  const [list, setList] = useState([]);
  const [write, setWrite] = useState("");
  return (
    <div>
      <h1>TO DO LIST!!</h1>
      <InputItem
        list={list}
        setList={setList}
        write={write}
        setWrite={setWrite}
      />
      <ItemList
        list={list}
        setList={setList}
        write={write}
        setWrite={setWrite}
      />
    </div>
  );
}

export default App;
