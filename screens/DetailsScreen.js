import { View, Text, Button } from 'react-native'
import React from 'react'
export default DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details</Text>
            <Button
                title="Go To Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go To Details Again"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go To First Screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};
