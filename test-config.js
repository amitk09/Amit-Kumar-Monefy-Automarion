const chai = require('chai');
const allure = require('allure-commandline');

exports.config ={
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path:'/wd/hub',
    logLevel:'info',
    framework: 'mocha',
    mochaOpts: {
        ui:'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances:1,
    sync: true,
    waitforTimeout:10000,
    specs: [
        './src/test_scripts/TestCases.js'
     
    ],
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "be6d470d",
        "appPackage": "com.monefy.app.lite",
        "appActivity": "com.monefy.activities.main.MainActivity_"
      }
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks : true,
    }]],

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)
                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    
      before: function(){
          global.chaiExpect =chai.expect;
      }

}