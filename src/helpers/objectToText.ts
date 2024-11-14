import formatObject from './formatObject';

const ObjectToText = (data: any ) => {
    // Format the object and convert it to readable text
    const formattedText = formatObject(data);
  
    return formattedText;
};
  
export default ObjectToText;