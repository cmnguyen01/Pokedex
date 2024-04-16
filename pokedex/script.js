const pokeContainer=document.getElementById('pokeContainer')
const pokeCount=1052
const color={
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const mainTypes=Object.keys(color)

const fetchPokemon=async()=>{
    for(let i=1; i<=pokeCount;i++)
    {
        await getPokemon(i)
    }
}

const getPokemon=async(count)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${count}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard=async(pokemons)=>{
	const pokemon=document.createElement('div')
	pokemon.classList.add('pokemon')

	const name=pokemons.name[0].toUpperCase()+pokemons.name.slice(1)
	const pokeType=pokemons.types.map(type=>type.type.name)
	const colortype=mainTypes.find(type=>pokeType.indexOf(type)>-1)
	const colors=color[pokeType]

	pokemon.style.backgroundColor=colors

	const pokemonInnerHTML=
	`
	<div class="pokeContainer" id="pokeContainer"></div>
    <div class="imgContainer">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png" alt="">
      <span class="entryNumber">${pokemons.id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">type <span>${colortype}</span></small>
    </div>
	`
	pokemon.innerHTML=pokemonInnerHTML
	pokeContainer.appendChild(pokemon)
}

fetchPokemon()