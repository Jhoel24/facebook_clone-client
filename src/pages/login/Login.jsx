import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import useAuth from '../../hooks/useAuth'

const Login = () => {

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    login()
    navigate('/')
  }

  return (
    <div className='login' >
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit explicabo molestiae corrupti saepe incidunt delectus, dolorem consequatur? Ipsam facere illum aspernatur iusto libero deserunt eum impedit at veritatis nam.</p>
          <span>Don't you have an account?</span>
          <Link to="/register" >
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={handleLogin} >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login