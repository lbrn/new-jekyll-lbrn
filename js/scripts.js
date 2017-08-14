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

//F U N C T I O N S//
function quickRef(){
  var icon = $('#quickReference>div>i');
  var section = $('#quickReference');
  section.click(function() {
    if (icon.hasClass('fa-info-circle')){
      icon.addClass('fa-cheveron-down').removeClass('fa-info-circle');
      section.animate({bottom: '-5%'}, 1000);
    }
    else {
      icon.removeClass('fa-cheveron-down').addClass('fa-info-circle');
      section.animate({bottom: '-95%'}, 1000);
    }
  });
}
function coreSwap(){
  var corelis     = $('section.cores>ul>li');
  var admin-txt   = "The Administrative Core (AC) of the Louisiana Biomedical Research Network (LBRN) provides the project with its overall leadership, day-to-day management, evaluations of all of its component parts, and communication with NIH staff. The AC is led by the Principal Investigator in close consultation with the Program Coordinator, as well as the Steering Committee and External Advisory Committee."
  var admin       = "images/admin-core.svg"
  var admin-title = Adiministrative Core
  var bbc-txt     = "The Bioinformatics, Biostatistics, and Computational Biology Core (BBCC) of the Louisiana Biomedical Research Network (LBRN) serves to train and support project investigators and their teams across Louisiana, and to lead and support translational research activities at the frontiers of biomedical science. Its team uses both established and custom computational tools, operating at computational scales ranging from the mundane to analyses engaging many hundreds of compute cores."
  var bbc         = "images/bbc-core.svg"
  var admin-title = Bioinformatics, Biostatistics, and Computational Biology Core
  var mcbr-txt    = "Molecular and cell biology provide an essential linkage among important basic fields of biomedical science, such as genetics, developmental biology, structural biology, immunology, neurobiology, and cancer biology. The MCBRC takes advantage of existing highly organized, centralized services and equipment facilities located primarily at the LSU flagship institution in Baton Rouge, effectively uniting these units toward the common goal of supporting biomedical research performed by PUI investigators. The MCBRC will provide technical and logistical support, enabling the ready exchange of information, ideas, technology, and research capabilities among PUI investigators. MCBRC will ensure that PUI researchers have full access to state-of-the-art equipment and modern research techniques and services."
  var mcbr        = "images/mcbr-core.svg"
  var admin-title = Molecular and Cell Biology Resources Core
  corelis.eq(0).click(function{
    $(this).
  });

}
