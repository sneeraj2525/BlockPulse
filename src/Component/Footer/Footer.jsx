import React from "react";

const Footer = () => {
  return (
    <>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <footer className="text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} Xyz. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
    </>
  );
};

export default Footer;
