const Http = require("sf-core/net/http");

const defaultData = { "UserName": "aurek", "Password": "1234" };

exports.login = login;

function login(userData = defaultData, callback) {
    Http.request({
            'url': 'http://10.0.0.103:8042/Login/Login',
            'method': 'POST',
            'body': JSON.stringify(userData),
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            }
        },
        function(response) {
            var result = JSON.parse(response.body.toString());
            console.log(`Success : ${JSON.stringify(result, null, "\t")}`);
            callback && callback(null, result);
        },
        function(e) {
            // Handle error like:
            if (e.statusCode === 500) {
                console.log("Internal Server Error Occurred.");
            }
            else {
                console.log("Server responsed with: " + e.statusCode + ". Message is: " + e.message);
            }
            callback && callback(e);
        }
    );
}
