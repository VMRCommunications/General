window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  var mapping1 = googletag.sizeMapping()
                            .addSize([1000, 500], [[728, 90]])
    .addSize([300, 500], [[320, 50]])
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
