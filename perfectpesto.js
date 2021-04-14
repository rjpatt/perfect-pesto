// Setting up an object to hold the amount of each pesto ingredient
const pesto = {
    basil: 70,
    pasta: 252,
    cheese: 42,
    nuts: 42,
    oil: 130.9
}

//a function to update the text in the recipe
const updateRecipe = () => {
    document.querySelector(".basil-grams").textContent = pesto.basil;
    document.querySelector(".pasta").textContent = pesto.pasta;
    document.querySelector(".cheese").textContent = pesto.cheese;
    document.querySelector(".nuts").textContent = pesto.nuts;
    document.querySelector(".oil").textContent = pesto.oil;
}

//a function to update the pesto object with ingredient amounts based on user input
const calcPesto = basilAmount => {
    pesto.basil = basilAmount;
    pesto.pasta = (basilAmount * 3.6);
    pesto.cheese = (basilAmount * 0.6);
    pesto.nuts = (basilAmount * 0.6);
    pesto.oil = (basilAmount * 1.87);
}