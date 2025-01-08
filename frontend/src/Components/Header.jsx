import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h2 className=" fw-bolder">We give people the fuel they need to live healthy,</h2>
            <h2 className=" fw-bolder">fulfilling lives.</h2>
            <h2 className=" fw-bolder">The pride of EasyDrop is a reflection of our passion for uplifting the trading.</h2>
        
            <div>
                <br />
            <center>
            <button className="btn btn-outline-light" type="submit">
            <div className="justify-center  ms-1 rounded-pill">GET STARTED</div>
            </button>
            </center>
            
            </div>
        </div>
    </div>
</header>
  );
};

export default Header;
