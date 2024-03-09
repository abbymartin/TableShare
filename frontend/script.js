function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
  const $ = go.GraphObject.make;

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

function tableStyle() {
  return [
    { background: "transparent" },
    { layerName: "Background" },  // behind all Persons
    { locationSpot: go.Spot.Center, locationObjectName: "TABLESHAPE" },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
    { rotatable: true },
    new go.Binding("angle").makeTwoWay(),
    { // what to do when a drag-over or a drag-drop occurs on a Node representing a table
      mouseDragEnter: (e, node, prev) => {
        const dragCopy = node.diagram.toolManager.draggingTool.copiedParts;  // could be copied from palette
        highlightSeats(node, dragCopy ? dragCopy : node.diagram.selection, true);
      },
      mouseDragLeave: (e, node, next) => {
        const dragCopy = node.diagram.toolManager.draggingTool.copiedParts;
        highlightSeats(node, dragCopy ? dragCopy : node.diagram.selection, false);
      },
      mouseDrop: (e, node) => assignPeopleToSeats(node, node.diagram.selection, e.documentPoint)
    }
  ];
}


diagram.nodeTemplateMap.add("Table",  // rectangular with 8 seats
$(go.Node, "Spot", tableStyle(),
  $(go.Panel, "Spot",
    $(go.Shape, "Rectangle",
      { name: "TABLESHAPE", desiredSize: new go.Size(160, 80), fill: "burlywood", stroke: null },
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
      new go.Binding("fill")),
    $(go.TextBlock, { editable: true, font: "bold 11pt Verdana, sans-serif" },
      new go.Binding("text", "name").makeTwoWay(),
      new go.Binding("angle", "angle", n => -n))
  ),
));


diagram.model = new go.GraphLinksModel(
  [ //layout
    { "key": 1, "category": "Table", "name": "Head 1", "loc": "100.5 58" },
    { "key": 2, "category": "Table", "name": "Head 2", "loc": "100.5 150" },
  ]);
