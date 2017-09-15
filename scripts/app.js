/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
require("i18n/i18n.js"); //generates global lang object
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};
Application.start

const Router = require("sf-core/ui/router");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);

// Define routes and go to initial page of application
Router.add("loginPage001", require("./pages/loginPage001"));
Router.add("newPage001", require("./pages/newPage001"));
Router.add("newPage002", require("./pages/newPage002"));
Router.add("newPage003", require("./pages/newPage003"));
Router.add("page1", require("./pages/page1"));
Router.add("page2", require("./pages/page2"));
Router.go("newPage002");
