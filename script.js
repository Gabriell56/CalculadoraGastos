const despesas = [];

// definindo categorias
const categorias = [
    "Essencial", "Fixos", "Opcionais"
];
const selectCategoria = document.getElementById("categoria");

// add as opções categoria no site
categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    selectCategoria.appendChild(option);
});

// função para add o gasto, relacionado ao botão
function adicionarGasto() {
    // pegando valores dos inputs do html
    const nome = document.getElementById("nomeGasto").value;
    const valor = parseFloat(document.getElementById("valorGasto")).value;
    const categoria = document.getElementById("categoria").value;

    // validando
    if (!nome || !valor || !categoria) {
        alert("Preencha tudo");
        return;
    }

    despesas.push({ nome, valor, categoria });

    // criação do card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <p><strong>Nome:</strong> ${nome} </p>
        <p><strong>Valor:</strong> ${valor} </p>
        <p><strong>Categoria:</strong> ${categoria} </p>
        <button class="btn-remover" onclick="removerGasto(this)"> Remover </button>
    `;

    // add ao container
    document.getElementById("showGastos").appendChild(card);

    // limpando campos
    document.getElementById("nomeGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("categoria").value = categorias[0];
}

// função para remover
function removerGasto(botao) {
    const card = botao.closest(".card"); // seleciona card completo
    card.remove(); // remove ele
}

function mostrarGraficos() {
    
}