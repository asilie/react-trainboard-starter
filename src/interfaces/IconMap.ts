import { IconType } from 'react-icons';

interface IconMap {
    customerHelpPoints: () => Promise<IconType>;
    informationAvailableFromStaff: () => Promise<IconType>;
    departureScreens:() => Promise<IconType> ;
    arrivalScreens: () => Promise<IconType>;
    announcements: () => Promise<IconType>;
    ticketOffice: () => Promise<IconType>;
    ticketMachine: () => Promise<IconType>;
    customerService: () => Promise<IconType>;
    leftLuggage: () => Promise<IconType>;
    lostProperty: () => Promise<IconType>;
    telephones: () => Promise<IconType>;
    atmMachine: () => Promise<IconType>;
    babyChange: () => Promise<IconType>;
    bureauDeChange: () => Promise<IconType>;
    firstClassLounge: () => Promise<IconType>;
    shops: () => Promise<IconType>;
    showers: () => Promise<IconType>;
    stationBuffet: () => Promise<IconType>;
    toilets: () => Promise<IconType>;
    trolleys: () => Promise<IconType>;
    waitingRoom: () => Promise<IconType>;
    wifi: () => Promise<IconType>;
    staffHelpAvailable: () => Promise<IconType>;
    inductionLoop: () => Promise<IconType>;
    accessibleTicketMachines: () => Promise<IconType>;
    rampForTrainAccess: () => Promise<IconType>;
    accessibleTaxis: () => Promise<IconType>;
    accessiblePublicTelephones: () => Promise<IconType>;
    nationalKeyToilets: () => Promise<IconType>;
    stepFreeAccess: () => Promise<IconType>;
    ticketGates: () => Promise<IconType>;
    impairedMobilitySetDown: () => Promise<IconType>;
    wheelchairsAvailable: () => Promise<IconType>;
    airport: () => Promise<IconType>;
    carPark: () => Promise<IconType>;
    cycleStorage: () => Promise<IconType>;
    metroServices: () => Promise<IconType>;
    onwardTravel: () => Promise<IconType>;
    taxiRank: () => Promise<IconType>;
}

export default IconMap;