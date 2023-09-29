
let livros = JSON.parse(localStorage.getItem("livros"));
if (livros === null) {
    livros = [];
}

const apagarLivros = () => {
    livros = [];
    localStorage.removeItem("livros");
} 

const inserirLivro = () => {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;

    // const novoLivro = {
    //     titulo: titulo,
    //     autor: autor,
    //     ano: ano
    // }

    //ou modo resumido de objeto JS
    const novoLivro = {
        titulo,
        autor,
        ano,
    }

    //Inserir o objeto novoLivro na lista de livros
    livros.push(novoLivro);

    //Salvar o array livros no localStorage
    localStorage.setItem("livros", JSON.stringify(livros));

}

const listarLivros = () => {
    const listaLivros = document.getElementById("listaLivros");
    while( listaLivros.firstChild ){
        listaLivros.removeChild( listaLivros.firstChild );
    }
    livros.forEach(element => {
        let livro = document.createElement("li");
        livro.appendChild(document.createTextNode(element.autor + ', ' + element.titulo + ', ' + element.ano));
        listaLivros.appendChild(livro);
    });
}