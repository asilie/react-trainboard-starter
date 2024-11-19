interface StationDetails {
        location: StationLocation;
        facilities: {
            informationSystems?: {
                customerHelpPoints?: CustomerInfo;
                informationAvailableFromStaff?: CustomerInfo;
                departureScreens?: CustomerInfo;
                arrivalScreens?: CustomerInfo;
                announcements?: CustomerInfo;
                };
            fares?: {
                ticketOffice?: CustomerInfo;
                ticketMachine?: CustomerInfo;
                };
            passengerServices?: {
                customerService?: CustomerInfo;
                leftLuggage?:CustomerInfo;
                lostProperty?: CustomerInfo;
                arrivalScreens?: CustomerInfo;
                announcements?:CustomerInfo;
          };
          stationFacilities?: {
            atmMachine?: CustomerInfo;
            babyChange?: CustomerInfo;
            bureauDeChange?: CustomerInfo;
            firstClassLounge?: CustomerInfo;
            postBox?: CustomerInfo;
            seatedArea?: CustomerInfo;
            shops?: CustomerInfo;
            showers?: CustomerInfo;
            stationBuffet?: CustomerInfo;
            toilets?: CustomerInfo;
            touristInformation?: CustomerInfo;
            trolleys?: CustomerInfo;
            telephones?: CustomerInfo;
            waitingRoom?: CustomerInfo;
            webKiosk?: CustomerInfo;
            wifi?: CustomerInfo;
          };
          accessibility?: {
            staffHelpAvailable?: CustomerInfo;
            inductionLoop?: CustomerInfo;
            accessibleTicketMachines?: CustomerInfo;
            heightAdjustedTicketOfficeCounter?: CustomerInfo;
            rampForTrainAccess?: CustomerInfo;
            accessibleTaxis?: CustomerInfo;
            accessiblePublicTelephones?: CustomerInfo;
            nationalKeyToilets?: CustomerInfo;
            stepFreeAccess?: CustomerInfo;
            ticketGates?: CustomerInfo;
            impairedMobilitySetDown?: CustomerInfo;
            wheelchairsAvailable?: CustomerInfo;
          };
          interchange?: {
            airport?: CustomerInfo;
            carPark?: CustomerInfo;
            cycleStorage?: CustomerInfo;
            metroServices?: CustomerInfo;
            onwardTravel?: CustomerInfo;
            port?: CustomerInfo;
            railReplacementServices?: CustomerInfo;
            taxiRank?: CustomerInfo;
            carHire?: CustomerInfo;
          };
        };
      }

type SubStationDetails = Omit<StationDetails, 'location'>;

interface StationLocation {
    longitude: number;
    latitude: number;
    addressLines: string;
    postCode: string;}

type SubStationLocation = Pick<StationLocation, 'addressLines' | 'postCode'>; 

interface CustomerInfo {
    openingTimes: string;
    locationInfo: string;
    generalInfo: string;
}

export type { StationDetails, SubStationLocation, SubStationDetails };