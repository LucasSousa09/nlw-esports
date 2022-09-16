import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../theme';
import { GameParams } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { DuoMatch } from '../../components/DuoMatch';


export function Game() {
  const [adsList, setAdsList] = useState<DuoCardProps[]>([])
  const [discordDouSelected, setDiscordDuoSelected] = useState('')
  
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation()

  useEffect(() => {
    fetch(`http://192.168.0.106:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setAdsList(data))
  },[])

  function handleGoBack(){
    navigation.goBack()
  }

  function getDiscordUser(adsId: string){
    fetch(`http://192.168.0.106:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => setDiscordDuoSelected(data.discord))
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo} 
          />

          <View style={styles.right}/>
        </View>

        <Image 
          source={{uri: game.bannerUrl}}
          style={styles.banner}
          resizeMode="cover"
        />

        <Heading 
          title={game.title}
          subtitle="Conecte-se e começe a jogar!"
        />


      <FlatList
        data={adsList}
        // style={styles.containerList}
        contentContainerStyle={adsList.length > 0 ? styles.contentList : styles.emptyListContent}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DuoCard 
            data={item}
            onConnect={() => getDiscordUser(item.id)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anúncios publicados
          </Text>
        )}
      />

      <DuoMatch
        visible={discordDouSelected.length > 0}
        discord={discordDouSelected}
        onClose={() => setDiscordDuoSelected('')}
      />

      </SafeAreaView>
    </Background>
  );
}