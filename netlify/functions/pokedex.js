exports.handler = async function(){
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'

    const response = await fetch(POKE_API)
    const data = await response.json()
    console.log(data)
    return{
       statusCode: 200,
       body: JSON.stringify(data)
    }
}