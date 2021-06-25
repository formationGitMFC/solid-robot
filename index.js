const name = prompt(`Vous etes ?`);

alert(`Hello ${name} !`);

for(let i = 0; i < 10; i++) {
    const rep = confirm(`Es tu heureux ?`);
    alert(!rep ? `Non ? tu es sur ?` : `C'est bien ${name}`);
}