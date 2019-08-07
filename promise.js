const { empleados, salarios } = require('./dataset');
let empeladoDataset = undefined;

const getEmpleadoById = (id) => {
  return new Promise((resolve, reject) => {
    const empleadoDb = empleados
      .find( (empleado) => empleado.id === id );
    
    if (!empleadoDb) {
      reject(`No existe un emplado con el ID ${id}`);
    } else {
      setTimeout(() => resolve(empleadoDb), 4000)
    }
  })
}

const getSalario = (empleado) =>{
  return new Promise((resolve, reject) => {
    const salarioDb = salarios.find( salario => salario.id === empleado.id);
 
    if (!salarioDb) {
      reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
   } else {
     resolve( {
       nombre: empleado.nombre,
       salario: salarioDb.salario,
       id: empleado.id
     })
   }
  })
}
console.log(empeladoDataset);
// Encadenando promesos
const hola = getEmpleadoById(2)
.then((empleado) =>  getSalario(empleado))
.then( (response) => console.log(response))
.catch((error) =>    console.log(error));

console.log(hola);