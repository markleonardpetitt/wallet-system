import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';

interface SharedClasses {
  button: string;
  input: string;
  text: string;
  link: string;
  submitButton: string;
  altButton: string;
  borderZinc300: string;
  mb4: string;
}

const sharedClasses: SharedClasses = {
  button: 'p-3 rounded-full mx-2 h-12',
  input: 'w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4',
  text: 'text-zinc-500 dark:text-zinc-400',
  link: 'text-blue-600 dark:text-blue-400',
  submitButton: 'w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700',
  altButton: 'w-full bg-transparent border border-white text-white p-2 rounded-lg hover:bg-white hover:text-gray-600',
  borderZinc300: 'border-zinc-300 dark:border-zinc-700',
  mb4: 'mb-4',
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        if (result.profileComplete) {
          router.push('/dashboard');
        } else {
          router.push('/informationForm');
        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl">
        <SignInForm
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />
        <SignUpPrompt />
      </div>
    </div>
  );
};

interface SignInFormProps {
  email: string;
  password: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const SignInForm: React.FC<SignInFormProps> = ({ email, password, handleEmailChange, handlePasswordChange, handleSubmit }) => (
  <div className="w-full sm:w-1/2 p-10">
    <div className="flex justify-center mb-6">
      <img
        src="https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-04_icon-icons.com_73886.png"
        alt="Wallet Icon"
        className="h-12 w-12"
      />
    </div>
    <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">Sign In</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={`${sharedClasses.input} border-zinc-300 dark:border-zinc-700 ${email && 'text-black'}`}
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={`${sharedClasses.input} border-zinc-300 dark:border-zinc-700 ${password && 'text-black'}`}
          required
        />
        <p className={`text-sm mt-2 ${sharedClasses.text}`}>At least 8 characters</p>
      </div>
      <div className="mb-6 text-right">
        <a href="#" className={sharedClasses.link}>Forgot your password?</a>
      </div>
      <button type="submit" className={sharedClasses.submitButton}>Sign in</button>
    </form>
  </div>
);

const SignUpPrompt: React.FC = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/login/signup1');
  };

  return (
    <div className="w-full sm:w-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-10 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to right, #537895, #09203F)' }}>
      <h2 className="text-3xl font-bold mb-6">Hello, Friend!</h2>
      <p className="mb-6 text-center">Enter your personal details and start your journey with us</p>
      <button onClick={handleSignUpClick} className={sharedClasses.altButton}>Sign up</button>
    </div>
  );
};

export default SignIn;
