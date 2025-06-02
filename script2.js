var addlist = document.getElementById("btncalladders");
var addsection = document.getElementById("schema");
var bodyText = document.getElementById("bodytext");

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
let newListItem;
let textNode;
let btnmyOption;
let btnmyOptionNode;
let quickaction = document.getElementById("quickaction_menu");
let btnquickaction1 = document.getElementById("btn_quickaction1");
let btnquickactionMAR = document.getElementById("btn_quickaction2");
let btnquickactionDel = document.getElementById("btn_quickaction3");
let listID;
let list;
let pushList;
//completed items variables
let CompletedList = document.getElementById("CompletedList");
let CompletedIcon = document.getElementById("CompletedIcon");
let btnCompletedback = document.getElementById("btnCompletedback");
let CompletedUl = document.getElementById("CompletedUl");
let openCmtditems = document.getElementById("openCmtditems");
let newtargetLI;
let btnmyOptionLI;
// TEMPOTRARY VARIABLES
let myItem1;

const listitems = JSON.parse(localStorage.getItem("listitems")) || [];
// mylist.appendChild(listitems);

pushList = (myItem) => {
  listitems.push({
    myItem,
  });
  console.log(listitems);
  localStorage.setItem("listitems", JSON.stringify(listitems));
  return myItem;
};

const createItem = ({ myItem }) => {
  if (
    taskName !== undefined &&
    taskName !== null &&
    taskName !== "" &&
    btnaddlist.innerHTML !== "Save"
  ) {
    taskName = inputlist.value;
    newListItem = document.createElement("li");
    textNode = document.createTextNode(myItem);
    // newListItem.innerHTML = myItem;
    btnmyOption = document.createElement("button");
    btnmyOptionNode = document.createTextNode("⋮");
    btnmyOption.appendChild(btnmyOptionNode);
    newListItem.append(textNode, btnmyOption);
    console.log(newListItem);
    mylist.appendChild(newListItem);
    console.log(mylist);
    return newListItem;
  }
};

listitems.forEach(createItem);

btnaddlist.onclick = (e) => {
  myItem1 = inputlist.value;
  const newItem = pushList(inputlist.value);

  createItem(newItem);
  inputlist.value = "";
};
