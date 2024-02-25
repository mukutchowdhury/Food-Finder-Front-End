import React, { useState } from 'react';
import '../styling/signupStyle.css';

function SignUpView() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repeat Password:</label>
                        <input type="password" id="repeatPassword" name="repeatPassword" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            {/* Footer */}
            <div className='h-16 bg-green-700 flex items-center justify-center'>
                <div className='text-white flex gap-4'>
                    <a href='/about-us'>About Us</a>
                    <a href='/contact'>Contact</a>
                    <a href='/privacy-policy'>Privacy Policy</a>
                    <a href='/terms-of-service'>Terms of Service</a>
                </div>
            </div>
        </div>
    );
}

export default SignUpView;
