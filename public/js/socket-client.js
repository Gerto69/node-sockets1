//Referencias del HTML

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnvia   = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect',()=>{
    //console.log('Conectado');

    lblOffline.style.display = "none"
    lblOnline.style.display = ""
});

socket.on('disconnect',()=>{
    //console.log('Descoenctado del Servidor');

    lblOffline.style.display = ""
    lblOnline.style.display = "none"
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
});

btnEnvia.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;

    const payload ={
        mensaje,
        id:'asdasdasd5161',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('Desde el server',id);
    });
});