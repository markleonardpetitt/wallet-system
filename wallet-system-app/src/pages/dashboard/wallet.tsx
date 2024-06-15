/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Wallet = () => {

  const handleViewTransactions = () => {
    window.location.href = '/transactions';
  };

  const handleAddBalance = () => {
    window.location.href = '/add-balance';
  };

  const handleWalletTransfer = () => {
    window.location.href = '/wallet-transfer';
  };

  const handleWithdrawalRequest = () => {
    window.location.href = '/withdrawal-request';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1201180.jpg")' }}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        { }
        <div className="py-4 px-8 rounded-t-lg flex flex-col items-center" style={{ backgroundColor: 'rgb(29, 56, 86)' }}>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">Wallet Balance</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-1">₱ 0.00</p>
          <button onClick={handleViewTransactions} className="text-sm underline text-white mt-2">
            View Transactions
          </button>
        </div>

        { }
        <div className="py-4 px-8 flex flex-col items-center gap-3">
          <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="QR Code" className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-2" />
          <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 focus:outline-none transition duration-300">Copy QR Code</button>
        </div>

        { }
        <div className="px-8 py-4 flex flex-col items-stretch gap-2">
          <button onClick={handleAddBalance} className="bg-gray-200 text-gray-700 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-300 focus:outline-none transition duration-300">
            <i className="fas fa-plus-circle"></i> Add Balance
          </button>
          <button onClick={handleWalletTransfer} className="bg-gray-200 text-gray-700 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-300 focus:outline-none transition duration-300">
            <i className="fas fa-exchange-alt"></i> Wallet Transfer
          </button>
          <button onClick={handleWithdrawalRequest} className="bg-gray-200 text-gray-700 px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-300 focus:outline-none transition duration-300">
            <i className="fas fa-hand-holding-usd"></i> Wallet Withdrawal Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;