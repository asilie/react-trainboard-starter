// Replace <br> tags with \n and maintain indentation
const formatText = (text: string, indent: string): string => {
    // Replace <br> tags with newlines
    const formattedText = text.replace(/<br\s*\/?>/g, '\n');
    
    // Split into lines and add indentation
    return formattedText
        .split('\n')
        .map(line => `${indent}${line}`)  // 2 spaces of indentation per line
        .join('\n');
};

export default formatText;