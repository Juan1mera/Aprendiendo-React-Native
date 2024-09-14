import { useUsers } from '../hooks/useUsers';

import { UserRow } from './userRow';


export const UsersPage = () => {

    const {users, nextPage, previusPage} = useUsers();



  return (
    <>
        <h3>Usuarios:</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <UserRow key={user.id} user={user} />
                    ))
                }
                <tr>
                    <th>avatar</th>
                    <th>nombre</th>
                    <th>gmail</th>
                </tr>
            </tbody>    
        </table>

        <div>
            <button onClick={previusPage}>Previos</button>
            <button onClick={nextPage}>Next</button>
        </div>

    </>
  )
}



