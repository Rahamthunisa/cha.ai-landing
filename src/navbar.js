import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <><nav className="navbar">
         <div className="container"> <a className="navbar-logo">cha.ai</a>
              <a className="navbar-info">Contact</a>
          </div>
          
      </nav>
       { /* <body>
        <div className="hero-section">
            <div className="hero-title">
              BNB Gateway
            </div>
            <div className="hero-main">
              <p>To resolve BSC Name Service (.bnb) <br />
                records and associated IPFS content </p>
            </div>
            <div className="hero-content">
               <p>
               A bridge from the “normal” web to the decentralised web
               </p>
            </div>
            <div className="project">
            <div className="section-1">
            <div className="content-1 ">
            <h3 className="no-1">1</h3>
                <h4 className="mat-1">
                    Since native IPFS resolution 
                    capabilities are missing from the majority of browsers, 
                    bnb.qa operates as a reverse proxy for ENS names and IPFS content.
                </h4>
            </div>
            
            </div>
            <div className="section-com">
            <div className="section-2">
                <div className="content-2">
                <h3>2</h3>
                <h4>bnb.qa uses a wildcard DNS record
                     *bnb.qa to dynamically capture requests for all .bnb domains.
                </h4>
                </div>
            </div>
            <div className="section-3">
                <div className="content-3">
                <h3>3</h3>
                <h4>bnb.qa automatically resolves the 
                    IPFS contenthash of the requested .bnb record
                     and returns the corresponding static content over HTTPS.
                </h4>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="main-matter">
         <div className="main-section">
            <h3>Why bnb.qa?</h3>
         </div>
         <div className="para-1">
         <p>existing web2 infra fails to provide the same 
         experience and functionality for the web3 ecosystem.</p>
         </div>
         <div className="para-2">
         <p>most browsers cannot natively access .bnb/IPFS.</p>
         </div>
         <div className="para-3">
         <p>no .bnb gateway infrastructure</p>
         </div>
        </div>

        <div className="connect-section">
           <h2>Let's connect</h2>
           <p>We'd love to meet up with you to discuss
         your project, and potential collaborations.</p>
        </div>
      </body>
      <footer className="address">
       <div className="mail">
       Email: hello@bnb.qa
       </div>
       <div className="socio">
         <h5>Twitter / Instagram / Linkedin</h5>
         <p>Banglore, India</p>
         <p>Terms of service</p>
         <p>Privacy policy</p>
       </div>
  </footer> */ }
    </>
  );
}

export default Navbar;
