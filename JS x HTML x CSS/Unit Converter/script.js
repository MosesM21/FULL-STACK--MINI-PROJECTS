const convertBtn = document.getElementById('convert-btn');
const clearBtn = document.getElementById('clear-btn');
const themeBtn = document.getElementById('theme-btn');
const inputValue = document.getElementById('input-value');
const inputError = document.getElementById('input-error');
const results = document.getElementById('results');
const toast = document.getElementById('toast');

const METERS_TO_FEET = 3.28084;
const LITERS_TO_GALLONS = 0.264172;
const KILOS_TO_POUNDS = 2.20462;

/* ---------- HELPERS ---------- */

// writes a number into the <b data-out="..."> slot it belongs to
function setOutput(key, number) {
    document.querySelector(`[data-out="${key}"]`).textContent = format(number);
}

// keeps long/tiny numbers readable instead of spilling out of the card
function format(number) {
    if (!isFinite(number)) return '—';

    const size = Math.abs(number);
    if (number !== 0 && (size < 0.001 || size >= 1e9)) {
        return number.toExponential(3);
    }
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 3 }).format(number);
}

function flashRows() {
    document.querySelectorAll('.row').forEach((row) => {
        row.classList.remove('is-updated');
        void row.offsetWidth; // restart the animation
        row.classList.add('is-updated');
    });
}

// "0" + "meters" sit in separate tags with no space between them
function readSide(side) {
    return `${side.querySelector('b').textContent} ${side.querySelector('small').textContent}`;
}

let toastTimer;
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1600);
}

/* ---------- CONVERSIONS ---------- */

function lengthConversion(value) {
    setOutput('len-in', value);
    setOutput('len-ft', value * METERS_TO_FEET);
    setOutput('len-in2', value);
    setOutput('len-m', value / METERS_TO_FEET);
}

function volumeConversion(value) {
    setOutput('vol-in', value);
    setOutput('vol-gal', value * LITERS_TO_GALLONS);
    setOutput('vol-in2', value);
    setOutput('vol-l', value / LITERS_TO_GALLONS);
}

function massConversion(value) {
    setOutput('mass-in', value);
    setOutput('mass-lb', value * KILOS_TO_POUNDS);
    setOutput('mass-in2', value);
    setOutput('mass-kg', value / KILOS_TO_POUNDS);
}

function convert({ animate = false } = {}) {
    const raw = inputValue.value.trim();

    // an empty box isn't an error — just reset to the resting state
    if (raw === '') {
        inputError.hidden = true;
        results.classList.add('is-empty');
        lengthConversion(0);
        volumeConversion(0);
        massConversion(0);
        return;
    }

    const value = parseFloat(raw);
    if (isNaN(value)) {
        inputError.hidden = false;
        results.classList.add('is-empty');
        return;
    }

    inputError.hidden = true;
    results.classList.remove('is-empty');

    lengthConversion(value);
    volumeConversion(value);
    massConversion(value);

    if (animate) flashRows();
}

/* ---------- EVENTS ---------- */

inputValue.addEventListener('input', () => convert());

inputValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') convert({ animate: true });
});

convertBtn.addEventListener('click', () => convert({ animate: true }));

clearBtn.addEventListener('click', () => {
    inputValue.value = '';
    convert();
    inputValue.focus();
});

// click a result row to copy it, e.g. "5 meters = 16.404 feet"
document.querySelectorAll('[data-copy]').forEach((row) => {
    row.addEventListener('click', () => {
        if (results.classList.contains('is-empty')) return;

        const [from, to] = row.querySelectorAll('.row__side');
        const text = `${readSide(from)} = ${readSide(to)}`;

        navigator.clipboard.writeText(text)
            .then(() => showToast('Copied to clipboard'))
            .catch(() => showToast('Could not copy'));
    });
});

/* ---------- THEME ---------- */

// no saved choice means "follow the system", which the CSS already handles
const savedTheme = localStorage.getItem('unit-converter-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeBtn.addEventListener('click', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = document.documentElement.dataset.theme || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    localStorage.setItem('unit-converter-theme', next);
});

convert();
