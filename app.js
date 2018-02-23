// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

contBtn = document.getElementById('continueButton')
contBtn.onclick = function () {
  hideForm()
}



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
  var formArea = document.getElementById("form-area")
  formArea.style.display='none'
  var subjID = getSubjID()
  console.log(subjID)
  var sessionID = getSessionID()
  console.log(sessionID)
  var taskType = getTaskType()
  console.log(taskType)
  return 1
}
