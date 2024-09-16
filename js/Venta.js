class Venta{
    constructor(medicamento,cantidad){
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = 0;
    }

    registrarVenta()
    {
      if(this.medicamento.BajarStock(this.cantidad))
      {
        this.total = this.medicamento.precio*this.cantidad;
        console.log("el precio final de la venta sera de " + this.total)
      }else{
        console.log("la venta no pudo ser registrada por falta de stock")
      }
    }
}

export default Venta
