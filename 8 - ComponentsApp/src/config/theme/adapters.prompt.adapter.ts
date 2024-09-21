import prompt from 'react-native-prompt-android';

interface Options {
    title?: string;
    subtitle?: string;

    type?: 'default' | 'plain-text' |'secure-text';
    defaultValue?: string;
    placeholder?: string;



    buttons: PromptButton[];

}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'default' | 'cancel' | 'destructive';
}

export const showPrompt = ({type = 'plain-text', defaultValue , placeholder, title, subtitle, buttons}: Options) => {
    prompt(
        title,
        subtitle,
        buttons,
        {
            type: type,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}