console.log($);
$(() => {

  $('#menu-toggle').on('click', () => {
    $('#hidden-nav').toggle(500);
  })




  const toggleDivs = ($divID) => {
    $('#home-container, #project-container, #bio-container, #resume-container').addClass("hide")
    $('#home-container,#project-container, #bio-container, #resume-container').removeClass("show")
    $($divID).addClass("show")
    $($divID).removeClass("hide")
  }

  $('#home-projects').on('click', () => {
    toggleDivs('#project-container')
    $('#nav-bar').removeClass("hide")
  })
  $('#home-bio').on('click', () => {
    toggleDivs('#bio-container')
    $('#nav-bar').removeClass("hide")
  })
  $('#home-resume').on('click', () => {
    toggleDivs('#resume-container')
    $('#nav-bar').removeClass("hide")
  })
  $('#nav-home').on('click', () => {
    toggleDivs('#home-container')
    $('#nav-bar').addClass("hide")
    $('#hidden-nav').toggle(0);
  })

  $('#nav-projects').on('click', () => {
    toggleDivs('#project-container')
    $('#hidden-nav').toggle(1000);
  })
  $('#nav-bio').on('click', () => {
    toggleDivs('#bio-container')
    $('#hidden-nav').toggle(1000);
  })
  $('#nav-resume').on('click', () => {
    toggleDivs('#resume-container')
    $('#hidden-nav').toggle(1000);
  })

})
