// Author: Robert Huang(孤言)
// License: GNU GENERAL PUBLIC LICENSE v3
// Version: beta global.0.0.0

// dynamic data(debug only, 改写时删除)
data = { topLevelBlocks: [] };

// 空报告列表
let result = {
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
};

// 空id表
let ids = { costumes: [], sounds: [], broadcasts: [] };

// 分析主函数，json_str为json字符串，constData为配置数据
function analyse(json_str, data) {
  let constData = data;
  try {
    var project = JSON.parse(json_str); // 将字符串转换为json对象
  } catch {
    return "Invalid Json"; //输入字符串不是json文件
  }

  try {
    let targets = project["targets"]; //获取targets
  } catch {
    return "Invalid Scratch"; //不是Scratch文件
  }

  // 报告：角色数（除去舞台）
  // to-do: CCW中有特殊角色
  result["count_sprite"] = targets.length - 1;

  // 遍历每一个角色
  for (let i = 0; i < targets.length; i++) {
    //基础计数操作
    let sprite = targets[i];

    // 对舞台作特殊计数
    if (sprite["isStage"]) {
      let variables = sprite["variables"]; //获取公有变量
      // 报告：公有变量数
      result["count_publicVar"] = variables.length;

      let lists = sprite["lists"]; //获取公有列表
      // 报告：公有列表数
      result["count_publicList"] = lists.length;

      let broadcasts = sprite["broadcasts"]; //获取广播
      countRes("broadcasts", broadcasts);
      // 报告：广播数
      result["count_broadcast"] = broadcasts.length;
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

    countBlock(sprite["blocks"]);
  }
}

// 资源计数
function countRes(type, list) {
  // 报告：角色/声音数增加
  result["count_" + type] += list.length;

  // 报告：资源大小增加
  for (let i = 0; i < list.length; i++) {
    assetId = list[i]["assetId"];
    if (ids[type].indexOf(assetId) == -1) {
      id[type].push(assetId);
    }
  }
}

// 积木计数
function countBlock(blocks) {
  // 遍历每一个积木，仅对topLevel积木计数
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    if (block["topLevel"]) {
      let isTopValid;

      //判断是否为有效顶层
      if (constData["topLevelBlocks"].includes(block["opcode"])) {
        isTopValid = true;
      } else {
        isTopValid = false;
      }

      // 报告：代码段数增加
      result["count_para"] += 1;
      if (isTopValid) {
        result["count_validPara"] += 1;
      }

      // 递归遍历该段积木
      searchBlockPara(blocks.keys()[i], isTopValid);

      // // 读取opcode，并拆分
      // let blockType = block["opcode"].split("_")[0];
      // let blockName = block["opcode"].split("_")[1];
    }
  }
}

function searchBlockPara(blockId, isTopValid) {
  // 对parent进行统计
}
