
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
          <NavigationContainer>
              <View style={styles.container}>
                <Text>This Is My website</Text>
                <StatusBar style="auto" />
              </View>
         </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
