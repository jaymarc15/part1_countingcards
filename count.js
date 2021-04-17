countingCards = () => {
    let count = 0;
    let seq = document.getElementById("countingsequence").value;
    happyCard = (card) => {
        card == 2 || card == 3 || card == 4 || card == 5 || card == 6 ? count ++ : console.log()
        card == 7 || card == 8 || card == 9 ? count : console.log()
        card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A' ? count -- : console.log()
        result = count + (count > 0 ? 'Bet' : 'Hold');
        return count;

    }
    if (seq === '1') {
        document.querySelector('#score', happyCard(2) + happyCard(3) + happyCard(4) + happyCard(5) + happyCard(6)).textContent = result;
    }

    if (seq === '2') {
        document.querySelector('#score', happyCard(7) + happyCard(8) + happyCard(9)).textContent = result;
    }

    if (seq === '3') {
        document.querySelector('#score', happyCard(10) + happyCard('J') +happyCard('Q') +happyCard('K') + happyCard('A')).textContent = result;
    }

    if (seq === '4') {
        document.querySelector('#score', happyCard(3) + happyCard(7) + happyCard('Q') + happyCard(8) + happyCard('A')).textContent = result;
    }

    if (seq === '5') {
        document.querySelector('#score', happyCard(2) + happyCard('J') + happyCard(9) + happyCard(2) + happyCard(7)).textContent = result;
    }

    if (seq === '6') {
        document.querySelector('#score', happyCard(2) + happyCard(2) + happyCard(10)).textContent = result;
    }

    if (seq === '7') {
        document.querySelector('#score', happyCard(3) + happyCard(2) + happyCard('A') + happyCard(10) + happyCard('K')).textContent = result;
    }
    
}
reset = (clear) =>{
    clear = document.querySelector('#score').textContent = '--';
}