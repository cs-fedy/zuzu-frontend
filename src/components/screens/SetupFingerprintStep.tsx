import FingerPrint from "../../assets/finger-print.svg";

function SetupFingerPrintStep() {
  return (
    <>
      <p className="px-6 text-center text-lg font-medium leading-normal tracking-wider">
        Add a fingerprint to make your account more secure.
      </p>
      <div className="mx-8">
        <img src={FingerPrint} alt="user finger print" />
      </div>
      <p className="px-6 text-center text-lg font-medium leading-normal tracking-wider">
        Please put your finger on the fingerprint scanner to get started.
      </p>
    </>
  );
}

export default SetupFingerPrintStep;
