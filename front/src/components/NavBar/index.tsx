import CategoryNavBar from "../CategoriesNavBar/CategoriesNavbar";
import Logo from "../Logo";
import Menu from "../Menu";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center pt-1.5 bg-primary sticky top-0 z-50">
      <div className="wrapper flex justify-between items-center max-md:flex-col pb-1.5">
        <Logo />
        <Menu />
      </div>
      <CategoryNavBar />
    </nav>
  );
};

export default NavBar;
