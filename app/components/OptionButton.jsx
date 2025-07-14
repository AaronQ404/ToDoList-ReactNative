import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import { View } from 'react-native';


const router = useRouter();
const handlePressOptions = () => {

    router.navigate({
        pathname: "/components/OptionMenu"        
    });
}

export default OptionButton = () =>{
    return (
    <View >
      <Ionicons onPress={handlePressOptions } name="settings" size={32} color="gray" />
    </View>
    )
}


