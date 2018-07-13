export default {
  getUrlParm(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if (window.location.href.split('?')[1])
      var r = window.location.href.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}