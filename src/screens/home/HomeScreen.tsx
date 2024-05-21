import {View, Text, SafeAreaView, Image, useColorScheme} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MapComponents from '../../components/maps/MapComponents';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// 여기서 ParamList를 정의합니다.
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const MaxLength = 10;

const Stories = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const goProfileScreen = () => {
    console.log('프로필화면으로 이동');
    navigation.navigate('Profile');
  };

  return Array.from({length: MaxLength}).map((_, index) => {
    return (
      <Story key={index} lastIdx={index} onPress={goProfileScreen}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65PKM2avhGXGFRItFDPcY8TU3VOIUHgnrKgcCt3mcKw&s',
          }}
          style={{width: 60, height: 60, borderRadius: 40}}
        />
        <UserName>pokemon_{index}</UserName>
      </Story>
    );
  });
};
export default function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView>
      <StoryList
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        <Stories />
      </StoryList>
      <View>
        <MapComponents />
      </View>
    </SafeAreaView>
  );
}

const StoryList = styled.ScrollView`
  height: 100px;
  flex-direction: row;
  box-sizing: border-box;
`;

const Story = styled.TouchableOpacity<{lastIdx: number}>`
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* ${({lastIdx}: {lastIdx: number}) =>
    lastIdx === MaxLength - 1 ? 'margin-right: 0px;' : ''} */
`;

const UserName = styled.Text``;
