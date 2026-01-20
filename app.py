from flask import Flask, render_template

app = Flask(__name__)





@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

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

@app.route("/botines")
def botines():
    return render_template("pages/botines.html")

@app.route("/pago")
def pago():
    return render_template("pages/pago.html")

@app.route("/userprofile")
def userprofile():
    return render_template("pages/userprofile.html")

###### Rutas de administrador ######

@app.route("/admin")
def admin():
    return render_template("admin/adminhome.html")

@app.route("/adminprofile")
def adminprofile():
    return render_template("admin/adminprofile.html")

#### Rutas de Inicio y registro ####

@app.route("/signup")
def signup():
    return render_template("auth/signup.html")

@app.route("/login")
def login():
    return render_template("auth/login.html")






if __name__ == "__main__":
    app.run(debug=True)
