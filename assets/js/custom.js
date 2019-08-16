(function($){

  //Add active class to sidebar links
  function sidebarActiveClass() {
    var curentFile = window.location.pathname.split("/").pop();
    $('.sidebar_pagelist > li > a[href="' + curentFile + '"]').addClass('active');
  }

  sidebarActiveClass();

  //google analytics event tracking for all links
  $('a').on('click', function() {
    var linkText = $(this).text();
    ga( 'send', 'event', 'Link', 'Click', linkText);
  });


})(jQuery)