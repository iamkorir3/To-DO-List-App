var addlist = document.getElementById("btncalladders");
var addsection = document.getElementById("schema");
var bodyText = document.getElementById("bodytext");

// console.log(bodytext);

addlist.addEventListener("click", calladders);

function calladders() {
  addsection.classList.remove("hide_myelements");
  bodyText.classList.add("hide_elements");
}

let btnaddlist = document.getElementById("btnaddlist");
let mylist = document.getElementById("mylist");
let inputlist = document.getElementById("inputlist");
let taskName = "";
let newListElmt;
let textNode;
let btnmyOption;
let quickaction = document.getElementById("quickaction_menu");
let btnquickaction1 = document.getElementById("btn_quickaction1");
let btnquickaction2 = document.getElementById("btn_quickaction2");
let btnquickaction3 = document.getElementById("btn_quickaction3");

inputlist.addEventListener("input", function (e) {
  taskName = e.target.value;
  return taskName;
});

btnaddlist.addEventListener("click", addTask);

function addTask() {
  if (
    taskName !== undefined &&
    taskName !== null &&
    taskName !== "" &&
    btnaddlist.innerHTML !== "Save"
  ) {
    btnmyOption = document.createElement("button");
    let btnmyOptionNode = document.createTextNode("⋮");
    btnmyOption.appendChild(btnmyOptionNode);

    newListElmt = document.createElement("li");
    textNode = document.createTextNode(taskName);
    newListElmt.appendChild(textNode);
    newListElmt.id = "item" + (mylist.childElementCount + 1);
    let itemOptionId = newListElmt.id;
    console.log(newListElmt.id);

    mylist.appendChild(newListElmt);

    // QUICK ACTIONS
    let itemOption = document.getElementById(itemOptionId);
    itemOption.appendChild(btnmyOption);

    //   Task option button func
    btnmyOption.id = "btnoption" + (mylist.childElementCount + 1);

    btnmyOption.onclick = taskOptions;
    function taskOptions() {
      // console.log("button clickde");
      quickaction.classList.remove("hide_quickaction");
    }
  }

  if (btnaddlist.innerHTML === "Save") {
    btnmyOption = document.createElement("button");
    let btnmyOptionNode = document.createTextNode("⋮");
    btnmyOption.appendChild(btnmyOptionNode);

    newListElmt = document.createElement("li");
    newListElmt.id = "item" + (mylist.childElementCount + 1);
    let childToEditID = newListElmt.id;
    textNode = document.createTextNode(taskName);
    newListElmt.appendChild(textNode);
    let itemOptionId = newListElmt.id;
    let childToEdit = document.getElementById("item3");

    mylist.replaceChild(newListElmt, childToEdit);
    let itemOption = document.getElementById(itemOptionId);
    itemOption.appendChild(btnmyOption);

    btnaddlist.innerHTML = "Add";

    // let newtextnode;
    // let mynewtextnode;
    // mynewtextnode.document.createTextNode(taskName);
    // newtextnode.appendChild(mynewtextnode);
    // let updatemylist = document.getElementById("updatelist");
    // inputlist.addEventListener("input", function (e) {
    //   taskName = e.target.value;
    // });
    // mylist.replaceChild(newtextnode, newListElmt);
    // alert("save clicked ");
  }
  return [newListElmt, (taskName = "")];
}

// taskOptions();
btnquickaction1.addEventListener("click", editlist);
function editlist() {
  btnaddlist.innerHTML = "Save";
  inputlist.focus();
  quickaction.classList.toggle("hide_quickaction");
  // mylist.replaceChild(newListElmt, "replaced");
}
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
