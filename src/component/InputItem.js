import { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function InputItem(props) {
  const [write, setWrite] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      setWrite("");
      setReset(false);
    }
    console.log(props.list);
    return setReset(false);
  }, [reset]);

  return (
    <>
      <InputGroup style={{ width: "50%" }}>
        <Form.Control
          value={write}
          placeholder="Write On Here"
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
              alert("비어있습니다.");
            }
          }}>
          ADD
        </Button>
      </InputGroup>
    </>
  );
}

export default InputItem;
