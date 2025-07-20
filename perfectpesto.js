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
const oilUnitTxt = document.querySelector('.oil-unit');

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
    const basilAmt = parseFloat(basilAmount);
    pesto.basil = basilAmt;
    pesto.pasta = (basilAmt * 3.6).toFixed(1);
    pesto.cheese = (basilAmt * 0.6).toFixed(1);
    pesto.nuts = (basilAmt * 0.6).toFixed(1);
    pesto.oil = (basilAmt * 1.87).toFixed(1);
}

const changeUnits = (value) => {
    unitText.forEach((unit) => {
        unit.textContent = value;
    })
    oilUnitTxt.textContent = value === 'grams' ? 'milliliters' : 'fluid ounces';
}

qtyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const qty = qtyForm.elements.qty;
    calcPesto(qty.value);
    updateRecipe();
    recipeBox.classList.remove('hidden');
    qty.value = '';
})

unitToggle.addEventListener('change', function (e) {
    changeUnits(e.target.value);
})
