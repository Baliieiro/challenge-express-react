import LogoBurguer from "../../assets/home-burguer.png";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { InputLabel, Label, Image, ContainerItens } from "./style";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const inputName = useRef("");
  const inputRequest = useRef("");

  async function addRequest() {
    const newRequest = {
      clientName: inputName.current.value,
      order: inputRequest.current.value,
    };

    await axios.post("http://localhost:3000/order", newRequest);

    navigate("/pedidos");
  }
  return (
    <section>
      <Image src={LogoBurguer} alt="" />
      <Title>Faça seu pedido!</Title>

      <ContainerItens>
        <Label htmlFor="">Pedido</Label>
        <InputLabel type="text" ref={inputRequest} />
        <Label htmlFor="">Nome do Cliente</Label>
        <InputLabel type="text" ref={inputName} />
        <Button onClick={addRequest}>Novo Pedido</Button>
      </ContainerItens>
    </section>
  );
}
