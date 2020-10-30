const array = [1, 2, 3];
console.log(...array);

let id = 1;
let name = '小明';
const obj = {
    id, name,
    function() {
        console.log(1);
    }
}

const f = function () {
    return {a: 1, b: 2};
}

let obj2 = {...obj};
console.log(obj2);

let obj3 = {...f};
console.log(obj3);