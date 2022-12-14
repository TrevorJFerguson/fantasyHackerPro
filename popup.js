
// this is the js for the popup where user selects from full, half, and non ppr

window.addEventListener('DOMContentLoaded', function() {
    const fullButton = document.querySelector('#fullButton');
    const halfButton = document.querySelector('#halfButton');
    const nonButton = document.querySelector('#nonButton');
  
    fullButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ code: 'switching-tabs' }, function(response) {
            console.log(response);
            let newUrl = "https://www.fantasypros.com/nfl/rankings/ppr-cheatsheets.php";
            chrome.tabs.create({ url: newUrl });
        })
    });
    halfButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ code: 'switching-tabs' }, function(response) {
            console.log(response);
            let halfUrl = "https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php";
            chrome.tabs.create({ url: halfUrl });
        })
    })
    nonButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ code: 'switching-tabs' }, function(response) {
            console.log(response);
            let nonUrl = "https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php";
            chrome.tabs.create({ url: nonUrl });
        })
    })
});