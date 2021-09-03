const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },

  {
    id: 6,
    name: "devy",
    img: "https://i1.endoftheinter.net/i/n/41ef606fc9ee18903e885eecb7d282ea/587486.jpg",
    likes: 1000000
  },
];

// access elements and select them
const pokeContainer = document.querySelector('#poke-container')

const pokeForm = document.getElementById
('poke-form')
///console.log(pokeForm)

// document.querySelector()
const goalsDiv = document.querySelector
('#pokeContainer')
console.log(goalsDiv)

//document-querySelectorAll()
// returns a collection of elements that match the selector
// .forEach can be used on this collection
// returns a NodeList
// !!! look into nodeList vs HTMLcollection

const allDivs = document.querySelectorAll('div')
console.log(allDivs)

// change something based on what our user actually did with the application>
    // access element before doing anything else with it
     

// creating elements

pokemons.forEach(function(pokemon){
  renderPokemon(pokemon)
})

// pass each object to another method

// pokemons.forEach(renderPokemon)
//^^can wrap it as so

function renderPokemon(character){
  // create elements that display our characters properties to the DOM
// accept item by creating new parameter (character) 
              //console.log to check work'

// create a div
const pokeCard = document.createElement('div')
pokeCard.id = `poke-${character.id}`  // id here is separate from one represented on DOM
pokeCard.className = "poke-card"

const pokeImg = document.createElement('img')
pokeImg.src = character.img                        /// created image element
pokeImg.alt = `${character.name} image`

//adding pokeCard to pokeContainer

pokeCard.appendChild(pokeImg)                       /// appended img element to the cards
pokeContainer.appendChild(pokeCard)
}

// document.createElement()
  // creates nodes

              // .innerHTML (can produce security issues)
                // creates strings that represent the element


// updating elements
  // select element to change, set it equal to new value
const header = document.querySelector('#header')
header.append = `<img id="header-img"
src="https://m.media-amazon.com/images/M/MV5BNzlhYjEzOGItN2MwNS00ODRiLWE5OTItYThiNmJlMTdmMzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"/>`

const headerImg = document.createElement('img')
const h1 = document.querySelector('h1')
console.log(h1)



// remove elements from our DOM

// .remove() called on the targeted element
const lectureGoals = document.querySelector('#lecture-goals')
lectureGoals.remove()

const h3 = document.createElement("h3")
const pika = document.createTextNode("Pikachu")
h3.appendChild(pika)

pokeCard.appendChild(h3)

var btn = document.createElement("button");
btn.className = "like-bttn"
btn.createTextNode = "♥"
