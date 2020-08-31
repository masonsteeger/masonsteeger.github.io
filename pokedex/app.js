$(() => {
  //setting userInput to be the first pokemon in the index
  let userInput = 1;
  //to reference back to evoChain across scope
  let evoChain = null
  // function to pull data from API & append to divs
  const pullData = () => {
    //creating divs for pokemon information
    let $nameDiv = $('<div>').attr('id','name');
    let $idDiv = $('<div>').attr('id','id').text('Nat. Index: #');
    let $typeDiv = $('<div>').attr('id','type').text('Type:  ');
    let $statsDiv = $('<div>').attr('id','stats');
    let $statsMenu = $('<div>').text('vv Base Stats vv');
    let $evoDiv = $('<div>').attr('id','evolutions').css('display','none');
    let $evoMenu = $('<div>').text('vv Evolutions vv');
    //removing previous children from divs & sprite display
    $('.sprite').css('display', 'none')
    $('.pokemon-info').children().remove();
    $('.stats').children().remove();
    $('.evolutions').children().remove();
    // stuff for evolution chain data
    const pullEvo = () => {
      $.ajax({
        url: evoChain
      }).then(
        data => {
          //checking to see if a pokemon has any evolutions
          if(data.chain.evolves_to.length > 0){
            $('.evolutions').append($evoMenu);
            $('.evolutions').append($evoDiv);
            let evo1 = $('<div>').attr('id','evo1');
            evo1.text(data.chain.species.name).css('text-transform','capitalize').css('margin-bottom','20px');
            let evo2 = $('<div>').attr('id','evo2');
            evo2.text(data.chain.evolves_to[0].species.name).css('text-transform','capitalize').css('margin-bottom','20px');
            $evoDiv.append(evo1).append(evo2)
            //checking to see if a pokemon has 3 evolutions in the chain
            if(data.chain.evolves_to[0].evolves_to.length > 0){
              let evo3 = $('<div>').attr('id','evo3');
              evo3.text(data.chain.evolves_to[0].evolves_to[0].species.name).css('text-transform','capitalize').css('margin-bottom','20px');
              $evoDiv.append(evo3);
            }
            $evoMenu.on('click', () => {
              $evoDiv.toggle('slow');
            })
            console.log(data);
            console.log(data.chain.species.name);
            console.log(data.chain.evolves_to[0].species.name);
            console.log(data.chain.evolves_to[0].evolves_to[0].species.name);
          //if a pokemon has no evolutions
          }else{
            noEvo = $('<div>').text('No Evolutions');
            $('.evolutions').append($evoMenu);
            $('.evolutions').append($evoDiv);
            $evoDiv.append(noEvo).css('display','none')
            $evoMenu.on('click', () => {
              $evoDiv.toggle('slow');
            })
          }



        }
      )
    }
    $.ajax({
      //pulling individual species info from url and setting the userInput to the index number so the next ajax call can access it
      url: 'https://pokeapi.co/api/v2/pokemon-species/'+userInput
    }).then(
      data => {
      userInput = (data.id)
      if(data.evolution_chain !== null){
        evoChain = (data.evolution_chain.url)
        pullEvo();
      }
      $.ajax({
        //pulling individual pokemon name, ID, type, and base stats
        url: 'https://pokeapi.co/api/v2/pokemon/'+userInput
      }).then(
        data => {
          //appending info divs to main div
          $('.pokemon-info').append($nameDiv).append($idDiv).append($typeDiv);
          $('.stats').append($statsMenu)
          $('.stats').append($statsDiv);
          //grabbing info from API
          let $name = (data.species.name);
          if($name.length > 13){
            $('#name').css('font-size', '48px')
          }
          let $id = (data.id);
          let $hp = (data.stats[0].base_stat);
          let $atk = (data.stats[1].base_stat);
          let $def = (data.stats[2].base_stat);
          let $spatk = (data.stats[3].base_stat);
          let $spdef = (data.stats[4].base_stat);
          let $spd = (data.stats[5].base_stat);
          //appending name/id to main div
          $nameDiv.append($name).css('text-transform', 'capitalize');
          $idDiv.append($id);
          //going through a loop to append types and assign type colors
          for(i = 0; i < data.types.length; i++){
            let $type = (data.types[i].type.name);
            let $typeColorDiv = $('<div>').addClass('type')
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
          //appending stats to $statsDiv
          let $hpDiv = $('<div>').text('HP: ');
          let $atkDiv = $('<div>').text('ATK: ');
          let $defDiv = $('<div>').text('DEF: ');
          let $spatkDiv = $('<div>').text('SP. ATK: ');
          let $spdefDiv = $('<div>').text('SP. DEF: ');
          let $spdDiv = $('<div>').text('SPD: ');
          let columnOne = $('<div>').attr('id','stat-column1').css('display','none').css('margin-bottom','20px');
          let columnTwo = $('<div>').attr('id','stat-column2').css('display','none').css('margin-bottom','20px');
          $hpDiv.append($hp);
          $atkDiv.append($atk);
          $defDiv.append($def);
          $spatkDiv.append($spatk);
          $spdefDiv.append($spdef);
          $spdDiv.append($spd);
          columnOne.append($hpDiv).append($atkDiv).append($defDiv);
          columnTwo.append($spatkDiv).append($spdefDiv).append($spdDiv);
          $statsDiv.append(columnOne).append(columnTwo)
          //toggling the appearance of stats div
          $('.stats').on('click', () => {
            columnOne.toggle('slow');
            columnTwo.toggle('slow');
          })
          $('.sprite').css('display', 'block').css('background-image',`url(pokemon-art/${userInput}.png)`)
        }
      )
    })
  }   //end of pullData()
  //adding buttons for carousel
  const leftButton = $('<button>').attr('type','submit').attr('id','back').text('<')
  const rightButton = $('<button>').attr('type','submit').attr('id','forward').text('>')
  $('.nav').prepend(leftButton)
  $('.nav').append(rightButton)
  //When a search is performed
  $('form').on('submit' , event => {
    event.preventDefault();
    userInput = ($('#search-bar').val().toLowerCase())
    pullData();
    //resetting the search bar to be empty
    $('form').trigger('reset');
  })
  //carousel functions to cycle through pokemon index #s
  $('#forward').on('click', () => {
    let nextID = userInput +=1
    if (nextID > 893){
      userInput = 1
    }
    pullData()
  })
  $('#back').on('click', () => {
    let backID = userInput -=1
    if (backID < 1){
      userInput = 893
    }
    pullData()
  })
  pullData();
})
