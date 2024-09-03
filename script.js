document.getElementById('deal-button').addEventListener('click', () => {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    const hand = [];
    
    for (let i = 0; i < 5; i++) {
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const value = values[Math.floor(Math.random() * values.length)];
        hand.push(`${value}${suit}`);
    }
    
    displayHand(hand);
});

function displayHand(hand) {
    const handElement = document.getElementById('player-hand');
    handElement.innerHTML = ''; // Clear previous cards

    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card;
        handElement.appendChild(cardElement);
    });
}
