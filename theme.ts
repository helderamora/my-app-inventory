import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '98%',
    height: 200,
    gap: 20,
    padding: 10,
    // backgroundColor: '#dedeb8',
  },
  viewButtonAdd: {
    flex: 0, 
    // paddingHorizontal: 200,
    // paddingVertical: 10,
    alignItems: 'center',
    // backgroundColor: '#ac3939ff',
  },
  contentModal: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  closeButton: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  title: {
    color: 'black',
    fontSize: 16,
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
    backgroundColor: '#2ec96f',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#e0e3e6c4',
    padding: 6,
    marginVertical: 5,
    borderRadius: 6,
    borderLeftWidth: 5,
    borderLeftColor: '#0044ffff',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 50,
  },
  list: {
    flex: 1,
  },
  textContainer: {
    width: 300,
    height: 100,
    flexDirection: 'column',
  },
  actionContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginTop: 26,
  },
  actionButton: {
    width: 24,
    height: 24,
    borderRadius: '50%',
  },
  actionText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
  },
  editButton: {
    backgroundColor: '#4CAF50', 
  },
  deleteButton: {
    backgroundColor: '#af4c4cff', 
  },
});