let numHoras = Number(prompt("Cuantas horas trabajaste hoy?"));
let numDomicilios = Number(prompt("Cuantos domicilios hiciste hoy?"));
let pagoDomicilio = 2500
let horaTrabajo = 6000

//let salario = numDomicilios * pagoDomicilio
let salario = (numHoras * horaTrabajo) + (numDomicilios*pagoDomicilio)

alert("Su pago del dia de hoy es $" + salario)

