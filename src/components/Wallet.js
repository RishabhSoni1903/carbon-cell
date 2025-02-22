import React, { useState } from "react";

function Wallet() {
  const [currAcc, setCurrAcc] = useState(null);
  const [error, setError] = useState(null);
  const btnText = currAcc ? "Trade Ether" : "Connect Wallet";

  const handleConnect = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask wallet extension.");
    } else {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrAcc(accounts[0]);
      } catch (error) {
        setError(error);
        console.log("No authorised account found!");
      }
    }
  };

  const handleDisconnect = () => {
    setCurrAcc(null);
  };

  return (
    <div className="text-white mx-4 my-8">
      <h1 className="text-3xl font-semibold">Connect your wallet</h1>
      <div className="mt-8">
        <button
          className="px-4 py-2 rounded bg-[#2AB42A]"
          onClick={handleConnect}
        >
          {btnText}
        </button>
      </div>
      <div className="mt-8">
        {currAcc && <p>Wallet connected with account: {currAcc}</p>}
        {currAcc && (
          <div className="mt-4">
            <button
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
      <div>{error ? <p>No authorised account found!</p> : null}</div>
    </div>
  );
}

export default Wallet;
