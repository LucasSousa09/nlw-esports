import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,

    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,

    backgroundColor: THEME.COLORS.SHAPE ,

    marginRight: 16,
    borderRadius: 8,
  },
  connectButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', 

    paddingHorizontal: 25,
    paddingVertical: 9.5,
    
    backgroundColor: THEME.COLORS.PRIMARY,

    borderRadius: 6,
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});