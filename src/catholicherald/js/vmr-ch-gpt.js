window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  var mapping1 = googletag.sizeMapping()
                            .addSize([1000, 0], [[728, 90]])
    .addSize([303, 0], [[320, 50]])
    .addSize([0, 0], [])
                            .build();                         
  googletag.defineSlot('/4580722/CatholicHerald_4', [[728,90],[320,50]], 'div-gpt-ad-4206571-4')
    .defineSizeMapping(mapping1)
           .addService(googletag.pubads());
googletag.defineSlot('/4580722/CatholicHerald_5', [[728,90]], 'CH001-Top')
           .addService(googletag.pubads());
googletag.defineSlot('/4580722/CatholicHerald_8', ['fluid',[300,250]], 'CH003')
           .addService(googletag.pubads()); 
  googletag.defineSlot('/4580722/CatholicHerald_7', ['fluid',[300,250]], 'CH002')
           .addService(googletag.pubads());
googletag.defineSlot('/4580722/CatholicHerald_11', ['fluid',[300,250]], 'CH005')
           .addService(googletag.pubads());
googletag.defineSlot('/4580722/CatholicHerald_9', ['fluid',[300,250],[302,250]], 'CH004-Top')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_2', ['fluid',[160,600]], 'div-gpt-ad-4206571-2')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_3', ['fluid',[300,250],[336,280],[160,600],[970,250]], 'div-gpt-ad-4206571-3')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_6', [[728,90]], 'CH001-Bottom')
           .addService(googletag.pubads());
    googletag.defineSlot('/4580722/CatholicHerald_10', ['fluid',[300,250]], 'CH004-Bottom')
           .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CatholicHerald_1', [[300,250],[160,600],[970,250],[336,280]], 'div-gpt-ad-4206571-1')
           .addService(googletag.pubads());
 googletag.pubads().enableSingleRequest(); 
  googletag.enableServices();
});

//code below to ensure top ad unit does not get cut off
document.addEventListener("DOMContentLoaded", function() {
    // Select the input element with class ".default--input"
    const defaultInput = document.querySelector('.default--input');

    // Apply padding using JavaScript
    defaultInput.style.padding = '10px 20px';

    // Check if the viewport width is less than or equal to 380px
    if (window.innerWidth <= 380) {
        // Select the element with class ".header--bottom__mobile--search"
        const mobileSearch = document.querySelector('.header--bottom__mobile--search');

        // Apply margin using JavaScript
        mobileSearch.style.marginTop = '5px';
    }
});
