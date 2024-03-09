from flask import Flask, request
from flask_socketio import SocketIO
import RPi.GPIO as GPIO

app = Flask(__name__)

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

#stored room layouts
tables = {
    'table1': {
        
    },
    'table2': {},
    'table3': {},
    'table4':{}
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

@socketio.on("update_table")
def store_data:
    return "wow!"

@socketio.on('connect')
def connect():
    global thread
    print('Client connected')

    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)

"""
Decorator for disconnect
"""
@socketio.on('disconnect')
def disconnect():
    print('Client disconnected',  request.sid)

if __name__ == '__main__':
    socketio.run(app)
