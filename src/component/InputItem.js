import { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function InputItem(props) {
  const [reset, setReset] = useState(false);
  const [write, setWrite] = useState("");

  useEffect(() => {
    if (reset) {
      setWrite("");
      setReset(false);
    }
    return setReset(false);
  }, [reset]);

  return (
    <>
      <InputGroup style={{ width: "60%", marginBottom: "20px" }}>
        <Form.Control
          value={write}
          placeholder="write on here"
          onChange={(e) => {
            setWrite(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          onClick={() => {
            if (write !== "") {
              let c = [...props.list];
              c.push({
                text: write,
                checked: false,
              });
              c[c.length - 1].id =
                c.length - 1 <= 0 ? 0 : c[c.length - 2].id + 1;
              props.setList(c);
              setReset(true);
            } else {
              alert("입력란이 비어있습니다.");
            }
          }}>
          ADD
        </Button>
      </InputGroup>
    </>
  );
}

export default InputItem;
