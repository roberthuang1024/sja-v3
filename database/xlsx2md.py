import pandas as pd
import pyperclip


def xlsx2md(path, sheetName="Sheet1"):
    df = pd.read_excel(path, sheetName)
    title = "|"
    splitLine = "|"
    xlsx = ""
    for i in df.columns.values:
        title = title + i + "|"
        splitLine = splitLine + "--" + "|"
    xlsx = title+'\n'+splitLine+'\n'
    for i in df.iterrows():
        row = "|"
        for j in df.columns.values:
            row = row + str(i[1][j]) + "|"
        xlsx += row.replace("nan", " ")+'\n'  # nan为空项
    pyperclip.copy(xlsx)


xlsx2md("blocks.xlsx")
