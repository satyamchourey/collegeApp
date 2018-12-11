$(function () {   
    $('[data-toggle="popover"]').popover() 
  });



var Satyam = {name:"Satyam Chourey",
               percent:"80%",
               status:"Passed",
               prn:"420"
    }
var Vivek = {name:"Vivek Singh",
              percent:"39%",
              status:"Fail",
              prn:"069"
    }
var Niloy = {name:"Niloy Dey",
     percent:"90%",
     status:"Passed",
     prn:"786"
    
    }
var Deepak = {name:"Deepak Kumar",
            percent:"70%",
            status:"Passed",
            prn:"123"
    }
var Vismita = {name:"Vismita Mitchelle",
           percent:"71%",
           status:"Passed",
           prn:"321"
    }


var students = [Satyam, Vivek , Niloy, Deepak  , Vismita];

var student=document.getElementById("student");
var percent=document.getElementById("percent");
var result=document.getElementById("result");
var trai= document.getElementById("try");


function showResult(e){
  e.preventDefault();
  students.forEach(function(element,getDetail){
    var rollNo=document.getElementById("rollNo").value;
    console.log(rollNo);

    if(rollNo==element.prn){
      var getStudent=students.map(getDetail);  
// console.log(element.name);
    function getDetail(value,index, array){
      trai.innerHTML=element.prn;
      student.value=element.name;
      percent.value=element.percent;
      result.value=element.status;
      console.log("balle balle");
    
    
  }
}
  })



var data = document.getElementsByClassName("data")[0];
  if (data.style.visibility === "visible") {
    // data.style.visibility = "hidden";
    console.log("taken care of");
  } else {
    data.style.visibility = "visible";
  }
}

// student.value="dikha";
// percent.value="koi";
// result.value="chance";



var submit=document.getElementById("submit");
submit.addEventListener("click",showResult);