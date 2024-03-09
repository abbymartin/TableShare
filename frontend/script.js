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

var div = diagram.div;
div.style.width = '2000px';

function tableStyle() {
  return [
    { background: "transparent" },
    { layerName: "Background" },
    { locationSpot: go.Spot.Center, locationObjectName: "TABLESHAPE" },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
  ];
}

// RECTANGULAR TABLE
diagram.nodeTemplateMap.add("Rectangle Table",
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

// SQUARE TABLE
diagram.nodeTemplateMap.add("Square Table",
$(go.Node, "Spot", tableStyle(),
  $(go.Panel, "Spot",
    $(go.Shape, "Rectangle",
      { name: "TABLESHAPE", desiredSize: new go.Size(150, 150), fill: "burlywood", stroke: null },
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
      new go.Binding("fill")),
    $(go.TextBlock, { editable: true, font: "bold 11pt Verdana, sans-serif" },
      new go.Binding("text", "name").makeTwoWay(),
      new go.Binding("angle", "angle", n => -n))
  ),
));

// CIRCLE TABLE
diagram.nodeTemplateMap.add("Circle Table",
$(go.Node, "Spot", tableStyle(),
  $(go.Panel, "Spot",
    $(go.Shape, "Circle",
      { name: "TABLESHAPE", desiredSize: new go.Size(200, 200), fill: "burlywood", stroke: null },
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
      new go.Binding("fill"),
      {
        click: (e, obj) => showMessage("Clicked on " + obj.part.data.key),
        selectionChanged: part => {
            var shape = part.elt(0);
            shape.fill = part.isSelected ? "red" : "white";
          }
      }),
      
    $(go.TextBlock, { editable: true, font: "bold 11pt Verdana, sans-serif" },
      new go.Binding("text", "name").makeTwoWay(),
      new go.Binding("angle", "angle", n => -n))
  ),
));



diagram.model = new go.GraphLinksModel(
  [ //layout
    { "key": 1, "category": "Square Table", "name": "1", "loc": "20 100", "fill": "lightblue" },
    { "key": 2, "category": "Square Table", "name": "2", "loc": "20 300" },
    { "key": 3, "category": "Square Table", "name": "3", "loc": "20 500" },
    { "key": 4, "category": "Square Table", "name": "4", "loc": "20 700" },
    

    { "key": 5, "category": "Circle Table", "name": "5", "loc": "300 250" },
    { "key": 6, "category": "Circle Table", "name": "6", "loc": "300 550" },

    { "key": 7, "category": "Circle Table", "name": "6", "loc": "1320 250" },
    { "key": 8, "category": "Circle Table", "name": "7", "loc": "1320 550" },

    { "key": 9, "category": "Square Table", "name": "8", "loc": "1600 100" },
    { "key": 10, "category": "Square Table", "name": "9", "loc": "1600 300" },
    { "key": 11, "category": "Square Table", "name": "10", "loc": "1600 500" },
    { "key": 12, "category": "Square Table", "name": "11", "loc": "1600 700" },
  ]);

  function changeColor(key, color) {

  }


