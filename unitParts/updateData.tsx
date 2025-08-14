import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { getDocumentInfo, getImgBySlug, saveData } from '../api/genApi';
import CommentPart from '../drawers/resultEntry/comment';
import ExamScore from '../drawers/resultEntry/exam';
import FirstTestScore from '../drawers/resultEntry/testOne';
import SecondTestScore from '../drawers/resultEntry/testTwo';
import NoteScore from '../drawers/resultEntry/noteScore';
import PsychomotorEntry from '../drawers/resultEntry/enterPsychomotor';
import AffectiveEntry from '../drawers/resultEntry/enterAffective';

const EditProfileScreen = ({ navigation }:any) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    // Fetch user profile data from API or local storage
    // For demonstration, we'll use dummy data
    const fetchUserProfile = async () => {
      try {
        // Simulate API call
        // const response = await getDocumentInfo('slug','path')
        const response = await getImgBySlug('slug','path')
        // new Promise(resolve => setTimeout(() => {
        //   resolve({ username: 'JohnDoe', email: 'john.doe@example.com', bio: 'A passionate developer.' });
        // }, 500));
        setProfileData(response);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchUserProfile();
  }, []);

  // ... rest of the component


  const handleInputChange = (field:any, value:any) => {
    setProfileData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      // Simulate API call to update profile
      await saveData(profileData,'/v3/sheetapi')
    //     // In a real app, you'd send profileData to your backend
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.goBack(); // Navigate back after successful save
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };
  
  return (
    <View style={{ padding: 20 }}>
        <View>
            <CommentPart/>
            <ExamScore/>
            <FirstTestScore/>
            <SecondTestScore/>
            <NoteScore/>
            <PsychomotorEntry/>
            <AffectiveEntry/>
        </View>
      <Button 
        title='Update' 
        onPress={handleSaveChanges}
      />

      {/* ... Save Button */}
    </View>
  );
}

export default EditProfileScreen;