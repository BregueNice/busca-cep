let cep = document.getElementById('cep');
const botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

async function buscaCep(){
    let conexao = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    let conexaoConvertida = await conexao.json();

    resultado.innerHTML = 
    `Rua: ${conexaoConvertida.logradouro}<br>
    Bairro: ${conexaoConvertida.bairro}<br>
    Localidade: ${conexaoConvertida.localidade}<br>
    UF: ${conexaoConvertida.uf}`
}