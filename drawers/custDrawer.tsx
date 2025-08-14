import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Image } from 'react-native';
import ProfileData from '../unitParts/profileData';

export default function CustomDrawerContent(props:any) {
  return (
    <DrawerContentScrollView {...props}>
        <ProfileData />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}