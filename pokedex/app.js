

$(() => {
  //When a search is performed
  $('form').on('submit' , event => {
    event.preventDefault();
    //removing previous children from container div
    $('.pokemon-info').children().remove();
    //creating divs for serched pokemon stats/attr
    let $nameDiv = $('<div>').attr('id','name').text('Name: ');
    let $idDiv = $('<div>').attr('id','id').text('Nat. Index: ');
    let $typeDiv = $('<div>').attr('id','type').text('Type:  ');
    //defining the user's desired pokemon search
    let userInput = ($('#search-bar').val().toLowerCase());
    if (userInput === ''){
      alert('Please Enter a Pokemon Name or National Index Number');
      return
    }
    $.ajax({
      //pulling data from the API via userInput
      url: 'https://pokeapi.co/api/v2/pokemon/'+userInput
    }).then(
      data => {
        //appending info to main div
        $('.pokemon-info').append($nameDiv).append($idDiv).append($typeDiv)
        //grabbing info from API
        let $name = (data.name);
        let $id = ('#'+data.id);
        //going through a loop to append types and assign type colors
        for(i = 0; i < data.types.length; i++){
          let $type = (data.types[i].type.name);
          let $typeColorDiv = $('<div>').addClass('type')
          console.log($type);
          if($type === 'normal'){
            $typeColorDiv.append($type).css('background-color', 'rgb(168,168,119)')
          }else if($type === 'fire'){
            $typeColorDiv.append($type).css('background-color', 'rgb(232,128,48)')
          }else if($type === 'fighting'){
            $typeColorDiv.append($type).css('background-color', 'rgb(192,48,40)')
          }else if($type === 'water'){
            $typeColorDiv.append($type).css('background-color', 'rgb(104,144,240)')
          }else if($type === 'flying'){
            $typeColorDiv.append($type).css('background-color', 'rgb(168,144,240)')
          }else if($type === 'grass'){
            $typeColorDiv.append($type).css('background-color', 'rgb(120,200,80)')
          }else if($type === 'poison'){
            $typeColorDiv.append($type).css('background-color', 'rgb(160,64,160)')
          }else if($type === 'electric'){
            $typeColorDiv.append($type).css('background-color', 'rgb(246,208,48)')
          }else if($type === 'ground'){
            $typeColorDiv.append($type).css('background-color', 'rgb(224,192,104)')
          }else if($type === 'psychic'){
            $typeColorDiv.append($type).css('background-color', 'rgb(226,87,137)')
          }else if($type === 'rock'){
            $typeColorDiv.append($type).css('background-color', 'rgb(184,160,56)')
          }else if($type === 'ice'){
            $typeColorDiv.append($type).css('background-color', 'rgb(152,216,216)')
          }else if($type === 'bug'){
            $typeColorDiv.append($type).css('background-color', 'rgb(168,184,32)')
          }else if($type === 'dragon'){
            $typeColorDiv.append($type).css('background-color', 'rgb(113,62,248)')
          }else if($type === 'ghost'){
            $typeColorDiv.append($type).css('background-color', 'rgb(112,88,152)')
          }else if($type === 'dark'){
            $typeColorDiv.append($type).css('background-color', 'rgb(112,88,72)')
          }else if($type === 'steel'){
            $typeColorDiv.append($type).css('background-color', 'rgb(184,184,208)')
          }else if($type === 'fairy'){
            $typeColorDiv.append($type).css('background-color', 'rgb(234,153,172)')
          }
          $typeDiv.append($typeColorDiv)
          $typeDiv.append(' ');
        }
        //appending name/id to main div
        $nameDiv.append($name).css('text-transform', 'capitalize');
        $idDiv.append($id);
        console.log(data);
      }
    )
    //resetting the search bar to be empty
    $('form').trigger('reset');
  })
})
