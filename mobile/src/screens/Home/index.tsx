import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]) 

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps){
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.0.106:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  })

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
        source={logoImg}
        style={styles.logo}
        />

        <Heading 
          title="Encontre seu duo!" 
          subtitle="Selecione o game que quer jogar..."
        />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard 
            data={item} 
            onPress={() => handleOpenGame(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </SafeAreaView>
    </Background>
  );
}