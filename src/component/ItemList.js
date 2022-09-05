import { Form, Button, InputGroup } from "react-bootstrap";
import UpdateItem from "./UpdateItem.js";

import "../style/App.css";

function ItemList(props) {
  let newList = [];
  let item = [];
  props.list.map((element, index) => {
    item.unshift(
      <li key={index} style={{ marginBottom: "20px" }}>
        <InputGroup>
          <InputGroup.Checkbox
            style={{ border: "none" }}
            className="checkbox"
            onClick={(e) => {
              element.checked = e.target.checked;
            }}
          />
          <Form.Control value={element.text} readOnly />
          <Button
            variant="outline-secondary"
            onClick={() => {
              props.list.map((propsElement) => {
                if (propsElement.id !== element.id) {
                  newList.push(propsElement);
                  return props.setList(newList);
                }
                if (props.list.length <= 1) {
                  return props.setList([]);
                }
              });
            }}>
            🗑️
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => {
              let status = document.getElementById(`_${element.id}`).style
                .display;
              document.getElementById(`_${element.id}`).style.display =
                status === "none" ? "block" : "none";
            }}>
            🆙
          </Button>
        </InputGroup>
        <div id={"_" + element.id} style={{ display: "none" }}>
          <UpdateItem
            list={props.list}
            setList={props.setList}
            element={element}
          />
        </div>
      </li>
    );
    return item;
  });

  return <ul style={{ padding: 0 }}>{item}</ul>;
}

export default ItemList;
