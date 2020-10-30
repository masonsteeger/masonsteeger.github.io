console.log($);
$(() => {

  $('#menu-toggle').on('click', () => {
    $('#hidden-nav').toggle(1000);
  })








  const toggleDivs = ($divID) => {
    $('#project-container, #bio-container, #resume-container').addClass("hide")
    $('#project-container, #bio-container, #resume-container').removeClass("show")
    $($divID).addClass("show")
    $($divID).removeClass("hide")
    $('#hidden-nav').toggle(1000);
  }


  $('#nav-projects').on('click', () => {
    toggleDivs('#project-container')
  })
  $('#nav-bio').on('click', () => {
    toggleDivs('#bio-container')
  })
  $('#nav-resume').on('click', () => {
    toggleDivs('#resume-container')
  })

})
