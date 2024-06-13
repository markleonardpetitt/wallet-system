import React, { useState } from 'react';

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
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl">
        <div className="w-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-black-600 dark:text-blue-400 mb-6">Finish Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="validationCustom01" placeholder="First name" required style={{ color: "black" }} />
              </div>
              <div>
                <input type="text" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="validationCustom02" placeholder="Last name" required style={{ color: "black" }} />
              </div>
              <div>
                <input type="text" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="inputaddress" placeholder="Address" required style={{ color: "black" }} />
              </div>
              <div>
                <input type="number" pattern="[0-9]{5}" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="inputZipCode" placeholder="Zip Code" required style={{ color: "black" }} />
              </div>
              <div>
                <input type="tel" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="inputContactNumber" placeholder="Contact Number" required style={{ color: "black" }} />
              </div>
              <div>
                <select className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="select-menu" required style={{ color: "black" }}>
                  <option value="">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div>
                <input type="date" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="birthday" placeholder="Birthday" required style={{ color: "black" }} />
              </div>
              <div>
                <input type="number" className={`${sharedClasses.input} ${sharedClasses.borderZinc300}`} id="age" placeholder="Age" required style={{ color: "black" }} />
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
