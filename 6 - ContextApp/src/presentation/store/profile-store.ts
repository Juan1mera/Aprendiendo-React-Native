


import { create} from 'zustand'


export interface ProfileState{
    name: string;
    email: string;


    changeProfile: (name:string, email:string) => void;
}


export const useProfileStore = create<ProfileState>()( (set, get) => ({

    name: 'Johan Doe',
    email: 'john.doe@email.com',

    changeProfile: (name, email) => {
        set({name: name, email: email})
    }
}) )