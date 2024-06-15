import React, { useState } from 'react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState<number | undefined>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/updateProfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          address,
          zipCode,
          contactNumber,
          gender,
          birthday,
          age,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        const qrCode = await QRCode.toDataURL(result.user.id.toString());
        await fetch('/api/user/updateQrCode', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: result.user.id, qrCode }),
        });
        router.push('/dashboard');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="date"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500">Finish</button>
        </form>
      </div>
    </div>
  );
};

export default InformationForm;
