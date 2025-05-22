var addlist = document.getElementById("btncalladders");
var addsection = document.getElementById("schema");
var bodyText = document.getElementById("bodytext");

// console.log(bodytext);

addlist.addEventListener("click", calladders);

function calladders() {
  addsection.classList.remove("hide_myelements");
  bodyText.classList.add("hide_elements");
}

var btnaddlist = document.getElementById("btnaddlist");
var mylist = document.getElementById("mylist");
var inputlist = document.getElementById("inputlist");
var taskName = "";
var stval = "";
var btnmyOption;

inputlist.addEventListener("input", function (e) {
  taskName = e.target.value;
  return taskName;
});

btnaddlist.addEventListener("click", addTask);

function addTask() {
  if (taskName !== undefined && taskName !== null && taskName !== "") {
    btnmyOption = document.createElement("button");
    var btnmyOptionNode = document.createTextNode("⋮");
    btnmyOption.appendChild(btnmyOptionNode);

    var newListElmt = document.createElement("li");
    var textNode = document.createTextNode(taskName);
    newListElmt.appendChild(textNode);
    newListElmt.id = "item" + (mylist.childElementCount + 1);
    var itemOptionId = newListElmt.id;

    mylist.appendChild(newListElmt);
    var itemOption = document.getElementById(itemOptionId);
    itemOption.appendChild(btnmyOption);

    //   Task option button func
    btnmyOption.id = "btnoption" + (mylist.childElementCount + 1);
  }
  btnmyOption.onclick = taskOptions;
  function taskOptions() {}

  return (taskName = "");
}
// taskOptions();
//MY DASHBOARD
var mydashboard = document.getElementById("mydashboard");
var closeDashboard = document.getElementById("btn_closeDashboard");
var opendashboard = document.getElementById("opendashboard");

closeDashboard.addEventListener("click", function () {
  mydashboard.classList.add("hide_dashboard");
});

opendashboard.addEventListener("click", function () {
  mydashboard.classList.remove("hide_dashboard");
});

// var btnmyOption = document.createElement("button");
// var btnmyOptionNode = document.createTextNode("⋮");
// var btnoption = btnmyOption.id;

// var newListElmt = document.createElement("li");
// var textNode = document.createTextNode(taskName);
// var itemOptionId = newListElmt.id;

// var itemOption = document.getElementById(itemOptionId);

// function addTask() {
//   btnmyOption.appendChild(btnmyOptionNode);
//   newListElmt.appendChild(textNode);
//   newListElmt.id = "item" + (mylist.childElementCount + 1);
//   btnmyOption.id = "btnoption" + (mylist.childElementCount + 1);
//   itemOption.appendChild(btnmyOption);
//   mylist.appendChild(newListElmt);
// }
