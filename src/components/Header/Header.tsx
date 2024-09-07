import ButtonLink from "../ButtonLink/ButtonLink";
import Logo from "../../../assets/logo/logo-no-background.svg";

const Header = () => (
  <header id="header">
    <img id="header-logo" src={Logo} />
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/login">Online Banking</a>
      </nav>
      <div>
        <ButtonLink href="#" style="secondary" displayText="Open An Account" />
        <ButtonLink href="/login" style="primary" displayText="Log In" />
      </div>
    </div>
  </header>
);

export default Header;
