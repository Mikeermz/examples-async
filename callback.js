const { empleados, salarios } = require('./dataset');

const getEmpleadoById = (id, callback) => {
  const empleadoDb = empleados
    .find( (empleado) => empleado.id === id );
  
  if (!empleadoDb) {
    return callback(`No existe un emplado con el ID ${id}`);
  } 
    
  return callback(null, empleadoDb);

}

const getSalario = (empleado, callback) =>{
   const salarioDb = salarios.find( salario => salario.id === empleado.id);

   if (!salarioDb) {
     return callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
  }
  return callback(null, {
    nombre: empleado.nombre,
    salario: salarioDb.salario,
    id: empleado.id
  })
}

const saludos = (saludos, callback) => {
  if (saludos) {
    return callback(123)
  }
  return callback (null, 'saludo')
};

getEmpleadoById(2, (error, empleado )=> {
  if (error) {
    return console.log(error);
  } 
  getSalario(empleado, (err, resp) => {
    if (err){
      return console.log(err);
    } 
    saludos(saludos, (error, response) => {
      if (error) {
        return console.log(error);
      }
      return console.log(response);
    })
  })
})