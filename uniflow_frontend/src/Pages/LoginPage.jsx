import React from 'react'
import './loginpage.css'
import logo from '../image/logo.png'

function LoginPage() {
  return (
    <div className="lmain">
        <div className="image">

        </div>
        <div className="content">
            <button className='pagechange'>Admin Login</button>
            <img src={logo} alt="" className='logo' />
            <form>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="login-btn">LOGIN</button>
            </form>

        </div>
    </div>
  )
}

export default LoginPage