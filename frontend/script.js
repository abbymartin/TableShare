function handleSelection() {
    var selectElement = document.getElementById("occupancy");
    var selectedValue = selectElement.value;
    var table = document.getElementById("rectangle");
    var popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    
    // Perform actions based on the selected option
    switch(selectedValue) {
        case "consolidate":
            // Action for consolidating
            table.style.color = "green";
            break;
        case "notConsolidate":
            // Action for not consolidate
            table.style.color = "red"
            break;
        default:
            // Default action
            table.style.color = "red";
            table.textContent = "Unknown option selected";
    }
}