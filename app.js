// declare consts
const toBilateralText = 'This is the TO bilatertal'
const toCentralText = 'This is the TO central'
const sBilateralText = 'This is the S bilatertal'
const sCentralText = 'This is the S bilatertal'
const appContainer = document.getElementById('app-container')


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

function getInstructions() {
  var text
  taskID = getTaskType()
  if (taskID === 'to-bilateral') {
    text = toBilateralText
  } else if (taskID === 'to-central') {
    text = toCentralText
  } else if (taskID === 's-bilateral') {
    text = sBilateralText
  } else if (taskID === 's-central') {
    text = sCentralText
  }
  return text
} // end getInstructions

function showInstructions (el) {
  el.innerHTML = getInstructions()
}

function makeInstructionDiv(){
  instrDiv = document.createElement('div')
  instrDiv.className = 'instructions-area'
  appContainer.append(instrDiv)
  showInstructions(instrDiv)
}

function hideForm() {
  var formArea = document.getElementById("form-area")
  formArea.style.display='none'
  var subjID = getSubjID()
  console.log(subjID)
  var sessionID = getSessionID()
  console.log(sessionID)
  var taskType = getTaskType()
  console.log(taskType)
  makeInstructionDiv()
}
