import { View, Button, Text, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
export default HomeScreen = ({ navigation }) => {
    const theme = useTheme()
    const { colors } = theme
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : "dark-content"} />
            <Text style={{ color: colors.text }}>HomeScreen</Text>
            <Button
                title="Go To Details Screen"
                onPress={() => navigation.navigate('Details')}
            />
        </View >
    );
};