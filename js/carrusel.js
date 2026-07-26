document.querySelectorAll(".carrusel").forEach(carrusel => {

    const imagenes = carrusel.querySelectorAll("img");
    let posicion = 0;


    function mostrarImagen(index){

        imagenes.forEach(img=>{
            img.classList.remove("active");
        });

        imagenes[index].classList.add("active");
    }


    carrusel.querySelector(".siguiente")
    .addEventListener("click",()=>{

        posicion++;

        if(posicion >= imagenes.length){
            posicion = 0;
        }

        mostrarImagen(posicion);

    });



    carrusel.querySelector(".anterior")
    .addEventListener("click",()=>{

        posicion--;

        if(posicion < 0){
            posicion = imagenes.length-1;
        }

        mostrarImagen(posicion);

    });

});