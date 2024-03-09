
//status options: "empty", "available", "unavailable"
let tables = {
  table1: {
    id: 1,
    shape: "rectangle",
    location: "0 0",
    status: "empty",
    notes: "",
    lightOn: false
  },
  table2: {
    id: 2,
    shape: "rectangle",
    location: "0 0",
    status: "empty",
    notes: "",
    lightOn: false
  },
  table3: {
    id: 3,
    shape: "rectangle",
    location: "0 0",
    status: "empty",
    notes: "",
    lightOn: false
  },
  table4: {
    id: 4,
    shape: "rectangle",
    location: "0 0",
    status: "empty",
    notes: "",
    lightOn: false
  }
}

// to change attribute
// tables.table4.notes = "skldfjldsf"; (i think ?)
function setTable() {
    var popup = document.getElementById("popup");
    tables.table1.status = document.getElementById("status").value;
    tables.table1.notes = document.getElementById("textboxnote").value;
    if (tables.table1.status == 'consolidate') {
        tables.table1.lightOn = true;
    }
    popup.style.visibility = "hidden";

}



// function handleSelection() {
//     var selectElement = document.getElementById("occupancy");
//     var selectedValue = selectElement.value;
//     var table = document.getElementById("rectangle");
//     var popup = document.getElementById("popup");
        
//     // Perform actions based on the selected option
//     switch(selectedValue) {
//         case "consolidate":
//             // Action for consolidating
//             table.style.background = "green";
//             break;
//         case "notConsolidate":
//             // Action for not consolidate
//             table.style.background = "red"
//             break;
//         default:
//             // Default action
//             table.style.color = "red";
//             table.textContent = "Unknown option selected";     
//     }
//     popup.style.visibility = "hidden";
// }

function popup() {
    var popup = document.getElementById("popup");
    popup.style.visibility = "visible";
}