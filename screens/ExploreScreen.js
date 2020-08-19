import { View, Button, Text } from 'react-native'
import React from 'react'
export default ExploreScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ExploreScreen</Text>
            <Button
                title="Go To Details Screen"
                onPress={() => navigation.navigate('Details')}
            />
        </View >
    );
};