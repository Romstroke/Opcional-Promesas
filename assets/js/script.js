//llamar albumes por id (albumes de url)
//despues de 3 sec mostrar console.log "la info ya fue enviada"


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/// LOS CONSOLE.LOG LOS DEJO PORQUE EL DESAFÍO LO PIDE ASI
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//Y esto es para practicar...
function imprimirRespuesta(dato){
    console.log(dato)
    const divPadre = document.getElementById('img');
    console.log(divPadre)
    const img = document.createElement('div');
    img.innerHTML =`
    <img src="${dato.url}" alt="">
    `
    divPadre.appendChild(img)
    //el append te deja meterle texto
}

//después quiero probar a que los cuadritos cambien de posicion al hacer click sobre uno con metodos de array

//Función asíncrona que contiene la URL en una variable

const getDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'; 
    //bloque positivo
    try {
        const response = await fetch(url);
        console.log("Response: ", response);
        //esta validacion es muy débil, porque si llega un 500, igual entra,
        //debería ser if(response.status == 200)
        if(response.status !== 404){
            const datos = await response.json();
            //respuesta con resultados de 0 a 20
            datos.slice(0, 20).forEach((dato, index) => {
                console.log(`Dato ${index + 1}:`, dato); 
                imprimirRespuesta(dato);
            });
        }else{
            throw new Error('404!!!')
        }
        // console.log("Informacion a procesar: ", datos);
    //bloque error    
    } catch (err) {
        console.log(err);
        // alert(err)
    }
}

//funcion que retorna promesa despues de 3 segundos con setTimeOut

function InfoEnviada(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Información enviada");
        }, 3000);
    });
}

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), 
// de forma directa con await, para ser mostrado en la consola del navegador,
//  agregando el llamado a las dos funciones principales.  (2 Puntos) 

async function main(){ //main porque las llama a todas

    const mensaje = await InfoEnviada(); // Esperar a que se resuelva la promesa
    console.log(mensaje); // Mostrar el mensaje en la consola
    getDatos()
}

//Llamada a la función main para que inicie el código
main()


