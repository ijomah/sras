import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MyTextInput from "../unitParts/reuseTextInput";

export default function CommentPart() {
    return (
        <SafeAreaView>
            <View style={styles.commentPart}>
                <Text>Teacher's or Principal's Comment</Text>
               <MyTextInput 
                    label="Enter Comment" 
                    inputErr={undefined} 
                    inputConfig={{
                        
                    }} 
              />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    commentPart: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})