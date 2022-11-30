import { FC, memo } from "react";
import equals from "fast-deep-equal/react";
type Props = {
  users?: {
    id?: number;
    name?: string | null;
    email?: string;
    highlight?: boolean;
  }[];
};

export const UsersList: FC<Props> = memo(({ users }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b px-6 py-4 text-left text-sm font-medium text-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    EMAIL
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map(({ id, email, name, highlight }) => (
                  <tr
                    className={`border-b ${highlight && "animate-fade"}`}
                    key={id}
                  >
                    <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                      <img
                        src={`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`}
                        className="h-10 w-10"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}, equals);
