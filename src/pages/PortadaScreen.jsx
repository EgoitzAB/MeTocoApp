import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Donut = () => {
  return (
    <View style={styles.donutContainer}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
    </View>
  );
};

const ProgressBar = ({ number, progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <Text style={styles.progressBarText}>{number}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressBarText}>{progress}%</Text>
    </View>
  );
};

const SquareComponent = () => {
  return (
    <View style={styles.squareContainer}>
      <Text style={styles.upperText}>TEXTO FIJO</Text>
      <View style={styles.contentContainer}>
        <View style={styles.leftSection}>
          <Donut />
        </View>
        <View style={styles.rightSection}>
          <ProgressBar number={1} progress={30} />
          <ProgressBar number={2} progress={60} />
          <ProgressBar number={3} progress={90} />
        </View>
      </View>
    </View>
  );
};

const PortadaScreen = ({ navigation }) => {
  const handleOptionsPress = () => {
    // Lógica para manejar el press del botón de opciones
    console.log('Botón de opciones presionado');
  };

  return (
    <View style={styles.container}>
      {/* Nuevo componente con más contenido */}
      <SquareComponent />

      {/* Botón de Navegación */}
      <Button
        title="Ir a la Página de Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />

      {/* Botón redondo posicionado abajo del todo */}
      <TouchableOpacity
        style={styles.roundButton}
        onPress={handleOptionsPress}
      >
        <Text style={styles.optionsButtonText}>Cubatas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  squareContainer: {
    flexDirection: 'column',
    flex: 0.33, // Ocupa la tercera parte de la pantalla
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 10,
  },
  upperText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  leftSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutContainer: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  outerCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 80,
    position: 'absolute',
  },
  innerCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
  },
  rightSection: {
    flex: 1,
    marginLeft: 20,
  },
  progressBarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  progressBar: {
    width: 30,
    height: 5,
    backgroundColor: '#e0e0e0',
    marginTop: 5,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'blue',
  },
  progressBarText: {
    color: 'black',
    marginTop: 5,
  },
  roundButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PortadaScreen;
