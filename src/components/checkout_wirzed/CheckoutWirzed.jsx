import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const [checkoutData, setCheckoutData] = useState({
    shipping: {
      fullName: "",
      address: "",
      city: "",
    },
    payment: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Update Shipping Fields
  const handleShippingChange = (e) => {
    const { name, value } = e.target;

    setCheckoutData((prev) => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        [name]: value,
      },
    }));
  };

  // Update Payment Fields
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;

    setCheckoutData((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        [name]: value,
      },
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const submitOrder = () => {
    setSubmittedData(checkoutData);
    console.log(checkoutData);
  };

  // Reusable Form Generator
  const renderInputs = (fields, values, onChange) => {
    return fields.map((field) => (
      <div key={field} style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name={field}
          value={values[field]}
          onChange={onChange}
          placeholder={field}
          style={{
            width: "250px",
            padding: "8px",
            borderRadius: "6px",
          }}
        />
      </div>
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout Wizard</h2>

      {/* Progress Bar */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        <span>{currentStep >= 1 ? "✅" : " "} Shipping</span>
        <span>→</span>
        <span>{currentStep >= 2 ? "✅" : " "} Payment</span>
        <span>→</span>
        <span>{currentStep >= 3 ? "✅" : " "} Review</span>
      </div>

      {/* Shipping */}
      {currentStep === 1 && (
        <div>
          <h3 style={{marginBottom:'10px'}}>Shipping Information</h3>
          {renderInputs(
            ["fullName", "address", "city"],
            checkoutData.shipping,
            handleShippingChange
          )}
          <button style={{padding:'2px 5px', borderRadius:"9px"}}  onClick={nextStep}>Next</button>
        </div>
      )}

      {/* Payment */}
      {currentStep === 2 && (
        <div>
          <h3 style={{marginBottom:'10px'}}>Payment Information</h3>
          {renderInputs(
            ["cardNumber", "expiry", "cvv"],
            checkoutData.payment,
            handlePaymentChange
          )}
          <button style={{padding:'2px 5px', borderRadius:"9px"}} onClick={prevStep}>Back</button>
          <button onClick={nextStep} style={{ marginLeft: "10px",padding:'2px 5px' , borderRadius:"9px" }}>
            Next
          </button>
        </div>
      )}

      {/* Review */}
      {currentStep === 3 && (
        <div>
          <h3 style={{marginBottom:'10px'}}>Review Your Order</h3>
          <h3 style={{marginBottom:'5px'}}>
            <i>Shipping</i>
          </h3>
          <p style={{ padding: "0" }}>
            <i>Full Name:</i> {checkoutData.shipping.fullName}
          </p>
          <p style={{ padding: "0" }}>
            <i>Address:</i> {checkoutData.shipping.address}
          </p>
          <p style={{ padding: "0" }}>
            <i>City:</i> {checkoutData.shipping.city}
          </p>
          <h3 style={{marginBottom:'5px'}}>
            <i>Payment</i>
          </h3>
          <p style={{ padding: "0" }}>
            <i>Card Number:</i> {checkoutData.payment.cardNumber}
          </p>
          <p style={{ padding: "0" }}>
            <i>Expiry:</i> {checkoutData.payment.expiry}
          </p>
          <p style={{ padding: "0" }}>
            <i>CVV:</i> {checkoutData.payment.cvv}
          </p>
          <div style={{display:'flex', flexDirection:'row', width:'140px',justifyContent:'space-between'}}>
          <button style={{padding:'2px 5px ', borderRadius:"9px"}} onClick={prevStep}>Back</button>
          <button style={{padding:'2px 5px', borderRadius:"9px"}} onClick={submitOrder}>
            Submit Order
          </button>
          </div>
        </div>
      )}

      {/* Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "30px" }}>
          <h3>Submitted Data</h3>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
      <br />
      <Link to="/">Return To Home</Link>
    </div>
  );
}

export default CheckoutWizard;
