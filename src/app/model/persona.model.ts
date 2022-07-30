export class persona {
    id?: number; /** con el simbolo ? le indico q ese dato no es necesario */
    nombre: String;
    apellido: String;
    img: String; 

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}