// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
subjID = getSubjID()
console.log(subjID)

function getSubjID () {
  subjID = document.getElementById("subjIDinput").value
  return subjID
}
