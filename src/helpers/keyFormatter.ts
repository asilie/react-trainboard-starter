const keyMapper = (key: string): string => {
    const firstCapitalised: string = key.charAt(0).toUpperCase() + key.slice(1);
    return firstCapitalised.split(/(?=[A-Z])/).join(' ');
};

export default keyMapper;