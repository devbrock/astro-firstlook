
import { useState } from "react";

function MyReactComponent() {
    const [planets, setPlanets] = useState([])

    async function getPlanets(){
        let res = await fetch('https://swapi.dev/api/planets');
        let data = await res.json();
        let planets = await data.results;
        setPlanets(planets)
    }


  return (
    <div>
        <div>Star Wars Planets:</div>
        <button onClick={() => {getPlanets()}}>Fetch Planets</button>
        {planets && (
            <ul>
                {planets?.map((planet) => {
                    return (
                        <li key={planet.name}>{planet?.name}</li>
                    )
                })}
            </ul>
        )}
        
    </div>
  )
}

export default MyReactComponent