import React, { useEffect,useState } from 'react';
import { IconBaseProps } from 'react-icons';
import iconMap from '../helpers/iconMapExample';
import IconMap from '../interfaces/IconMap';

interface DynamicIcon {
    iconName: string;
    iconProps?: IconBaseProps;   
}

const isInIconMap = (key: string, obj: IconMap): key is keyof IconMap => {
    return key in obj;
};

const DynamicIcon = ({ iconName, iconProps }: DynamicIcon) => {
    const [IconComponent, setIconComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        if (isInIconMap(iconName, iconMap)) {
            iconMap[iconName]().then((Icon) => {
                setIconComponent(() => Icon);
            });
        }
    }, [iconName]);

    if (!IconComponent) {return null;} // Or return a loading spinner, placeholder, etc.

    return <IconComponent { ...iconProps } />;
};

export default DynamicIcon;