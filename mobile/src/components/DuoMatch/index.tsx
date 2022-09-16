import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface DuoMatchProps extends ModalProps {
  discord: string,
  onClose: () => void
}

export function DuoMatch({discord, onClose, ...rest}: DuoMatchProps) {
  const [isCopying, setIsCopying] = useState(false)

  async function handleCopyDiscordToClipboard(){
    setIsCopying(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert("Discord copiado", "Discord copiado para area de transferência")
    setIsCopying(false)
  }

  return (
    <Modal
    animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeIcon}
          >
            <MaterialIcons 
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle 
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='bold'
          />

          <Heading 
            title="Let's Play!" 
            subtitle='Agora é só começar a jogar!' 
            style={{alignItems: 'center', marginTop: 24}}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            disabled={isCopying}
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
          >
            <Text style={styles.discord}>
              { isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}