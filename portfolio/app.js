
$(() => {
  // MENU TOGGLE
  $('#menu-toggle').on('click', () => {
    $('#hidden-nav').toggle(500);
  })

  console.log();

  // PAGES TOGGLE

  const $toggleDivs = ($divID) => {
    $('#home-container, #project-container, #bio-container, #resume-container').addClass("hide")
    $('#home-container,#project-container, #bio-container, #resume-container').removeClass("show")
    $($divID).addClass("show")
    $($divID).removeClass("hide")
  }


  const fadeDivs = ($divID) => {
    switch(true){
      case ($('#project-container').attr('class') === 'show'):
        $(`#project-container`).fadeOut(500, () => {
        $(`${$divID}`).fadeIn(500)
        });
      case ($('#bio-container').attr('class') === 'show'):
        $(`#bio-container`).fadeOut(500, () => {
        $(`${$divID}`).fadeIn(500)
        });
      case ($('#resume-container').attr('class') === 'show'):
        $(`#resume-container`).fadeOut(500, () => {
        $(`${$divID}`).fadeIn(500)
        });
    }
  }


  $('#home-projects').on('click', () => {
    $('#home-container').fadeOut(500, () => {
      $('#project-container').fadeIn(500)
      $('#nav-bar').fadeIn(500, () => {
        $toggleDivs('#project-container')
      })
    });
    $('#title').html("PROJECTS")
  })

  $('#home-bio').on('click', () => {
    $('#home-container').fadeOut(500, () => {
      $('#bio-container').fadeIn(500)
      $('#nav-bar').fadeIn(500, () => {
        $toggleDivs('#bio-container')
      })
    });
    $('#title').html("BIO")
  })

  $('#home-resume').on('click', () => {
    $('#home-container').fadeOut(500, () => {
      $('#resume-container').fadeIn(500)
      $('#nav-bar').fadeIn(500, () => {
        $toggleDivs('#resume-container')
      })
    });
    $('#title').html("RESUME")
  })


  $('#nav-home').on('click', () => {
    $('#hidden-nav').toggle(500, fadeDivs(`#home-container`));
    $('#nav-bar').fadeOut()
    $toggleDivs('#home-container')
  })

  $('#nav-projects').on('click', () => {
    $('#hidden-nav').toggle(500, fadeDivs(`#project-container`));
    $toggleDivs('#project-container')
    $('#title').html("PROJECTS")
  })
  $('#nav-bio').on('click', () => {
    $('#hidden-nav').toggle(500, fadeDivs(`#bio-container`));
    $toggleDivs('#bio-container')
    $('#title').html("BIO")
  })
  $('#nav-resume').on('click', () => {
    $('#hidden-nav').toggle(500, fadeDivs(`#resume-container`));
    $toggleDivs('#resume-container')
    $('#title').html("RESUME")
  })



  //LINKEDIN HOVER
    $("#linkedin").hover(function(){
      $(this).attr("src", function(index, attr){
          return attr.replace("./icons/linkedin.png", "./icons/linkedin-hover.png");
      });
  }, function(){
      $(this).attr("src", function(index, attr){
          return attr.replace("./icons/linkedin-hover.png", "./icons/linkedin.png");
      });
  });


  //GITHUB HOVER
  $("#github").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("./icons/github.png", "./icons/github-hover.png");
    });
  }, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("./icons/github-hover.png", "./icons/github.png");
    });
  });


})
