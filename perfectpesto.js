// Setting up an object to hold the amount of each pesto ingredient
const pesto = {
    basil: 70,
    pasta: 252,
    cheese: 42,
    nuts: 42,
    oil: 130.9
}
//selecting the recipe ID to add and remove classes
const recipeBox = document.querySelector('#recipe');
const qtyForm = document.querySelector('#qtyForm');
const unitToggle = document.querySelector('#selectedUnits');
const unitText = document.querySelectorAll('.unit-txt');

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
    pesto.pasta = (basilAmount * 3.6).toFixed(2);
    pesto.cheese = (basilAmount * 0.6).toFixed(2);
    pesto.nuts = (basilAmount * 0.6).toFixed(2);
    pesto.oil = (basilAmount * 1.87).toFixed(2);
}

const changeUnits = (value) => {
    unitText.forEach(unit) => {
        unit = value;
    }
}

qtyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const qty = qtyForm.elements.qty;
    calcPesto(qty.value);
    updateRecipe();
    recipeBox.classList.remove('hidden');
    qty.value = '';
})

unitToggle.addEventListener('select', function (e) {
    changeUnits(e.target.value);
})
