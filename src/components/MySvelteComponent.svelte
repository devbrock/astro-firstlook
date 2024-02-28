<script>
   export let ships = [];

    async function getShips(){
        let res = await fetch("https://swapi.dev/api/starships");
        let data = await res.json();
        ships = await data.results;
    }

</script>

<div>
  <p>Star Wars Ships:</p>
  <button on:click={getShips}>Fetch Ships</button>
    <ul>
    {#each ships as ship}
        <li>{ship.name}</li>
    {/each}
    </ul>
</div>
