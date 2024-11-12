const formatTimezoneOffset = (offset: number): string => {
    // Convert minutes to hours and minutes
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
  
    // Format the timezone offset as "+00:00" or "-00:00"
    const sign = offset <= 0 ? '+' : '-';
  
    // Ensure two digits for hours and minutes
    const formattedOffset = `${sign}${String(hours).padStart(2, '0')}%3A${String(minutes).padStart(2, '0')}`;
  
    return formattedOffset;
};

export default formatTimezoneOffset;