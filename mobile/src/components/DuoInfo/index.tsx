import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface DuoInfoProps {
  label: string,
  description: string,
  colorValue?: ColorValue 

}

export function DuoInfo({label, description, colorValue = THEME.COLORS.TEXT}: DuoInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text numberOfLines={1} style={[styles.info, {color: colorValue}]}>{description}</Text>
    </View>
  );
}