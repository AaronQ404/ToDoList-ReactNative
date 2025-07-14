import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from "react-native-toast-message";
import mmkvHelper from "./helpers/mmkvHelper";
import toastConfig from "./toast.config";

export default function RootLayout() {

  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(()=>{
      const settings = mmkvHelper.getSettings();
      if(settings.darkMode && settings.darkMode != colorScheme){
        setColorScheme(settings.darkMode)
      }
  });
  
  const isDark = colorScheme === "dark";
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack    
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? "#171717" : "#f3f4f6",
          },
          headerTintColor: isDark ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Toast config={(toastConfig(colorScheme))}/>
    </GestureHandlerRootView>
    
  );
}
