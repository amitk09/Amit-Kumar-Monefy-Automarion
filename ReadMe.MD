# Tools and Technology:
 Below is the tools and technology used

	* NodeJS 14.15.1
	* Appium Desktop 1.21.0
	* Android Studio (for running emulator or connecting real device)
	* JavaScript
	* Mocha
	* Chai for assertion
	* webDriverIO
	* APK file is attached in case user does not have it before hand. 

# Steps to Run the project:
	* Install NodeJS 14.15.1
	* Install git Bash
	* Install Appium and run the server on 4723 port (default port)
	* Install Android Studio and setup environment variables to run ‘adb’ commands
	* Create 1 emulator using Android studio or use your real android device by connecting it to laptop (make sure Developer option is enabled and select option usb for debugging)
	* Run ‘adb devices’ and make sure device is connected. Copy the device id from here.
	* Open Git bash and do the following:
				* Execute command to install apk in your connected device ‘adb -s <device_id> install <path_to_apk_file>’ 
				* Execute ‘git clone https://github.com/amitk09/Amit-Kumar-Monefy-Automation.git’
				* Execute command ‘cd monefy-automation’ 
				* Open test-config.js file and find Capabilities. Update the device id in UDID to run the test on connected device.
				* Execute ‘npm install’ to install all the dependencies
				* Execute ‘npm test run ./test-config.js ’
	* Report will be available in allure-reports folder once the execution of test cases completed. 

# Test cases
	* Excel file is attached to see autumated scenario- "Monefy Automation Test cases.xlsx"

# Explanation of used tools:
	* WebDriverIO has very good native app support for automation and running the test cases. 
	* JavaScript and its related tool are comparatively faster than other programming language. 
	* Mocha is awesome tool to manage and execute the test cases and test suite
	* Used page object model to locate element and steps class to maintain good quality of code. 
	* Used Allure reporting to get good view of test scenarios and result
	* Appium is leading and dominating tool in market for native and hybrid apps automation. 
	* Used Chai for assertion. 






