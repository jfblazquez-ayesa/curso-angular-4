export class Persona{
    constructor(
        public nombre:string,
        public apellidos:string,
        public email:string,
        public area:string,
        public servicio:string,
        public prioridad:string,
        public acuseDeRecibo?:boolean,
        public descripcion?:string
    ){}
}