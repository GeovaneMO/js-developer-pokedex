const detailList = document.getElementById('modalDes')


function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')
    modal.addEventListener('click', (evento)=>{
        if(evento.target.id == modalID ){
            modal.classList.remove('mostrar');
        }
        console.log(evento.target.id)
    })
}

function addDetails(whatever){
    return `<p>TA DFUNCIDONADO${whatever}</p>`
}

addEventListener('click',(elemento)=>{
    const newADD = addDetails('a')
    const imagePokeDes = elemento.target.alt;
    console.log(imagePokeDes);
    if(imagePokeDes){
        iniciaModal('pokeDescription')
        detailList.innerHTML=newADD
    }  
    else{
        console.error(error)
    }
});



    // const liPokemon = document.querySelector('.pokemon');
    // liPokemon.addEventListener('click',function(){
    //     iniciaModal('pokeDescription');
    // });
    // console.log(liPokemon)
        // console.log(imagePokeDes);
        // const slicing = elemento.target.slice(1,2);
        // slicing.map((liRecebido)=>{
        //     tent = liRecebido.children[0].textContent;
            // iniciaModal('pokeDescription')


// addEventListener('click',(elementoLI)=>{
//     const slicing = elementoLI.path.slice(1,2);
//     slicing.map((liRecebido)=>{
//         tent = liRecebido.children[0].textContent;
//         // iniciaModal('pokeDescription')
//         console.log(elementoLI);
//     });
// })

