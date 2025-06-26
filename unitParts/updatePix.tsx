    import { launchImageLibrary } from 'react-native-image-picker';
    import React, { useState } from 'react';
    import { View, Button, Image, StyleSheet } from 'react-native';

    const ImagePickerComponent = () => {
      const [selectedImageUri, setSelectedImageUri] = useState(null);

      const pickImage = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            const uri = response.assets?.[0]?.uri;
            setSelectedImageUri(uri);
          }
        });
      };

      return (
        <View style={styles.container}>
          <Button title="Pick Image from Gallery" onPress={pickImage} />
          {selectedImageUri && (
            <Image source={{ uri: selectedImageUri }} style={styles.image} />
          )}
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 20,
      },
    });

    export default ImagePickerComponent;


    // npx expo install expo-image-picker


//   putin  app.json

// {
//   "expo": {
//     "plugins": [
//       [
//         "expo-image-picker",
//         {
//           "photosPermission": "The app accesses your photos to let you share them with your friends."
//         }
//       ]
//     ]
//   }
// }

//     import { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState<string | null>(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images', 'videos'],
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });