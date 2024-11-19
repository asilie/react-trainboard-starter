import { z } from 'zod';
import StationInformation from './StationInformation';

interface StationResponse {
    stations: StationInformation[];
}

const StationResponseSchema = z.object({
    stations: z.array(z.object({
        id: z.number(),
        name: z.string(),
        aliases: z.union([z.array(z.string()), z.array(z.string()).length(0)]),
        crs: z.union([z.string(), z.null()]),
        nlc: z.string(),
        latitude: z.union([z.number(), z.null()]),
        longitude: z.union([z.number(), z.null()]),
        isGroupStation: z.boolean(),
        isSilverSeekStation: z.boolean(),
    })),
});

export default StationResponseSchema;