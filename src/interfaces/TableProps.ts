import { StationDetails, subStationLocation } from './stationDetails';

interface TableProps {
    data: StationDetails;
    loc: subStationLocation;
    facilitiesList: string[]; // row in table
  }

export default TableProps;