import IconMap from '../interfaces/IconMap';

const iconMap: IconMap = {
    customerHelpPoints: () => import('react-icons/md').then((mod) => mod.MdHelp),
    informationAvailableFromStaff: () => import('react-icons/md').then((mod) => mod.MdHelp),
    departureScreens:() => import('react-icons/md').then((mod) => mod.MdHelp) ,
    arrivalScreens: () => import('react-icons/md').then((mod) => mod.MdHelp),
    announcements: () => import('react-icons/md').then((mod) => mod.MdAnnouncement),
    ticketOffice: () => import('react-icons/fa').then((mod) => mod.FaTicketAlt),
    ticketMachine: () => import('react-icons/fa').then((mod) => mod.FaTicketAlt),
    customerService: () => import('react-icons/md').then((mod) => mod.MdHelp),
    leftLuggage: () => import('react-icons/md').then((mod) => mod.MdLuggage),
    lostProperty: () => import('react-icons/md').then((mod) => mod.MdLuggage),
    telephones: () => import('react-icons/fa').then((mod) => mod.FaPhone),
    atmMachine: () => import('react-icons/ri').then((mod) => mod.RiMoneyPoundCircleFill),
    babyChange: () => import('react-icons/md').then((mod) => mod.MdBabyChangingStation),
    bureauDeChange: () => import('react-icons/ri').then((mod) => mod.RiMoneyPoundCircleFill),
    firstClassLounge: () => import('react-icons/md').then((mod) => mod.MdEventSeat),
    shops: () => import('react-icons/fa').then((mod) => mod.FaShoppingBag),
    showers: () => import('react-icons/fa').then((mod) => mod.FaShower),
    stationBuffet: () => import('react-icons/md').then((mod) => mod.MdFastfood),
    toilets: () => import('react-icons/fa').then((mod) => mod.FaRestroom),
    trolleys:() => import('react-icons/pi').then((mod) => mod.PiTrolleySuitcaseFill),
    waitingRoom: () => import('react-icons/md').then((mod) => mod.MdOutlineMeetingRoom),
    wifi: () => import('react-icons/fa').then((mod) => mod.FaWifi),
    staffHelpAvailable: () => import('react-icons/md').then((mod) => mod.MdHelp),
    inductionLoop: () => import('react-icons/md').then((mod) => mod.MdHearingDisabled),
    accessibleTicketMachines: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    rampForTrainAccess: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    accessibleTaxis: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    accessiblePublicTelephones: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    nationalKeyToilets: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    stepFreeAccess: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    ticketGates: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    impairedMobilitySetDown: () => import('react-icons/fa').then((mod) => mod.FaAccessibleIcon),
    wheelchairsAvailable: () => import('react-icons/fa').then((mod) => mod.FaWheelchair),
    airport:() => import('react-icons/fa').then((mod) => mod.FaPlaneDeparture),
    carPark: () => import('react-icons/fa').then((mod) => mod.FaCar),
    cycleStorage: () => import('react-icons/fa').then((mod) => mod.FaBicycle),
    metroServices: () => import('react-icons/fa').then((mod) => mod.FaSubway),
    onwardTravel: () => import('react-icons/md').then((mod) => mod.MdDepartureBoard),
    taxiRank: () => import('react-icons/fa').then((mod) => mod.FaTaxi),
};

export default iconMap;