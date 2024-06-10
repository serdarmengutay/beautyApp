

// Button Props
export interface ButtonProps {
    title: string;
    icon?: string;
    onPress: () => void;
}

// Input Props

export interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    label?: string;
    icon?: any;
    iconPressed?: () => void;
}