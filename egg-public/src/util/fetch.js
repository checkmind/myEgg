import 'whatwg-fetch'

export async function getUrl(url, data) {
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
