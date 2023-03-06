import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useState } from "react";

export default function ModalOpen(props) {

  const { className, title, content } = props;
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Kapat
        </Button>
      </ModalFooter>
    </Modal>
  );
}
