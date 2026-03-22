'use strict';

/**
 * A random joke generator using the JokeAPI external API.
 * 
 * This script fetches a random joke and logs it to the console. 
 * It includes error handling for network issues and API response errors.
 * 
 * @module jokeGenerator
 */

const fetch = require('node-fetch');

/**
 * Fetches a random joke from JokeAPI.
 * 
 * @async
 * @function fetchJoke
 * @returns {Promise<string>} The random joke.
 * @throws {Error} Throws an error if the fetch operation fails or if the response is not ok.
 */
async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();

        if (data.type === 'single') {
            return data.joke;
        } else {
            return `${data.setup} - ${data.delivery}`;
        }
    } catch (error) {
        console.error('Error fetching joke: ', error);
        throw new Error('Failed to fetch joke');
    }
}

/**
 * Main function to run the joke generator.
 */
async function main() {
    try {
        const joke = await fetchJoke();
        console.log('Random Joke: ', joke);
    } catch (error) {
        console.error('Failed to get a joke: ', error.message);
    }
}

main();
