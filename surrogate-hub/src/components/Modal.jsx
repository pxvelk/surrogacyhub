import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Dialogue = ({ title, onSubmit, show, onHide, children }) => {
  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="light"
          onClick={onSubmit}
          className="text-white px-4 py-2 bg-pink-1 fw-bold fs-5"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Dialogue;
