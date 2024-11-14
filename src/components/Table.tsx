import React from 'react';
import { stationDetails } from '../interfaces/stationDetails';

interface TableProps {
  data: stationDetails; // row in table
}

const keyMap: { [ key:string ]: string } = {
    location: 'Location',
    facilities: 'Facilities',
};

const Table: React.FC<TableProps> = ({ data })=> {

    const entries = Object.entries(data);

    return (
        <table>
            <tbody>
                {entries.map(([key, value]) => (
                    <tr key = { key }>
                        <td>{keyMap[key] || key}</td> {/* Use custom display name or fallback to key */}
                        <td>{String(value)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;