import React from 'react';
import './App.css'; // Isso vincula o CSS que você acabou de colar

// 1. Matriz de Dados (Array): Isolamos as informações dos doces
const docesData = [
  {
    id: 1,
    imagem: "/img/nuvem_ninho.png",
    nome: "Nuvem de Ninho com Morango",
    ingredientes: [
      "Creme: Mousseline de Leite Ninho aerado.",
      "Fruta: Morangos Frescos selecionados.",
      "Base: Camadas de pão de ló umedecido.",
      "Finalização: Raspas de chocolate branco premium."
    ],
    preco: "R$ 20,00"
  },
  {
    id: 2,
    imagem: "/img/sinfonia_chocolate.png",
    nome: "Sinfonia de Chocolate (70% Cacau)",
    ingredientes: [
      "Base: Brownie denso de chocolate amargo.",
      "Recheio: Ganache aveludada 70% cacau.",
      "Toque de mestre: Finalizado com flor de sal e cacau em pó 100% puro.",
      "Perfil: Sabor intenso e dulçor equilibrado."
    ],
    preco: "R$ 20,00"
  },
  {
    id: 3,
    imagem: "/img/encanto_pistache.png",
    nome: "Encanto de Pistache",
    ingredientes: [
      "Massa: Pâte à choux (massa de bomba) leve e crocante.",
      "Recheio: Creme pâtissière artesanal de pistache puro.",
      "Cobertura: Glaceado de chocolate branco e creme de pistache torrado.",
      "Destaque: Textura cremosa com crocância na medida."
    ],
    preco: "R$ 25,00"
  }
];

// 2. Componente de Função: O molde estrutural do cartão de doce
function CartaoDoce({ doce }) {
  return (
    <article className="cartao-doces">
      <img 
        src={doce.imagem} 
        alt={`Foto da ${doce.nome}`} 
        width="150" 
        style={{ display: 'block' }} 
      />
      <h2 className="sabor-nome">{doce.nome}</h2>
      
      {/* O método .map percorre a lista de ingredientes gerando os parágrafos */}
      {doce.ingredientes.map((ingrediente, index) => (
        <p key={index} className="sabor-ingredientes">{ingrediente}</p>
      ))}
      
      <p className="sabor-preco">{doce.preco}</p>
      <a href="#carrinho" className="botao-pedir">Pedir Agora</a>
    </article>
  );
}

// 3. Componente Principal: Renderiza o layout geral da página
export default function App() {
  return (
    <>
      <header className="cabecalho-principal">
        <div className="logo">
          <img 
            src="/img/logodocesabor.png" 
            alt="Doceria DoceSabor" 
            width="100" 
            style={{ display: 'block' }} 
          />
          <h2>🍰 Doceria DoceSabor</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="conteudo-principal">
        <h1 className="titulo-pagina">Nosso Cardápio</h1>
        <div className="grade-de-doces">
          {/* Aplicação da lógica de repetição automatizada */}
          {docesData.map((doce) => (
            <CartaoDoce key={doce.id} doce={doce} />
          ))}
        </div>
      </main>

      <footer className="rodape-principal">
        <p>&copy; 2026 Doceria DoceSabor - Pompéia. Todos os direitos reservados.</p>
        <p>Desenvolvido pelos alunos de Sistemas Inteligentes.</p>
      </footer>
    </>
  );
}