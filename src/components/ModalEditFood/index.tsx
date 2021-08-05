import { FormEvent, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal, { ModalProps } from "../Modal";
import Input from "../Input";
import { InputFood } from "../ModalAddFood";
import { FoodModel } from "../Food";

interface ModalEditFoodProps extends ModalProps {
  editingFood: FoodModel;
  handleUpdateFood: (food: InputFood) => void;
}

function ModalEditFood({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const [image, setImage] = useState(editingFood.image);
  const [name, setName] = useState(editingFood.name);
  const [price, setPrice] = useState(editingFood.price);
  const [description, setDescription] = useState(editingFood.description);

  async function handleSubmit() {
    
    handleUpdateFood({ image, name, price, description });
    setIsOpen();
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          value={image}
          handleInputChange={(e) => setImage(e.target.value)}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          value={name}
          handleInputChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          value={price}
          handleInputChange={(e) => setPrice(Number(e.target.value))}
        />

        <Input
          name="description"
          placeholder="Descrição"
          value={description}
          handleInputChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
