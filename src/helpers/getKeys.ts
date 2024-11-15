import { stationDetails, subStationDetails } from '../interfaces/stationDetails';

const getKeysAtLevel = (obj: stationDetails, depth: number): string[] => {
    let currentLevel = obj;

    for (let i = 0; i < depth; i++) {

        if (typeof currentLevel !== 'object' || currentLevel === null) {
            throw new Error('Invalid depth or object structure.');
        }
        currentLevel = Object.values(currentLevel).reduce((result, value) => {
            if (typeof value === 'object') {
                Object.assign(result, value);
            }
            return result;
        }, {});
    }
    console.log(Object.keys(currentLevel));
    return Object.keys(currentLevel);
};

export default getKeysAtLevel;