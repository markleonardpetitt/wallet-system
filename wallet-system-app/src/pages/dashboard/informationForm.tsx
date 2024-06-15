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

const InformationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    contactNumber: '',
    gender: '',
    birthday: '',
    age: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login/completeProfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Profile completed successfully!');
        router.push('/dashboard');  // Redirect to dashboard after completing profile
      } else {
        const result = await response.json();
        alert(result.error);
      }
    } catch (error) {
      console.error('Error completing profile', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl">
        <div className="w-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">Finish Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" name="firstName" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="First name" value={formData.firstName} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <input type="text" name="lastName" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="Last name" value={formData.lastName} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <input type="text" name="address" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="Address" value={formData.address} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <input type="number" name="zipCode" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <input type="tel" name="contactNumber" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <select name="gender" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} value={formData.gender} onChange={handleChange} required style={{ color: "black" }}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <input type="date" name="birthday" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} value={formData.birthday} onChange={handleChange} required style={{ color: "black" }} />
              </div>
              <div>
                <input type="number" name="age" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} placeholder="Age" value={formData.age} onChange={handleChange} required style={{ color: "black" }} />
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className={sharedClasses.submitButton} type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InformationForm;
