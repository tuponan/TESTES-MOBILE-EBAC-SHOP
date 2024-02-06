const { join } = require('path')

exports.config = {
hostname: 'localhost',
port: 4723,
path: '/wd/hub',
specs: [
    './test/specs/**/*.js'
],
framework: 'mocha',
Capabilities:[{
    "platformName": "Android",
    "platformVersion": "9.0",
    "deviceName": "Pixel 7 Pro API 28",
    "automationName": "UiAutomator2",
    "app": join(process.cwd(), './app/android/loja-ebac.apk'),
    "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
    
}]
}
