function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

  const diagram =
  new go.Diagram("roomDiagram",
    { 
      "draggingTool.isEnabled": false,
      "panningTool.isEnabled": false,
      "dragSelectingTool.isEnabled": false,
      "maxSelectionCount": 1,
      "allowHorizontalScroll": false,
      "allowVerticalScroll": false,
      "allowZoom": false
    });

diagram.grid.visible = true;

// define a simple Node template
diagram.nodeTemplate =
  new go.Node("Horizontal",
    // the entire node will have a light-blue background
    { background: "#44CCFF" })
    .add(new go.TextBlock(
        "",  //default value
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" })
        .bind("text", "tableNum"));

diagram.model = new go.Model(
  [ //layout

    { tableNum: "1"},
    { tableNum: "2"},
    { tableNum: "3"},
  ]);
