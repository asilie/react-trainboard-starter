// Replace <br> tags with \n and maintain indentation
const formatText = (text: string, indent: string): string => {

    if (text == null) {
        throw new Error('Input text cannot be null or undefined');
    }
    if (typeof text !== 'string') {
        throw new Error('Input text must be a string');
    }
    if (indent == null) {
        indent = '';  // Default to no indentation
    }

    // Replace <br> tags with newlines
    const formattedText = text.replace(/<br\s*\/?>/g, '\n');
    
    // Split into lines and add indentation
    return formattedText
        .split('\n')
        .map(line => `${indent}${line}`)  // 2 spaces of indentation per line
        .join('\n');
};

export default formatText;