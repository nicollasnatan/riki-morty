import { buscarPersonagem } from "./api.js";
import { renderizarPersonagens, mostrarMenssagem } from "./util.js";


const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

async function carregarPersonagens(nome = '') {

    try{
        mostrarMenssagem('CARREGANDO PERSONAGENS...');
        const data = await buscarPersonagem(nome);
        renderizarPersonagens(data.results);
    } catch (error){
        mostrarMenssagem('!!!NENHUM PERSONAGEM ENCONTRADO!!!');
    }
};

form.addEventListener('submit', async function(event){ 
event.preventDefault();
const nomeDigitado = input.value;
await carregarPersonagens(nomeDigitado);
 });
carregarPersonagens();

async function iniciarApp(){
    const personagens = await buscarPersonagem();
    renderizarPersonagens(personagens.results);
}

iniciarApp();
