// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, Alert } from 'react-native';

// const EditProfileScreen = ({ navigation }) => {
//   const [profileData, setProfileData] = useState({
//     username: '',
//     email: '',
//     bio: '',
//   });

//   useEffect(() => {
//     // Fetch user profile data from API or local storage
//     // For demonstration, we'll use dummy data
//     const fetchUserProfile = async () => {
//       try {
//         // Simulate API call
//         const response = await new Promise(resolve => setTimeout(() => {
//           resolve({ username: 'JohnDoe', email: 'john.doe@example.com', bio: 'A passionate developer.' });
//         }, 500));
//         setProfileData(response);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };
//     fetchUserProfile();
//   }, []);

//   // ... rest of the component
// };

//   const handleInputChange = (field, value) => {
//     setProfileData(prevData => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Username:</Text>
//       <TextInput
//         style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 10 }}
//         value={profileData.username}
//         onChangeText={(text) => handleInputChange('username', text)}
//       />

//       <Text>Email:</Text>
//       <TextInput
//         style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 10 }}
//         value={profileData.email}
//         onChangeText={(text) => handleInputChange('email', text)}
//         keyboardType="email-address"
//       />

//       <Text>Bio:</Text>
//       <TextInput
//         style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 20, height: 80 }}
//         value={profileData.bio}
//         onChangeText={(text) => handleInputChange('bio', text)}
//         multiline
//       />

//       {/* ... Save Button */}
//     </View>
//   );

//     const handleSaveChanges = async () => {
//     try {
//       // Simulate API call to update profile
//       await new Promise(resolve => setTimeout(() => {
//         // In a real app, you'd send profileData to your backend
//         console.log('Profile updated:', profileData);
//         resolve();
//       }, 500));
//       Alert.alert('Success', 'Profile updated successfully!');
//       navigation.goBack(); // Navigate back after successful save
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       Alert.alert('Error', 'Failed to update profile. Please try again.');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       {/* ... TextInputs */}
//       <Button title="Save Changes" onPress={handleSaveChanges} />
//     </View>
//   );
// };

// export default EditProfileScreen;