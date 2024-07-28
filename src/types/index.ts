// Button Props
export interface ButtonProps {
  title: string;
  icon?: string;
  onPress: () => void;
  isDisabled?: boolean;
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
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export interface ShopCardProps {
  data: any;
}
