function greeting() {
    let userName = "Oscar";

    function displayUserName(){
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g); //Retornando la definicion de la funcion
console.log(g()); //Nos entrega el valor de la funcion