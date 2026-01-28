let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let yayMessage = document.getElementById("yay");
let yesSize = 20;
let messages = [
    "Jestes pewna?? :(", 
    "A jakbym ladnie poprosill", 
    "A moze jakies jedzenie?", 
    "A jakbym dal ci kwiatki?", 
    "Ladnie Proooszeee", 
    "PROOOOOSZE", 
    "Ale :("
];
let usedMessages = new Set();

noButton.addEventListener("click", function() {
    yesSize *= 1.5; 
    yesButton.style.fontSize = yesSize + "px";
    
    if (usedMessages.size === messages.length) {
        usedMessages.clear(); 
    }
    
    let availableMessages = messages.filter(msg => !usedMessages.has(msg));
    let randomMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];
    
    usedMessages.add(randomMessage);
    noButton.textContent = randomMessage;
});

yesButton.addEventListener("click", function() {
    document.querySelector('.container').style.display = "none";  // Dodaj tę linię, aby ukryć początkowy kontener
    yesButton.style.display = "none";
    noButton.style.display = "none";
    yayMessage.style.display = "block";
    shy.style.display = "none";
    question.style.display = "none";
});