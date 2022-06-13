
let contador = 0;
let comida;
let comidaPreco;
let bebida;
let bebidaPreco;
let sobremesa;
let sobremesaPreco;
let total;

function temselecionado (x, y){
    let clicado = document.querySelectorAll (`${y} .item`) [x];


    for (let i = 0; i < 3; i++){
        const tem = document.querySelectorAll (`${y} .item`) [i];
        const a = tem.classList.contains('selecionado');

        if (a === true) {

            tem.classList.toggle ('selecionado');
            contador -= 1
         }
    }

    clicado.classList.toggle ('selecionado');
    contador += 1

    console.log("contador");

    if (contador === 3) {
        console.log ("pode pedir")
        botao = document.querySelector ('.botao-finalizar') ;
        botao.classList.add('finalizar-clicavel');
        botao.innerHTML = "Fechar Pedido";
        comida = document.querySelector ('.comidas .selecionado .nome').innerHTML;
        comidaPreco = document.querySelector ('.comidas .selecionado .preco').innerHTML;
        bebida = document.querySelector ('.bebidas .selecionado .nome').innerHTML;
        bebidaPreco = document.querySelector ('.bebidas .selecionado .preco').innerHTML;
        sobremesa = document.querySelector ('.sobremesas .selecionado .nome').innerHTML;
        sobremesaPreco = document.querySelector ('.sobremesas .selecionado .preco').innerHTML;
        total = parseFloat(comidaPreco.replace('R$', '').replace(',', '.')) + parseFloat(bebidaPreco.replace('R$', '').replace(',', '.')) + parseFloat(sobremesaPreco.replace('R$', '').replace(',', '.'));
        console.log(total)
    }



    
}


function finalizarPedido () {
    if (contador === 3) {
        
        podePedir = document.querySelector('.menu-finalizar');
        document.body.className += 'desfoca';

        podePedir.classList.remove ('escondido');
        
        document.querySelector ('.checkout-comida').innerHTML = comida;
        document.querySelector ('.checkout-bebida').innerHTML = bebida;
        document.querySelector ('.checkout-sobremesa').innerHTML = sobremesa;
        document.querySelector ('.preco-comida').innerHTML = comidaPreco;
        document.querySelector ('.preco-bebida').innerHTML = bebidaPreco;
        document.querySelector ('.preco-sobremesa').innerHTML = sobremesaPreco;
        document.querySelector ('.preco-total').innerHTML = total;

    }
}

