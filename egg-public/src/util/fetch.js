import 'whatwg-fetch'

function obj2params(obj) {
  var result = '';
  var item;
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item]);
  }

  if (result) {
    result = result.slice(1);
  }
  return result;
}

export async function getUrl(url, data) {
  url = `http://127.0.0.1:7001/${url}?${obj2params(data)}`
  let json = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(function (response) {
    return response.text()
  });
  try {
    let rsp = JSON.parse(json);
    return rsp
  } catch(e) {
    console.log(e)
  }
}
export async function postUrl(url, data) {
  console.log(JSON.stringify(data))
  url = `http://127.0.0.1:7001/${url}`
  let json = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    if(!response.success) {
      alert(response.msg)
    }
    return response.text()
  });
  try {
    if(!json)
      return
    let rsp = JSON.parse(json);
    return rsp
  } catch(e) {
    console.log(e)
  }
  
}
