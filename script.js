//Desafío Arrays
//Abrir consola para interactuar con el simulador
class producto {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const productos = []
productos.push(new producto(1,"Iphone 13", "256 GB", 1000000))
productos.push(new producto(2,"Samsung Galaxy S22", "128 GB", 800000))
productos.push(new producto(3,"Xiaomi 12", "128 GB", 700000))

class accesorio {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const accesorios = []
accesorios.push(new accesorio(4,"Cargador", "Original", 120000))
accesorios.push(new accesorio(5,"Audifonos", "Originales", 200000))

class proteccion {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const protecciones = []
protecciones.push(new proteccion(6,"Lamina", "Hidrogel", 50000))
protecciones.push(new proteccion(7,"Case", "Original", 100000))

const carrito = []

alert("Hola, Bienvenido a Tecno Store")

let seleccion = prompt("Desea ordenar algun producto el dia de hoy? \n Si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Desea ordenar algo, \n Si o no")
}

if(seleccion == "si") {
    alert("A continuación nuestros productos, puedes seleccionarlos por nombre o ID");
    let seccionProductos = productos.map((orden) => orden.id + " - " + orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionAccesorios = accesorios.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionProtecciones = protecciones.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    alert("Productos \n" + seccionProductos.join("\n") + "\n" + "\nAccesorios \n" + seccionAccesorios.join("\n") + "\n" + "\nProtecciones \n" + seccionProtecciones.join("\n"));

    console.log("Productos \n" + seccionProductos.join("\n") + "\n" + "\nAccesorios \n" + seccionAccesorios.join("\n") + "\n" + "\nProtecciones \n" + seccionProtecciones.join("\n"));

} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!")
}

const orden = Array.prototype.concat(productos, accesorios, protecciones)

while(seleccion = "si" && seleccion != "no") {
    let prod = prompt("Agrega un producto a tu carrito").toUpperCase()
    let precio = 0
    
    for(const i in orden) {
        if(prod == orden[i].nombre || prod == orden[i].id) {
            precio = Number(orden[i].precio)
        } //else if(prod !== orden[i].nombre) {
        //     alert("No tenemos ese producto") 
        // }
    }

    let unidades = Number(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({prod, unidades, precio})
    
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no") {
        alert("Gracias por la compra, Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            alert(`Producto: ${carritoFinal.prod},\nUnidades: ${carritoFinal.unidades},\nTotal a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
            console.log(`Producto: ${carritoFinal.prod}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    } if (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingresa si o no")
        seleccion = prompt("Desea seguir comprando?")
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: $${total}`)
console.log(`El total a pagar por su compra es: $${total}`)