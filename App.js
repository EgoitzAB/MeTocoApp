import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PortadaScreen from './src/pages/PortadaScreen';
import InicioScreen from './src/pages/InicioScreen';
import OtraPaginaScreen from './src/pages/OtraPaginaScreen';

const Stack = createStackNavigator();

const Pantalla2 = () => (
  <View style={styles.container}>
    <Text style={styles.textoOpcion}>
      ME TOCO {"\n"}
      PLAN DE DESVÍO DE FONDOS PÚBLICOS {"\n"}
      MINISTERIOS DE BORRACHAS</Text>
    <Image source={require('./assets/images/entrada2.jpg')} style={styles.image} />

    <StatusBar style="auto" />
  </View>
);

const Pantalla1 = () => (
  <View style={styles.container}>
    <Text style={styles.textoOpcion}>
      DESVIANDO FONDOS {"\n"}
      NO ES MAGIA, SON TUS IMPUESTOS</Text>
    <Image source={require('./assets/images/entrada1.jpeg')} style={styles.image} />
    <StatusBar style="auto" />
  </View>
);

export default function App() {
  const [showPantalla1, setShowPantalla1] = useState(true);
  const [showPantalla2, setShowPantalla2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPantalla1(false);
      setShowPantalla2(true);
    }, 3000);

    // Limpieza del temporizador cuando el componente se desmonta
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showPantalla2) {
      const timer2 = setTimeout(() => {
        // Puedes hacer algo aquí cuando cambias a la segunda pantalla
        setShowPantalla2(false);
      }, 6000);

      // Limpieza del temporizador cuando el componente se desmonta
      return () => clearTimeout(timer2);
    }
  }, [showPantalla2]);

  return (
    <>
      {showPantalla1 ? (
        <Pantalla1 />
      ) : showPantalla2 ? (
        <Pantalla2 />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
  initialRouteName="ME TOCO"
  screenOptions={{
    headerStyle: {
      backgroundColor: 'purple',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center', // Alinea el título al centro
      flex: 1, // Permite que el título ocupe todo el ancho disponible
    },
  }}
>
<Stack.Screen
  name="ME TOCO"
  component={PortadaScreen}
  options={{
    headerTitle: (props) => (
      <Text
        style={{
          fontSize: 20, // Tamaño de la fuente ajustado según tus preferencias
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        ME TOCO
      </Text>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => alert('Botón seleccionado')}
        style={{
          marginRight: 10,
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: 'white' }}>Co</Text>
        </View>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: 'purple',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center', // Alinea el título al centro
    headerTitleStyle: {
      fontSize: 24, // Ajusta según tus preferencias
      fontWeight: 'bold',
    },
  }}
/>


  <Stack.Screen name="Inicio" component={InicioScreen} />
  <Stack.Screen name="OtraPagina" component={OtraPaginaScreen} />
</Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  textoOpcion: {
    fontSize: 24, // Tamaño de la fuente
    fontWeight: '900', // Negrita
    fontFamily: 'monospace', // Tipo de fuente (puedes cambiarlo según las fuentes disponibles en tu proyecto)
    color: 'turquoise', // Color del texto
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 60,
    //textShadowColor: 'red',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
});
