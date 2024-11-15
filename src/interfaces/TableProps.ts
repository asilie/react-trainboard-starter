import { stationDetails, subStationLocation } from './stationDetails';

interface TableProps {
    data: stationDetails;
    loc: subStationLocation;
    facilitiesList: string[]; // row in table
  }

export default TableProps;