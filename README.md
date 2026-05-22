# 🍰 Doceria DoceSabor - Refatoração em React

Este projeto consiste na reestruturação e refatoração de uma página web institucional estática (HTML e CSS puros) de uma doceria artesanal para uma aplicação SPA (Single Page Application) dinâmica, utilizando **React** e o construtor **Vite**.

A atividade foi desenvolvida como parte dos estudos práticos do 2º Bimestre na disciplina de Front-end do curso de Tecnologia em Sistemas Inteligentes da FATEC Pompéia.

## 🎯 Objetivos e Conceitos Computacionais Aplicados

O principal propósito desta atividade foi aplicar os pilares do desenvolvimento front-end moderno, migrando do paradigma imperativo/estático para o declarativo/dinâmico. Os seguintes conceitos foram consolidados:

* **Componentização:** Divisão da interface em blocos lógicos, isolados e reutilizáveis. O cartão de exibição dos doces foi transformado no componente `<CartaoDoce />`, que atua como um "molde" estrutural.
* **Props (Propriedades):** Passagem de parâmetros e dados dinâmicos para os componentes, permitindo que o mesmo molde exiba informações diferentes (imagem, nome, ingredientes e preço) dependendo do objeto recebido.
* **Renderização Dinâmica com Imutabilidade:** Isolamento dos dados textuais e caminhos de imagens em uma matriz de objetos JavaScript (`Array`). Utilização do método `.map()` para percorrer e renderizar a lista de produtos automaticamente na tela, eliminando a redundância e repetição manual de blocos de código HTML.
* **Gerenciamento de Assets no Ecossistema Vite:** Importação modular de imagens e acoplamento direto via JavaScript para otimização de build, além da unificação das folhas de estilo globais e locais.
* **Boas Práticas de Versionamento (Git/GitHub):** Configuração correta de regras de exclusão de arquivos no `.gitignore` para impedir o upload de dependências locais pesadas (`node_modules`), mantendo o repositório remoto leve, limpo e profissional.

## 🛠️ Tecnologias Utilizadas

* **ReactJS** (Biblioteca Javascript para construção de interfaces)
* **Vite** (Ferramenta de build e servidor de desenvolvimento de alta performance)
* **JavaScript (ES6+)** (Lógica de mapeamento e estruturação de dados)
* **CSS3** (Estilização avançada com Flexbox, efeitos de transição e Box Model)
* **HTML5** (Semântica estrutural da página)

## 💻 Como Rodar o Projeto Localmente

Para clonar e executar esta aplicação em sua máquina local, você precisará do [Node.js](https://nodejs.org/) instalado. No seu terminal, siga os passos abaixo:

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/mhbsZSS/Atividade-2Bimestre-Front-End-REACT.git](https://github.com/mhbsZSS/Atividade-2Bimestre-Front-End-REACT.git)
