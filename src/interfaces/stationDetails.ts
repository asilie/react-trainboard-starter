interface stationDetails {
        location: subStationLocation;
        facilities: {
            informationSystems?: {
                customerHelpPoints?: customerInfo;
                informationAvailableFromStaff?: customerInfo;
                departureScreens?: customerInfo;
                arrivalScreens?: customerInfo;
                announcements?: customerInfo;
                };
            fares?: {
                ticketOffice?: customerInfo;
                ticketMachine?: customerInfo;
                };
            passengerServices?: {
                customerService?: customerInfo;
                leftLuggage?:customerInfo;
                lostProperty?: customerInfo;
                arrivalScreens?: customerInfo;
                announcements?:customerInfo;
          };
          stationFacilities?: {
            atmMachine?: customerInfo;
            babyChange?: customerInfo;
            bureauDeChange?: customerInfo;
            firstClassLounge?: customerInfo;
            postBox?: customerInfo;
            seatedArea?: customerInfo;
            shops?: customerInfo;
            showers?: customerInfo;
            stationBuffet?: customerInfo;
            toilets?: customerInfo;
            touristInformation?: customerInfo;
            trolleys?: customerInfo;
            telephones?: customerInfo;
            waitingRoom?: customerInfo;
            webKiosk?: customerInfo;
            wifi?: customerInfo;
          };
          accessibility?: {
            staffHelpAvailable?: customerInfo;
            inductionLoop?: customerInfo;
            accessibleTicketMachines?: customerInfo;
            heightAdjustedTicketOfficeCounter?: customerInfo;
            rampForTrainAccess?: customerInfo;
            accessibleTaxis?: customerInfo;
            accessiblePublicTelephones?: customerInfo;
            nationalKeyToilets?: customerInfo;
            stepFreeAccess?: customerInfo;
            ticketGates?: customerInfo;
            impairedMobilitySetDown?: customerInfo;
            wheelchairsAvailable?: customerInfo;
          };
          interchange?: {
            airport?: customerInfo;
            carPark?: customerInfo;
            cycleStorage?: customerInfo;
            metroServices?: customerInfo;
            onwardTravel?: customerInfo;
            port?: customerInfo;
            railReplacementServices?: customerInfo;
            taxiRank?: customerInfo;
            carHire?: customerInfo;
          };
        };
      }

interface stationLocation {
    longitude: number;
    latitude: number;
    addressLines: string;
    postCode: string;}

type subStationLocation = Pick<stationLocation, 'addressLines' | 'postCode'>; 

interface customerInfo {
    openingTimes: string;
    locationInfo: string;
    generalInfo: string;
}

export type { stationDetails, subStationLocation };