import Logo from "../Logo";
import Menu from "../Menu";

const NavBar = () => {
  return (
    <nav className="py-1.5 bg-primary sticky top-0 z-50">
      <div className="wrapper flex justify-between items-center max-md:flex-col">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
