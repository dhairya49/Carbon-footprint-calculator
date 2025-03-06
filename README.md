# Carbon Footprint Calculator

A simple web-based Carbon Footprint Calculator where users enter their transport usage, energy consumption, and diet type to calculate their carbon footprint.

## 🚀 Features
- Calculates carbon footprint based on transport, energy usage, and diet.
- Backend powered by Flask (Python).
- Frontend built with HTML, CSS, and JavaScript.
- Simple API for data processing.

---

## 📌 Prerequisites
Ensure you have the following installed on your system:
- **Python (3.x)** → [Download Python](https://www.python.org/downloads/)
- **pip** (comes with Python, check with `pip --version`)
- **Node.js** (optional for frontend development) → [Download Node.js](https://nodejs.org/)

---

## 🔧 Installation Steps


### 2️⃣ Install Backend Dependencies
```sh
cd backend
pip install -r requirements.txt
```

### 3️⃣ Start the Flask Server
```sh
python app.py
```
🚀 The backend will now be running at `http://127.0.0.1:5000/`

### 4️⃣ Open the Frontend
1. Open the `frontend/index.html` file in your browser.
2. Fill in the required details and click **Calculate**.
3. Your carbon footprint result will be displayed.

---

## 📂 Project Structure
```
carbon-footprint-calculator/
│── backend/           # Flask Backend
│   ├── app.py         # Main Flask application
│   ├── calculator.py  # Carbon footprint calculation logic
│   ├── requirements.txt  # List of dependencies
│
│── frontend/          # Frontend UI
│   ├── index.html     # Main HTML page
│   ├── styles.css     # Stylesheet
│   ├── script.js      # JavaScript logic
│
└── README.md          # Project documentation
```

---

## 📜 API Endpoints

### `POST /calculate`
- **Description:** Calculates carbon footprint based on user input.
- **Request Body (JSON):**
```json
{
    "transport": 100,
    "energy": 200,
    "diet": "vegan"
}
```
- **Response Example:**
```json
{
    "footprint": 1200.5
}
```

---

## 🔍 Troubleshooting

### ❌ Flask Not Found? Install it manually:
```sh
pip install flask flask-cors
```

### ❌ Server Not Running?
- Ensure Python is installed (`python --version`).
- Check if Flask is installed (`pip list | grep flask`).
- Restart the server (`python app.py`).

### ❌ Frontend Not Updating?
- Try refreshing the page (`Ctrl + Shift + R`).
- Open **Developer Console** (F12) and check for errors.

---

## 🎯 Future Enhancements
- Add user authentication.
- Store past calculations in a database.
- Improve the UI with a modern framework like React.

---

## 🛠 Contributors
- **Your Name** (@dhairya49) 🎉
- **Dhairya Patel**
---

