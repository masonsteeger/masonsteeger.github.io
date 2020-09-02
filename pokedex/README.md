# Pokedex

## Explanation
This is basic a pokedex that will show you a pokemon's name, national index number, types, base stats, and evolutions

##Link to Live Site
https://masonsteeger.github.io/pokedex/

## Technologies Used
All of the information used in this pokedex is being pulled from the PokeAPI (https://pokeapi.co/) the sprites are mostly from the PokeAPI's github page (https://github.com/PokeAPI/sprites) and the rest are from Bulbapedia.

My approach to building this app started with just grabbing the name, ID, and types from the API. After that I built divs that would hold the stats and evolutions for each individual pokemon. After I got the stats pulled and posted to my app, I downloaded the official artwork sprites from the PokeAPI and Bulbapedia and assigned them to pull the correct png via the userInput variable (which always returns to an ID number). After that I built my carousel which goes backward or forwards through the pokedex by ID number. Once I got all of that done I pulled information from a different area of the API to grab evolution information and append the correct sprites to those evolution names. After that I made it so you could click on a pokemon's evolution and it would take you to that pokemon's page.

Throughout coding my javascript I threw in some CSS styling, and after everything was functioning correctly I finished up my styling for mobile and desktop, added some animations and finished up!


## Unsolved Problems
I would have liked for each time a pokemon loads for the screen to have some sort of animation on load, but I couldn't figure it out in time.
