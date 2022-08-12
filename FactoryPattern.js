it is a creational pattern . 
factory is just an objct that create or manufacture different object..
here factory is allowed to handle object createtion in centralized locaation
it make code look clean
https://www.freecodecamp.org/news/javascript-design-patterns-explained/#singleton-pattern
/*
creating new employ and inserting into database(employee array)
*/
function Developer(name)
{
  this.name = name
  this.type = "Developer"
}

function Tester(name)
{
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say()
{
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.forEach( emp => {
  say.call(emp)
})


ADV
Modular expandability of the application	
Good testability	
