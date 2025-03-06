from flask import Flask, request, jsonify
from flask_cors import CORS
from calculator import (
    calculate_carbon_footprint,
    calculate_transport_emissions,
    calculate_energy_emissions,
    calculate_diet_emissions
)

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

@app.route('/calculate', methods=['POST'])
def calculate_total():
    try:
        data = request.json
        result = calculate_carbon_footprint(
            data['transport'],
            data['energy'],
            data['diet']
        )
        return jsonify({"success": True, "data": result})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@app.route('/calculate/transport', methods=['POST'])
def calculate_transport():
    try:
        data = request.json
        result = calculate_transport_emissions(data['transport'])
        return jsonify({"success": True, "data": {"transport": result}})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@app.route('/calculate/energy', methods=['POST'])
def calculate_energy():
    try:
        data = request.json
        result = calculate_energy_emissions(data['energy'])
        return jsonify({"success": True, "data": {"energy": result}})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@app.route('/calculate/diet', methods=['POST'])
def calculate_diet():
    try:
        data = request.json
        result = calculate_diet_emissions(data['diet'])
        return jsonify({"success": True, "data": {"diet": result}})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)