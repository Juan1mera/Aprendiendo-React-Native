import { create } from "zustand";
import { PermissionStatus } from "../../../infrastructure/interfaces/permissionns";
import { checkLocationPermission, requestLocationPermision } from "../../../actions/permissions/location";


interface PermissonState {
    locationStatus: PermissionStatus;

    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<PermissonState>()(set => ({
    
    locationStatus: 'undetermined',
    requestLocationPermission: async () => {
        const status = await requestLocationPermision();
        set({ locationStatus: status })

        return status;
    },
    checkLocationPermission: async () => {
        const status = await checkLocationPermission();
        set({ locationStatus: status })

        return status;
    },
    

}))