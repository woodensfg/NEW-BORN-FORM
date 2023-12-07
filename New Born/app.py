from flask import Flask, g

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

import sqlite3

DATABASE = "newborns.db"

def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'db'):
        g.db.close()
