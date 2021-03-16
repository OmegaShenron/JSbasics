const DB = [{
        id: 1,
        usuario: 'Pifas',
        direccion: ''
    },
    {
        id: 2,
        usuario: 'Loki',
        direccion: 'Clio #2514'
    }
]


//Deficnicion de metodos
function guardarDireccion(idUsuario: Number, direccion: String): void {
    console.log(idUsuario);
    const usuario = DB.find(user =>user.id === idUsuario );
    console.log('Antes de actualizar: ', usuario);
    if(usuario){
        usuario.direccion =direccion;
        console.log('Actualizado:', usuario);
    }
}
function obtenerDireccion( idUsuario: number, direccion: string):void{
    const usuario =DB.find(user => user.id ===idUsuario);
    return usuario ? usuario.direccion : 'Sin direccion'
}
//Llamar metodos
guardarDireccion(1, 'LaTucson');

const guardarEncontrada = obtenerDireccion(2);
