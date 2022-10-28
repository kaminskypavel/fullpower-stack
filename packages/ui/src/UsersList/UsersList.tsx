import {FC} from 'react';

type Props = {
    users?: {
        id?: number;
        name?: string | null;
        email?: string;
    }[]
}

export const UsersList: FC<Props> = ({users}) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        ID
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        NAME
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        EMAIL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map(({id, email, name}) =>
                                (<tr className="border-b" key={id}>
                                    <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                                        <img src={`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`} className="h-10 w-10" />
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {id}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {name}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {email}
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
