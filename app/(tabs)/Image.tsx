import { Stack, router, useLocalSearchParams } from 'expo-router';
// import Button from '../../components/Button';
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
import styled, { css } from '@emotion/native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function majorCertification() {
  const { major } = useLocalSearchParams();
  const [images, setImages] = useState<string[]>([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled) {
      setImages([result.assets[0].uri]);
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: string | null;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={index === 0 ? styles.firstCell : styles.otherCell}
        onPress={() => {
          if (images.length === 1 && !item) {
            Alert.alert('', '최대 1장 첨부 가능합니다.');
          } else {
            pickImage();
          }
        }}
      >
        {item ? (
          <Image
            resizeMode="contain"
            source={{ uri: item }}
            style={styles.image}
          />
        ) : (
          <Text>이미지를 선택하세요</Text>
        )}
      </TouchableOpacity>
    );
  };

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
          margin: ${20 + 'px'} ${24 + 'px'};
          justify-content: space-between;
        `}
      >
        <Title> 리사이클링 할 옷의 </Title>
        <Title> 이미지를 넣어주세요</Title>
        <SubTitle
          style={css`
            margin-top: ${12 + 'px'};
            color: black;
          `}
        >
          *이미지는 최대 1장까지 첨부하실 수 있습니다.
        </SubTitle>
      </View>
      <TouchableOpacity style={styles.firstCell} onPress={pickImage}>
        {images.length > 0 ? (
          <Image
            resizeMode="contain"
            source={{ uri: images[0] }}
            style={styles.image}
          />
        ) : (
          <Text>이미지를 선택하세요</Text>
        )}
      </TouchableOpacity>
      {/* <Button
        title="다음"
        // onPress={async () => {
        //   router.push('/(tabs)/two');
        //   // if (images.length > 0) {
        //   //     for (const imageUrl of images) {
        //   //         await presignedMajorImage(imageUrl).then((res: any) => {
        //   //             if (res) {
        //   //                 const presignedImage: string = res.data;
        //   //                 putUrltoAws(presignedImage, imageUrl);
        //   //                 const presignedUrl = presignedImage.split("?");
        //   //                 certificateMajor(presignedUrl[0], major as string);
        //   //             }
        //   //         });
        //   //     }
        //   // }
        // }}
        onPress={() => router.push('/(tabs)/two')}
        type="secondary"
        disabled={1 !== images.length && images.length <= 1 ? false : true}
        styles={{
          container: css`
            margin: ${13 + 'px'} ${24 + 'px'};
          `,

          text: css`
            font-size: ${42 + 'px'};
          `,
        }}
      /> */}
      <Button title="이동" onPress={() => router.push('/(tabs)/two')} />
      <TouchableOpacity
        style={css`
          margin: ${20 + 'px'} ${24 + 'px'};
        `}
        onPress={() => router.push('/(tabs)/two')}
      ></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  firstCell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 340, // 사이즈를 크게 변경
    height: 120, // 사이즈를 크게 변경
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    flex: 1,
    margin: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  otherCell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150, // 사이즈를 크게 변경
    height: 150, // 사이즈를 크게 변경
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },

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
  buttonText: {
    color: '#fff', // 버튼 글자색상 추가
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-family: Pretendard600;
`;
const SubTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-family: Pretendard500;
`;
