import { StationDetails, SubStationLocation } from './StationDetails';

interface TableProps {
    data: StationDetails;
    loc: SubStationLocation;
    facilitiesList: string[]; // row in table
  }

export default TableProps;