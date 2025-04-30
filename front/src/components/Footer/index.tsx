import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="mt-auto py-1.5 bg-primary flex justify-center items-center sticky bottom-0 z-50">
      <Logo className="h-[32px]"/>
    </footer>
  );
};

export default Footer;
