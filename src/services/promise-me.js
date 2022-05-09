/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetCharacters() {
    console.log('1. Before async fetch');
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');

    console.log('2. async fetch complete');

    const character = await res.json();

    console.log('3. after async fetch');

   
    return { Character: character[0], totalCharacters: character.length };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */export function thenGetCharacters() {
     console.log('1. before .then fetch');

     return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
     .then((res) => res.json())
     .then((result) => ({ character: character[0], totalCharacters: result.length }))
     .then(() => console.log('2. .then fetch complete'));

     console.log('3. After .then fetch');

     return character;

 }

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

