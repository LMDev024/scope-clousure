// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins = 0 ;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);


function createPetList() {
    const petList = [];
    return function addPet(pet) {
      if (!pet) {
        return petList;
      }
      petList.push(pet);
    }
  }
  const myPetList = createPetList();

  console.log(myPetList("michi"));
  console.log(myPetList("firulais"));
  console.log(myPetList());