import { asyncGetCharacters, asyncTryGetCharacters, thenGetCharacters, thenTryGetCharacters } from "./services/promise-me";

export default function App() {
  return (
  
  <>
  <button onClick={async () => console.log(await asyncGetCharacters())}>
    async get characters
  </button>
  <button onClick={async () => console.log(await thenGetCharacters())}> .then() get characters</button>
  <button onClick={async () => console.log(await asyncTryGetCharacters)}>asyncTryGetCharacters</button>
  <button onClick={async () => console.log(await thenTryGetCharacters)}>thenTryGetCharacters</button>
  </>)
}
