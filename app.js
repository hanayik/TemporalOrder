// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
subjID = getSubjID();
console.log(subjID);
sessionID = getSessionID();
console.log(sessionID);
taskType = getTaskType();
console.log(taskType);
form-area = hideForm();
console.log(form-area);




function getSubjID () {
  subjID = document.getElementById("subjIDinput").value;
  return subjID;
}

function getSessionID() {
  sessionID = document.getElementById("sessionID").value;
  return sessionID;
}
function getTaskType() {
  taskType = document.getElementById("taskType").value;
  return taskType;
}
//function getButton() {
//  button = document.getElementById("form-area").innerHtml = "Continue";
//  return getButton;

function hideForm() {
 var form-area = document.getElementById("form-area");
  //var button = document.getElementById("")
  if(document.getElementById('form-area').onclick {
    document.getElementById('form-area').style.display='none';
  } else {
    document.getElementById('form-area').style.display='block';
  }
  return form-area;

  //  btn.style.display = "block";S
//  } else {
//    btn.style.display = "none";
//  }
}
