function Footer() {
  const navStyle = " text-primary-dull_text font-lato font-sm cursor-pointer";
  return (
    <footer className="bg-white shadow-xl p-4 flex w-full justify-between items-center px-[3rem]">
      {/* Footer navigation section */}
      <nav aria-label="Footer navigation">
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center">
            <p className={navStyle}>Contact</p>
            <span className="bg-[#E1E6EF] w-[1px] h-[24px] mx-4"></span>
          </li>
          <li className="flex items-center">
            <p className={navStyle}>Privacy Policy</p>
            <span className="bg-[#E1E6EF] w-[1px] h-[24px] mx-4"></span>
          </li>
          <li>
            <parent className={navStyle}>Terms of Use</parent>
          </li>
        </ul>
      </nav>

      {/* Copyright section */}
      <div className="">
        <p className={navStyle}>
          © 2024 UEX Learning Technology Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
