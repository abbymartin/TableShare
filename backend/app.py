from flask import Flask
import RPi.GPIO as GPIO

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

@app.route('/')
def index():
    return 'Hello world'

@app.route('/',methods=['GET'])
def test():
    status = request.args.get('status')
    if status == "on":
        GPIO.output(18, GPIO.HIGH)
        return "light on"
    elif status == "off"
        GPIO.output(18, GPIO.LOW)
        return "light off"
    else:
        return "uh oh"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
