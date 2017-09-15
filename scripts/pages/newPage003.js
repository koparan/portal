const Page = require("sf-core/ui/page");
const extend = require("js-base/core/extend");
const FlexLayout = require('sf-core/ui/flexlayout');
const WebView = require('sf-core/ui/webview');
var Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                this.statusBar.visible = false;
                this.headerBar.visible = false;
                
                myWebView.loadURL('https://barackobama.com');
            }
        });
        this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
        this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
        this.layout.alignItems = FlexLayout.AlignItems.CENTER;

        var myWebView = new WebView({
            left: 10,
            top: 10,
            right: 10,
            bottom: 10,
            positionType: FlexLayout.PositionType.ABSOLUTE,
            onChangedURL: function(event) {
                console.log("Event Change URL: " + event.url);
                return true;
            },
            onError: function(event) {
                console.log("Event Error : " + event.message + ", URL: " + event.url);
            },
            onLoad: function(event) {
                console.log("Event Load: " + event.url);
            },
            onShow: function(event) {
                console.log("Event Show: " + event.url);
            }
        });
        this.layout.addChild(myWebView);
    }
);
module.exports = Page1;