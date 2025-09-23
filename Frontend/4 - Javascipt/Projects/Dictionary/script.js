async function fetchDefinition() {
  const word = document.getElementById("wordInput").value.trim();
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    document.getElementById("word").textContent = result[0].word;

    const definitionsList = document.getElementById("definitions");
    definitionsList.innerHTML = "";

    let defs = result[0].meanings[0].definitions.slice(0, 4);

    defs.forEach(def => {
      let li = document.createElement("li");
      li.textContent = def.definition;
      definitionsList.appendChild(li);
    });

  } catch (error) {
    console.error(error);
    document.getElementById("word").textContent = "";
    document.getElementById("definitions").innerHTML = "<li>Word Not Found</li>";
  }
}
