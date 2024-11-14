const keyMapper = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
};

export default keyMapper;