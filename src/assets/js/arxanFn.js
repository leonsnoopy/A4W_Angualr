function debugDetection() {
  window.alert("Warning! Detected the developer mode is turned on !!")
}

/** @protect-web Checksum:include */
function checksumDetection() {
  window.alert("Warning! Checksum detected, be careful !!")
}

function hookDetection() {
  window.alert("Warning! Arxan Hook detected, be careful !!")
}

function inAppFirewall() {
  window.alert("Warning! Arxan In App Firewall detected, be careful !!")
}

function scriptVerification() {
  window.alert("Warning! Arxan Script Verification detected, be careful !!")
}

function domainLockDetection() {
  window.alert("Warning!Domain Lock  detected, be careful !!")
}

function timeLock() {
  window.alert("Warning! Time Lock  detected, please update your version !!")
}

function userAgentLock() {
  window.alert("Warning! User Agent  detected, please use Chrome !!")
}

function webAppIntegrity() {
  window.alert("Warning! WebAppIntegrity detected, please be careful!!")
}

function automationDetection() {
  window.alert("Warning! AutomationDetection detected, please be careful!!")
}

function arxanInvocationA() {
  console.log("Active Arxan Invocation - A")
}

function arxanInvocationB() {
  console.log("Active Arxan Invocation - B")
}

function arxanInvocationC() {
  console.log("Active Arxan Invocation - C")
}

function arxanInvocationD() {
  console.log("Active Arxan Invocation - D")
}

// arxan checkmarx callback 使用
function checksumDebug(a, b, c) {
  console.log("a:" + a)
  console.log("b:" + b)
  console.log("c:" + c)
  alert("Checksum detected")
}

function sendLineNotifyApi(msg) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://arxan.gss.com.tw/api/arxan_detected', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    message: msg
  }));
}
