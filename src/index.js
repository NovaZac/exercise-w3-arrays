const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  console.log(`I have ${pokemons.length} pokemons!`)
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
};

//countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort()
  console.log(pokemons)
};

//orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse()
  console.log(pokemons)
};

//flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach(pokemon => {
    console.log(pokemon.toUpperCase());
  });
};

 //makeThemBig()

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].startsWith("B")) {
      console.log(pokemons[i]);
    }
  };
};

//onlyTheBs()

const notTheCs = () => {
  // remove all pokemons that starts with C
  for (let i = 0; i < pokemons.length; i++){
    if (pokemons[i].startsWith("C")){
      pokemons.splice(i, 1);
      i--;
    }
    console.log(pokemons[i])
  }
  
};

//notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  for (let i = 0; i < pokemons.length; i++){
    console.log("Number", i, pokemons[i])
  }
};

//nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Bumblebozz")
  console.log(pokemons)
};

//catchPokemon()

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes("Ivysaur"))
  console.log(pokemons.includes("Pikachu"))
};

//didICatchIt()

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy")
  console.log(pokemons)
};

//addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let longestName = pokemons[0]
  //Start by assuming the first name in the array is the longest.

  for (i = 0; i < pokemons.length; i++){
    if (pokemons[i].length > longestName.length){
      //Iterates through all the pokemon names in the array starting from index 1
      longestName = pokemons [i]
      //if the current name is longer than the one currently stored, we update the longestName
    }
  }
  
  console.log(`The Pokémon with the longest name is: ${longestName}`);
};

theLongestName()
