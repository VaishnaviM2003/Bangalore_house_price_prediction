import json
from flask import Flask, render_template,request
from main import predict_price

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def form():
    if request.method == 'GET':
        
        with open('Bengaluru_house_price\static\columns.json') as json_file:
            data = json.load(json_file)
            locations = data['locations']
        
        return render_template('index.html', predicted_price='', locations=locations)
    else:
        location = str(request.form['location'])
        square_feet = float(request.form['square_feet'])
        bedrooms = float(request.form['bedrooms'])
        bathrooms = float(request.form['bathrooms'])
        price = predict_price(location, square_feet, bathrooms, bedrooms)
        return render_template('index.html', predicted_price=f'Predicted Price: {price :.2f}')


if __name__ == "__main__":
    app.run(debug=True)