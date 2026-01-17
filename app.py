from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/guantes")
def guantes():
    return render_template("pages/guantes.html")

@app.route("/textiles")
def textiles():
    return render_template("pages/textiles.html")

@app.route("/accesorios")
def accesorios():
    return render_template("pages/accesorios.html")


if __name__ == "__main__":
    app.run(debug=True)
