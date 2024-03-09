import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionView = ({ title, child, bg }) => {


    return (
        <View style={[styles.container, { bg }]}>
            <Text>{title}</Text>
            {child}
        </View>
    ) 
}

const AppB1 = () => {
    return (
        <View>
            <SectionView title='Header' bg="#ff0000">
                <Text>Đây là header</Text>
            </SectionView>
            <SectionView title='Content' bg="#fff000">
                <Text>Đây là content</Text>
            </SectionView>
            <SectionView title='Footer' bg="#ffff00">
                <Text>Đây là Footer</Text>
            </SectionView>
        </View>
    )
}

export default AppB1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 20
    }
})