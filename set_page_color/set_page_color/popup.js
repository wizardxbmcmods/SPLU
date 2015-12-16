// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   var currentURL = tabs[0].url;
   // You can use currentURL here..
   var temp1 = currentURL.split("/");
	var temp2 = temp1[5];
//window.prompt(temp2, temp2);
var temp3 = temp2.split(/(?=[A-Z])/).join(" ");
var str1 = "https://www.boardgamegeek.com/xmlapi/search?search=";
var str2 = temp3;
var res = str1.concat(str2);

chrome.tabs.update({
     url: res
});

//window.open("https://www.boardgamegeek.com/xmlapi/search?search=", '_parent');
window.close();
});

}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
