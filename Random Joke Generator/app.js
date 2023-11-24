// API_link = https://v2.jokeapi.dev/joke/Any

let para =  document.getElementById("para");
async function generate(){
    let api = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single")
    let data = await api.json();
    para.innerHTML = data.joke
}