$( document ).ready(function() {
  quickRef();
//Mobile Menu
  $("#navBug").click(function(){
      $('nav').slideToggle('fast');
      if ($(this).attr("src") == "images/menuOpen.png") {
        $(this).attr("src", "images/menuClosed.png");
      }
      else {$(this).attr("src", "images/menuOpen.png")}
  });
  $("body > div.layout").click(function(){
    if ($('#navBug').css('display') != 'none'){
      $('nav').slideUp('fast');
      $('#navBug').attr("src", "images/menuClosed.png")
    }
  });
  $(window).resize(function(){
    if ($('#navBug').css('display') == 'none'){
      $('nav').css('display','block');
    }
    else {$('nav').css('display','none')}
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);
  });
  $('.collapseTrigger').siblings('h2').click(function() {
    console.log('fired');
    $(this).siblings('.collapse').toggleClass('expand');
    $(this).siblings('.collapseTrigger').toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
  });


  $(window).scroll(function() {
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);

  });
});

function quickRef(){
  var icon = $('#quickReference>div>i');
  var section = $('#quickReference');
  section.click(function() {
    if (icon.hasClass('fa-info-circle')){
      icon.addClass('fa-cheveron-down').removeClass('fa-info-circle');
      section.animate({bottom: '-5%'}, 1000);
      // section.css('bottom','0%');
    }
    else {
      icon.removeClass('fa-cheveron-down').addClass('fa-info-circle');
      section.animate({bottom: '-95%'}, 1000);
      // section.css('bottom','-95%');
    }
  });
}
