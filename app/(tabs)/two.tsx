import React from 'react';
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

export default function product() {
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
          font-size: ${20 + 'px'};
          font-family: Pretendard500;
          margin: ${40 + 'px'} ${24 + 'px'};
          color: black;
          flex: 1;
        `}
      >
        <View style={styles.box}>
          <Text style={styles.title}> 물품 분류 </Text>
          <Text style={styles.content}>청자켓</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.title}> 색상 </Text>
          <Text style={styles.content}> 135,206,236</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.title}> 사용가능 치수 </Text>
          <Text style={styles.content}> 40 * 60 </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}> 오염및 파손부위 유무 </Text>
          <Text style={styles.content}> 무 </Text>
        </View>
      </View>

      <Button title="이동" onPress={() => router.push('/(tabs)/mm')} />
      <TouchableOpacity
        style={css`
          margin: ${25 + 'px'} ${24 + 'px'};
        `}
        onPress={() => router.push('/(tabs)/two')}
      ></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
  buttonText: {
    color: '#fff', // 버튼 글자색상 추가
    fontSize: 18,
    fontWeight: 'bold',
  },
});
