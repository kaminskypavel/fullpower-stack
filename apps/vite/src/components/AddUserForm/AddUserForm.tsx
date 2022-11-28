import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";
import { trpc } from "../../services/trpc";
import toast from "react-hot-toast";
import { addUserSchemaInput } from "@fullpower-stack/schema";
import { countAtom } from "../../store/index";
import { useAtom } from "jotai";

// https://github.com/trpc/examples-kitchen-sink/blob/723cc6a74f03838748e517f292459d597b20447a/src/feature/react-hook-form/index.tsx
function useZodForm<TSchema extends z.ZodType>(
  props: Omit<UseFormProps<TSchema["_input"]>, "resolver"> & {
    schema: TSchema;
  }
) {
  const form = useForm<TSchema["_input"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  });

  return form;
}

const IncrementButton = () => {
  // Using reducer functions should be kept to small components as they are rerendered on every change
  const [, setCount] = useAtom(countAtom);
  return (
    <button
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => setCount((count) => count + 1)}
    >
      Increment
    </button>
  );
};

export const AddUserForm = () => {
  const methods = useZodForm({
    schema: addUserSchemaInput,
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const utils = trpc.useContext();

  const mutation = trpc.createUser.useMutation({
    onSuccess: async () => {
      toast.success("User created successfully");
      await utils.list.invalidate();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="flex h-full flex-col justify-center pb-10">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="pointer-events-auto w-1/2 max-w-md space-y-8 rounded-lg py-12 leading-5 shadow-xl  shadow-black/5 ring-2 ring-indigo-600 hover:bg-slate-50 sm:px-6 lg:px-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto h-12 w-auto"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Add User
            </h2>
          </div>

          <form
            className="mt-8 space-y-6"
            onSubmit={methods.handleSubmit(async (values) => {
              await mutation.mutateAsync(values);
              methods.reset();
            })}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-5 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  name
                </label>
                <input
                  id="name"
                  type="name"
                  {...methods.register("name")}
                  autoComplete="current-name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  {...methods.register("email")}
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Save
              </button>
            </div>
          </form>
          <IncrementButton />
        </div>
      </div>
    </div>
  );
};
