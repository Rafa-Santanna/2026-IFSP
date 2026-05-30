from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/video')
def video():
    return render_template('video.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
