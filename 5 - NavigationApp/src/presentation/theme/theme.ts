import { StyleSheet } from "react-native";

export const colors ={
    primari: '#7037eb',
    secondary: '#f72785',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warnign: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    text: '#ffff'
}


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        padding: 20
    },
    primaryButton: {
        backgroundColor: colors.text,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.dark,
        fontSize: 18
    }


})