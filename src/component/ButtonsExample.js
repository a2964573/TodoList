import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ButtonsExample() {
  return (
    <>
      {/* 체크박스달린 input */}
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      {/* 버튼달린 input */}
      <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-secondary">Button</Button>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>
    </>
  );
}

export default ButtonsExample;
