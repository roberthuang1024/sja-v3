function getNameFromJson(json) {
  var project = JSON.parse(json);
  let targets = project["targets"];
  for (let i = 0; i < targets.length; i++) {
    let sprite = targets[i];
    let blocks = sprite["blocks"];
    for (key in blocks) {
      console.log(blocks[key]["opcode"].split("_")[1]);
    }
  }
}

json = prompt("Input Json: ");
getNameFromJson(json);
