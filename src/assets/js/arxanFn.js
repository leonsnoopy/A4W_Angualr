
function arxanDebug(){
  window.alert("Warning! Detected the developer mode is turned on !!")
}

function arxanDetected(){
  window.alert("Warning! Unusual detected, be careful !!")
}

function arxanChecksum(){
  window.alert("Warning! Arxan Checksum detected, be careful !!")
}

function arxanHook(){
  window.alert("Warning! Arxan Hook detected, be careful !!")
  escape();
}

function arxanInAppFirewall(){
  window.alert("Warning! Arxan In App Firewall detected, be careful !!")
}

function arxanSubResourceIntegrity(){
  window.alert("Warning! Arxan SubResourceIntegrity detected, be careful !!")
}

function arxanScriptVerification(){
  window.alert("Warning! Arxan Script Verification detected, be careful !!")
}

function arxanDomainLock(){
  window.alert("Warning!Domain Lock  detected, be careful !!")
}

function arxanTimeLock(){
  window.alert("Warning! Time Lock  detected, please update your version !!")
}

function arxanUserAgent(){
  window.alert("Warning! User Agent  detected, please use Chrome !!")
}

function arxanInvocation(){
  console.log("Active Arxan Guards")
}

/** @protect-web Checksum:include */
function checksumFn(){
  console.log("Arxan Checksum verifing...")
}

// module.exports = {
//   arxanInvocation2: function() {
//     console.log("Active Arxan Guards")
//   }
// }


