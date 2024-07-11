import Logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with <b>React.js</b>,
      </span>
    </footer>
  );
}
