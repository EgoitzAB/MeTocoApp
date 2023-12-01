import { View, Text, Button } from "react-native";
import React from "react";

const InicioScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bienvenido a Me Toco</Text>
            <Text>Cuántos Cubatas llevas</Text>
            <Button
            title="Ir a la Página de Inicio"
            onPress={() => navigation.navigate('Inicio')}
            />
        </View>

    );
};

export default InicioScreen;