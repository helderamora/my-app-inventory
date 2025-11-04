import React, { useEffect, useState} from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from "react-native";

const StockListScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
        setItems{[
            { id: '1', name: 'Produto A', quantity: 50, minQuantity: 10},
            { id: '1', name: 'Produto B', quantity: 5, minQuantity: 10},
            { id: '1', name: 'Produto C', quantity: 30, minQuantity: 10},
        ]};
        setLoading(false);
    }, 1000 );
  }, []);
}

const renderItems = ({ item }) => {
    const isLowStock = item.quantity <= item.minQuantity;
    return (
        <TouchableOpacity
            style={[styles.itemContainer, isLowStock && styles.lowStockItem]}
            onPress={() => navigation.navigate('EditItem', { item })}
            >
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
                {isLowStock && <Text style={styles.lowStockWarning}>Estoque baixo!</Text> }
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f6f9',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
    },
    itemContainer: {
        paddingBottom: 80,     
    },
    itemCrad: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        padding: 16,
    }
});  