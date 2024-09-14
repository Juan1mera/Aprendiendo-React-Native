import { useEffect, useRef, useState } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';
import axios from 'axios';

// Función para cargar usuarios desde la API
const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: { page }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Hook personalizado para manejar usuarios
export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--; // Retrocedemos si no hay más usuarios
        }
    }

    const previusPage = async () => {
        if (currentPageRef.current <= 1) return; // No retrocedemos más allá de la página 1
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    // Retornamos las propiedades y métodos que queremos exponer
    return {
        users,      // Lista de usuarios
        nextPage,   // Función para ir a la siguiente página
        previusPage // Función para ir a la página anterior
    };
}
