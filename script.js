const questTexts = {

    "Wilhelma":
        "Uhh, also wollen wir doch Giraffen kidnappen gehen :O",


    "Jojos & Kochen":
        "Warte immer noch auf dich, um Part 6 anfangen zu können. Ps. Dinonuggies liegen noch im TK.",


    "Nolan's Odyssey":
        "Ok, du willst also 3h halbnackte Männer anschauen die Boot fahren...",


    "Therme (Schulter-Reha)":
        "Du willst mich also halbnackt sehen... sus",


    "Baseball Abendspiel":
        "Hast du wirklich Lust von mir über meine alte Hyperfixation vollgeyapped zu werden..."

};



let currentQuest = "";



function openQuest(name) {


    currentQuest = name;


    document.getElementById("quest-title").textContent = name;


    document.getElementById("quest-text").textContent =
        questTexts[name];


    document
        .getElementById("popup")
        .classList
        .add("show");

}



function closePopup() {


    document
        .getElementById("popup")
        .classList
        .remove("show");

}



function confirmQuest() {


    sendNotification(currentQuest);


    alert("🎮 Sidequest bestätigt: " + currentQuest);


    closePopup();

}



function sendNotification(quest) {


    fetch("DEIN_DISCORD_WEBHOOK_HIER", {


        method: "POST",


        headers: {

            "Content-Type": "application/json"

        },


        body: JSON.stringify({

            content:
            `🎮 Sie hat die Sidequest **${quest}** bestätigt!`

        })


    });

}