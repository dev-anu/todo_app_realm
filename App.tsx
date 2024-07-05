import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TaskList from './src/components/TaskList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.semiContainer}>
      <TaskList/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  semiContainer:{
    padding:10
  }
});
