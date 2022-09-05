import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function UpdateItem(props) {
  const [write, setWrite] = useState("");
  return (
    <InputGroup style={{ width: "50%" }}>
      <Form.Control
        placeholder="write on here for to change"
        value={write}
        onChange={(e) => {
          setWrite(e.target.value);
        }}
      />
      <Button
        variant="outline-secondary"
        onClick={() => {
          setWrite("");
          document.getElementById(`_${props.element.id}`).style.display =
            "none";
        }}>
        ❌
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => {
          if (write !== "") {
            let c = [...props.list];
            c.map((element) => {
              if (element.id === props.element.id) {
                element.text = write;
                props.setList(c);
                document.getElementById(`_${props.element.id}`).style.display =
                  "none";
                setWrite("");
              }
              return props.list;
            });
          } else {
            alert("업데이트 항목이 비어있습니다");
          }
        }}>
        ✅
      </Button>
    </InputGroup>
  );
}

export default UpdateItem;
