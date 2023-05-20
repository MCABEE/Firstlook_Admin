const Header = () => {
  return (
    <header className="layout border border-b-2 border-slate-100">
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <img src="/first look - icon.svg" alt="Logo" width={32} />
          <img src="/first look Side - text.svg" alt="LogoText" width={120} />
          {/* <h3 className="uppercase font-medium">FIRSTLOOK</h3> */}
        </div>
        <div className="h-5 w-[2px] bg-black" />
        <p>Control Panel</p>
      </div>
    </header>
  );
};

export default Header;
