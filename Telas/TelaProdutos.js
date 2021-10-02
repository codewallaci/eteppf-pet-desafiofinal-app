import React, { useState , useEffect} from 'react';
import {  StyleSheet, Text, ScrollView, View } from 'react-native';
import axios from 'axios';

export default function TelaProdutos() {


  //Constante onde os dados da API vão ficar quando baixados.
  const [produtos, setProdutos] = useState([1])

      //o useEffect atualiza nossa constante produtos com os dados baixados da API toda vez que o usuário entrar na tela de produtos.
      useEffect(() =>{
        carregarProdutos()
      },[])

   //Função que faz requisção de todos os dados(produtos) que contém na API.  
  async function carregarProdutos(){
    return axios
    .get("http://eteppf-pet-desafio01.herokuapp.com/api/produtos")
    .then(function (response) {
      setProdutos(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  } 


    return (

      //Nossa visualização principal que é uma ScrollView, ela é scrollable, onde eu ter muitos produtos na mesma tela.
      <ScrollView style={styles.container}>
          <View style={styles.containermid}>
                {produtos.map((produto) => 
                          <View key={produto.id}style={styles.priceContainer}>
                          <View style={styles.firstLine}>    
                              <Text>Produto: </Text>
                              <Text style={styles.secondLine}>{produto.produtoNome}</Text>
                          </View>
                          <View style={styles.firstLine}>
                              <Text>Descrição: </Text>
                              <Text style={styles.secondLine}>{produto.descrição}</Text>
                          </View>
                          <View style={styles.firstLine}>
                              <Text>Valor: R$ </Text>
                              <Text style={styles.secondLinePrice}>{produto.valor}</Text>
                          </View>                 
                        </View>
              )}
            </View>
      </ScrollView>


    )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#FFF'

  },  firstLine: {
    flexDirection: "row",
    textAlign: 'right'
  },
  priceContainer: {
    width: '85%',
    height: 70,
    marginTop: 10,
    borderRadius: 8,
    borderColor: "#666",
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  containermid:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    
  },
    firstLine: {
    flexDirection: "row",
    textAlign: 'right'
  },
  secondLine: {
    color: '#000',
    textAlign: 'right'
  },
  secondLinePrice: {
    color: '#39D188'
  }
});