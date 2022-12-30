/*
 * @Author: Robert Huang (孤言)
 * @Date: 2022-12-30
 */

// for debug.html
document.getElementById("submit").onclick = function () {
  let json_str = document.getElementById("json_str").value.replace(/[\r\n]/g, "");
  let inf = document.getElementById("inf").value.replace(/[\r\n]/g, "");
  document.write("Analyzing...<br>");
  document.write(JSON.stringify(analyse(json_str, inf),null,4)+"<br>");
  document.write("Done<br>");
}

// 报告列表
let result = {
  unknown: [],
  count_costume: 0,
  res_costume: 0,
  count_sound: 0,
  res_sound: 0,
  count_para: 0,
  count_validPara: 0,
  count_sprite: 0,
  count_publicVar: 0,
  count_publicList: 0,
  count_broadcast: 0,
  count_privateVar: 0,
  count_privateList: 0,
  count_totalBlock: 0,
  count_validBlock: 0,
  category_stat: {},
};

// 空id表
let ids = { costumes: [], sounds: [] };

//保存单个角色的所有积木
let blocks = {};

//保存积木信息
let info = {};

let validTopStrucs = ["top-input", "top-def", "top-arg", "top"];
let realEntityStrucs = [
  "top-input",
  "top-def",
  "top-arg",
  "top",
  "sentence",
  "num",
  "cmouth",
  "bool",
];
let categoryConvert = {};

// 分析主函数，json_str为json字符串，Info为配置数据
function analyse(json_str, inf) {
  info = inf;
  try {
    var project = JSON.parse(json_str); // 将字符串转换为json对象
  } catch {
    return {"err":"Invalid Json"}; //输入字符串不是json文件
  }

  if (project.hasOwnProperty("targets"))
    targets = project["targets"];//获取targets
  else
    return {"err":"Invalid Scratch"}; //不是Scratch文件

  // 报告：角色数（除去舞台）
  // to-do: CCW中有特殊角色
  result["count_sprite"] = targets.length - 1;

  // 遍历每一个角色
  for (let i = 0; i < targets.length; i++) {
    //基础计数操作
    let sprite = targets[i];

    // 对舞台作特殊计数
    if (sprite["isStage"]) {
      // 报告：公有变量数
      result["count_publicVar"] = sprite["variables"].length;

      // 报告：公有列表数
      result["count_publicList"] = sprite["lists"].length;

      // 报告：广播数
      result["count_broadcast"] = sprite["broadcasts"].length;
    }

    // 普通计数项
    countRes("constumes", sprite["costumes"]);
    countRes("sounds", sprite["sounds"]);

    let variables = sprite["variables"]; //获取私有变量
    // 报告：私有变量数
    result["count_privateVar"] = variables.length;

    let lists = sprite["lists"]; //获取私有列表
    // 报告：私有列表数
    result["count_privateList"] = lists.length;

    // 报告：资源数
    result["res_costume"] = ids["costumes"].length;
    result["res_sound"] = ids["sounds"].length;

    blocks = sprite["blocks"];
    findParaInBlocks();
  }
  return result;
}

// 资源计数
function countRes(type, list) {
  // 报告：角色/声音数增加
  result["count_" + type] += list.length;

  // 报告：资源大小增加
  for (let i = 0; i < list.length; i++) {
    assetId = list[i]["assetId"];
    if (!ids[type].includes(assetId)) {
      id[type].push(assetId);
      result["res_" + type]++;
    }
  }
}

// 积木计数
function findParaInBlocks() {
  // 遍历每一个积木，找到topLevel块以后递归搜索
  for (let key in blocks) {
    let crrBlock = blocks[key];
    if (crrBlock["topLevel"]) {
      let isTopValid;
      if (validTopStrucs.includes(crrBlock["opcode"])) {
        //Valid top
        isTopValid = true;
      } else {
        isTopValid = false;
      }

      //报告：代码段计数
      result["count_para"] += 1;
      if (isTopValid) {
        result["count_validPara"] += 1;
      }
      // 递归遍历该段积木
      searchBlockPara(key, isTopValid, "SUPER_TOP");
    }
    // // 读取opcode，并拆分
    // let blockType = block["opcode"].split("_")[0];
    // let blockName = block["opcode"].split("_")[1];
  }
}

function cntArgsInInputs(crrInputs) {
  for (key in crrInputs) {
    let inputArgType;
    try {
      inputArgType = crrInputs[keys][1][0];
    } catch {
      inputArgType = 0;
    }
    if (inputArgType == 12 || inputArgType == 13) {
      //报告：积木数增加
      result["count_totalBlock"]++;
      if (isTopValid) {
        result["count_validBlock"]++;
      }
      result["category_stat"]["data"]++;
    }
  }
}

function searchBlocksInInputs(crrInputs, isTopValid, struc) {
  for (key in crrInputs) {
    let inputArgType;
    inputArgType = crrInputs[keys][0];

    if (inputArgType == 2) {
      searchBlockPara(crrInputs[keys][1], isTopValid, struc);
    }
  }
}

function searchBlockPara(blockId, isTopValid, parentStruc) {
  //统计当前积木块

  //当前积木struc
  let crrBlock = blocks[blockId];
  let crrOpcode = crrBlock["opcode"];
  let crrNext = crrBlock["next"];
  let struc = lookUpInfo(crrOpcode);

  // 判断是否为entity并统计
  let isEntity = false;
  if (realEntityStrucs.includes(struc)) {
    isEntity = true;
  }
  if (
    (struc == "special-num" || struc == "special-bool") &&
    parentStruc != "prototype" &&
    parentStruc != "top-arg"
  ) {
    isEntity = true;
  }
  if (isEntity) {
    //报告：积木数增加
    result["count_totalBlock"]++;
    if (isTopValid) {
      result["count_validBlock"]++;
    }

    // 按类型统计当前积木块
    let category = crrOpcode.split("_")[0];
    if (category == "ccw") {
      category = parentStruc;
    } else if (category == "argument") {
      category = "procedures";
    }
    result["category_stat"][category]++;

    //统计inputs和fields中的参数积木
    cntArgsInInputs(crrBlock["inputs"]);
    cntArgsInInputs(crrBlock["fields"]);

    //安排下一步递归

    //内含积木无效 (暂时无需操作)
    t = ["unknown", "top-def", "top-arg", "top"];
    if (t.includes(struc)) { }

    //内含积木有效, 递归内含积木
    t = ["top-input", "sentence", "control", "num", "bool", "menu", "cmouth"];
    if (t.includes(struc)) {
      searchBlocksInInputs(crrBlock["inputs"], isTopValid, struc);
    }
  }

  //连接到下一个积木的递归（to-do: 可能出现重复的next?）
  if (crrNext != null) {
    searchBlockPara(crrNext, isTopValid, struc);
  }

  return;
}


function lookUpInfo(opcode, type = "struc") {
  if (info.hasOwnProperty(opcode)) {
    return info[opcode][type];
  } else {
    result["unknown"].push(blockName); //将未知积木加入报告的unknown列表
    return "unknown";
  }
}
