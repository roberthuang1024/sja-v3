# from pyperclip import copy
obj = {}
while True:
    ipt = input()

    if(ipt == ""):
        break

    row = ipt.split("\t")  # 按tab分割为4项
    if(row[0]):
        name = row[0] + "_" + row[1]
    else:
        name = row[1]

    if name in obj:
        obj[name]["pf"].append(row[2])  # 存在同名积木则添加平台名称

        if obj[name]["struc"] != row[3]:
            raise Exception("结构不一致")  # 检查同名函数结构一致性

    else:
        obj[name] = dict((("pf", [row[2]]), ("struc", row[3])))  # 创建新积木

print(str(obj).replace("'",'"'))  # 输出对象
