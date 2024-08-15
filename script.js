const toggleButton = document.getElementById("toggleButton");
const shapeContainer = document.querySelector(".shape-container");

let currentShape = 0;

toggleButton.addEventListener("click", () => {
    currentShape = (currentShape + 1) % 3;

    if (currentShape === 0) {
        shapeContainer.innerHTML = `
            <div class="shape pyramid">
                <div class="shape__container">
                    <span class="shapeOB" style="--i:0;"></span>
                    <span class="shapeOB" style="--i:1;"></span>
                    <span class="shapeOB" style="--i:2;"></span>
                    <span class="shapeOB" style="--i:3;"></span>
                </div>
                <div class="glow"></div>
            </div>`;
    } else if (currentShape === 1) {
        shapeContainer.innerHTML = `
            <div class="shape shape-2">
                <div class="shape__container">
                    <span class="shapeOB" style="--i:0;"></span>
                    <span class="shapeOB" style="--i:1;"></span>
                    <span class="shapeOB" style="--i:2;"></span>
                    <span class="shapeOB" style="--i:3;"></span>
                </div>
                <div class="glow"></div>
            </div>`;
    } else if (currentShape === 2) {
        shapeContainer.innerHTML = `
            <div class="shape cube">
                <div class="top"></div>
                <div class="glow"></div>
                <div class="shape__container">
                    <span class="shapeOB" style="--i:0;"></span>
                    <span class="shapeOB" style="--i:1;"></span>
                    <span class="shapeOB" style="--i:2;"></span>
                    <span class="shapeOB" style="--i:3;"></span>
                </div>
            </div>`;
    }
});
