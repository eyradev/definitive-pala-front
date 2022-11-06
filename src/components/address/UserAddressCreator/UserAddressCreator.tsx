import useUserPP from "hooks/useUserPP";
import { useState } from "react";
import { Button, Modal } from "reactstrap";
import UserAddressCreationSection from "../UserAddressCreatorSection/UserAddressCreationSection";

const UserAddressCreator: React.FC<{
  children: JSX.Element | string;
}> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUserPP();

  if (!user?.id)
    return (
      <Button outline disabled>
        {children}
      </Button>
    );

  const handleModalToggle = () => {
    setModalOpen((isModalOpen) => !isModalOpen);
  };

  const handleAddressCreated = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button onClick={handleModalToggle} color="primary" outline>
        {children}
      </Button>
      <Modal
        isOpen={isModalOpen}
        toggle={handleModalToggle}
        style={{ maxWidth: "50%" }}
      >
        <div
          style={{ padding: "10px 20px", maxHeight: "70vh", margin: "10px 0" }}
        >
          <h2 style={{ margin: 0 }}>Crear Dirección</h2>
          <UserAddressCreationSection onAddressCreated={handleAddressCreated} />
        </div>
      </Modal>
    </>
  );
};

export default UserAddressCreator;
