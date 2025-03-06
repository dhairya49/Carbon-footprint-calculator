def calculate_transport_emissions(transport):
    """Calculate yearly transport emissions in kg CO₂"""
    return round(float(transport) * 0.12 * 52, 2)

def calculate_energy_emissions(energy):
    """Calculate yearly energy emissions in kg CO₂"""
    return round(float(energy) * 0.45 * 12, 2)

def calculate_diet_emissions(diet):
    """Calculate yearly diet emissions in kg CO₂"""
    DIET_FACTORS = {
        "vegan": 1500,
        "vegetarian": 2000,
        "omnivore": 3000,
        "meat-heavy": 4500
    }
    return DIET_FACTORS.get(diet, 3000)

def calculate_carbon_footprint(transport, energy, diet):
    """Calculate total carbon footprint and individual components"""
    transport_result = calculate_transport_emissions(transport)
    energy_result = calculate_energy_emissions(energy)
    diet_result = calculate_diet_emissions(diet)
    
    return {
        "transport": transport_result,
        "energy": energy_result,
        "diet": diet_result,
        "total": round(transport_result + energy_result + diet_result, 2)
    }