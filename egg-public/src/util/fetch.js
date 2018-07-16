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
  return JSON.parse(json);
}
export async function postUrl(url, data) {
  url = `http://127.0.0.1:7001/${url}`
  let json = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify(data) || ''
  }).then(function (response) {
    return response.text()
  });
  return JSON.parse(json);
}
