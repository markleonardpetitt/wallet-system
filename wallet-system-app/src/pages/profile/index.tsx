// pages/profile/index.tsx
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Profile: React.FC = () => {
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
  const [qrCode, setQrCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        const user = await response.json();
        setFormData({
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          address: user.address || '',
          zipCode: user.zipCode || '',
          contactNumber: user.contactNumber || '',
          gender: user.gender || '',
          birthday: user.birthday || '',
          age: user.age ? user.age.toString() : '',
        });
        setQrCode(user.qrCode || '');
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/updateProfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        const updatedUser = await response.json();
        setQrCode(updatedUser.qrCode);
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl">
        <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <img src="https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-04_icon-icons.com_73886.png" alt="Wallet Icon" className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <input type="date" name="birthday" placeholder="Birthday" value={formData.birthday} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <div>
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" style={{ color: "black" }} required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700">Update Profile</button>
          </form>
        </div>
        <div className="w-full sm:w-1/2 hidden sm:flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://www.oberlo.com/media/1603956221-image2.jpg")' }}>
          <div className="w-full h-full bg-black opacity-25 flex items-center justify-center">
            {qrCode && <img src={qrCode} alt="QR Code" className="h-32 w-32" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
