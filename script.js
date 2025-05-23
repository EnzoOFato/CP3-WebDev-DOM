const inputNome = document.getElementById("nome")
const inputPreco = document.getElementById("preco")
const selecao = document.getElementById("select")
const listaProd = document.getElementById("produtos")
const formulario = document.getElementById("formulario")
const btnCadastro = document.getElementById("btnCadastro")

btnCadastro.addEventListener("click", (event) => {
    event.preventDefault()
    let nome = inputNome.value
    let preco = inputPreco.value
    let categoria = selecao.value
    if(nome === "" || preco === "") {
        alert("Preencha todos os campos")
    }
    else if( Number(preco) < 0 || !preco.includes(".") || preco.split(".")[1].length !== 2){
        alert("Coloque um preço válido")
    }
    else{
        const prod = document.createElement("div")
        prod.innerHTML = `
        <h2>Produto: ${nome} - Preço: R$${preco} - Categoria: ${categoria}</h2>
        `
        if(categoria === "tec"){
            prod.querySelector("h2").classList.add("produto-tec")
        }
        if(categoria === "alimento"){
            prod.style.backgroundColor = "yellow"
        }
        listaProd.append(prod)
        formulario.reset()
    }
})