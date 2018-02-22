// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
subjID = getSubjID()
console.log(subjID)
sessionID = getSessionID()
console.log(sessionID)
taskType = getTaskType()
console.log(taskType)
button = getButton()
console.log(button)


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
function getButton() {
  button = document.getElementById("form-item").innerHtml = "Continue";
  return getButton;
}

function hideForm() {
  var form-area-div = document.getElementById("form-area");
   form-area-div.style.display === "none";
  //  btn.style.display = "block";
//  } else {
//    btn.style.display = "none";
//  }
}
