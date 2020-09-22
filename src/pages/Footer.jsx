import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <>
      <div className="my-5">
        <footer className="card-footer text-muted">
          <p>© {date} All rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
