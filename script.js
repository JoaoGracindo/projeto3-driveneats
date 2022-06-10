
function temselecionado (x, y){
    let clicado = document.querySelectorAll (`${y} .item`) [x];


    for (let i = 0; i < 3; i++){
        const tem = document.querySelectorAll (`${y} .item`) [i];
        const a = tem.classList.contains('selecionado');
        if (a === true) {

            tem.classList.toggle ('selecionado');
         }
    }

    clicado.classList.toggle ('selecionado');
    
}

