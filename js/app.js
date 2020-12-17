// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 
    console.log("Hemos hecho clic en el botón de submit!")
    
    //SOLUCION GUARDANDO PRIMERO LOS OBJETOS COMO VARIABLES
    //const messageGiven = document.querySelector('#message')
    //console.log("este es  el mensaje: ", messageGiven.value)

    //const messageDelivered = document.querySelector('.message-content')
    //console.log("este es el mensaje: ",  messageDelivered)

    //messageDelivered.textContent = messageGiven.value


    //cogemos el objeto que nos interesa .propiedad en concreto (.textcontent), y lo substituimos en el objeto de origen donde hemos recibido el contenido, en concreto a la propiedad .value
    document.querySelector('.message-content').textContent = document.querySelector('#message').value
})
