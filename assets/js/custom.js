/////
//FrontEnd by: Inti Mateo www.imateo.com
//
var infinity = angular.module('infinityApp', ['duParallax']);
infinity.controller('HomeController',function ($scope,parallaxHelper) {
    $scope.background = parallaxHelper.createAnimator(-0.2);
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".animateViewPort");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  if (win.scrollTop() < 40) {
    allMods.each(function(i, el) {
      var el = $(el);
      el.removeClass("already-visible");
      el.removeClass("come-in"); 

    });
  }
});


(function($) {
  $('.blog article button').hover(
    function(){
      var MyImage=$(this).closest('article');
      MyImage.children('.articleImage').addClass('onHover');
      MyImage.addClass('onHover');
    },function(){
      var MyImage=$(this).closest('article');
      MyImage.children('.articleImage').removeClass('onHover');
      MyImage.removeClass('onHover');
    });
})(jQuery);