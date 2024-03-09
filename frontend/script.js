function handleSelection() {
    var selectElement = document.getElementById("occupancy");
    var selectedValue = selectElement.value;
    var table = document.getElementById("table");

    // Perform actions based on the selected option
    switch(selectedValue) {
        case "consolidate":
            // Action for option 1
            table.style.color = "green";
            break;
        case "notConsolidate":
            // Action for option 2
            table.style.color = "red"
            break;
        default:
            // Default action
            table.style.color = "red";
            table.textContent = "Unknown option selected";
    }
}