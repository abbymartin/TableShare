from flask import Flask, request
from flask_socketio import SocketIO
import RPi.GPIO as GPIO

app = Flask(__name__)
socketio = SocketIO(app,debug=True,cors_allowed_origins='*',async_mode='eventlet')
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

#stored room layouts
tables = {
    table1: {

    },
    table2: {},
    table3: {},
    table4:{}
}

@app.route('/',methods=['GET'])
def test():
    status = request.args.get('status')
    if status == "on":
        GPIO.output(18, GPIO.HIGH)
        return "light on"
    elif status == "off":
        GPIO.output(18, GPIO.LOW)
        return "light off"
    else:
        return "uh oh"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
