//Part 1

let makeJuice = (size) => {
    let addIngredients = (ing_1, ing_2, ing_3) => {

        let displayIngredient = document.createElement('div');
        displayIngredient.innerHTML = `The client wants a ${size} juice, containing ${ing_1}, ${ing_2}, ${ing_3}`
        

        let newDiv =  document.getElementById('div2-p2');
        
        newDiv.appendChild(displayIngredient);

        let ingredients = [];

        addIngredients.push(ingredients);
        
    }
        addIngredients('coffee', 'milk', 'water');
}
makeJuice('small');

//Part 2

