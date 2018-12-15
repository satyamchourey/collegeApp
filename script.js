$(function () {
  $('[data-toggle="popover"]').popover()
});

var Satyam = {
  name: "Satyam Chourey",
  percent: "80%",
  status: "Passed",
  prn: "420"
}
var Vivek = {
  name: "Vivek Singh",
  percent: "39%",
  status: "Fail",
  prn: "069"
}
var Niloy = {
  name: "Niloy Dey",
  percent: "90%",
  status: "Passed",
  prn: "786"

}
var Deepak = {
  name: "Deepak Kumar",
  percent: "70%",
  status: "Passed",
  prn: "123"
}
var Vismita = {
  name: "Vismita Mitchelle",
  percent: "71%",
  status: "Passed",
  prn: "321"
}

var students = [Satyam, Vivek, Niloy, Deepak, Vismita];

var student = document.getElementById("student");
var percent = document.getElementById("percent");
var result = document.getElementById("result");
var trai = document.getElementById("try");


var submit = document.getElementById("submit");
submit.addEventListener("click", showResult);

function getDetail(element) {
  var data = document.getElementsByClassName("data")[0];
  if (data.style.visibility === "visible") {
  } else {
    data.style.visibility = "visible";
  }
  trai.innerHTML = element.prn;
  student.value = element.name;
  percent.value = element.percent;
  result.value = element.status;
}

function showResult(e) {
  e.preventDefault();
  var rollNo = document.getElementById("rollNo").value;
  for(let i=0; i < students.length; i++) {
    let stud = students[i];
    if(rollNo === stud.prn) {
      getDetail(stud);
      break;
    } else {
      trai.innerHTML = 'Invalid PRN';
      var data = document.getElementsByClassName("data")[0];
      if (data.style.visibility === "visible") {
      } else {
        data.style.visibility = "visible";
      }
    }
  }
}



// function showResult(e) {
//   e.preventDefault();
//   students.forEach(function (element) {
//     var rollNo = document.getElementById("rollNo").value;
  
//     if (parseInt(rollNo) == parseInt(element.prn)) {
//       console.log(rollNo);
//       console.log(element.prn);
      
//       getDetail(element);

//     } else {
//       trai.innerText = "invalid PRN";
//     }
//   })
  // var data = document.getElementsByClassName("data")[0];
  // if (data.style.visibility === "visible") {
  //   // data.style.visibility = "hidden";
  //   console.log("taken care of");
  // } else {
  //   data.style.visibility = "visible";
  // }
// }

