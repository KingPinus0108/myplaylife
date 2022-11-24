export default function Register() {
    return (
        <div className="h-screen bg-gradient-to-b from-sky-400 to-sky-300">
            <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow mt-24 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="py-10 text-center text-xl tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            MyLifePlaybook
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="Name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-black-500 dark:text-black-300 font-bold">I agree whit the Terms & Conditions</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <button type="button" className="float-right register text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}