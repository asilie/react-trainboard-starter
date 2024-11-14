import React from 'react';
import keyMapper from '../helpers/keyFormatter';
import ObjectToText from '../helpers/objectToText';
import TableProps from '../interfaces/TableProps';

const Table: React.FC<TableProps> = ({ data })=> {

    const entries = Object.entries(data);

    return (
        <table>
            <tbody>
                {entries.map(([key, value]) => (
                    <tr key = { key }>
                        <td>{keyMapper(String(key)) || key}</td> {/* Use custom display name or fallback to key */}
                        <td><pre>{ObjectToText(value)}</pre></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;