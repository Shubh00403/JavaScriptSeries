const URL  = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");

function getFacts() {
    fetch(URL).this((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
}

btn.addEventListener("click", getFacts);
