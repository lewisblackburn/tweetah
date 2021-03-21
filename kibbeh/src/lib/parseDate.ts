export const parseDate = (tdate: any) => {
  var system_date: any = new Date(Date.parse(tdate));
  var user_date: any = new Date();
  // if (K.ie) {
  //   system_date = Date.parse(tdate.replace(/( \+)/, " UTC$1"));
  // }
  var diff = Math.floor((user_date - system_date) / 1000);
  if (diff <= 1) {
    return "just now";
  }
  if (diff < 20) {
    return diff + "s";
  }
  if (diff < 60) {
    return "less than a minute ago";
  }
  if (diff <= 3540) {
    return Math.round(diff / 60) + "m";
  }
  if (diff <= 86400) {
    return Math.round(diff / 3600) + "h";
  }
  if (diff < 604800) {
    return Math.round(diff / 86400) + "d";
  }
  if (diff <= 777600) {
    return "1w";
  }
  return "on " + system_date;
};

// from http://widgets.twimg.com/j/1/widget.js
// var K = (function () {
//   var a = navigator.userAgent;
//   return {
//     ie: a.match(/MSIE\s([^;]*)/),
//   };
// })();
