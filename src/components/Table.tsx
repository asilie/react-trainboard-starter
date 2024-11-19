import React from 'react';
import formatText from '../helpers/formatText';
import keyMapper from '../helpers/keyFormatter';
import ObjectToText from '../helpers/objectToText';
import TableProps from '../interfaces/TableProps';

const Table: React.FC<TableProps> = ({ data, loc, facilitiesList })=> {

    const entriesLocation = Object.entries(loc);

    return (
        <table>
            <thead>
                <tr>
                    <th>{ 'Location' }</th>
                    {entriesLocation.map(([key, value]) => (
                        <tr key = { key }>
                            <td>{keyMapper(String(key)) || key}</td> {/* Use custom display name or fallback to key */}
                            <td><pre>{ formatText(value, '') }</pre></td>
                        </tr>
                    ))}
                </tr>
            </thead>
        </table>
    );
};

export default Table;