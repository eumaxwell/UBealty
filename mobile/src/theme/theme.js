import { DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
        ...DefaultTheme.colors,
        primary: '#592e83',
        // accent: '#f1c40f',
        background: '#FAFAFE',
        onSurface: "#F00",
        onBackground: "#0F0",
    },
    button: {
        marginVertical: 24
    }
};

export default theme;