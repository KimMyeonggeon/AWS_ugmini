import {
  Platform,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Alert,
  Linking,
  Text,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import styled, { css } from '@emotion/native';

export default function TabOneScreen() {
  return (
    <View
      style={css`
        flex: 1;
        background: white;
        padding-top: ${Platform.OS === 'android' ? 50 + 'px' : ''};
      `}
    >
      <Stack.Screen
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View
                style={css`
                  margin: ${20 + 'px'} ${24 + 'px'};
                `}
              ></View>
              <Text style={styles.title}>.</Text>
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>

      <View
        style={css`
          flex: 1;
          background: white;
          align-items: center;
        `}
      >
        <Text
          style={css`
            font-size: 40;
            margin-top: ${140 + 'px'};
          `}
        >
          주문 접수 되었습니다.
        </Text>
        <Text
          style={css`
            font-size: 20;
            margin-top: ${40 + 'px'};
          `}
        >
          당신의 작은 실천 하나가 {'\n'}
          {'      '}지구를 구합니다
        </Text>
      </View>
      <Button
        title="첫화면으로 돌아가기"
        onPress={() => router.push('/(tabs)/Image')}
      />
      <TouchableOpacity
        style={css`
          margin: ${20 + 'px'} ${24 + 'px'};
        `}
        onPress={() => router.push('/(tabs)/Image')}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
