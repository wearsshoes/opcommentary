// Copyright 2020 Rachel Shu. All rights reserved.
// Use of this source code is made available under the MIT License.

let toggle = document.getElementById('toggle');
toggle.onclick = function(element) {
  //Get current URL
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let tabUrl = tabs[0].url;
    let newUrl = "http://www.octopuspie.com/"
    // Do some string editing
    if (tabUrl == "http://www.octopuspie.com/") {
      // Access original run from homepage; functionality not yet built
      window.alert("Please click the permalink first!")
      // let today = new Date();
      // console.log(today);
      // let dateUrl = "http://www.octopuspie.com/" + today.toISOString().substring(0, 10);
      // let code = `document.queryselector("a")`
      // chrome.tabs.executeScript({code}, function (result) {
      //   console.log(result);
      //   newUrl = result;
      // });
    }
    else if (tabUrl[tabUrl.length - 2] == "2") {
      // Rerun -> original run
      newUrl = "http://www.octopuspie.com/" + tabUrl.substring(37, tabUrl.length - 3);
    }
    else {
      // Original run -> rerun
      newUrl = "http://www.octopuspie.com/" + tabUrl.substring(37, tabUrl.length - 1) + "-2";
    };
    // New URL
    chrome.tabs.update({url: newUrl});
  });
};
