$( document ).ready(function() {
  quickRef();
  coreSwap();
  piFilter();
  faqReveal();
  selectTypeSrp();
  if(document.getElementById('sliderNav') != null){
    slider();
    console.log("Slider Happening");
  }
  else{console.log("no slider on page");}
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
      $('#navBug').attr("src", "images/menuClosed.png");
    }
  });
  $(window).resize(function(){
    if ($('#navBug').css('display') == 'none'){
      $('nav').css('display','block');
      $('#navBug').attr("src", "images/menuClosed.png")
    }
    else {$('nav').css('display','none')}
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);
  });
  //collapsable sections
  $('.collapse').siblings('h3, h2, i').click(function() {
    console.log('fired');
    $(this).siblings('.collapse').toggleClass('expand');
    if ($(this).hasClass('fa')){
      $(this).toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
    }
    else {
      $(this).siblings('.collapseTrigger').toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
    }
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
  var adminTxt   = "The Administrative Core (AC) of the Louisiana Biomedical Research Network (LBRN) provides the project with its overall leadership, day-to-day management, evaluations of all of its component parts, and communication with NIH staff. The AC is led by the Principal Investigator in close consultation with the Program Coordinator, as well as the Steering Committee and External Advisory Committee."
  var bbcTxt     = "The Bioinformatics, Biostatistics, and Computational Biology Core (BBCC) of the Louisiana Biomedical Research Network (LBRN) serves to train and support project investigators and their teams across Louisiana, and to lead and support translational research activities at the frontiers of biomedical science. Its team uses both established and custom computational tools, operating at computational scales ranging from the mundane to analyses engaging many hundreds of compute cores."
  var mcbrTxt    = "Molecular and cell biology provide an essential linkage among important basic fields of biomedical science, such as genetics, developmental biology, structural biology, immunology, neurobiology, and cancer biology. The MCBRC takes advantage of existing highly organized, centralized services and equipment facilities located primarily at the LSU flagship institution in Baton Rouge, effectively uniting these units toward the common goal of supporting biomedical research performed by PUI investigators. The MCBRC will provide technical and logistical support, enabling the ready exchange of information, ideas, technology, and research capabilities among PUI investigators. MCBRC will ensure that PUI researchers have full access to state-of-the-art equipment and modern research techniques and services."
  corelis.eq(0).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Adiministrative Core');
    $('#core-swap>p').text(adminTxt);
    $('#core-swap>img').attr('src','images/admin-core.svg');
    $('#core-swap>button').addClass('hidden');
  });
  corelis.eq(1).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Bioinformatics, Biostatistics, and Computational Biology Core');
    $('#core-swap>p').text(bbcTxt);
    $('#core-swap>img').attr('src','images/bbc-core.svg');
    $('#core-swap>button').removeClass();
    $('#core-swap>button>a').attr('href','bbc-core.html').text('BBC Core Services');
  });
  corelis.eq(2).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Molecular and Cell Biology Resources Core');
    $('#core-swap>p').text(mcbrTxt);
    $('#core-swap>img').attr('src','images/mcbr-core.svg');
    $('#core-swap>button').removeClass();
    $('#core-swap>button>a').attr('href','mcbr-core.html').text('MCBR Core Services');
  });
}
function piFilter(){
  // var buttons = $('nav#pi-filter ul li');
  var fulls = $('article[data-ptype="FullProject"]');
  var starts = $('article[data-ptype="StartupProject"]');
  var shares = $('article[data-ptype="SharedInstrumentProject"]');
  var pilots = $('article[data-ptype="PilotProject"]');

  $("#pi-fp").click(function(){
    $(this).toggleClass('on');
    fulls.slideToggle('fast');
  });
  $("#pi-sp").click(function(){
    $(this).toggleClass('on');
    starts.slideToggle('fast');
  });
  $("#pi-sip").click(function(){
    $(this).toggleClass('on');
    shares.slideToggle('fast');
  });
  $("#pi-pp").click(function(){
    $(this).toggleClass('on');
    pilots.slideToggle('fast');
  });
}
// FOR THE SLIDER
function slider(){
  var buttons = document.getElementsByTagName('input');
  var nav = document.getElementById('sliderNav');
  var i = 1;
  var timer = setInterval(checkFunc, 5000);
  nav.onmouseover = function(){
    clearInterval(timer);
    console.log("STOPPED");
  };
  nav.onmouseout = function(){
    timer = setInterval(checkFunc, 5000);
    console.log("ON");
  };
  function checkFunc() {
    if (i == 4){
      i=0;
    }
    buttons[i].checked = true;
    i++;
  }
}
// FAQ for summer research program Page
function faqReveal() {
  var question = $('section#faq p');
  question.click(function(e){
    // $(this).next().fadeToggle();
    $(this).next().slideToggle();
  });
  $(window).scroll(function(){
    question.next().slideUp();
  });
}
//hides irrelevant data on summer research program Page
function selectTypeSrp(){
  var grads = $('div.grads');
  var faculty = $('div.faculty');
  var undergrads = $('div.undergrads');
  var chooseType = $('div.chooseType');
  $('input').click(function(){
    switch ($(this).val()) {
      case 'faculty' :
        grads.fadeOut();
        faculty.fadeIn();
        undergrads.fadeOut();
        $('input[value=faculty]').prop('checked', true);
        break;
      case 'grad' :
        grads.fadeIn();
        faculty.fadeOut();
        undergrads.fadeOut();
        $('input[value=grad]').prop('checked', true);
        break;
      case 'undergrad' :
        grads.fadeOut();
        faculty.fadeOut();
        undergrads.fadeIn();
        $('input[value=undergrad]').prop('checked', true);
    }
  });
  $(window).scroll(function(){
    var chooseMenu = $('#mobileChooseType');
    if ($(this).scrollTop() >= $(this).height()) {
        chooseMenu.addClass('down');
    } else {
        chooseMenu.removeClass('down');
    }
  });
}
