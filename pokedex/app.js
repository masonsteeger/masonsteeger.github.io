

$(() => {

  //When a search is performed
  $('form').on('submit' , event => {
    event.preventDefault();
    //removing previous children from container div
    $('.pokemon-info').children().remove();
    //creating divs for serched pokemon stats/attr
    let $nameDiv = $('<div>').attr('id','name').text('Name: ');
    let $idDiv = $('<div>').attr('id','id').text('National Index: ')
    let $typeDiv = $('<div>').attr('id','type').text('Type: ')
    //defining the user's desired pokemon search
    let userInput = ($('#search-bar').val().toLowerCase());
    if (userInput === ''){
      alert('Please Enter a Pokemon Name or National Index Number')
      return
    }
    $.ajax({
      //pulling data from the API via userInput
      url: 'https://pokeapi.co/api/v2/pokemon/'+userInput
    }).then(
      data => {
        $('.pokemon-info').append($nameDiv)
        $('.pokemon-info').append($idDiv)
        let $name = (data.name)
        let $id = ('#'+data.id)
        $('#name').append($name).css('text-transform', 'capitalize');
        $('#id').append($id)
        console.log(data);
        console.log(data.types[0].type.name);
      }
    )
    $('form').trigger('reset')
  })
})
