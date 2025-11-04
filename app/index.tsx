import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam vero pariatur aliquid non ducimus accusamus, quisquam eius minus, architecto, ipsam qui iusto necessitatibus aspernatur harum ullam delectus voluptas temporibus.Welcome to the Home Screen!  
        </Text>
      </View>
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    backgroundColor: '##f5f5f5',
  },
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    padding: 16,
  },
});
