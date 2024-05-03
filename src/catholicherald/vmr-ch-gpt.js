window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  googletag.defineSlot('/4580722/CatholicHerald_1', [[300,250],[160,600],[970,250],[336,280]], 'div-gpt-ad-4206571-1')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_2', [[300,250],[160,600],[970,250],[336,280]], 'div-gpt-ad-4206571-2')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_5', [[300,250],[336,280],[160,600],[970,250]], 'div-gpt-ad-4206571-3')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_4', [[300,250],[336,280],[160,600],[970,250]], 'div-gpt-ad-4206571-4')
           .addService(googletag.pubads());

  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

// code below to change margin and padding on top ad unit for mobile users so ad does not get cut off

// Select the input element with class ".default--input"
const defaultInput = document.querySelector('.default--input');

// Apply padding using JavaScript
defaultInput.style.padding = '10px 20px';

// Check if the viewport width is less than or equal to 1050px
if (window.innerWidth <= 1050) {
    // Select the element with class ".header--bottom__mobile--search"
    const mobileSearch = document.querySelector('.header--bottom__mobile--search');

    // Apply margin using JavaScript
    mobileSearch.style.marginTop = '5px';
}
