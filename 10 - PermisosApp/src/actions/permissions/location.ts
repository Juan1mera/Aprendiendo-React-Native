import { check, openSettings, PERMISSIONS, request, PermissionStatus  as RNPermissionStatus} from "react-native-permissions"
import { PermissionStatus } from "../../infrastructure/interfaces/permissionns"
import { Platform } from "react-native"


export const requestLocationPermision = async():Promise<PermissionStatus> => {

    let status: RNPermissionStatus = 'unavailable'

    if (Platform.OS === 'ios') {
        status = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
    }else if(Platform.OS === 'android') {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }else{
        throw new Error('Platform not supported')
    }

    if(status === 'blocked'){
        await openSettings();
        return await checkLocationPermission();
    }

    const permissonMapper: Record<RNPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',        
    }

    return permissonMapper[status] ?? 'undetermined';

}


export const checkLocationPermission = async():Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable'

    if (Platform.OS === 'ios') {
        status = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
    } else if (Platform.OS === 'android') {
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
        throw new Error('Platform not supported')
    }

    
    const permissonMapper: Record<RNPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',        
    }
    return permissonMapper[status] ?? 'undetermined';


}
