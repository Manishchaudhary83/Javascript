const form = document.getElementById("student-form")
const studentList = document.getElementById("student-list");

let id = 0;

form.addEventListener("submit", function(e){
    e.preventDefault()
    id++

    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let studentClass = document.getElementById("studentClass").value;
    let university = document.getElementById("university").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
 

    if(editId !== null){

        let card = document.getElementById(`card-${editId}`);


        card.querySelector(".name").innerText = name;

        card.querySelector(".rollNo").innerText =
        "RollNo: " + rollNo;

        card.querySelector(".studentClass").innerText =
        studentClass;

        card.querySelector(".university").innerText =
        "University: " + university;

        card.querySelector(".city").innerText =
        "City: " + city;

        card.querySelector(".email").innerText =
        "Email: " + email;

        card.querySelector(".startDate").innerText =
        "StartDate: " + startDate;

        card.querySelector(".endDate").innerText =
        "EndDate: " + endDate;



        editId = null;

        document.getElementById("submit-btn").innerText = "Add";

        form.reset();

        return;
    }
    id++
 
    studentList.innerHTML += `

    <div class="student-card" id="card-${id}">

    <h3 class="name">  ${name}</h3>

    <p class="rollNo">  RollNo:${rollNo}</p>

    <p class="studentClass"> Class:  ${studentClass}</p>

    <p class="university">  University: ${university}</p>

    <p class="city">  City: ${city}</p>

    <p class="email">  Email: ${email}</p>
   
    <p class="startDate">  StartDate: ${startDate}</p>
    <p class="endDate" > EndDate:${endDate}</p>

    <div class="buttons">
        <button onclick="viewStudent(${id})"> View</button>
        <button onclick="editStudent(${id})">Edit</button>
        <button onclick="deleteStudent(${id})">Delete</button>
    </div>

</div>`;
form.reset();




})


function deleteStudent(id){
    let card = document.getElementById(`card-${id}`)
    card.remove()
}





let editId = null;
function editStudent(id){

    editId = id;

    let card = document.getElementById(`card-${id}`);


    document.getElementById("name").value =
    card.querySelector(".name").innerText;


    document.getElementById("rollNo").value =
    card.querySelector(".rollNo").innerText.split(":")[1];


    document.getElementById("studentClass").value =
    card.querySelector(".studentClass").innerText;


    document.getElementById("university").value =
    card.querySelector(".university").innerText.split(":")[1];


    document.getElementById("city").value =
    card.querySelector(".city").innerText.split(":")[1];


    document.getElementById("email").value =
    card.querySelector(".email").innerText.split(":")[1];


    document.getElementById("startDate").value =
    card.querySelector(".startDate").innerText.split(":")[1];


    document.getElementById("endDate").value =
    card.querySelector(".endDate").innerText.split(":")[1];


    document.getElementById("submit-btn").innerText = "Update";

}

function viewStudent(id){

    let card = document.getElementById(`card-${id}`);


    document.getElementById("view-name").innerText =
    card.querySelector(".name").innerText;


    document.getElementById("view-roll").innerText =
    card.querySelector(".rollNo").innerText;


    document.getElementById("view-class").innerText =
    card.querySelector(".studentClass").innerText;


    document.getElementById("view-university").innerText =
    card.querySelector(".university").innerText;


    document.getElementById("view-city").innerText =
    card.querySelector(".city").innerText;


    document.getElementById("view-email").innerText =
    card.querySelector(".email").innerText;


    document.getElementById("view-start").innerText =
    card.querySelector(".startDate").innerText;


    document.getElementById("view-end").innerText =
    card.querySelector(".endDate").innerText;



    document.getElementById("view-profile").style.display = "flex";

}

function closeView(){

    document.getElementById("view-profile").style.display="none"

}