import { Button } from 'react-bootstrap';
import logo from './images/pet-house.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({onLogin}) =>{
    const navigate = useNavigate();
    const handleLogin = () => {
        onLogin();
        navigate('/');
    }
    return(
        <div className='text-center LoginPage'>
            <main class="form-signin w-100 m-auto">
                <form>
                    <img class="mb-4" src={logo} alt="" width="72" height="57"/>
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                    </div>
                    <Button className='ps-5 pe-5 mt-2 primarycolor' variant="outline-success" onClick={handleLogin}>Sign in</Button>
                    <p class="mt-5 mb-3 text-body-secondary">© 2023–2023</p>
                </form>
            </main>
        </div>
        
    )
}

export default LoginPage;