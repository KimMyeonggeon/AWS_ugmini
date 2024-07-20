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
              <Text style={styles.title}></Text>
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
          Re Fashion
        </Text>
        <Text
          style={css`
            font-size: 20;
            margin-top: ${40 + 'px'};
          `}
        >
          의류 업사이클링 플랫폼
        </Text>
      </View>

      <Button title="이동" onPress={() => router.push('/(tabs)/Image')} />
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
