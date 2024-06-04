import React from 'react';

interface SharedClasses {
    button: string;
    input: string;
    text: string;
    link: string;
    submitButton: string;
    altButton: string;
}

const sharedClasses: SharedClasses = {
    button: 'p-3 rounded-full mx-2 h-12', // Adjusted button height
    input: 'w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
    text: 'text-zinc-500 dark:text-zinc-400',
    link: 'text-blue-600 dark:text-blue-400',
    submitButton: 'w-full bg-gray-600 text-white p-4 rounded-lg hover:bg-black dark:hover:bg-black-500',
    altButton: 'w-full sm:w-1/2 bg-transparent border border-white text-white p-4 rounded-lg hover:bg-white hover:text-gray-600',
};

const SignIn: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/260168.jpg")', backgroundSize: 'cover' }}>
            <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex w-full max-w-3xl max-h-125"> {/* Adjusted max-w and height */}
                <div className="w-1/2 p-10">
                    <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">
                        Sign In
                    </h2>
                    <div className="flex justify-center mb-6">
                        <button className={`bg-zinc-200 dark:bg-zinc-700 ${sharedClasses.button}`}>
                            <img
                                src="https://placehold.co/24x24"
                                alt="icon"
                                aria-hidden="true"
                                crossOrigin="anonymous"
                            />
                        </button>
                        <button className={`bg-zinc-200 dark:bg-zinc-700 ${sharedClasses.button}`}>
                            <img
                                src="https://placehold.co/24x24"
                                alt="icon"
                                aria-hidden="true"
                                crossOrigin="anonymous"
                            />
                        </button>
                        <button className={`bg-zinc-200 dark:bg-zinc-700 ${sharedClasses.button}`}>
                            <img
                                src="https://placehold.co/24x24"
                                alt="icon"
                                aria-hidden="true"
                                crossOrigin="anonymous"
                            />
                        </button>
                    </div>
                    <p className={`text-center ${sharedClasses.text} mb-6`}>or use your account</p>
                    <form>
                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className={`${sharedClasses.input} border-zinc-300 dark:border-zinc-700`}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Password"
                                className={`${sharedClasses.input} border-zinc-300 dark:border-zinc-700`}
                            />
                            <p className={`text-sm ${sharedClasses.text} mt-2`}>At least 8 characters</p>
                        </div>
                        <div className="mb-6 text-right">
                            <a href="#" className={sharedClasses.link}>
                                Forgot your password?
                            </a>
                        </div>
                        <button type="submit" className={sharedClasses.submitButton}>
                            Sign in
                        </button>
                    </form>
                </div>
                <div className="w-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-10 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to right, #537895, #09203F )' }}>
                    <h2 className="text-3xl font-bold mb-6">Hello, Friend!</h2>
                    <p className="mb-6 text-center">
                        Enter your personal details and start your journey with us
                    </p>
                    <button className={sharedClasses.altButton}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
