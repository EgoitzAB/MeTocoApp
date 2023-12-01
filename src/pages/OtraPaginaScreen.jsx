import { View, Text, Button } from "react-native";
import React from "react";

const OtraPaginaScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bienvenido a Me Toco</Text>
            <Text>Plan desvío de fondos públicos</Text>
            <Button
            title="Ir a la Página de Inicio"
            onPress={() => navigation.navigate('Inicio')}
            />
        </View>

    );
};

export default OtraPaginaScreen;