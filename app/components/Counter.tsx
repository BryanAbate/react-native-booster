import React from 'react';
import { Button, Text, View } from "react-native";

interface Props {
    onPress: () => void,
    value: number
}

const Counter: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>Value: {props.value}</Text>
            <Button
                title='Click me'
                onPress={props.onPress}
            ></Button>
        </View>
    );
};

export default Counter;
