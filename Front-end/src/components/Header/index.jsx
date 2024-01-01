import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/cardapio"}>Cardapio</Link>
        <Link to={"/todospedidos"}>Todos os pedidos</Link>
        <Link to={"/finalizarpedidos"}>Pedidos</Link>
      </nav>
    </header>
  );
}
