import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View>
      <Text>profile page</Text>
      <Button title="뒤로가기" onPress={goBack} />
    </View>
  );
}
