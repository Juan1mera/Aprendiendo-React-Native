import { create } from "zustand";
import { Location } from '../../../infrastructure/interfaces/Location';
import { getCurrentLocation, clearWatchLocation, watchCurrentLocation } from '../../../actions/location/location';

interface LocationState{
    lasKnowLocation: Location | null;

    userLocationList: Location[];

    watchId: number | null;


    getLocation: () => Promise<Location|null>;
    watchLocation: () => void;
    clearWatchLocation: () => void;
}


export const useLocationStore = create<LocationState>()((set, get) => ({
    watchId: null,
    lasKnowLocation: null,
    userLocationList: [],
    getLocation: async() => {
        const Location = await getCurrentLocation();
        set({
            lasKnowLocation: Location
        })
        return Location;
    },
    watchLocation: () => {
        const watchId = get().watchId;

        if (!watchId) {
            get().clearWatchLocation();
        }

        const id = watchCurrentLocation((location) => {
            set({
                lasKnowLocation: location,
                userLocationList: [...get().userLocationList, location]
            })
        });
    },

    clearWatchLocation: () => {
        const watchId = get().watchId;

        if (!watchId) {
            clearWatchLocation(watchId!);
        }
    },

}))