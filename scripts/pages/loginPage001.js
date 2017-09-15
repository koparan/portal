
const extend = require('js-base/core/extend');
const LoginPage001Design = require('ui/ui_loginPage001');
const Router = require("sf-core/ui/router");


const LoginPage001 = extend(LoginPage001Design)(
  // Constructor
  function(_super) {
    //var self = this;
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    //this.flexlayout.children = btn_onPress.bind(this);
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    //this.loginButton.onPress = loginButton_log.bind(this);
    var tiUserName, tiPassword;
    
    this.loginButton.onPress =loginButton_log.bind(this);
    
    
    
  });
  

  function loginButton_log() {
    var username=this.userName.children.userNameInput.text;
    var pass=this.password.children.passwordInput.text;
  if (username=="asd" && pass=="123") {
    Router.go("page1")
  }
  else{
    alert("hatalı");
    
    this.userName.children.userNameInput.text="";
  }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
}

module && (module.exports = LoginPage001);