const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="emoji feliz" />';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="emoji decepcionado" />';


let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

   adicionaLinha();
   atualizaTabela();


});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>'

    linhas += linha;

   

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}