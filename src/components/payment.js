import React, { useState } from 'react';
import './PaymentPage.css'; // Import CSS file

function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [netBankingBank, setNetBankingBank] = useState('');
  const [upiId, setUpiId] = useState('');
  const [walletOption, setWalletOption] = useState('');
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [savePayment, setSavePayment] = useState(false);
  const [error, setError] = useState('');

  const handlePaymentMethodChange = (event) => {
    const value = event.target.value;
    setSelectedPaymentMethod(value);
    // Reset Cash on Delivery selection when other payment method is chosen
    if (value !== 'cashOnDelivery') {
      setCashOnDelivery(false);
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleNetBankingBankChange = (event) => {
    setNetBankingBank(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleWalletOptionChange = (event) => {
    setWalletOption(event.target.value);
  };

  const handleCashOnDeliveryChange = (event) => {
    setCashOnDelivery(event.target.checked);
  };

  const handleSavePaymentChange = (event) => {
    setSavePayment(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    if (!selectedPaymentMethod && !cashOnDelivery) {
      setError('Please select a payment method');
      return;
    }
    // Reset error
    setError('');
    // Logic for form submission...
  };

  return (
    <div className="payment-page" color='red'>
      <header className="header">
      </header>
      <div className="content">
        <div className="background-image">
          <div className="payment-container">
            <div>
              <h2>Select Payment Method</h2>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    value="creditDebit"
                    checked={selectedPaymentMethod === 'creditDebit'}
                    onChange={handlePaymentMethodChange}
                  />
                  Credit/Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    value="netBanking"
                    checked={selectedPaymentMethod === 'netBanking'}
                    onChange={handlePaymentMethodChange}
                  />
                  Net Banking
                </label>
                <label>
                  <input
                    type="radio"
                    value="upi"
                    checked={selectedPaymentMethod === 'upi'}
                    onChange={handlePaymentMethodChange}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    value="wallet"
                    checked={selectedPaymentMethod === 'wallet'}
                    onChange={handlePaymentMethodChange}
                  />
                  Wallet
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="cashOnDelivery"
                    checked={cashOnDelivery}
                    onChange={(e) => {
                      setCashOnDelivery(e.target.checked);
                      // Deselect other payment methods when Cash on Delivery is selected
                      if (e.target.checked) {
                        setSelectedPaymentMethod('');
                      }
                    }}
                  />
                  Cash on Delivery
                </label>
              </div>
              {/* Payment details form */}
              <div className="payment-details">
                {/* Credit/Debit Card Details */}
                {selectedPaymentMethod === 'creditDebit' && (
                  <>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="Card Number"
                    />
                    <input
                      type="text"
                      value={cardHolderName}
                      onChange={handleCardHolderNameChange}
                      placeholder="Cardholder Name"
                    />
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="Expiry Date"
                    />
                    <input
                      type="text"
                      value={cvv}
                      onChange={handleCvvChange}
                      placeholder="CVV"
                    />
                  </>
                )}
                {/* Net Banking */}
                {selectedPaymentMethod === 'netBanking' && (
                  <select value={netBankingBank} onChange={handleNetBankingBankChange}>
                    <option value="">Select Bank</option>
                    {/* Add options for net banking banks */}
                  </select>
                )}
                {/* UPI */}
                {selectedPaymentMethod === 'upi' && (
                  <input
                    type="text"
                    value={upiId}
                    onChange={handleUpiIdChange}
                    placeholder="Enter UPI ID"
                  />
                )}
                {/* Wallet */}
                {selectedPaymentMethod === 'wallet' && (
                  <select value={walletOption} onChange={handleWalletOptionChange}>
                    <option value="">Select Wallet</option>
                    {/* Add options for wallet payments */}
                  </select>
                )}
              </div>
            </div>
            {/* Save Payment Details Checkbox */}
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={savePayment}
                  onChange={handleSavePaymentChange}
                />
                Save payment details for future purchases
              </label>
            </div>
            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}
            {/* Submit Button */}
            <button onClick={handleSubmit}>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
