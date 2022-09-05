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
          // 취소버튼을 누르면 작업이 취소되고 원래대로 돌아온다
          setWrite("");
          document.getElementById(`_${props.element.id}`).style.display =
            "none";
        }}>
        ❌
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => {
          // 확인 버튼을 누르면 입력창 value를 같은 id인 text에 덮어씌운다
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
          }
        }}>
        ✅
      </Button>
    </InputGroup>
  );
}

export default UpdateItem;
