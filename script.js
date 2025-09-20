// Utilisation fee data structure
// Designed for a widget to PHP page, so no additional tables and JSONs.
const taxData = {
    electric: [
        [0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26],
        [41.30, 68.40, 49.56, 82.08, 54.52, 90.29, 59.97, 99.32, 65.96, 109.25, 72.56, 120.17],
        [54.90, 79.70, 65.88, 95.64, 72.47, 105.20, 79.71, 115.72, 87.69, 127.30, 96.45, 140.03],
        [65.00, 92.80, 78.00, 111.36, 85.80, 122.50, 94.38, 134.75, 103.82, 148.22, 114.20, 163.04],
        [77.00, 108.10, 92.40, 129.72, 101.64, 142.69, 111.80, 156.96, 122.98, 172.66, 135.28, 189.92],
        [91.40, 126.00, 109.68, 151.20, 120.65, 166.32, 132.71, 182.95, 145.98, 201.25, 160.58, 221.37],
        [108.30, 146.80, 129.96, 176.16, 142.96, 193.78, 157.25, 213.15, 172.98, 234.47, 190.27, 257.92],
        [128.30, 171.00, 153.96, 205.20, 169.36, 225.72, 186.29, 248.29, 204.92, 273.12, 225.41, 300.43],
        [152.00, 199.20, 182.40, 239.04, 200.64, 262.94, 220.70, 289.24, 242.77, 318.16, 267.05, 349.98]
    ],
    engine: {
        1000: [
            [0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26],
            [12.80, 23.70, 15.36, 28.44, 16.90, 31.28, 18.59, 34.41, 20.44, 37.85, 22.49, 41.64],
            [13.20, 24.40, 15.84, 29.28, 17.42, 32.21, 19.17, 35.43, 21.08, 38.97, 23.19, 42.87],
            [13.50, 25.10, 16.20, 30.12, 17.82, 33.13, 19.60, 36.45, 21.56, 40.09, 23.72, 44.10],
            [14.40, 25.10, 17.28, 30.12, 19.01, 33.13, 20.91, 36.45, 23.00, 40.09, 25.30, 44.10]
        ],
        2000: [
            [0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26],
            [37.50, 62.20, 45.00, 74.64, 49.50, 82.10, 54.45, 90.31, 59.90, 99.35, 65.88, 109.28],
            [39.70, 66.00, 47.64, 79.20, 52.40, 87.12, 57.64, 95.83, 63.41, 105.42, 69.75, 115.96],
            [42.10, 69.90, 50.52, 83.88, 55.57, 92.27, 61.13, 101.49, 67.24, 111.64, 73.97, 122.81],
            [47.60, 76.60, 57.12, 91.92, 62.83, 101.11, 69.12, 111.22, 76.03, 122.35, 83.63, 134.58],
            [53.80, 83.80, 64.56, 100.56, 71.02, 110.62, 78.12, 121.68, 85.93, 133.85, 94.52, 147.23],
            [60.80, 91.80, 72.96, 110.16, 80.26, 121.18, 88.28, 133.29, 97.11, 146.62, 106.82, 161.29],
            [69.30, 100.50, 83.16, 120.60, 91.48, 132.66, 100.62, 145.93, 110.69, 160.52, 121.75, 176.57],
            [79.00, 110.00, 94.80, 132.00, 104.28, 145.20, 114.71, 159.72, 126.18, 175.69, 138.80, 193.26],
            [90.00, 120.50, 108.00, 144.60, 118.80, 159.06, 130.68, 174.97, 143.75, 192.46, 158.12, 211.71],
            [102.70, 132.00, 123.24, 158.40, 135.56, 174.24, 149.12, 191.66, 164.03, 210.83, 180.44, 231.91],
            [117.00, 144.50, 140.40, 173.40, 154.44, 190.74, 169.88, 209.81, 186.87, 230.80, 205.56, 253.87],
            [133.40, 158.20, 160.08, 189.84, 176.09, 208.82, 193.70, 229.71, 213.07, 252.68, 234.37, 277.94]
        ],
        3000: [
            [0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26, 0.17, 0.26],
            [96.11, 144.00, 115.34, 172.80, 126.87, 190.08, 139.56, 209.09, 153.51, 230.00, 168.87, 253.00],
            [98.50, 145.90, 118.20, 175.08, 130.02, 192.59, 143.02, 211.85, 157.32, 233.03, 173.06, 256.33],
            [100.10, 148.00, 120.12, 177.60, 132.13, 195.36, 145.35, 214.90, 159.88, 236.39, 175.87, 260.02],
            [105.00, 152.50, 126.00, 183.00, 138.60, 201.30, 152.46, 221.43, 167.71, 243.57, 184.48, 267.93],
            [109.20, 157.10, 131.04, 188.52, 144.14, 207.37, 158.56, 228.11, 174.41, 250.92, 191.86, 276.01],
            [113.60, 161.40, 136.32, 193.68, 149.95, 213.05, 164.95, 234.35, 181.44, 257.79, 199.59, 283.57],
            [118.10, 165.90, 141.72, 199.08, 155.89, 218.99, 171.48, 240.89, 188.63, 264.98, 207.49, 291.47],
            [122.90, 170.60, 147.48, 204.72, 162.23, 225.19, 178.45, 247.71, 196.30, 272.48, 215.93, 299.73],
            [127.80, 175.40, 153.36, 210.48, 168.70, 231.53, 185.57, 254.68, 204.12, 280.15, 224.53, 308.16],
            [132.90, 180.30, 159.48, 216.36, 175.43, 238.00, 192.97, 261.80, 212.27, 287.98, 233.49, 316.77],
            [138.20, 185.30, 165.84, 222.36, 182.42, 244.60, 200.67, 269.06, 220.73, 295.96, 242.81, 325.56],
            [143.70, 190.50, 172.44, 228.60, 189.68, 251.46, 208.65, 276.61, 229.52, 304.27, 252.47, 334.69]
        ],
        3500: [
            [107.67, 164.84, 129.20, 197.81, 142.12, 217.59, 156.34, 239.35, 171.97, 263.28, 189.17, 289.61],
            [109.80, 166.70, 131.76, 200.04, 144.94, 220.04, 159.43, 242.05, 175.37, 266.25, 192.91, 292.88],
            [112.00, 168.50, 134.40, 202.20, 147.84, 222.42, 162.62, 244.66, 178.89, 269.13, 196.78, 296.04],
            [114.30, 170.30, 137.16, 204.36, 150.88, 224.80, 165.96, 247.28, 182.56, 272.00, 200.82, 299.20],
            [117.10, 172.70, 140.52, 207.24, 154.57, 227.96, 170.03, 250.76, 187.03, 275.84, 205.74, 303.42],
            [120.00, 177.00, 144.00, 212.40, 158.40, 233.64, 174.24, 257.00, 191.66, 282.70, 210.83, 310.97],
            [126.60, 181.50, 151.92, 217.80, 167.11, 239.58, 183.82, 263.54, 202.21, 289.89, 222.43, 318.88],
            [133.60, 186.90, 160.32, 224.28, 176.35, 246.71, 193.99, 271.38, 213.39, 298.52, 234.72, 328.37],
            [141.00, 192.50, 169.20, 231.00, 186.12, 254.10, 204.73, 279.51, 225.21, 307.46, 247.73, 338.21],
            [148.70, 198.30, 178.44, 237.96, 196.28, 261.76, 215.91, 287.93, 237.50, 316.72, 261.25, 348.40],
            [156.90, 204.20, 188.28, 245.04, 207.11, 269.54, 227.82, 296.50, 250.60, 326.15, 275.66, 358.76],
            [165.50, 210.40, 198.60, 252.48, 218.46, 277.73, 240.31, 305.50, 264.34, 336.05, 290.77, 369.66],
            [174.60, 216.70, 209.52, 260.04, 230.47, 286.04, 253.52, 314.65, 278.87, 346.11, 306.76, 380.72]
        ],
        4000: [
            [137.11, 180.24, 164.53, 216.29, 180.99, 237.92, 199.08, 261.71, 218.99, 287.88, 240.89, 316.67],
            [139.40, 182.90, 167.28, 219.48, 184.01, 241.43, 202.41, 265.57, 222.65, 292.13, 244.91, 321.34],
            [141.80, 185.70, 170.16, 222.84, 187.18, 245.12, 205.89, 269.64, 226.48, 296.60, 249.13, 326.26],
            [144.20, 188.50, 173.04, 226.20, 190.34, 248.82, 209.38, 273.70, 230.32, 301.07, 253.35, 331.18],
            [147.10, 192.80, 176.52, 231.36, 194.17, 254.50, 213.59, 279.95, 234.95, 307.94, 258.44, 338.73],
            [150.00, 197.20, 180.00, 236.64, 198.00, 260.30, 217.80, 286.33, 239.58, 314.97, 263.54, 346.46],
            [155.30, 208.00, 186.36, 249.60, 205.00, 274.56, 225.50, 302.02, 248.05, 332.22, 272.85, 365.44],
            [160.73, 219.50, 192.88, 263.40, 212.16, 289.74, 233.38, 318.71, 256.72, 350.59, 282.39, 385.64],
            [166.40, 231.60, 199.68, 277.92, 219.65, 305.71, 241.61, 336.28, 265.77, 369.91, 292.35, 406.90],
            [172.20, 244.30, 206.64, 293.16, 227.30, 322.48, 250.03, 354.72, 275.04, 390.20, 302.54, 429.22],
            [178.20, 257.80, 213.84, 309.36, 235.22, 340.30, 258.75, 374.33, 284.62, 411.76, 313.08, 452.93],
            [184.40, 272.00, 221.28, 326.40, 243.41, 359.04, 267.75, 394.94, 294.52, 434.44, 323.98, 477.88],
            [190.90, 286.90, 229.08, 344.28, 251.99, 378.71, 277.19, 416.58, 304.91, 458.24, 335.40, 504.06]
        ]
    }
};

// Power ranges for different vehicle types
const powerRanges = {
    electric: [
        { min: 0, max: 58.84, label: "До 58.84 кВт" },
        { min: 58.85, max: 73.55, label: "58.85 - 73.55 кВт" },
        { min: 73.56, max: 95.61, label: "73.56 - 95.61 кВт" },
        { min: 95.62, max: 117.68, label: "95.62 - 117.68 кВт" },
        { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
        { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
        { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
        { min: 183.89, max: 205.94, label: "183.89 - 205.94 кВт" },
        { min: 205.95, max: Infinity, label: "205.95+ кВт" }
    ],
    engine: {
        1000: [
            { min: 0, max: 117.68, label: "До 117.68 кВт" },
            { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
            { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
            { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
            { min: 183.89, max: Infinity, label: "183.89+ кВт" }
        ],
        2000: [
            { min: 0, max: 117.68, label: "До 117.68 кВт" },
            { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
            { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
            { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
            { min: 183.89, max: 205.94, label: "183.89 - 205.94 кВт" },
            { min: 205.95, max: 228.00, label: "205.95 - 228.00 кВт" },
            { min: 228.01, max: 250.07, label: "228.01 - 250.07 кВт" },
            { min: 250.08, max: 272.13, label: "250.08 - 272.13 кВт" },
            { min: 272.14, max: 294.20, label: "272.14 - 294.20 кВт" },
            { min: 294.21, max: 316.26, label: "294.21 - 316.26 кВт" },
            { min: 316.27, max: 338.33, label: "316.27 - 338.33 кВт" },
            { min: 338.34, max: 367.75, label: "338.34 - 367.75 кВт" },
            { min: 367.76, max: Infinity, label: "367.76+ кВт" }
        ],
        3000: [
            { min: 0, max: 117.68, label: "До 117.68 кВт" },
            { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
            { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
            { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
            { min: 183.89, max: 205.94, label: "183.89 - 205.94 кВт" },
            { min: 205.95, max: 228.00, label: "205.95 - 228.00 кВт" },
            { min: 228.01, max: 250.07, label: "228.01 - 250.07 кВт" },
            { min: 250.08, max: 272.13, label: "250.08 - 272.13 кВт" },
            { min: 272.14, max: 294.20, label: "272.14 - 294.20 кВт" },
            { min: 294.21, max: 316.26, label: "294.21 - 316.26 кВт" },
            { min: 316.27, max: 338.33, label: "316.27 - 338.33 кВт" },
            { min: 338.34, max: 367.75, label: "338.34 - 367.75 кВт" },
            { min: 367.76, max: Infinity, label: "367.76+ кВт" }
        ],
        3500: [
            { min: 0, max: 117.68, label: "До 117.68 кВт" },
            { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
            { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
            { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
            { min: 183.89, max: 205.94, label: "183.89 - 205.94 кВт" },
            { min: 205.95, max: 228.00, label: "205.95 - 228.00 кВт" },
            { min: 228.01, max: 250.07, label: "228.01 - 250.07 кВт" },
            { min: 250.08, max: 272.13, label: "250.08 - 272.13 кВт" },
            { min: 272.14, max: 294.20, label: "272.14 - 294.20 кВт" },
            { min: 294.21, max: 316.26, label: "294.21 - 316.26 кВт" },
            { min: 316.27, max: 338.33, label: "316.27 - 338.33 кВт" },
            { min: 338.34, max: 367.75, label: "338.34 - 367.75 кВт" },
            { min: 367.76, max: Infinity, label: "367.76+ кВт" }
        ],
        4000: [
            { min: 0, max: 117.68, label: "До 117.68 кВт" },
            { min: 117.69, max: 139.75, label: "117.69 - 139.75 кВт" },
            { min: 139.76, max: 161.81, label: "139.76 - 161.81 кВт" },
            { min: 161.82, max: 183.88, label: "161.82 - 183.88 кВт" },
            { min: 183.89, max: 205.94, label: "183.89 - 205.94 кВт" },
            { min: 205.95, max: 228.00, label: "205.95 - 228.00 кВт" },
            { min: 228.01, max: 250.07, label: "228.01 - 250.07 кВт" },
            { min: 250.08, max: 272.13, label: "250.08 - 272.13 кВт" },
            { min: 272.14, max: 294.20, label: "272.14 - 294.20 кВт" },
            { min: 294.21, max: 316.26, label: "294.21 - 316.26 кВт" },
            { min: 316.27, max: 338.33, label: "316.27 - 338.33 кВт" },
            { min: 338.34, max: 367.75, label: "338.34 - 367.75 кВт" },
            { min: 367.76, max: Infinity, label: "367.76+ кВт" }
        ]
    }
};

// Convert metric HP to kW
function convertToKW(value, unit) {
    return unit === "hp" ? value * 0.7355 : value;
}

// Get power range index based on kW value
function getPowerRangeIndex(powerKW, vehicleType, engineSize = null) {
    let ranges;

    if (vehicleType === 'electric') {
        ranges = powerRanges.electric;
    } else {
        ranges = powerRanges.engine[engineSize];
    }

    if (!ranges) return -1;

    return ranges.findIndex(range => powerKW >= range.min && powerKW <= range.max);
}

// Get power range label
function getPowerRangeLabel(powerKW, vehicleType, engineSize = null) {
    let ranges;

    if (vehicleType === 'electric') {
        ranges = powerRanges.electric;
    } else {
        ranges = powerRanges.engine[engineSize];
    }

    if (!ranges) return "Unknown range";

    const range = ranges.find(r => powerKW >= r.min && powerKW <= r.max);
    return range ? range.label : "Out of range";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Toggle engine size visibility
    const vehicleTypeRadios = document.querySelectorAll('input[name="vehicleType"]');
    vehicleTypeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            const engineSizeGroup = document.getElementById('engineSizeGroup');
            if (this.value === 'engine') {
                engineSizeGroup.style.display = 'block';
            } else {
                engineSizeGroup.style.display = 'none';
            }
        });
    });

    // Update power display when input changes
    const powerInput = document.getElementById('powerInput');
    const powerUnit = document.getElementById('powerUnit');

    function updatePowerDisplay() {
        const power = parseFloat(powerInput.value);
        if (!isNaN(power)) {
            const powerKW = convertToKW(power, powerUnit.value);
            const vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;
            const engineSize = document.getElementById('engineSize').value;

            const rangeLabel = vehicleType === 'electric'
                ? getPowerRangeLabel(powerKW, 'electric')
                : getPowerRangeLabel(powerKW, 'engine', engineSize);

            const displayText = powerUnit.value === 'л.с.'
                ? `${powerKW.toFixed(2)} кВт - ${rangeLabel}`
                : `Категория расчёта коэффициента: ${rangeLabel}`;

            document.getElementById('powerDisplay').textContent = displayText;
        } else {
            document.getElementById('powerDisplay').textContent = '';
        }
    }

    powerInput.addEventListener('input', updatePowerDisplay);
    powerUnit.addEventListener('change', updatePowerDisplay);
    document.getElementById('engineSize').addEventListener('change', updatePowerDisplay);

    // Also update when vehicle type changes
    vehicleTypeRadios.forEach(radio => {
        radio.addEventListener('change', updatePowerDisplay);
    });
});

// Main calculation function
function calculateTax() {
    // Clear any previous errors
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';

    // Get input values
    const power = parseFloat(document.getElementById('powerInput').value);
    const unit = document.getElementById('powerUnit').value;
    const taxYear = parseInt(document.getElementById('taxYear').value);
    const vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;
    const vehicleAge = document.querySelector('input[name="vehicleAge"]:checked').value;
    const engineSize = document.getElementById('engineSize').value;

    // Validate power input
    if (isNaN(power) || power <= 0) {
        errorMessage.textContent = 'Пожалуйста, введите мощность больше нуля.';
        errorMessage.classList.add('show');
        return;
    }

    // Convert to kW if needed
    const powerKW = convertToKW(power, unit);

    // Get power range index
    const powerRangeIndex = vehicleType === 'electric'
        ? getPowerRangeIndex(powerKW, 'electric')
        : getPowerRangeIndex(powerKW, 'engine', engineSize);

    if (powerRangeIndex === -1) {
        errorMessage.textContent = 'No tax data available for this power value. Please check your input.';
        errorMessage.classList.add('show');
        return;
    }

    // Calculate year index (0 for 2025 new, 1 for 2025 old, 2 for 2026 new, etc.)
    const yearIndex = (taxYear - 2025) * 2;
    const ageOffset = vehicleAge === 'new' ? 0 : 1;
    const dataIndex = yearIndex + ageOffset;

    // Get tax amount
    const baseFee = 20000;
    let taxAmount;
    try {
        if (vehicleType === 'electric') {
            taxAmount = (taxData.electric[powerRangeIndex][dataIndex]) * baseFee;
        } else {
            const engineData = taxData.engine[engineSize];
            if (!engineData) {
                errorMessage.textContent = 'No tax data available for this engine size.';
                errorMessage.classList.add('show');
                return;
            }
            taxAmount = (engineData[powerRangeIndex][dataIndex]) * baseFee;
        }

        if (taxAmount === undefined) {
            errorMessage.textContent = 'Tax data not available for selected parameters.';
            errorMessage.classList.add('show');
            return;
        }

        // Get power range label
        const rangeLabel = vehicleType === 'electric'
            ? getPowerRangeLabel(powerKW, 'electric')
            : getPowerRangeLabel(powerKW, 'engine', engineSize);

        // Prepare vehicle details
        let vehicleDetails = '';
        if (vehicleType === 'electric') {
            vehicleDetails = `
<strong>Тип двигателя:</strong> Электрический или последовательный гибрид<br>
<strong>Категория:</strong> ${rangeLabel}
`;
        } else {
            const engineSizeText = document.getElementById('engineSize').options[document.getElementById('engineSize').selectedIndex].text;
            vehicleDetails = `
<strong>Тип двигателя:</strong> ДВС<br>
<strong>Объём двигателя:</strong> ${engineSizeText}<br>
<strong>Мощность в кВт:</strong> ${powerKW.toFixed(2)} кВт<br>
<strong>В какую категорию попадает:</strong> ${rangeLabel}
`;
        }

        // Display results
        displayResult(taxAmount, vehicleDetails, taxYear, vehicleAge);

    } catch (error) {
        errorMessage.textContent = 'Ошибка в расчёте. Проверьте информацию и попробуйте снова.';
        errorMessage.classList.add('show');
        console.error('Calculation error:', error);
    }
}

function displayResult(amount, vehicleDetails, year, age) {
    const resultBox = document.getElementById('resultBox');
    const taxAmountElement = document.getElementById('taxAmount');
    const resultDetails = document.getElementById('resultDetails');

    // Format the amount
    taxAmountElement.textContent = `₽${amount.toFixed(2)}`;

    // Create detailed information
    const ageText = age === 'new' ? 'Новый' : 'Старше трёх лет';
    resultDetails.innerHTML = `
${vehicleDetails}<br>
<strong>Год уплаты сбора:</strong> ${year}<br>
<strong>Возраст автомобиля:</strong> ${ageText}<br>
<br>
<em>Это стоимость утилизационного сбора для вашего автомобиля по новым правилам. Рассчитано <a href=https://verstka.media/>"Вёрсткой"</a></em>
`;

    // Show the result with animation
    resultBox.classList.add('show');

    // Scroll to results
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * @copyright 2025 Roman_in_Rome. All rights reserved.
 */