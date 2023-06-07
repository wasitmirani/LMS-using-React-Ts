
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
return(
    <>
        <div className="404-page-section section-padding-01" style={{ marginTop: '1px'  }}>
            <div className="container custom-container">

                <div className="error-page text-center">

                    <div className="error-page__logo">
                        <Link to="/"><img src="assets/images/dark-logo.png" alt="Logo"/></Link>
                    </div>

                    <div className="error-page__image">
                        <img src="assets/images/page-404-image.png" alt="Error" width="699" height="380"/>
                    </div>

                    <div className="error-page__content">
                        <h2 className="error-page__title">Oops! That page can't be found.</h2>
                        <p className="error-page__text">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
                        <div className="error-page__btn">
                            <Link to="/" className="btn btn-primary btn-hover-secondary"><i className="fas fa-home"></i> Go back to homepage</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
);    
}

export default NotFound;