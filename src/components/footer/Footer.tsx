import React from "react";

function Footer() {
  let footerComponent;

  let data = new Date().getFullYear();

  return (
    <>
      <footer className="bg-amber-300 text-center lg:text-left">
        <div className="p-4 text-center text-surface dark:text-white">
          © {data} Copyright:
          <a className="pl-2" href="https://www.linkedin.com/in/gabriella-jacubavicius/">Gabriella Jacubavicius</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
