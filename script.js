let btnNO = document.getElementById ("btnNo")

btnNO.addEventListener("mouseover" , function() {
    let innerWith = window.innerWidth;
    let innerheight = window.innerheight;

    let randomX = Math.floor(Math.random()*innerWith-100)

    let randomY = Math.floor(Math.random()*innerheight-50)
    console.log(randomX)
    console.log(randomY)

    btnNO.style.left = randomX + "px";
    btnNO.style.top = randomY + "px";
})