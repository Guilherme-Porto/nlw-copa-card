let isIgnite = true     /* Se eu estou com o tema Ignite ou não */ 
function changeCard(event) {  /* Ao dar o onclick no cartão, ele vai executar essa function */
    const card = event.currentTarget
    const backgroundImage = isIgnite 
    ? "url(./imagens-projeto/Bg-explorer.svg)"  /* SE estiver com o tema 'Ignite' ele vai passar a usar o 'Explores' */
    : "url(./imagens-projeto/Bg-ignite.svg)"    /* SE NÃO  ele vai usar o 'Ignite' */
    isIgnite = !isIgnite    /* Dessa forma ele vai fazer a troca dos temas */
    card.style.backgroundImage = backgroundImage
}