import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

import "../style/App.css";

function ItemList(props) {
  let newList = [];
  let item = [];
  props.list.map((element, index) => {
    item.unshift(
      <li key={index}>
        <InputGroup style={{ width: "50%" }}>
          <InputGroup.Checkbox
            className="checkbox"
            onClick={(e) => {
              element.checked = e.target.checked;
            }}
          />
          <Form.Control value={element.text} readOnly />
          <Button variant="outline-secondary">🆙</Button>
          <Button
            variant="outline-secondary"
            onClick={() => {
              props.list.map((propsElement) => {
                if (propsElement.id !== element.id) {
                  newList.push(propsElement);
                  props.setList(newList);
                }
                if (props.list.length <= 1) {
                  props.setList([]);
                }
              });
            }}>
            🗑️
          </Button>
        </InputGroup>
      </li>
    );
    return item;
  });

  return <ul style={{ padding: 0 }}>{item}</ul>;
}

export default ItemList;
