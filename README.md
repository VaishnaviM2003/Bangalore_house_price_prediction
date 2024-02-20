# bengaluru_house_price_prediction
This project utilizes machine learning to predict house prices in Bengaluru. The code includes data cleaning, transformation, and a trained Linear Regression model. The aim is to provide insights into Bengaluru's real estate market and enable accurate house price predictions.

### Prerequisites
- Python 3.11.4
- Libraries: pandas, numpy, matplotlib, scikit-learn

### Code Explanation

- Data Cleaning: Handling missing values, dropping unnecessary columns, and converting data types.
- Data Transformation: Converting non-uniform data to numerical format and addressing outliers.
- Outlier Cleaning and Feature Engineering: Removing outliers based on price per square foot and reducing dimensionality of locations.
- Machine Learning Training: Training a Linear Regression model to predict house prices.

### Functionality
The core functionality is encapsulated in the predict_price function, which takes location, square footage, bathrooms, and bedrooms as input and returns the predicted house price using the trained Linear Regression model.


