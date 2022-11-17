import {UsersList} from '@fullpower-stack/ui';
import {useAtom} from 'jotai';
import {AddUserForm} from '../../components/AddUserForm/AddUserForm';
import {usePrevious} from '../../hooks/usePrevious';
import {trpc} from '../../services/trpc';
import {countAtom} from '../../store';

const AddUserPage = () => {

    const {data} = trpc.list.useQuery();
    const {users = []} = data ?? {};
    const [count] = useAtom(countAtom);

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
            <h1 className='text-xl font-bold'> Count is {count}</h1>
            <AddUserForm />
            <UsersList users={users} />
        </div>
    )
}

export default AddUserPage
