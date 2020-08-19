import { View, Button, Text } from 'react-native'
import React from 'react'
export default HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ProfileScreen</Text>
            <Button
                title="Go To Details Screen"
                onPress={() => navigation.navigate('Details')}
            />
        </View >
    );
};