import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <>
      <div className="my-5">
        <footer className="w-20 bg-light text-center footer-class bottom-0">
          <p>© {date} All rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
