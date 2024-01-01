import BagBurguer from "../../assets/request-burguer.png";
import Trash from "../../assets/trash.png";
import Title from "../../components/Title";
import Button from "../../components/Button";

import { Image, InfoReq, Lista, Request } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function Requests() {
  const [reqs, setReqs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get("http://localhost:3000/order");
      setReqs(data);
    }
    fetch();
  }, []);

  async function deleteRequest(requestId) {
    await axios.delete(`http://localhost:3000/order/${requestId}`);
    const requestDeleted = reqs.filter((request) => request.id !== requestId);
    setReqs(requestDeleted);
  }

  function goBack() {
    navigate("/");
  }

  return (
    <section>
      <Image src={BagBurguer} alt="" />
      <Title>Pedidos</Title>
      <Lista>
        {reqs.map((req) => (
          <Request key={req.id}>
            <InfoReq>
              <p>{req.order}</p>
              <p>{req.clientName}</p>
            </InfoReq>
            <button>
              <img
                src={Trash}
                onClick={() => deleteRequest(req.id)}
                alt="lata-de-lixo"
              />
            </button>
          </Request>
        ))}
      </Lista>
      <Button $isBack={true} onClick={goBack}>
        Voltar
      </Button>
    </section>
  );
}
