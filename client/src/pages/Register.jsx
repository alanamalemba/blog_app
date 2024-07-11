import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>

      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />

        <button>Login</button>

        {/* <p>this is an error</p> */}

        <span>
          Already have an account? <Link to={`/login`}>Login</Link>
        </span>
      </form>
    </div>
  );
}
