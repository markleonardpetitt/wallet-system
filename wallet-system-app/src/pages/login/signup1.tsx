import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

const sharedClasses = {
  button: 'p-3 rounded-full mx-2 h-12',
  input: 'w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4',
  text: 'text-zinc-500 dark:text-zinc-400',
  link: 'text-blue-600 dark:text-blue-400',
  submitButton: 'w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700',
  altButton: 'w-full bg-transparent border border-white text-white p-2 rounded-lg hover:bg-white hover:text-gray-600',
  borderZinc300: 'border-zinc-300 dark:border-zinc-700',
  mb4: 'mb-4',
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Signed up successfully!');
        router.push('/login/signin1');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl">
        <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <img src="https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-04_icon-icons.com_73886.png" alt="Wallet Icon" className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} style={{ color: "black" }} required />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} style={{ color: "black" }} required />
            </div>
            <div>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} style={{ color: "black" }} required />
            </div>
            <button type="submit" className={sharedClasses.submitButton}>Sign Up</button>
          </form>
        </div>
        <div className="w-full sm:w-1/2 hidden sm:flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://www.oberlo.com/media/1603956221-image2.jpg")' }}>
          <div className="w-full h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

