import Helmet from "react-helmet/es/Helmet";
import React from "react";
import ReactGA from 'react-ga';

function GoogleSetup({path}) {
    return (
        <Helmet>
            <title>{path ? path : 'Home'} | MURARI AND MOKSHGNA LOGISTICS PVT LTD</title>
            {/*<meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
        </Helmet>
    )
}

export const trackPageViewInGoogle = additionalText => {
    ReactGA.pageview(
        window.location.pathname +
        (additionalText ? additionalText : '') +
        window.location.search
    );
};

export const trackEventInGoogle = (category, action, label) => {
    ReactGA.event({
        category,
        action,
        label
    });
};

export default GoogleSetup;
