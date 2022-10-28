import {AddUserForm, UsersList} from '@fullpower-stack/ui';
import {useState} from 'react';
import {trpc} from '../../services/trpc';

const AddUserPage = () => {

    const {data} = trpc.list.useQuery();
    const {users = []} = data ?? {};

    return (
        <div>
            <AddUserForm />
            <UsersList users={users} />
        </div>
    )
}

export default AddUserPage
