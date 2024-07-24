import React from 'react'
import { DefaultTheme, Provider } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#704F38',
        secondary: '#282932',
    },
};

const RNPaperProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    )
}

export default RNPaperProvider