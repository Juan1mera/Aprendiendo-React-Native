import ImageColors from "react-native-image-colors"
import { FlatList } from 'react-native-gesture-handler';



export const getColorFromImage = async(image: string) => {

    const fallbackColor = 'gray';
    const colors = await ImageColors.getColors(image,{
        fallback: fallbackColor
    });

    switch(colors.platform){
        case 'android':
            return colors.dominant ?? fallbackColor;
        
        case 'ios':
            return colors.background ?? fallbackColor;
        
        default:
            return fallbackColor;
    }
}