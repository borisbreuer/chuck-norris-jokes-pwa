
const apiOutput = document.querySelector('#apiOutput')

const getJoke = async () => {
    const randomJokeURL = 'https://api.chucknorris.io/jokes/random'
    try {
        const response = await fetch(randomJokeURL)
        const data = await response.json()
        apiOutput.textContent = data.value
    } catch (err) {
        console.error('My Error: ', err)
    }
}

const btnGetJoke = document.querySelector('#btnGetJoke')
btnGetJoke.addEventListener('click', getJoke)

const getCachedJoke = async () => {
    const randomJokeURL = 'https://api.chucknorris.io/jokes/random?cache=true'
    try {
        const response = await fetch(randomJokeURL)
        const data = await response.json()
        apiOutput.textContent = data.value
    } catch (err) {
        console.error('My Error: ', err)
    }
}

const btnGetCachedJoke = document.querySelector('#btnGetCachedJoke')
btnGetCachedJoke.addEventListener('click', getCachedJoke)
