import Medicamento from "./Medicamento.js";
import Inventario from "./Inventario.js";
import Venta from "./Venta.js";

const medicamento1 = new Medicamento("1","ibuprofeno",100,10)
const medicamento2 = new Medicamento("2","ibumigra",10,10)
const medicamento3 = new Medicamento("3","aspirina",150,10)

const medicamentos = [medicamento1, medicamento2,medicamento3]

const inventario = new Inventario(medicamentos)

const venta = new Venta(medicamento1,9);
const venta2 = new Venta(medicamento2,3);
const venta3 = new Venta(medicamento3,2);

const registroVentas = [venta,venta3,venta2]

venta.registrarVenta()
venta2.registrarVenta()
venta3.registrarVenta()
console.log(inventario);

inventario.consultarBajoStock()

console.log(registroVentas)

