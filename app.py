from flask import Flask, render_template, request, redirect, flash, session, url_for
from flask_session import Session

app = Flask(__name__)
app.secret_key = 'chave_secreta'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# Lista para armazenar usuários
@app.route('/', methods=['GET', 'POST'])
def formulario():
    if 'usuarios' not in session:
        session['usuarios'] = []

    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        session['usuarios'].append({'username': username, 'email': email, 'password': password})
        session.modified = True  # Permite salvar alterações em listas

        flash('Cadastro realizado com sucesso!', 'sucesso')
        return redirect(url_for('formulario'))

    return render_template('formulario.html')
    
if __name__ == '__main__':
    app.run(debug=True)
