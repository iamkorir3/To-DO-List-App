var addlist = document.getElementById("btncalladders");
var addsection = document.getElementById("schema");
var bodyText = document.getElementById("bodytext");

// console.log(bodytext);

addlist.addEventListener("click", calladders);

function calladders() {
  addsection.classList.remove("hide_myelements");
  inputlist.focus();
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
let btnquickactionMAR = document.getElementById("btn_quickaction2");
let btnquickactionDel = document.getElementById("btn_quickaction3");
let listID;
//completed items variables
let CompletedList = document.getElementById("CompletedList");
let CompletedIcon = document.getElementById("CompletedIcon");
let btnCompletedback = document.getElementById("btnCompletedback");
let CompletedUl = document.getElementById("CompletedUl");
let openCmtditems = document.getElementById("openCmtditems");
let newtargetLI;
let btnmyOptionLI;
newtargetLI = document.createElement("li");
//console.log(btnCompletedback);

inputlist.addEventListener("input", function (e) {
  taskName = e.target.value;
  return taskName;
});

btnaddlist.addEventListener("click", addTask);

function addTask() {
  btnmyOption = document.createElement("button");
  let btnmyOptionNode = document.createTextNode("⋮");
  btnmyOption.appendChild(btnmyOptionNode);

  newListElmt = document.createElement("li");
  textNode = document.createTextNode(taskName);
  newListElmt.appendChild(textNode);
  newListElmt.appendChild(btnmyOption);

  newListElmt.id = "item" + (mylist.childElementCount + 1);
  if (
    taskName !== undefined &&
    taskName !== null &&
    taskName !== "" &&
    btnaddlist.innerHTML !== "Save"
  ) {
    mylist.appendChild(newListElmt);
  }

  // QUICK ACTIONS

  btnmyOption.id = "btnoption" + (mylist.childElementCount + 1);

  btnmyOption.addEventListener("click", function (e) {
    quickaction.classList.toggle("hide_quickaction");
    listID = e.target.parentElement.id;
    btnmyOptionLI = document.getElementById(btnmyOption.id);
    targetLI = document.getElementById(listID);
    // targetLI.removeChild(btnmyOption);
  });

  btnquickactionDel.addEventListener("click", DelList);
  function DelList() {
    mylist.removeChild(targetLI);
    quickaction.classList.add("hide_quickaction");
  }

  //COMPLETED ITEMS ACTIONS
  // btnquickactionMAR.onclick = remove;
  // function remove() {
  //   targetLI.removeChild(btnmyOption);
  //   console.log(targetLI);
  // }

  btnquickactionMAR.addEventListener("click", function () {
    quickaction.classList.add("hide_quickaction");
    // mylist.removeChild(document.getElementById(listID));
    newtargetLI = document.createElement("li");
    btnmyOptionLI = document.createElement("button");
    let btnmyOptionLINode = document.createTextNode("✅");
    btnmyOptionLI.appendChild(btnmyOptionLINode);
    const secondChild = targetLI.childNodes[1];

    // targetLI.removeChild(secondChild);
    // targetLI.appendChild(btnmyOptionLI);
    targetLI.replaceChild(btnmyOptionLI, secondChild);
    // newtargetLI.appendChild(targetLI);
    CompletedUl.appendChild(targetLI);

    // console.log(mylist);
  });

  bodyText.classList.add("hide_quickaction");

  // }

  if (btnaddlist.innerHTML === "Save") {
    btnmyOption = document.createElement("button");
    let btnmyOptionNode = document.createTextNode("⋮");
    btnmyOption.appendChild(btnmyOptionNode);

    newListElmt = document.createElement("li");
    newListElmt.id = "item" + (mylist.childElementCount + 1);
    let childToEditID = newListElmt.id;
    textNode = document.createTextNode(taskName);
    newListElmt.appendChild(textNode);
    newListElmt.appendChild(btnmyOption);

    // let childToEdit = document.getElementById("item3");
    console.log(targetLI);
    mylist.replaceChild(newListElmt, targetLI);

    btnaddlist.innerHTML = "Add";
    quickaction.classList.add("hide_quickaction");
  }
  return [newListElmt, (taskName = "")];
  reset();
}

// taskOptions();
btnquickaction1.addEventListener("click", editlist);
function editlist() {
  btnaddlist.innerHTML = "Save";
  inputlist.focus();
  quickaction.classList.add("hide_quickaction");
  // mylist.replaceChild(newListElmt, "replaced");
}

openCmtditems.onclick = opeclocomCompletedList;
btnCompletedback.onclick = opeclocomCompletedList;
function opeclocomCompletedList() {
  CompletedList.classList.toggle("hide_CompletedList");
  mydashboard.classList.add("hide_CompletedList");
}

//MY DASHBOARD
var mydashboard = document.getElementById("mydashboard");
var closeDashboard = document.getElementById("btn_closeDashboard");
var opendashboard = document.getElementById("opendashboard");

closeDashboard.addEventListener("click", function () {
  mydashboard.classList.add("hide_CompletedList");
});

opendashboard.addEventListener("click", function () {
  mydashboard.classList.remove("hide_CompletedList");
});
//DASHBOARD BUTTONS FUNC

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
