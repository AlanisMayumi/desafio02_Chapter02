import { FormEvent } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";
import Modal, { ModalProps } from "../Modal";
import Input from "../Input";
import { useState } from "react";

export interface InputFood {
  name: string;
  description: string;
  image: string;
  price: number;
}
interface ModalAddFoodProps extends ModalProps {
  handleAddFood: (food: InputFood) => void;
}
function ModalAddFood({ setIsOpen, isOpen, handleAddFood }: ModalAddFoodProps) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  async function handleSubmit(event: FormEvent) {
    handleAddFood({
      image,
      name,
      price,
      description,
    });
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
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
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
