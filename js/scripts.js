$( document ).ready(function() {
  quickRef();
  coreSwap();
  piFilter();
  faqReveal();
  selectTypeSrp();
  accordian();
  if(document.getElementById('sliderNav') != null){
    slider();
    console.log("Slider Happening");
  }
  else{console.log("no slider on page");}
//Mobile Menu
  $("#navBug").click(function(){
      $('#navtog').slideToggle('fast');
      if ($(this).attr("src") == "images/menuOpen.png") {
        $(this).attr("src", "images/menuClosed.png");
      }
      else {$(this).attr("src", "images/menuOpen.png")}
  });
  $("body > div.layout").click(function(){
    if ($('#navBug').css('display') != 'none'){
      $('#navtog').slideUp('fast');
      $('#navBug').attr("src", "images/menuClosed.png");
    }
  });
  $(window).resize(function(){
    // var pifilters = document.getElementById('pi-filter');

    if ($('#navBug').css('display') == 'none'){
      $('#navtog').css('display','block');
      $('#navBug').attr("src", "images/menuClosed.png")
    }
    else {
      $('#navtog').css('display','none')
    }
    //this hides it immediately when the window resizes. I've turned this off for now

    // contentHeight = $('#matchHeight').css('height');
    // $('#lbrnEventSidebar').css('height', contentHeight);
    // height issue 2
  });
  // collapsable sections
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
  // $(window).scroll(function() {
  //   contentHeight = $('#matchHeight').css('height');
  //   $('#lbrnEventSidebar').css('height', contentHeight);
  // });
  // Height issue source
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
  var corelis    = $('section.cores>ul>li');
  var adminTxt   = "The Administrative Core (AC) of the Louisiana Biomedical Research Network (LBRN) provides the project with its overall leadership, day-to-day management, evaluations of all of its component parts, and communication with NIH staff. The AC is led by the Principal Investigator in close consultation with the Program Coordinator, as well as the Steering Committee and External Advisory Committee."
  var bbcTxt     = "The Bioinformatics, Biostatistics, and Computational Biology Core (BBCC) of the Louisiana Biomedical Research Network (LBRN) serves to train and support project investigators and their teams across Louisiana, and to lead and support translational research activities at the frontiers of biomedical science. Its team uses both established and custom computational tools, operating at computational scales ranging from the mundane to analyses engaging many hundreds of compute cores."
  var mcbrTxt    = "Molecular and cell biology provide an essential linkage among important basic fields of biomedical science, such as genetics, developmental biology, structural biology, immunology, neurobiology, and cancer biology. The MCBRC takes advantage of existing highly organized, centralized services and equipment facilities located primarily at the LSU flagship institution in Baton Rouge, effectively uniting these units toward the common goal of supporting biomedical research performed by PUI investigators. The MCBRC will provide technical and logistical support, enabling the ready exchange of information, ideas, technology, and research capabilities among PUI investigators. MCBRC will ensure that PUI researchers have full access to state-of-the-art equipment and modern research techniques and services."
  corelis.eq(0).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Adiministrative Core');
    $('#core-swap>p').text(adminTxt);
    $('#core-swap>img').attr('src','images/admin-core_July_2018.png');
    $('#core-swap>a.button').addClass('hidden');
  });
  corelis.eq(1).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Bioinformatics, Biostatistics, and Computational Biology Core');
    $('#core-swap>p').text(bbcTxt);
    $('#core-swap>img').attr('src','images/bbc-core_Dec_2018.png');
    $('#core-swap>a.button').removeClass('hidden');
    $('#core-swap>a.button').attr('href','bbc-core.html').text('BBC Core Services');
  });
  corelis.eq(2).click(function(){
    corelis.removeClass();
    $(this).addClass('active');
    $('#core-swap>h4').text('Molecular and Cell Biology Resources Core');
    $('#core-swap>p').text(mcbrTxt);
    $('#core-swap>img').attr('src','images/mcbr-core_Jan_2019.png');
    $('#core-swap>a.button').removeClass('hidden');
    $('#core-swap>a.button').attr('href','mcbr-core.html').text('MCBR Core Services');
  });
}
function piFilter(){
  // var buttons = $('nav#pi-filter ul li');
  var fulls = $('article[data-ptype="FullProject"]');
  var starts = $('article[data-ptype="StartupProject"]');
  var shares = $('article[data-ptype="SharedInstrumentProject"]');
  var pilots = $('article[data-ptype="PilotProject"]');

  var ac = document.getElementsByClassName('Adcore'), i;
  var bc = document.getElementsByClassName('BBcore'), i;
  var mc = document.getElementsByClassName('MCcore'), i;
  var crp = document.getElementsByClassName('CRP'), i;
  var ppi = document.getElementsByClassName('PrevPPi'), i;
  var pai = document.getElementsByClassName('Parti'), i;
  var le = document.getElementsByClassName('LBRNe'), i;
  var lsc = document.getElementsByClassName('LBRNsc'), i;
  var te = $('article[data-ptype="TestElement"]');
  var oe1 = $('article[data-ptype="Old Section 1"]');
  var oe2 = $('article[data-ptype="Old Section 2"]');
  var oe3 = document.getElementsByClassName('butest'), i;
  var pitrack = 2;
  var pielement = document.getElementsByClassName('pielement'), i;
  var cmtrack = 2;
  var cmelement = document.getElementsByClassName('cmelement'), i;


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
  $("#pi-te").click(function(){
    $(this).toggleClass('on');
    te.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-os1").click(function(){
    $(this).toggleClass('on');
    oe1.slideToggle('fast');
        // console.log('dog');
  });
  $("#pi-os2").click(function(){
    $(this).toggleClass('on');
    oe2.slideToggle('fast');
        // console.log('dog');
  });
  $("#pi-ac").click(function(){
            // console.log('dog');
    for(var i=0; i < ac.length; i++)
        {
        // ac[i].style.display ='none';
          if (ac[i].style.display == "none")
            {
              ac[i].style.display = "block";
            }
            else
            {
              ac[i].style.display = "none";
            }
        }

    $(this).toggleClass('on');
    // ac.slideToggle('fast');
        // console.log('dog');
  });
$("#pi-bc").click(function(){
  // console.log('dog');
  for(var i=0; i < bc.length; i++)
      {
      // bc[i].style.display ='none';
        if (bc[i].style.display == "none")
          {
            bc[i].style.display = "block";
          }
          else
          {
            bc[i].style.display = "none";
          }
      }

  $(this).toggleClass('on');
  // bc.slideToggle('fast');
      // console.log('dog');
});


  $("#pi-lsc").click(function(){
    // console.log('dog');
    for(var i=0; i < lsc.length; i++)
        {
        // lsc[i].style.display ='none';
          if (lsc[i].style.display == "none")
            {
              lsc[i].style.display = "block";
              cmtrack++;
            }
            else
            {
              lsc[i].style.display = "none";
              cmtrack--;
            }
        }

    $(this).toggleClass('on');
        hidetitle(cmelement, cmtrack);
    // lsc.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-le").click(function(){
    // console.log('dog');
    for(var i=0; i < le.length; i++)
        {
        // le[i].style.display ='none';
          if (le[i].style.display == "none")
            {
              le[i].style.display = "block";
              cmtrack++;
            }
            else
            {
              le[i].style.display = "none";
              cmtrack--;
            }
        }

    $(this).toggleClass('on');
        hidetitle(cmelement, cmtrack);
    // le.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-pai").click(function(){
    // console.log('dog');
    for(var i=0; i < pai.length; i++)
        {
        // pai[i].style.display ='none';
          if (pai[i].style.display == "none")
            {
              pai[i].style.display = "block";
            }
            else
            {
              pai[i].style.display = "none";
            }
        }

    $(this).toggleClass('on');
    // pai.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-crp").click(function(){
    // console.log('dog');
    for(var i=0; i < crp.length; i++)
        {
        // crp[i].style.display ='none';
          if (crp[i].style.display == "none")
            {
              crp[i].style.display = "block";
              pitrack++;
              // console.log(pitrack);
            }
            else
            {
              crp[i].style.display = "none";
              pitrack--;
              // console.log(pitrack);
            }
        }

    $(this).toggleClass('on');
    hidetitle(pielement, pitrack);
    // if(pitrack == 0){
    //   console.log("trigger hide");
    // } else if (pitrack== 2){
    //     hidetitle(pielement);
    // }
    // crp.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-ppi").click(function(){
    // console.log('dog');
    for(var i=0; i < ppi.length; i++)
        {
        // ppi[i].style.display ='none';
          if (ppi[i].style.display == "none")
            {
              ppi[i].style.display = "block";
              pitrack++;
              // console.log(pitrack);
            }
            else
            {
              ppi[i].style.display = "none";
              pitrack--;
              // console.log(pitrack);
            }
        }

    $(this).toggleClass('on');
    // if(pitrack == 0){
    hidetitle(pielement, pitrack);
  // } else if (pitrack== 2){
  //     hidetitle(pielement);
  // }
    // ppi.slideToggle('fast');
        // console.log('dog');
  });

  $("#pi-mc").click(function(){
    // console.log('dog');
    for(var i=0; i < mc.length; i++)
        {
        // mc[i].style.display ='none';
          if (mc[i].style.display == "none")
            {
              mc[i].style.display = "block";
            }
            else
            {
              mc[i].style.display = "none";
            }
        }

    $(this).toggleClass('on');
    // mc.slideToggle('fast');
        // console.log('dog');
  });

// if(pitrack == 0){
//   console.log("trigger hide");
// }


}//end
function hidetitle(hidethis, trackthis){
// console.log(trackthis);
// console.log("track this:");
  if(trackthis == 0)
  {
    for(var i=0; i < hidethis.length; i++){
      if (hidethis[i].style.display != "none")
        {
          hidethis[i].style.display = "none";
        }
    }
          // console.log("trigger hide");
  } else {
    console.log("trigger show");
    for(var i=0; i < hidethis.length; i++)
    {
      if (hidethis[i].style.display == "none")
        {
          hidethis[i].style.display = "block";
        }
    }//end for
  }

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
  var choose = $('div.chooseTypeInline');
  $('input').click(function(){
    switch ($(this).val()) {
      case 'faculty' :
        // choose.fadeOut();
        grads.fadeOut();
        faculty.fadeIn();
        undergrads.fadeOut();
        $('input[value=faculty]').prop('checked', true);
        break;
      case 'grad' :
        // choose.fadeOut();
        grads.fadeIn();
        faculty.fadeOut();
        undergrads.fadeOut();
        $('input[value=grad]').prop('checked', true);
        break;
      case 'undergrad' :
        // choose.fadeOut();
        grads.fadeOut();
        faculty.fadeOut();
        undergrads.fadeIn();
        $('input[value=undergrad]').prop('checked', true);
        break;
      default :
        choose.fadeIn();
        // grads.fadeOut();
        // faculty.fadeOut();
        // undergrads.fadeOut();
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
function accordian() {
  trigger = $('.accordianTrigger');
  // section = $('section.accordianSection')
  trigger.click(function(){
    $(this).siblings('section.accordianSection').slideToggle();
  });
}
