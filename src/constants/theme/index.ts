const palette = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
    yellow: '#FFD700',
};

export const theme = {
    palette,
    colors: {
        primary: palette.red,
        secondary: palette.green,
        tertiary: palette.blue,
        background: palette.white,
        text: palette.black,
        error: palette.red,
        success: palette.green,
        warning: palette.yellow,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 40,
    },
    fontFamily: {
        regular: 'OpenSans-Regular',
        bold: 'OpenSans-Bold',
    },
    fontSize: {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 40,
    },
    borderRadius: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 40,
    },
    boxShadow: {
        xs: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        sm: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        md: '0px 0px 16px rgba(0, 0, 0, 0.1)',
        lg: '0px 0px 24px rgba(0, 0, 0, 0.1)',
        xl: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    },
  
}