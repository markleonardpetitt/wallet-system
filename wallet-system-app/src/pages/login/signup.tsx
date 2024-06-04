import React from 'react';

interface SharedClasses {
    button: string;
    input: string;
    text: string;
    link: string;
    submitButton: string;
    altButton: string;
    borderZinc300: string; // Added for border styling
    mb4: string; // Added for margin-bottom styling
}

const sharedClasses: SharedClasses = {
    button: 'p-3 rounded-full mx-2 h-12',
    input: 'w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ', // Added mb-6 for spacing
    text: 'text-zinc-500 dark:text-zinc-400',
    link: 'text-blue-600 dark:text-blue-400',
    submitButton: 'w-full bg-gray-600 text-white p-4 rounded-lg hover:bg-black dark:hover:bg-blue-500',
    altButton:
        'w-full sm:w-1/2 bg-transparent border border-white text-white p-4 rounded-lg hover:bg-white hover:text-gray-600',
    borderZinc300: 'border-zinc-300 dark:border-zinc-700', // Added for border styling
    mb4: 'mb-4', // Added for margin-bottom styling
};

const SignUp: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/260168.jpg")', backgroundSize: 'cover' }}>
            <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex w-full max-w-3xl h-125">
                <div className="w-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-10 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to right, #09203F, #537895)' }}>
                    <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        Please login with your personal info
                    </p>
                    <button className={sharedClasses.altButton}>Sign in</button>
                </div>
                <div className="w-1/2 p-10">
                    <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">
                        Sign Up
                    </h2>
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://placehold.co/40x40"
                            alt="icon1"
                            className="rounded-full shadow-md"
                        />
                        <img
                            src="https://placehold.co/40x40"
                            alt="icon2"
                            className="rounded-full shadow-md"
                        />
                        <img
                            src="https://placehold.co/40x40"
                            alt="icon3"
                            className="rounded-full shadow-md"
                        />
                    </div>
                    <p className={`text-center ${sharedClasses.text} mb-4`}>
                        or use your email for registration
                    </p>
                    <input
                        type="text"
                        placeholder="Name"
                        className={`${sharedClasses.input} ${sharedClasses.borderZinc300} mb-6`}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={`${sharedClasses.input} ${sharedClasses.borderZinc300} mb-6`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`${sharedClasses.input} ${sharedClasses.borderZinc300} mb-2`}
                    />
                    <p className={`text-sm ${sharedClasses.text} ${sharedClasses.mb4} mb-6`}>
                        At least 8 characters
                    </p>
                    <button type="submit" className={sharedClasses.submitButton}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
