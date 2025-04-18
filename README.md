# ✈️ Flight Delay Prediction using Machine Learning

## 📝 Summary
This project aims to predict flight delays using real-world data from the US Department of Transportation's On-Time Performance dataset. By leveraging features such as airline, scheduled departure time, origin/destination airport, and weather conditions, we built a supervised learning pipeline to classify whether a flight will be delayed.

## 🧰 Tools Used
- **Languages:** Python (v3.10+)
- **Libraries:** pandas, NumPy, scikit-learn, matplotlib, seaborn, XGBoost, Streamlit
- **Data Source:** Bureau of Transportation Statistics (BTS)
- **Development:** Jupyter Notebook

## 📊 Dataset Description
- **Source:** [BTS On-Time Performance Data](https://transtats.bts.gov/OT_Delay/OT_DelayCause1.asp)
- **Time Period:** January 2022 (sample, extendable)
- **Features:**
  - OP_CARRIER (airline)
  - ORIGIN, DEST (airport codes)
  - CRS_DEP_TIME, CRS_ARR_TIME (scheduled times)
  - DEP_DELAY (target), ARR_DELAY
  - DISTANCE, FL_DATE, FL_NUM
  - [Planned] Weather data from NOAA API

## ✅ Results & Screenshots
- Achieved ~81% accuracy with XGBoost on binary classification (delayed > 15 mins vs on-time)
- Feature importance:
  1. Scheduled Departure Time
  2. Origin Airport
  3. Carrier

![confusion matrix](images/confusion_matrix.png)
![feature importance](images/feature_importance.png)

## 🚀 Future Improvements
- 🔄 Extend to full BTS dataset (2019–2023)
- 🌦 Integrate weather data from NOAA
- 🛫 Add aircraft model and tail number data
- 📈 Deploy interactive Streamlit dashboard

---

## 📁 Code Files

### 1. `flight_delay_prediction.ipynb`
> A complete Jupyter Notebook containing:
- Data cleaning & preprocessing
- Exploratory Data Analysis (EDA)
- Label encoding & feature engineering
- Model training (XGBoost, Logistic Regression, Random Forest)
- Evaluation metrics (accuracy, precision, recall)
- Feature importance visualizations

### 2. `utils.py`
> Utility functions for:
- Time conversion
- Plotting
- Weather API preprocessing (planned)

### 3. `app.py` *(Planned)*
> Streamlit App that lets users:
- Choose origin, destination, time
- View live delay prediction based on model

### 4. `/images`
> Contains:
- Confusion matrix
- Feature importance plot

---

## 📈 Visualization
- EDA visualizations built using **Seaborn** & **Matplotlib**
- Planned: interactive **Streamlit** visualizations (maps, predictions, dashboards)

---

## 📌 How to Run Locally
```bash
# Clone repo
$ git clone https://github.com/yourusername/flight-delay-prediction.git
$ cd flight-delay-prediction

# Install dependencies
$ pip install -r requirements.txt

# Run Jupyter Notebook
$ jupyter notebook flight_delay_prediction.ipynb

# [Planned] Launch Streamlit App
$ streamlit run app.py
```

---

## 👨‍💻 Author
**[Your Name]**  
Aspiring Data Scientist with a passion for aviation and real-world impact through machine learning.

