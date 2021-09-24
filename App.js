import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {

  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);

  return (
    <>
       <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
          alert('Modal has been closed')
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subTitulo}> HOTEL HILTON</Text>
              <Text> EL MEJOR HOTEL A NIVEL DE CENTROAMÉRICA</Text>
              <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}></Button>
            </View>
          </View>
        </Modal>
      <ScrollView >
        <View style={{ flexDirection: 'row' }} >
          <Image
            style={styles.banner}
            source={require('./img/bg.jpg')} />
        </View>
      </ScrollView>

      <View style={styles.contenedor} source="{require('./img/bg.jpg')}">
        <Text style={styles.titulo}>HOTEL HILTON EL SALVADOR</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
              <Image
                style={styles.ciudad}
                source={require('./img/actividad1.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./img/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./img/actividad5.jpg')}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>HABITACIONES </Text>
        <View style={styles.listaItem}>
          <View>
            <Image
              style={styles.mejores}
              source={require('./img/mejores1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./img/mejores2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./img/mejores3.jpg')}
            />
          </View>
        </View>


        <Text style={styles.titulo}>SERVICIOS DEL HOTEL</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./img/ruta1.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./img/ruta2.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./img/ruta3.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./img/ruta4.jpg')}
            />
          </View>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex:1
  },
  Modal:{
    backgroundColor: '#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1
  },
  subTitulo:{
    fontWeight: 'bold',
    fontSize:14,
    justifyContent:'center'
  }
});

export default App;