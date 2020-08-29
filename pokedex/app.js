

$(() => {
  $('form').on('submit' , event => {
    event.preventDefault();
    const userInput = ($('#search-bar').val());
    $('form').trigger('reset')
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/'+userInput
    }).then(
      data => {
        console.log(data);
      }
    )
  })
})
