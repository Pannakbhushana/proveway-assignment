const boxes = document.querySelectorAll(".offer-box");
const totalEl = document.querySelector(".total");

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        const radio = box.querySelector("input[type='radio']");
        radio.checked = true;

        activateBox(box);
    });
});

document.addEventListener("click", (e) => {
    const clickedInside = [...boxes].some(box => box.contains(e.target));
    if (!clickedInside) {
        boxes.forEach(box => box.classList.remove("active"));
        totalEl.textContent = "Total : $0.00 USD";
    }
});

function activateBox(selectedBox) {
    boxes.forEach(b => b.classList.remove("active"));

    selectedBox.classList.add("active");

    const price = selectedBox.dataset.price;
    totalEl.textContent = `Total : $${price}.00 USD`;
}

function createVariantRows() {
    return `
        <div class="var-headers">
        <div class="header-item">Size</div>
        <div class="header-item">Colour</div>
    </div>

    <div class="var-row">
        <span class="var-index">#1</span>

        <select class="var-select size-select">
            <option>S</option>
            <option>M</option>
            <option>L</option>
        </select>

        <select class="var-select color-select">
            <option>Black</option>
            <option>Colour</option>
            <option>White</option>
        </select>
    </div>

    <div class="var-row">
        <span class="var-index">#2</span>

        <select class="var-select size-select">
            <option>S</option>
            <option>M</option>
            <option>L</option>
        </select>

        <select class="var-select color-select">
            <option>Colour</option>
            <option>Black</option>
            <option>White</option>
        </select>
    </div>
    `;
}

document.querySelectorAll(".offer-body").forEach(offerBody => {
    offerBody.innerHTML = createVariantRows();
});
