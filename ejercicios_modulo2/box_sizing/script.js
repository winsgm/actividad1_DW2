// =========================================================
// 🚀 DEMO INTERACTIVA DE BOX-SIZING - VERSIÓN FUTURISTA
// =========================================================

// Elementos UI
const widthSlider = document.getElementById('widthSlider');
const paddingSlider = document.getElementById('paddingSlider');
const borderSlider = document.getElementById('borderSlider');

const widthValue = document.getElementById('widthValue');
const paddingValue = document.getElementById('paddingValue');
const borderValue = document.getElementById('borderValue');

const demoContentBox = document.getElementById('demoContentBox');
const demoBorderBox = document.getElementById('demoBorderBox');

const totalContentBox = document.getElementById('totalContentBox');
const totalBorderBox = document.getElementById('totalBorderBox');

// =========================================================
// 🔮 FUNCIÓN PRINCIPAL
// =========================================================
function updateBoxes() {
    const width = +widthSlider.value;
    const padding = +paddingSlider.value;
    const border = +borderSlider.value;

    // Mostrar valores
    widthValue.textContent = `${width}px`;
    paddingValue.textContent = `${padding}px`;
    borderValue.textContent = `${border}px`;

    // Aplicar cambios visuales
    [demoContentBox, demoBorderBox].forEach(box => {
        box.style.width = `${width}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth = `${border}px`;

        // Efecto futurista opcional cuando se mueve un slider
        box.style.transition = "0.25s ease";
        box.style.boxShadow = "0 0 25px rgba(0,255,255,0.35)";
        setTimeout(() => box.style.boxShadow = "", 250);
    });

    // Cálculos reales
    const contentBoxTotal = width + padding * 2 + border * 2;
    const borderBoxTotal = width; // border-box incluye todo

    totalContentBox.textContent = `Total: ${contentBoxTotal}px`;
    totalBorderBox.textContent = `Total: ${borderBoxTotal}px`;

    // 💬 Log elegante
    console.log(
        `%c⚙ ACTUALIZADO → W:${width}px | P:${padding}px | B:${border}px`,
        "color:#00eaff; font-weight:700;"
    );
}

// =========================================================
// 🎮 EVENT LISTENERS
// =========================================================
widthSlider.addEventListener("input", updateBoxes);
paddingSlider.addEventListener("input", updateBoxes);
borderSlider.addEventListener("input", updateBoxes);

// =========================================================
// 🟦 MENSAJES DE CONSOLA
// =========================================================
console.log("%c✨ DEMO DE BOX-SIZING INICIADA", "color:#00fff6; font-size:16px; font-weight:bold;");
console.log("%c🎮 Cambia los sliders para ver la magia.", "color:#9af7ff;");

// Inicializar una vez
updateBoxes();
