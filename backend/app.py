from flask import Flask
import RPi.GPIO as GPIO

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

@app.route('/')
def index():
    GPIO.output(18, GPIO.HIGH)
    return 'Hello world'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
