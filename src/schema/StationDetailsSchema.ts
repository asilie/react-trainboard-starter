import { z } from 'zod';

const CustomerInfoSchema = z.object({
    openingTimes: z.string().optional(),
    locationInfo: z.string().optional(),
    generalInfo: z.string().optional(),
});

const StationDetailsSchema = z.object({
    location: z.object({
        longitude: z.number(),
        latitude: z.number(),
        addressLines: z.string(),
        postCode:  z.string(),
    }),
    facilities: z.object({
        informationSystems: z.object({
            customerHelpPoints: CustomerInfoSchema.optional(),
            informationAvailableFromStaff: CustomerInfoSchema.optional(),
            departureScreens: CustomerInfoSchema.optional(),
            arrivalScreens: CustomerInfoSchema.optional(),
            announcements: CustomerInfoSchema.optional(),
        }).optional(),
        fares: z.object({
            ticketOffice: CustomerInfoSchema.optional(),
            ticketMachine: CustomerInfoSchema.optional(),
        }).optional(),
        passengerServices: z.object( {
            customerService: CustomerInfoSchema.optional(),
            leftLuggage:CustomerInfoSchema.optional(),
            lostProperty: CustomerInfoSchema.optional(),
            arrivalScreens: CustomerInfoSchema.optional(),
            announcements:CustomerInfoSchema.optional(),
        }).optional(),
        stationFacilities: z.object({
            atmMachine: CustomerInfoSchema.optional(),
            babyChange: CustomerInfoSchema.optional(),
            bureauDeChange: CustomerInfoSchema.optional(),
            firstClassLounge: CustomerInfoSchema.optional(),
            postBox: CustomerInfoSchema.optional(),
            seatedArea: CustomerInfoSchema.optional(),
            shops: CustomerInfoSchema.optional(),
            showers: CustomerInfoSchema.optional(),
            stationBuffet: CustomerInfoSchema.optional(),
            toilets: CustomerInfoSchema.optional(),
            touristInformation: CustomerInfoSchema.optional(),
            trolleys: CustomerInfoSchema.optional(),
            telephones: CustomerInfoSchema.optional(),
            waitingRoom: CustomerInfoSchema.optional(),
            webKiosk: CustomerInfoSchema.optional(),
            wifi: CustomerInfoSchema.optional(),
        }).optional(),
        accessibility: z.object({
            staffHelpAvailable: CustomerInfoSchema.optional(),
            inductionLoop: CustomerInfoSchema.optional(),
            accessibleTicketMachines: CustomerInfoSchema.optional(),
            heightAdjustedTicketOfficeCounter: CustomerInfoSchema.optional(),
            rampForTrainAccess: CustomerInfoSchema.optional(),
            accessibleTaxis: CustomerInfoSchema.optional(),
            accessiblePublicTelephones: CustomerInfoSchema.optional(),
            nationalKeyToilets: CustomerInfoSchema.optional(),
            stepFreeAccess: CustomerInfoSchema.optional(),
            ticketGates: CustomerInfoSchema.optional(),
            impairedMobilitySetDown: CustomerInfoSchema.optional(),
            wheelchairsAvailable: CustomerInfoSchema.optional(),
        }).optional(),
        interchange: z.object({
            airport: CustomerInfoSchema.optional(),
            carPark: CustomerInfoSchema.optional(),
            cycleStorage: CustomerInfoSchema.optional(),
            metroServices: CustomerInfoSchema.optional(),
            onwardTravel: CustomerInfoSchema.optional(),
            port: CustomerInfoSchema.optional(),
            railReplacementServices: CustomerInfoSchema.optional(),
            taxiRank: CustomerInfoSchema.optional(),
            carHire: CustomerInfoSchema.optional(),
        }).optional(),
    }),
});

export default StationDetailsSchema;