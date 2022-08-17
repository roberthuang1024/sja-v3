obj = {}
with open("sample\\control-scratch.json") as f:
    exec("obj="+f.read().replace("true",
         "True").replace("false", "False").replace("null", "0"))
blocks_obj = obj["targets"][1]["blocks"]
for i in blocks_obj:
    pass  # unfinished
