const pageHttpDesign = require("../ui/ui_newPage002");
const extend = require("js-base/core/extend");
const ImageView = require('sf-core/ui/imageview');
const FlexLayout = require('sf-core/ui/flexlayout');
const user = require("../model/user")

var pageHttp = extend(pageHttpDesign)(
    function(_super) {
        _super(this);
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));


    }
);

function onShow(superOnShow) {
    superOnShow();
}

function onLoad(superOnLoad) {
    superOnLoad();
    this.button1.onPress = function() {
        var data = { "UserName": "aurek", "Password": "1234" };
        user.login(data, function(err, result) {

            if (err) {
                console.log(JSON.stringify(err));
                return;
            }
            console.log(JSON.stringify(result));
        });
    };
}
module.exports = pageHttp;
