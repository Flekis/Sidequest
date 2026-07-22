const questTexts = {
    "Wilhelma": "Uhh, also wollen wir doch Giraffen kidnappen gehen :O",
    "Jojos & Kochen": "Warte immer noch auf dich, um Part 6 anfangen zu können. Ps. Dinonuggies ligen noch im TK.",
    "Nolan's Odyssey": "Ok, du willst also 3h halbnackte Männer anschauen die Boot fahren...",
    "Therme (Schulter-Reha)": "Du willst mich also halbnackt sehen... sus",
    "Baseball Abendspiel": "Hast du wirklich Lust von mir über meine alte Hyperfixation vollgeyapped zu werden..."
};

let currentQuest = "";

// Öffnet das Popup und zeigt die Questbeschreibung
function openQuest(name) {
    currentQuest = name;
    document.getElementById("quest-title").innerText = name;
    document.getElementById("quest-text").innerText = questTexts[name];
    document.getElementById("popup").classList.remove("hidden");
}

// Schließt das Popup
function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

// Wird ausgeführt, wenn sie "Confirm" klickt
function confirmQuest() {
    sendNotification(currentQuest); // Discord-Benachrichtigung
    alert("Sidequest bestätigt: " + currentQuest);
    closePopup();
}

// Schickt die Benachrichtigung an deinen Discord-Webhook
function sendNotification(quest) {
    fetch("https://discordapp.com/api/webhooks/1529483138177175722/LfOapjKXT1PRNMi1SVWyr-TJklZ3UI27kB5yN7uaPAYX30pjMOB_vVgVXQmgX-xq0yEM", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `Sie hat **${quest}** bestätigt!`
        })
    });
}