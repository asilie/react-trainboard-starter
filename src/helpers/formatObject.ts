import formatText from './formatText';
import keyMapper from './keyFormatter';

// Format objects with proper indentation
const formatObject = (obj: any, indentLevel = 0): string => {
    return Object.entries(obj)
        .map(([key, value]) => {
            const indent = '\t'.repeat(indentLevel * 2); // Indentation based on depth
            if (typeof value === 'object' && value !== null) {
                // Recursively format nested objects
                return `${indent}•${keyMapper(String(key))}:\n${formatObject(value, indentLevel + 1)}`;
            } else if (typeof value === 'string' && value.includes('<br>')) {
                // Formats string if <br>
                const formatted = formatText(value, indent);
                return `${indent}${keyMapper(String(key))}:\n${formatted}`;
            }
            else {
                // Format key-value pair
                return `${indent}${keyMapper(String(key))}: ${value}`;
            }
        })
        .join('\n');
};

export default formatObject;