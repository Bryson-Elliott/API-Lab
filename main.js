
let button = document.querySelector("#button-1");

function buttonClicked() {
    console.log("You clicked the Button")
    axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    
    console.log(res.data.results)
})
};



button.addEventListener('click', buttonClicked);

