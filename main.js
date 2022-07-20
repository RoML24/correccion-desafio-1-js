let cantidadColchones = parseInt(prompt("Ingrese la cantidad de colchones"))
function agregarAlCarrito(producto) {
console.log('Agregar al carrito ' + cantidadColchones +' '+ producto)
}

agregarAlCarrito('colchones')


let stockColchones = 200
let valorColchonesEfectivo = 30000
let valorAlmohadasEfectivo = 4500
let credito
let debito
let efectivo
let formaPago
let cuotas
/*proceso*/

if ((stockColchones >= cantidadColchones)) {

    let formaPago = (prompt("Ingrese forma de pago"))
    console.log('La forma de pago es con ' + formaPago)
}

if (formaPago == debito) {
    console.log('Se debitaran de su tarjeta de debito ' + valorColchonesEfectivo * cantidadColchones)
}else
if (formaPago == efectivo) {
    console.log(" El valor a pagar es de " + valorColchonesEfectivo * cantidadCompra)
}else
if (formaPago == credito) {
    console.log('Pago con tarjeta de credito momentaneamente no disonible')
}else{}




