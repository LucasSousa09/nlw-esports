import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native'

import { THEME } from '../../theme';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string,
  name: string,
  yearsPlaying: number,
  hourStart: string,
  hourEnd: string,
  useVoiceChannel: boolean,
  weekDays: string[]
}

interface Props {
  data: DuoCardProps,
  onConnect: (() => void)
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' description={data.name}/>
      <DuoInfo label='Tempo de Jogo' description={`${data.yearsPlaying} anos`}/>
      <DuoInfo label='Disponibilidade' description={`${data.weekDays.length} dias \u2022 ${data.hourStart}h - ${data.hourEnd}h`}/>
      <DuoInfo label='Chamada de Áudio?' colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} description={data.useVoiceChannel? "Sim" : "Não"}/>
      <TouchableOpacity style={styles.connectButton} onPress={onConnect}>
        <GameController 
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>Conectar</Text> 
      </TouchableOpacity>
    </View>
  );
}