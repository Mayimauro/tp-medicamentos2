class Inventario {
    constructor(medicamentos) {
        this.medicamentos = medicamentos;
    }
    MostrarInventario(){
        console.log(this.medicamentos);
    }

    agregarInventario(medicamento){
        this.medicamentos.push(medicamento);
    }

    eliminarInventario(id){
       const indice = this.medicamentos.findIndex(id => medicamentos.id === id);
       if(indice >= 0){
           this.medicamentos.splice(indice, 1);
       }
    }
    consultarBajoStock()
    {
      console.log("tienen bajo stock: ",this.medicamentos.filter(a => a.stock<3))
    }
}
export default Inventario
