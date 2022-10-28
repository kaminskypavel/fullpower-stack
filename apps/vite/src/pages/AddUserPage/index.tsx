import {UsersList} from '@fullpower-stack/ui';
import {AddUserForm} from '../../components/AddUserForm/AddUserForm';
import {usePrevious} from '../../hooks/usePrevios';
import {trpc} from '../../services/trpc';

const AddUserPage = () => {

    const {data} = trpc.list.useQuery();
    const {users = []} = data ?? {};

    const prevUsers = usePrevious(users);
    console.log(prevUsers);
    return (
        <div>
            <AddUserForm />
            <UsersList users={users} />
        </div>
    )
}

export default AddUserPage
