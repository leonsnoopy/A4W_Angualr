function debugDetection() {
  sendLineNotifyApi("DebugDetection Alert");
  window.alert("Warning! Detected the developer mode is turned on !!")
}

function hookDetection() {
  sendLineNotifyApi("HookDetection Alert");
  window.alert("Warning! Arxan Hook detected, be careful !!")
}

function inAppFirewall() {
  sendLineNotifyApi("InAppFirewall Alert");
  window.alert("Warning! Arxan In App Firewall detected, be careful !!")
}

function scriptVerification() {
  sendLineNotifyApi("ScriptVerification Alert");
  window.alert("Warning! Arxan Script Verification detected, be careful !!")
}

function domainLock() {
  sendLineNotifyApi("DomainLock Alert");
  window.alert("Warning!Domain Lock  detected, be careful !!")
}

function timeLock() {
  sendLineNotifyApi("TimeLock Alert");
  window.alert("Warning! Time Lock  detected, please update your version !!")
}

function userAgentLock() {
  sendLineNotifyApi("UserAgentLock Alert");
  window.alert("Warning! User Agent  detected, please use Chrome !!")
}

function webAppIntegrity() {
  sendLineNotifyApi("WebAppIntegrity Alert");
  window.alert("Warning! WebAppIntegrity detected, please be careful!!")
}

function automationDetection() {
  sendLineNotifyApi("automationDetection Alert");
  window.alert("Warning! AutomationDetection detected, please be careful!!")
}

function arxanInvocation() {
  console.log("Active Arxan Guards")
}

/** @protect-web Checksum:include */
function checksumFnTest() {
  console.log("Arxan Checksum verifing...")
}

// arxan checkmarx callback 使用
function checksum(a, b, c) {
  sendLineNotifyApi("Checksum Alert");

  alert("Checksum detected")
  console.log("a:" + a)
  console.log("b:" + b)
  console.log("c:" + c)
}

function sendLineNotifyApi(msg) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/api/arxan_detected', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    message: msg
  }));
}