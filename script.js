// Employee class definition
class Employee {
  constructor(id, name, address, designation){
    this.id = id;
    this.name = name;
    this.address = address;
    this.designation = designation;
  }
}

// Function to add a new employee
export function addEmployee(id, name, address, designation) {
  // Using constructor to make object
  const employee = new Employee(id, name, address, designation);
  // Using Json stringyfy to insert into the localstorage
  localStorage.setItem(id, JSON.stringify(employee));
}

// Function to edit an employee's details by ID
export function editEmployee(id, name, address, designation) {

  // Using getItem of localstorage to access the selected employee
  let empArr = JSON.parse(localStorage.getItem(id));
  if (empArr.id !== null) {
    empArr.name = name;
    empArr.address = address;
    empArr.designation = designation;
    localStorage.setItem(id, JSON.stringify(empArr));
  }
}
