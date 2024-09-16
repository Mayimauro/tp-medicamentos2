class Medicamento{
    constructor(id,nombre,precio,stock){
        this.id=id;
        this.nombre=nombre;
        this.precio = precio;
        this.stock=stock;
    }

    MostrarDetalles(){
        console.log(this.id,this.nombre,this.precio,this.stock);
    }
    BajarStock(cantidadVendida){
        if(this.stock >cantidadVendida)
        {
            this.stock= this.stock - cantidadVendida;
            return true;
        }else
        {
            return false;
        }
    }
    getid()
    {
        return this.id;
    }
}

export default Medicamento