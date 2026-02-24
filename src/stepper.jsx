import { useState } from "react";
// in app.jsx  
// const steps = [
//     {
//       label: "Personal Info",
//       content: <div>Personal Information Content</div>,
//     },
//     {
//       label: "Account Info",
//       content: <div>Account Info Content</div>,
//     },
//     {
//       label: "Payment",
//       content: <div>Payment Content</div>,
//     },
//     {
//       label: "Confirmation",
//       content: <div>Confirmation Content</div>,
//     },
//     {
//       label: "Review",
//       content: <div>Review Content</div>,
//     },
//   ];

  return <Stepper steps={steps} />;
export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);
  const handleContinue = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="stepper">
      <div>
        {steps.map(({ label, content }, index) => {
          return (
            <div key={label} className="stepper-container">
              <div
                className={`step-number ${
                  index <= currentStep ? "active" : ""
                }`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`step-line ${
                      index < currentStep ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-controls">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
}

//style.css
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// .stepper {
//   margin: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .stepper-container {
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;
//   margin-bottom: 2.5rem;
// }

// .step-number {
//   height: 2.5rem;
//   width: 2.5rem;
//   border-radius: 50%;
//   background-color: grey;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   position: relative;
// }

// .step-line {
//   height: 2.5rem;
//   width: 2px;
//   background-color: grey;
//   position: absolute;
//   top: 2.5rem;
// }

// .active {
//   background-color: #017bfe;
// }
