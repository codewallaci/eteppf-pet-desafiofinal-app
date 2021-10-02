import React, { useState } from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

//Biblioteca que eu usei para fazer enviar e consultar os dados da API, axios é um cliente HTTP baseado em promises para fazer requisições.
import axios from 'axios';

export default function TelaCadastro({ navigation }) {

  //Uma constante que contém uma arraylist dos dados inicais que eu quero que o data contenha.
  const INIT_DATA = {
    produtoNome: "",
    descrição: "",
    valor: "",
  }

  //A constante data que tem como os dados array dentro da constante INIT_DATA como seus dados já predefinidos.
  const [data, setData] = useState(INIT_DATA)

  //A função que vai salvar os dados que o usuário digita nos campos dentro do aplivativo para posteriomente serem enviados para a API.
  function changeData(key, value){
    setData({...data, [key]: value})
  }

  //A função que vai criar o produto, enviando os dados que estão salvos na constante data para a API usando o axios.
  function criar(){
    return axios
   .post("http://eteppf-pet-desafio01.herokuapp.com/api/produtos/cadastro", data)
   .then(function (response) {
     alert("Produto cadastrado com sucesso.")
   })
   .catch(function (error) {
     console.log(error);
   });
 }
    return (

      //Minha visualização principal, com todos os componentes dentro.
        <View style={styles.container}>
            <View style={styles.containermid}>
                <View style={styles.img}>
                  <Image source={require('../imgs/logo.png')}/>
                  <Text style={styles.textSubTitle}>Cadastro de produtos</Text>
                </View>
                    <View style={styles.inputs}>
                       <Text style={styles.textInput}>Dados do produto:</Text>
                        <TextInput style={styles.inputField}
                        placeholder="Nome do produto"
                        onChangeText={(text) => changeData("produtoNome", text)}
                        />
                        <TextInput style={styles.inputField}
                        placeholder="Descrição do produto"
                        onChangeText={(text) => changeData("descrição", text)}
                        />
                        <TextInput style={styles.inputField}
                        placeholder="Valor do produto"
                        keyboardType='numeric' onChangeText={(text) => changeData("valor", text)}/>        
                    </View>
                        <TouchableOpacity style={styles.btn}onPress={() => {criar()}} >
                          <Text style={styles.btnText}>CADASTRAR</Text>
                        </TouchableOpacity>
                          <TouchableOpacity style={styles.btn2} onPress={() => {navigation.navigate('Produtos')}}>
                          <Text style={styles.btnText2}>Clique aqui para visualizar todos os produtos</Text>
                        </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containermid:{
    width: '85%',
    height: '90%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center'
  },
  textSubTitle: {
      fontSize: 20,
      marginTop: 50,
      textAlign: 'center'
  },
  textInput: {
    marginTop: 15,
  },
  inputs:{
    height: 50,
  },
  inputField: {

      marginTop: 10,

      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10
  },
  btn: {
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39D188',
    borderRadius: 5,
    marginTop: 140
  },
  btn2: {
      marginTop: 20
  },
  btnText: {
    color: '#fff'
  },
  btnText2: {
    color: '#2D77C8',
    textAlign: 'center'
  },
  img: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});