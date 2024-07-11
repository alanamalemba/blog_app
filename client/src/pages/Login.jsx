import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>

      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <button>Login</button>

        {/* <p>this is an error</p> */}

        <span>
          Do&apos;nt have an account? <Link to={`/register`}>Register</Link>
        </span>
      </form>
    </div>
  );
}
