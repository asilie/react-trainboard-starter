export const fetchStations = () => {
    return fetch('https://int-dev1.tram.softwire-lner-dev.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};
