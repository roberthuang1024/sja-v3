// 从sample中的json文件中提取blocks
function getNameFromJson(json) {
  document.write("<ul>")
  var project = JSON.parse(json);
  let targets = project["targets"];
  for (let i = 0; i < targets.length; i++) {
    let sprite = targets[i];
    let blocks = sprite["blocks"];
    for (key in blocks) {
      let opcode = blocks[key]["opcode"];
      document.write(
        "<li>" + opcode.slice(opcode.indexOf("_") + 1, opcode.length) + "</li>"
      );
    }
  }
  document.write("</ul>")
}

json = prompt("Input Json: ");
getNameFromJson(json);
