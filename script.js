const questTexts = {
    "Wilhelma": "Uhh, also wollen wir doch Giraffen kidnappen gehen :O",
    "Jojos & Kochen": "Warte immer noch auf dich, um Part 6 anfangen zu können. Ps. Dinonuggies ligen noch im TK.",
    "Nolan's Odyssey": "Ok, du willst also 3h halbnackte Männer anschauen die Boot fahren...",
    "Therme (Schulter-Reha)": "Du willst mich also halbnackt sehen... sus",
    "Baseball Abendspiel": "Hast du wirklich Lust von mir über meine alte Hyperfixation vollgeyapped zu werden..."
};

let currentQuest = "";

function openQuest(name) {
    currentQuest = name;
    document.getElementById("quest-title").innerText = name;
    document.getElementById("quest-text").innerText = questTexts[name];
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function confirmQuest() {
    // IFTTT Webhook – HIER DEIN KEY EINTRAGEN
    fetch("https://maker.ifttt.com/trigger/sidequest_confirm/with/key/DEINKEY", {
        method: "POST",
        body: JSON.stringify({ value1: currentQuest }),
        headers: { "Content-Type": "application/json" }
    });

    alert("Sidequest bestätigt: " + currentQuest);
    closePopup();
}