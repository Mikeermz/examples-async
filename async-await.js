const { empleados, salarios } = require('./dataset');

const getEmpleadoById = async(id) => {
  const empleadoDb = empleados
    .find( (empleado) => empleado.id === id );
  
  if (!empleadoDb) {
    throw new Error(`No existe un emplado con el ID ${id}`);
  }
  
  return empleadoDb
}

const getSalario = async(empleado) =>{
  const salarioDb = salarios.find( salario => salario.id === empleado.id);

  if (!salarioDb) {
    throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
  }

  return{
    nombre: empleado.nombre,
    salario: salarioDb.salario,
    id: empleado.id
  }
}

const informationEmployee = async(id) => {
  const employee = await getEmpleadoById(id);
  const information = await getSalario(employee);
  return information;
}

informationEmployee(2)
                  .then(  (resp)  => console.log(resp))
                  .catch( (error) => console.log(error))