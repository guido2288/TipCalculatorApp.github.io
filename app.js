const entryAmount = document.getElementById('entryAmount'); 
const number = document.getElementById('valueBill'); //BILL AMOUNT
const amountDisplay = document.getElementById('amountDisplay'); // TIP AMOUNT DISPLAY
const totalDisplay = document.getElementById('totalDisplay');
const tip1 = document.getElementById('5');
const tip2= document.getElementById('10');
const tip3 = document.getElementById('15');
const tip4 = document.getElementById('25');
const tip5 = document.getElementById('50');
const entryPeople = document.getElementById('entryPeople');
const peopleAmount = document.getElementById('peopleAmount');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const error = document.getElementById('error');
const entryCustomTip = document.getElementById('customAmount');
const customTip = document.getElementById('custom');


let tipArray = [tip1, tip2, tip3, tip4, tip5];
let selected ;

let tipValue = 0;
let billValue = 0;
let peopleValue = 0;

entryAmount.addEventListener('change' , (e) => {
    e.preventDefault();
    billValue = number.value;
});

const deleteSelected = () => {
    for (let i = 0; i < tipArray.length; i++) {
       tipArray[i].classList.remove('tipSelected');
        
    }
}

entryCustomTip.addEventListener('change' , (e) => {
    e.preventDefault();

    deleteSelected();
    tipValue = customTip.value / 100;
    
})


for (let i = 0; i < tipArray.length; i++) {
    
    tipArray[i].addEventListener('click', (e) => {
        if (tipArray[i] !==  selected && selected != null) {
            deleteSelected();
        };
        tipArray[i].classList.add('tipSelected');
        selected = tipArray[i]
        
        switch (tipArray[i]) {
            case tip1:
                tipValue = 0.05;
                break;
            case tip2:
                tipValue = 0.10;
                break;
            case tip3:
                tipValue = 0.15;
                break;
            case tip4:
                tipValue = 0.25;
                break;
            case tip5:
                tipValue = 0.50;
             break;
        }


    })
    
};


entryPeople.addEventListener('change' , (e) => {
    e.preventDefault();


    if (peopleAmount.value == 0) {
        error.className = 'error';
    } else {
        peopleValue = peopleAmount.value;
        error.className = 'noError';

    }
    
});


const calculateTipAmount = () => {
    let resultTipAmount =( billValue *  tipValue) / peopleValue;


    if (resultTipAmount !== NaN) {
        amountDisplay.textContent = "$" + parseFloat(resultTipAmount).toFixed(2);
    } else{
        amountDisplay.textContent = 0.00;
    }

}

const calculateTotal = () => {
    
    let resultTotal = ((billValue * tipValue) +  Number(billValue) ) / peopleValue;

    totalDisplay.textContent = "$" + parseFloat(resultTotal).toFixed(2);

}



submit.addEventListener('click', () => {
    calculateTipAmount();
    calculateTotal();
})


reset.addEventListener('click' , () => {
    window.location.reload();
})