import "./App.css";
import { useState } from "react";
import axios from "axios";
import Word from "./Word";

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);

  async function submitWord(e) {
    e.preventDefault();
    setData(null);
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    setWord("");
    setData(res.data[0]);
  }

  return (
    <div className="container">
      <h1>English Dictionary</h1>
      <form className="wordForm" onSubmit={submitWord}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Word data={data} />
    </div>
  );
}

export default App;
