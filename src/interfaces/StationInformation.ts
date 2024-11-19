interface StationInformation {
    id: number;
    name: string;
    aliases: string[];
    crs: string | null;
    nlc: string;
    latitude: number | null;
    longitude: number | null;
    isGroupStation: boolean;
    isSilverSeekStation: boolean;
}

export default StationInformation;