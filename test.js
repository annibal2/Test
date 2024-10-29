function calcularResultado(){
    const respuestas={
        robin:0,
        starfire:0,
        raven:0,
        chico_bestia:0,
        cyborg:0
    };

    for (let i=1; i<=10; i++){
        const pregunta=document.querySelector(`input[name="p${i}"]:checked`);
        if(pregunta){
            respuestas[pregunta.value]++;
        }
    }

    const personaje = Object.keys(respuestas).reduce((a, b) => respuestas[a] > respuestas[b] ? a : b);

    mostrarResultado(personaje);
}

function mostrarResultado(personaje){
    const resultados=document.getElementById('resultado');
    let nombre, imagen;
    if(personaje =='robin'){
        nombre='Robin';
        imagen='img/robin.jpg';
    }else if(personaje== 'starfire'){
        nombre='Starfire';
        imagen='img/starfire.jpg';
    }else if(personaje=='raven'){
        nombre='Raven';
        imagen='img/raven.jpg';
    }else if(personaje=='chico_bestia'){
        nombre='Chico bestia';
        imagen='img/chico bestia.jpg';
    }else{
        nombre='Cyborg';
        imagen='img/cyborg.jpg';
    }
    resultados.innerHTML=`<p>Tu eres ${nombre}!</p><img src="${imagen}"></img>`;
}
