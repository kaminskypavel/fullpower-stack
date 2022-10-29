import {UsersList} from '@fullpower-stack/ui';
import {AddUserForm} from '../../components/AddUserForm/AddUserForm';
import {usePrevious} from '../../hooks/usePrevious';
import {trpc} from '../../services/trpc';

const AddUserPage = () => {

    const {data} = trpc.list.useQuery();
    const {users = []} = data ?? {};

    const prevUsers = usePrevious(users);

    if (prevUsers?.length) {
        users.forEach((user, index) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            user["highlight"] = !prevUsers.find((prevUser) => prevUser.id === user.id);
        });
    }
    return (
        <div>
            <AddUserForm />
            <UsersList users={users} />
        </div>
    )
}

export default AddUserPage
