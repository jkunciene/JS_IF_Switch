let n=100;
let m=14;
let k;
if(n%m ==0){
    k=n/m;
} else {k=Math.ceil(n/m)}
console.log(k);


const button= document.querySelector('button')
const reiksme = document.querySelector('input')
const rezultatas= document.getElementById('irasui')

button.addEventListener('click', setPazymys)
function setPazymys() {
    let pazymys = Number(reiksme.value);
    console.log(typeof pazymys, pazymys);
    switch (pazymys) {

        case 1:
            text = "Ojei kaip baisu"
            break;
        case 2:
            text = "Ojei kaip baisu"
            break;
        case 3:
            text = "Ojei kaip baisu"
            break;
        case 4:
            text = "Ojei kaip baisu"
            break;
        case 5:
            text = "Teigiamas, bet tu gali geriau"
        case 6:
            text = "Teigiamas, bet tu gali geriau"
        case 7:
            text = "Teigiamas, bet tu gali geriau"
        case 8:
            text = "Geras"
            break;
        case 9:
            text = "Labai gerai"
            break;
        case 10:
            text = "Puiku relax"
            break;
        default:
            text = "Įveskite pažymio reikšmę sveikaisiais skaičiais"
            break;
    }
    rezultatas.innerHTML = text;
}

const s=["j","a","v","a","s","c","r","i","p","t"];
function printLetter(s) {
    const balses=["a", "e", "i", "o", "u"];
    for(let x in s){
        if(Object.values(balses).includes(s[x])){
            console.log(s[x]);
        }
    }
    for(let x in s){
        if(!Object.values(balses).includes(s[x])){
            console.log(s[x]);
        }
    }
}
printLetter(s);