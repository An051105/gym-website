const priceCards = document.querySelectorAll(".price-card");

priceCards.forEach(card => {
    card.addEventListener("click", () => {

        // remove featured from all
        priceCards.forEach(c => c.classList.remove("featured"));

        // add featured to clicked card
        card.classList.add("featured");
    });
});
