import React, { useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { style } from '@/theme';

export default function App() {

  let [name,setName] = useState('');
  let [pass, setPass] = useState('');

  function handleLogin() {
    console.log(name, pass) 

    if (!name || !pass) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setName('');
    setPass('');
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.contentContainer}>
          <Text style={style.title}>Cadastre-se</Text>
          <TextInput 
          style={style.input} 
          placeholder='nome'
          value={name}
          onChangeText={t => setName(t)}
          />
          <TextInput 
          style={style.input} 
          placeholder='senha'
          value={pass}
          secureTextEntry={true}
          onChangeText={p => setPass(p)}
          />
          <TouchableOpacity style={style.button} onPress={handleLogin}>
            <Text style={{color: '#fff',}}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
