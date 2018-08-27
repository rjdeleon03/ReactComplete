
// Var can be reassigned and redefined
var nameVar = 'Andrew';
console.log('nameVar:', nameVar);

// Let can be reassigned but NOT redefined
let nameLet = 'Jen';
nameLet = 'Mark';
console.log('nameLet:', nameLet);

// Const can NOT be reassigned nor redefined
const nameConst = 'Frank';
console.log('nameConst:', nameConst);


function getPetName() {
    let petName = 'Hal';
    return petName;
}

// Var is NOT block scoped
// Let and const are block scoped
