class DatosCliente {
    constructor(nombreCliente, correoCliente, servicioCliente, textoCliente){
        this.nombreCliente = nombreCliente;
        this.correoCliente = correoCliente;
        this.servicioCliente = servicioCliente;
        this.textoCliente = textoCliente;
    }


}

const datosclientes =[]

if (localStorage.getItem('datosclientes')){
    let datoscliente = JSON.parse(localStorage.getItem('datosclientes'));
    // for (let i = 0; datoscliente.length; i++) {
    //     datosclientes.push(datoscliente[i]);
    // }
}
 console.log(datosclientes)

const formulario = document.getElementById('formulario1')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarcliente();
});

function agregarcliente() {
    const nombre = document.getElementById('nombre1').value;
    const correo = document.getElementById('correo1').value;
    const servicio = document.getElementById('servicio1').value;
    const texto = document.getElementById('texto1').value;
    const nuevocliente = new DatosCliente(nombre, correo, servicio, texto);
    datosclientes.push(nuevocliente)
    localStorage.setItem('datosclientes', JSON.stringify(datosclientes));
    formulario.reset()
    swal ("Nos comunicaremos contigo", "lo mas pronto posible", "success")
}






