/**
 * home-doubleclick.js
 *
 * Handles toggling the navigation menu for small screens.
 */
 

 // var googletag = googletag || {};
 //  googletag.cmd = googletag.cmd || [];
 //  (function() {
 //    var gads = document.createElement('script');
 //    gads.async = true;
 //    gads.type = 'text/javascript';
 //    var useSSL = 'https:' == document.location.protocol;
 //    gads.src = (useSSL ? 'https:' : 'http:') +
 //      '//www.googletagservices.com/tag/js/gpt.js';
 //    var node = document.getElementsByTagName('script')[0];
 //    node.parentNode.insertBefore(gads, node);
 //  })();

  window.googletag = window.googletag || {cmd: []};

  googletag.cmd.push(function() {
    googletag.defineSlot('/270537003/Tabletsidebar300', [300, 250], 'div-gpt-ad-1432669166633-0').addService(googletag.pubads());
    googletag.defineSlot('/270537003/TheTabletSidebarbottom300', [300, 250], 'div-gpt-ad-1432669166633-1').addService(googletag.companionAds()).addService(googletag.pubads());
    googletag.defineSlot('/270537003/thetabletfooter728', [728, 90], 'div-gpt-ad-1432669166633-2').addService(googletag.pubads());

    // googletag.defineSlot('/270537003/thetabletbottomhomepage', [300, 250], 'div-gpt-ad-1432669166633-3').addService(googletag.pubads());
    googletag.defineSlot('/270537003/thetabletbottomhomepage', [[300,600],[300,250],[1,1]], 'div-gpt-ad-1473119081787-0').addService(googletag.pubads());

   //googletag.defineSlot('/270537003/tablet-300x600', [300, 600], 'div-gpt-ad-1473119081787-0').addService(googletag.pubads());
   googletag.defineSlot('/270537003/tablethomepagetop', [300, 250], 'div-gpt-ad-1426089564221-4').addService(googletag.pubads());

    //googletag.defineSlot('/270537003/thetabletnew250', [300, 250], 'div-gpt-ad-1432669166633-4').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    //googletag.pubads().enableVideoAds();
    //googletag.companionAds().setRefreshUnfilledSlots(true);
    googletag.enableServices();
  });
