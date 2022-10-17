// a tailwindcss login form

export default function Login() {
    return (
        <div className="flex items-center justify-center p-4 w-full">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label
                className="block  text-sm font-bold mb-2"
                htmlFor="username"
                >
                Username
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                />
            </div>
            <div className="mb-6">
                <label
                className="block  text-sm font-bold mb-2"
                htmlFor="password"
                >
                Password
                </label>
                <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                Please choose a password.
                </p>
            </div>
            <div className="flex items-center justify-between">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                >
                Sign In
                </button>
                <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                >
                Forgot Password?
                </a>
            </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
        </div>
    );
}
