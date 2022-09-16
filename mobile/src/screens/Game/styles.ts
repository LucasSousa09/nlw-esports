import { Inter_200ExtraLight } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20,
  },
  banner: {
    width: '85%',
    height: 160,
    marginTop: 32,
    borderRadius: 8,
  },
  contentList: {
    marginLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyListText: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: 'bold',
    
    color: THEME.COLORS.CAPTION_300,
    backgroundColor: THEME.COLORS.SHAPE,
    
    paddingVertical: 16,
    paddingHorizontal: 20,

    borderRadius: 4,
  }
});