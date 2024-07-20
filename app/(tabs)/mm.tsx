// import React from 'react';
// import {
//   Platform,
//   View,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Text,
//   Button,
// } from 'react-native';
// import styled, { css } from '@emotion/native';
// import { Stack, router } from 'expo-router';
// import { Image } from 'react-native';

// export default function DataDisplayScreen() {
//   const renderItem = ({ index }) => (
//     <View style={[styles.box, index === 0 && styles.redBox]}>
//       <Text style={styles.title}>{`박스 ${index + 1}`}</Text>
//       <Text style={styles.content}>{`임의의 내용 ${index + 1}`}</Text>
//     </View>
//   );

//   return (
//     <View
//       style={css`
//         flex: 1;
//         background: white;
//         padding-top: ${Platform.OS === 'android' ? 50 + 'px' : ''};
//       `}
//     >
//       <Stack.Screen
//         options={{
//           headerTitle: '',
//           headerShadowVisible: false,
//           headerShown: true,
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => router.back()}>
//               <View
//                 style={css`
//                   margin: ${20 + 'px'} ${24 + 'px'};
//                 `}
//               ></View>
//               <Text style={styles.title}></Text>
//             </TouchableOpacity>
//           ),
//         }}
//       ></Stack.Screen>
//       <View
//         style={css`
//           margin: ${40 + 'px'} ${24 + 'px'};
//           flex: 1;
//         `}
//       >
//         <FlatList
//           data={[...Array(4)]}
//           renderItem={renderItem}
//           keyExtractor={(_, index) => index.toString()}
//           numColumns={2}
//           contentContainerStyle={styles.listContainer}
//           columnWrapperStyle={styles.row}
//         />
//       </View>
//       <Button title="이동" onPress={() => router.push('/(tabs)/last')} />
//       <TouchableOpacity
//         style={css`
//           margin: ${20 + 'px'} ${24 + 'px'};
//         `}
//         onPress={() => router.push('/(tabs)/last')}
//       ></TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   box: {
//     backgroundColor: '#ffffff',
//     padding: 15,
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//     width: '48%',
//     height: 140,
//   },
//   redBox: {
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   content: {
//     fontSize: 14,
//   },
// });
import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native';
import styled, { css } from '@emotion/native';
import { Stack, router } from 'expo-router';

export default function DataDisplayScreen() {
  const handleImagePress = (imagePath) => {
    // 이미지 클릭 시 실행할 코드
    router.push('/(tabs)/last');
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
              <Text style={styles.title}></Text>
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
      <View
        style={css`
          margin: ${40 + 'px'} ${24 + 'px'};
          flex: 1;
          gap: 25;
        `}
      >
        <Text
          style={css`
            font-size: 25;
          `}
        >
          원하시는 디자인을 골라주세요
        </Text>
        <View style={styles.imageGrid}>
          <TouchableOpacity onPress={() => handleImagePress('bag.jpg')}>
            <Image
              source={require('../../assets/images/bag.jpg')}
              style={{ width: 140, height: 140, margin: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('onr.jpg')}>
            <Image
              source={require('../../assets/images/onr.jpg')}
              style={{ width: 140, height: 140, margin: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('hat.jpg')}>
            <Image
              source={require('../../assets/images/hat.jpg')}
              style={{ width: 140, height: 140, margin: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('wallet.jpg')}>
            <Image
              source={require('../../assets/images/wallet.jpg')}
              style={{ width: 140, height: 140, margin: 16 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button title="이동" onPress={() => router.push('/(tabs)/last')} /> */}
      <TouchableOpacity
        style={css`
          margin: ${20 + 'px'} ${24 + 'px'};
        `}
        onPress={() => router.push('/(tabs)/last')}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    width: '48%',
    height: 140,
  },
  redBox: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 128,
    marginBottom: 16,
  },
});
