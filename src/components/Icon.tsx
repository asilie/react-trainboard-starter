import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { IconBaseProps, IconType } from 'react-icons/lib';
import loadable from '@loadable/component';
import iconMap from '../helpers/iconMapExample';
import IconMap from '../interfaces/IconMap';

interface DynamicIcon {
    iconName: string;
    iconProps?: IconBaseProps;
}

type IconLibrary = 'fa' | 'md' | 'pi' | 'ri';

const isIconLibrary = (library: string): library is IconLibrary => {
    return ['fa', 'md', 'pi', 'ri'].includes(library);
};

const isValidIconKey = (key: string, obj: JSX.Element): key is keyof JSX.Element => {
    return key in obj;
};

const isInIconMap = (key: string, obj: IconMap): key is keyof IconMap => {
    return key in obj;
};

const loadIcon = (lib: string, iconName: string): IconType => {

    const moduleString = `react-icons/${lib}/index.js`;
    console.log(moduleString);

    return loadable(() => import(moduleString), {
      
        resolveComponent: (el: JSX.Element) => {

            console.log('here');
            if (isValidIconKey(iconName, el)) {
                return el[iconName];
            }
            throw new Error(`Icon ${iconName} does not exist in library ${lib}`);
        },
    }) as IconType;
};

const Icon = ({ iconName, iconProps }: DynamicIcon) => {
    if (isInIconMap(iconName, iconMap)) {
        iconName = iconMap[iconName];
    }
    
    const iconLibrary = iconName.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')[0].toLocaleLowerCase();
    if (isIconLibrary(iconLibrary)) {
        const IconComponent: IconType = loadIcon(iconLibrary, iconName);
        return <IconComponent { ...iconProps } />;
    } else {
        throw new Error(`Icon library ${iconLibrary} is not valid.`);
    }
};

export default Icon; 