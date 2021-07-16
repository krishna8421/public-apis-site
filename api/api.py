import requests
from flask import Flask, jsonify

app = Flask(__name__)

url = "https://raw.githubusercontent.com/public-apis/public-apis/master/README.md"
getData = requests.get(url).text

IndexWiseData = getData.split("### ")
IndexWiseData.pop(0)

ResultDataInJSON = {'allApi':[]}

for I in IndexWiseData:
    oneLine=I.split('\n')
    for i in oneLine:
        if i[0:3] ==  "| [":
            splitOneLine = i.split('|')
            apiName             = splitOneLine[1].split(']')[0][2:].strip()
            apiDescription      = splitOneLine[2].strip()
            apiAuth             = splitOneLine[3].strip()
            apiHttps            = splitOneLine[4].strip()
            apiCors             = splitOneLine[5].strip()
            apiCategory         = oneLine[0]
            apiLink             = splitOneLine[1].split('(')[1].strip()[:-1]

            apiSingleList = {
                "API": f"{apiName}",
                "Description": f"{apiDescription}",
                "Auth": f"{apiAuth}",
                "HTTPS": f"{apiHttps}",
                "CORS": f"{apiCors}",
                "Category": f"{apiCategory}",
                "Link": f"{apiLink}"
            }

            ResultDataInJSON['allApi'].append(apiSingleList)


@app.route('/', methods=['GET'])
def PublicApi():
    return jsonify(ResultDataInJSON)


if __name__ == "__main__":
    app.run(debug=False)