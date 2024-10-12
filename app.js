//Imprime un mensaje de bienvenida en la consola
console.log("sistema EBAC e registro de alumnos")


//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front end De Cero a Pro", email: "Salvadormora@ebac.com.mx", telefono: "123456789", SeguroSocial: "Si" },
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador back end con Phyton", email: "Maria@ebac.com.mx", telefono: "98989898", SeguroSocial: "Si"},
    {nombre: "Erick Esparza", edad: "26", zonaResidencia: "Cancun", nombrePrograma: "Desarrollador Front end con Phyton", email: "ErickE@ebac.com.mx", telefono: "555555555", SeguroSocial: "No"},
    {nombre: "Maria Guadalupe", edad: "32", zonaResidencia: "Queretaro", nombrePrograma: "Desarrollador back end con Phyton", email: "MariaG@ebac.com.mx", telefono: "987654321", SeguroSocial: "Si"},
    {nombre: "Ramom Hernandez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador software", email: "RamonH@ebac.com.mx", telefono: "112233445", SeguroSocial: "No"},
];


//Funcion que permite agregar un nuevo alumno al arreglo del registro
function agregarAlumno(){

//Se le solicita informacion al usuario para el registro de un nuevo alumno
var nombre = prompt("Ingresa el nombre del nuevo alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
var edad = prompt("Ingresa la edad del aluno ");
var nombrePrograma = prompt("Ingresa la carrera a estudiar del alumno");
var email = prompt("Ingresa el correo electronico del alumno");
var telefono = prompt("Ingresa el numero de telefono del alumno");
var seguroSocial = prompt("Ingresa si el alumno tiene o no seguro social s/n");
if(seguroSocial === "s" ){
    var ssReal;
    ssReal = true;
    }
    else{
    ssReal = false
    }
    
//Crea un objeto que se llama nuevoAlumno con los datos ingresados
var nuevoAlumno ={nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, telefono: telefono, seguroSocial: ssReal};

//Agrega la informacion nuevoAlumno al arreglo
registro.push(nuevoAlumno);
}


//Funcion para consultar los registros de los alumnos
function consultarRegistros(){

    //Este ciclo itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usuario registrado en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre Programa: " + registro[i].nombrePrograma);
        console.log("Correo electronico: " + registro[i].email);
        console.log("Telefono: " + registro[i].telefono);
        console.log("Seguro Social: " + registro[i].seguroSocial);
        console.log(" ");
    };
};

//Funcion para generar un nuevo arreglo que no contenga la informacion del alumno deseado 
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt("ingresa el nombre del alumno a eliminar.");


    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}


//Ciclo de While permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
do{


//Variable que toma la eleccion del usuario para ejecutar la funcion indicada
var opcion = prompt("Seleccione una opcion: \n1. Agregar registro \n2. Consultar registro de nuevos alumnos \n3. Eliminar registro \n4. Salir") 


//Se declara este if para dar a elegir al usuario la opcion que quiera

if (opcion === "1"){
    agregarAlumno();
} else if (opcion === "2"){
    consultarRegistros();
}else if (opcion === "3"){
    eliminarAlumno();
}else if (opcion === "4"){
    alert("Salir del sistema");
    break
}else{
    alert("Porfavor ingresa una opcion valida");
}

//Esta variable nos permite elegir si hacemos otra accion o cerramos el ciclo

var continuar = prompt("Deseas hacer otra acion? (S/N)")

//While que se encarga de cerrar el ciclo
} while(continuar === "s")






    
    /*console.log("Nombre " + registro[i].nombre);
    console.log("Edad: " + registro[i].edad);
    console.log("Zona de residencia: " + registro[i].zonaResidencia);
    console.log("Nombre Programa: " + registro[i].nombrePrograma);
    console.log("Correo electronico: " + registro[i].email);
    console.log("Telefono: " + registro[i].telefono);
    console.log("Seguro Social: " + registro[i].SeguroSocial); */
