// This file is only for filling the edit employees form
let editForm = document.getElementById("editForm");

// Taking params from url
let empId = window.location.search;
empId = empId.split("?")[1];
// Getting data from local storage and parsing as array
let empArr = JSON.parse(localStorage.getItem(empId))

// Filling the values of input elements of form
if (empArr.id !== null) {
  editForm[0].value = empArr.id;
  editForm[1].value = empArr.name;
  editForm[2].value = empArr.designation;
  editForm[3].value = empArr.address;
}
