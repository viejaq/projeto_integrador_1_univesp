import React from 'react';
import logo from '../assets/img/logo.png';
import dorm2 from '../assets/img/dorm2.jpg';
import userIcon from '../assets/img/person.svg';
import passwordIcon from '../assets/img/key.svg';

function FormLoginInterno() {
    return (
        <div className="login-page">
            <div className="login-box">
                <img src={logo} alt="Logo da Empresa" className="login-logo" />
                <h2 className='textLoginInterno'>Acesso Interno - Minotti</h2>
                <form action="/AppInternoOrcamento" >
                    <div className='input-container'>
                        <img src={userIcon} alt='Usuário' className='input-icon' />
                        <input type="text" value="ADMIN" className="login-input" />
                    </div>
                    <div className='input-container'>
                        <img src={passwordIcon} alt='Senha' className='input-icon' />
                        <input type="password" value="Senha" className="login-input" />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label className='textLoginInterno2' htmlFor="remember">Lembrar-me</label>
                    </div>
                    <button type="submit" className="login-button-interno">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default FormLoginInterno;
