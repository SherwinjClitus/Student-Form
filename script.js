var nameInput = document.getElementById("nameInput");
var ageInput = document.getElementById("ageInput");
var genderInputMale = document.getElementById("genderInputMale");
var genderInputFemale = document.getElementById("genderInputFemale");
var courseInput = document.getElementById("courseInput");
var emailInput = document.getElementById("emailInput");

var btn = document.getElementById("btn");

var studentTable = document.getElementById("studentTable");

var namePattern = /^[A-Za-z ]+$/;

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", function () {
  // console.log(nameInput.value)
  // console.log(ageInput.value)
  // console.log(genderInputMale.value)
  // console.log(genderInputFemale.value)
  // console.log(courseInput.value)
  // console.log(emailInput.value)
  if (nameInput.value === "") {
    alert("Please enter a valid name ! ");
    return;
  }
  if (!namePattern.test(nameInput.value)) {
    alert("Please enter a valid name ! ");
    return;
  }
  if (ageInput.value === "") {
    alert("Enter valid age ! ");
    return;
  }
  if (Number(ageInput.value) < 18 || Number(ageInput.value) > 100) {
    alert("Please enter a valid age ! ");
    return;
  }

  if(genderInputMale.checked == false && genderInputFemale.checked == false){
    alert("Please enter a vaild gender ! ");
    return;
  }

  if(courseInput.value == ""){
    alert("please choose a valid course ! ");
    return;
  }

  if(emailInput.value == ""){
    alert("please enter a vaild email address ! ");
    return;
  }
  if(!emailPattern.test(emailInput.value)){
    alert("please enter a valid email address ! ")
    return;
  }

  let studentTableDetail = document.createElement("tr");

  let studentTableNameCell = document.createElement("td");
  let studentTableAgeCell = document.createElement("td");
  let studentTableGenderCell = document.createElement("td");
  let studentTableCoursesCell = document.createElement("td");
  let studentTableEmailCell = document.createElement("td");
  let studentTableActionCell = document.createElement("td");

  studentTableDetail.append(studentTableNameCell);
  studentTableDetail.append(studentTableAgeCell);
  studentTableDetail.append(studentTableGenderCell);
  studentTableDetail.append(studentTableCoursesCell);
  studentTableDetail.append(studentTableEmailCell);
  studentTableDetail.append(studentTableActionCell);

  studentTableNameCell.textContent = nameInput.value;
  studentTableAgeCell.textContent = ageInput.value;

  if (genderInputMale.checked) {
    console.log("male selected");
    studentTableGenderCell.textContent = genderInputMale.value;
  }
  if (genderInputFemale.checked) {
    console.log("female selected");
    studentTableGenderCell.textContent = genderInputFemale.value;
  }

  studentTableCoursesCell.textContent = courseInput.value;

  studentTableEmailCell.textContent = emailInput.value;

  //after pressing save to clear the input's
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";

  genderInputMale.checked = false;
  genderInputFemale.checked = false;

  courseInput.value = "";

  //   studentTableActionCell.innerHTML = "<button>Delete</button>"
  var deleteActionBtn = document.createElement("button");
  deleteActionBtn.textContent = "Delete";
  deleteActionBtn.className = "deleteActionBtn";

  studentTableActionCell.append(deleteActionBtn);

  studentTable.append(studentTableDetail);

  console.log(studentTableDetail);

  deleteActionBtn.addEventListener("click", function () {
    studentTableDetail.remove("tr");
  });
});
