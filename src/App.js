import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Search'


function App() {

  const [state, setState] = useState({
    s: "",
    result: [],
    selected: {}
  })

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=8ac0f817"

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        // console.log(data)

        let results = data.Search

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Blockbuster Movie App</h1>
        <h6>"Movie Database"</h6>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
