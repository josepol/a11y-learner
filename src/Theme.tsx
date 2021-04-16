import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        primaryColorDark: string;
        secondaryColor: string;
        secondaryColorDark: string;
        successColor: string;
        successColorDark: string;
        infoColor: string;
        infoColorDark: string;
        warningColor: string;
        warningColorDark: string;
        dangerColor: string;
        dangerColorDark: string;
        blackColor: string;
        blackColorDark: string;
        greyColor: string;
        greyColorDark: string;
        fontColor: string;
        fontColorAlternative: string;
        fontSizeRegular: string;
        fontSizeTitle: string;
        fontSizeTitleH1: string;
        fontSizeSmall: string;
        backgroundWhite: string;
        spaces: Array<string>;
        breakPoints: Array<string>;
    }
}

export const spaces: Array<string> = [
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
    '24rem',
]

export const breakPoints: Array<string> = [
    '768px'
];

export const generalTheme = {
    successColor: '#4caf50',
    successColorDark: '#388e3c',
    infoColor: '#009688',
    infoColorDark: '#00796b',
    warningColor: '#ff5722',
    warningColorDark: '#125ca6',
    dangerColor: '#c62828',
    dangerColorDark: '#8e0000',
    blackColor: '#374046',
    blackColorDark: '#131618',
    greyColor: '#d0d2d3',
    greyColorDark: '#505254',
    fontColor: '#374046',
    fontColorAlternative: '#374046',
    fontSizeRegular: '16px',
    fontSizeTitle: '21px',
    fontSizeTitleH1: '32px',
    fontSizeSmall: '13px',
    backgroundWhite: 'white',
    backgroundWhiteDark: '#000000',
    spaces,
    breakPoints
}

export const regularTheme: DefaultTheme = {
    primaryColor: '#1976d2',
    primaryColorDark: '#125ca6',
    secondaryColor: '#AAAAAA',
    secondaryColorDark: '#707070',
    ...generalTheme
};

export const alternativeTheme: DefaultTheme = {
    primaryColor: '#fff',
    primaryColorDark: '#1976d2',
    secondaryColor: '#cacaca',
    secondaryColorDark: '#cfd8dc',
    ...generalTheme
};


