const produtos = [
  {
    nome: "Camisa Premium Preta",
    preco: "R$ 199,90",
    imagem: "https://images.unsplash.com/photo-1520975922284-0a40a5e9a6e1"
  },
  {
    nome: "Camisa Premium Branca",
    preco: "R$ 189,90",
    imagem: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    nome: "Camisa Premium Luxury",
    preco: "R$ 249,90",
    imagem: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  }
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card shadow">
        <img src="${produto.imagem}" class="card-img-top" style="height:300px;object-fit:cover;">
        <div class="card-body text-center">
          <h5 class="card-title">${produto.nome}</h5>
          <p class="text-success fw-bold">${produto.preco}</p>
          <button class="btn btn-dark">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  `;
});
