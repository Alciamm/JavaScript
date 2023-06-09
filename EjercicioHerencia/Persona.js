class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad, idPersona){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad;
    }

    nombreCompleto(){
        return `${this.idPersona}
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }

}
