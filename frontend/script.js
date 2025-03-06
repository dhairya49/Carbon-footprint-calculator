const API_BASE_URL = 'http://localhost:5000';

async function calculateTransport() {
    const transport = document.getElementById('transport').value;
    try {
        const response = await fetch(`${API_BASE_URL}/calculate/transport`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transport })
        });
        const result = await response.json();
        if (result.success) {
            document.getElementById('transport-result').textContent = 
                `Transport Emissions: ${result.data.transport} kg CO₂/year`;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Transport calculation error:', error);
        document.getElementById('transport-result').textContent = 'Error calculating transport emissions';
    }
}

async function calculateEnergy() {
    const energy = document.getElementById('energy').value;
    try {
        const response = await fetch(`${API_BASE_URL}/calculate/energy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ energy })
        });
        const result = await response.json();
        if (result.success) {
            document.getElementById('energy-result').textContent = 
                `Energy Emissions: ${result.data.energy} kg CO₂/year`;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Energy calculation error:', error);
        document.getElementById('energy-result').textContent = 'Error calculating energy emissions';
    }
}

async function calculateDiet() {
    const diet = document.getElementById('diet').value;
    try {
        const response = await fetch(`${API_BASE_URL}/calculate/diet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ diet })
        });
        const result = await response.json();
        if (result.success) {
            document.getElementById('diet-result').textContent = 
                `Diet Emissions: ${result.data.diet} kg CO₂/year`;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Diet calculation error:', error);
        document.getElementById('diet-result').textContent = 'Error calculating diet emissions';
    }
}

async function calculateTotal() {
    const transport = document.getElementById('transport').value;
    const energy = document.getElementById('energy').value;
    const diet = document.getElementById('diet').value;

    try {
        const response = await fetch(`${API_BASE_URL}/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transport, energy, diet })
        });
        const result = await response.json();
        if (result.success) {
            const data = result.data;
            document.getElementById('transport-result').textContent = 
                `Transport Emissions: ${data.transport} kg CO₂/year`;
            document.getElementById('energy-result').textContent = 
                `Energy Emissions: ${data.energy} kg CO₂/year`;
            document.getElementById('diet-result').textContent = 
                `Diet Emissions: ${data.diet} kg CO₂/year`;
            document.getElementById('total-result').textContent = 
                `Total Carbon Footprint: ${data.total} kg CO₂/year`;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Calculation error:', error);
        document.getElementById('total-result').textContent = 'Error calculating total emissions';
    }
}