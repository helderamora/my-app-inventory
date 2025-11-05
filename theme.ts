import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    height: 200,
    gap: 20,
    padding: 10,
    // backgroundColor: '#dedeb8',
  },
  title: {
    color: 'black',
    fontSize: 36,
    lineHeight: 100,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 8, 
    borderColor: 'black', 
    borderRadius: 8,
    backgroundColor: '#e9e4e4', 
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8, 
    borderColor: 'black', 
    borderRadius: 8,
    backgroundColor: '#0547c2',
  }
});