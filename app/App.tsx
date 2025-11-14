import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
  FlatList,
} from "react-native";

import { style } from "@/theme";

// type Product = {
//   id: string
//   name: string 
//   brand: string
//   price: string
// }

export default function ProductRegistration() {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([])
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const [isEditing, setIsEditing] = useState(false)
  const [editingProductId, setEditingProductId] = useState(null)

  function handleSaveProduct() {
    if (!name || !brand || !price) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (isEditing) {
      setProducts( products.map((product) => product.id === editingProductId ? { ...product, name, brand, price } : product ));
      setIsEditing(false);
      setEditingProductId(null)
    } else {
      
      
      const newProduct = {
        id: Date.now().toString(),
        name,
        brand,
        price: price,
      }  
      
      setProducts((currentProducts) => [...currentProducts, newProduct]);
    }

    Alert.alert(isEditing ? 'Produto atualizado!' :'Produto cadastrado com sucesso!');
    
    setName("");
    setBrand("");
    setPrice("");

    setVisible(false)
  };

  const startEdit = (product) => {
    setName(product.name)
    setBrand(product.brand)
    setPrice(product.price)
    setIsEditing(true)
    setEditingProductId(product.id)
    setVisible(true)
  }

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar exclusão', 
      'Tem certeza que dejesa deletar seta produito?',
    [
      { text: 'Cancelar', style: 'cancel'},
      {
        text: 'Deletar',
        style: 'destructive',
        onPress: () => {
          setProducts(products.filter((product) => product.id !== id));
        }
      }
    ],
      { cancelable: true}
    )
  }

  const renderProductItem = ({item}) => {
    return (
      <View style={style.card}>
        <View style={style.textContainer}>
          <Text style={style.productName}>{item.name}</Text>
          <Text style={{marginTop: 12, fontSize: 12,}}>Tamanho: {item.brand}</Text>
          <Text style={{marginTop: 18, fontSize: 12,}}>Preço: R${item.price}</Text>
        </View>

        <View style={style.actionContainer}>
          <TouchableOpacity
          style={[style.actionButton, style.editButton]}
          onPress={() => startEdit(item)}
          >
            <Text style={style.actionText}>
              <Feather name="edit-2"/>
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
          style={[style.actionButton, style.deleteButton]}
          onPress={() => handleDelete(item.id)}
          >
            <Text style={style.actionText}>
              <Feather name="trash-2"/>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.contentContainer}>
          <Text style={style.title}>Cadastrar produtos</Text>

          <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          style={style.list}
          ListEmptyComponent={() => {
            <Text style={style.emptyText}>Nenhum Produto cadastrado.</Text>
          }}
          />

          <Modal
            animationType="slide"
            // transparent={true}
            visible={visible}
          >
            <View style={style.closeButton}>
              <Pressable 
              onPress={() => setVisible(!visible)}>
              <Text 
              style={{
                backgroundColor: '#f33333', 
                color: '#fff', 
                width: 28, 
                height: 26,
                textAlign: 'center',
                paddingTop: 3,
                borderRadius: 50,
              }} 
                >X</Text>
              </Pressable>
            </View>
            <View style={style.contentModal}>
              
              <Text style={style.title}>{isEditing ? 'Editar produto' : 'Cadastrar produto'}</Text>
              <TextInput
                style={style.input}
                placeholder="Nome"
                value={name}
                onChangeText={(n) => setName(n)}
              />
              <TextInput
                style={style.input}
                placeholder="Tamanho"
                value={brand}
                onChangeText={(b) => setBrand(b)}
              />
              <TextInput
                style={style.input}
                placeholder="Preço"
                value={price}
                onChangeText={(p) => setPrice(p)}
              />
              <TouchableOpacity style={style.button} onPress={handleSaveProduct}>
                <Text style={{ color: "#fff", fontSize: 20, }}>{isEditing ? 'Atualizar' : 'Salvar'}</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View style={style.viewButtonAdd}>
            <Pressable style={{backgroundColor: '#2237f8', borderRadius: 10, width: 300, height: 36, justifyContent: 'center',}} onPress={() => setVisible(true)}>
              <Text style={{fontSize: 16, fontWeight: 500, textAlign: 'center', color: '#fcfcfc', }}>
                <Feather name="plus-circle" size={18}/>
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
