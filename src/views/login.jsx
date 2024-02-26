import '../styling/loginStyle.css';

function LoginView() {
    return (
        <div className="login-container">
            <div className="login">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className="links">
                    <a href="/forgot-username">Forgot your username?</a>
                    <a href="/forgot-password">Forgot your password?</a>
                    <span> | </span>
                    <a href="/register">Register</a>
                </div>
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

export default LoginView;
