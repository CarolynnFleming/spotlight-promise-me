import { asyncGetQuotes, getQuotes } from "./services/promise-me";

export default function App() {
const handleClick = (callback) => {
  const result = callbacl();
  console.log(resutl)
};


  return (
  
  <>
  <button onClick={() => handleclick(asyncGetQuotes)}>
    async get quotes
  </button>
  <button onClick={() => handleclick(getquotes)}> .then() get quotes</button>
  </>)
}
