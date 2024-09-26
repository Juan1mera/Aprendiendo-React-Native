import Geolocation from '@react-native-community/geolocation';
import { Location } from '../../infrastructure/interfaces/Location';

export const getCurrentLocation = async(): Promise<Location> => {

    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(info => {
            resolve({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            })


        }, (error) => {
            console.log(' Error con la localizacion ',error)
            reject(error)
        }, {
            enableHighAccuracy: true,
        })
    })

}


export const watchCurrentLocation = (locationCallBack: (location: Location) => void): number => {
    return Geolocation.watchPosition(info => (
        locationCallBack({
            latitude: info.coords.latitude,
            longitude: info.coords.longitude
        })
    ), (error) => {
        throw new Error('No se puede ver la ubicacion')
    }, {
        enableHighAccuracy: true,
    })
} 



export const clearWatchLocation = (watchId: number) => {
    Geolocation.clearWatch(watchId)
}