coolio = "sup";
const cooluser = "no";

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  const cooluser = googleUser.getBasicProfile().getName();
  coolio = "sups";
  alert(cooluser);
  const cooleruser = cooluser;
  
  window.location.href = "/main.html";
}

  module.exports = cooluser; 

function onFailure(error) {
  console.log(error);
  // hold on can you help me fix this? in onSuccess i change
  // cooluser to be what i need it to be, but it doesn't
  // change in logincheck. really tricky issue right?
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

// ugh my school blocks console. i can't see whats wrong
//actually nvm i got that bookmarklet
// baritone's login has error 400
//redirect issue. you gotta do that thingy again lol
// i might rename the proxy to baritone.