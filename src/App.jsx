import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


function ProfileImage() {
  return (
    <img
      src="src/assets/feez.PNG"
      alt="Thegreatfeez"
      className="rounded-t-xl w-full object-cover"
    />
  );
}


// ProfileMain.jsx
function ProfileMain() {
  return (
    <div className="bg-gray-900 text-white p-6 text-center">
      <h1 className="text-2xl font-bold">Thegreatfeez</h1>
      <p className="text-orange-400 font-medium">Frontend Developer</p>
      <p className="text-sm text-gray-400 mt-1">thegreatfeez.web3</p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
          <FontAwesomeIcon icon={faXTwitter} />
          X
        </button>
      </div>

      <div className="text-left mt-6 space-y-4">
        <div>
          <h3 className="text-white font-semibold">About</h3>
          <p className="text-gray-400 text-sm mt-1">
            I am a frontend developer passionate about blockchain and crypto. I specialize in building interactive UIs and decentralized apps, and I stay updated with the latest in Web3, smart contracts, and secure dApp architecture.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold">Interests</h3>
          <p className="text-gray-400 text-sm mt-1">
            Blockchain. Web3. DeFi. Smart contracts. Crypto economics. Anime. Freedom tech. Egusi soup with lots of meat.
          </p>
        </div>
      </div>
    </div>
  );
}

// ProfileFooter.jsx
function ProfileFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center gap-6 rounded-b-xl">
      <FontAwesomeIcon icon={faTwitter} className="text-xl cursor-pointer" />
      <FontAwesomeIcon icon={faFacebook} className="text-xl cursor-pointer" />
      <FontAwesomeIcon icon={faInstagram} className="text-xl cursor-pointer" />
      <FontAwesomeIcon icon={faGithub} className="text-xl cursor-pointer" />
    </footer>
  );
}




function App() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="max-w-sm w-full">
        <ProfileImage />
        <ProfileMain />
        <ProfileFooter />
      </div>
    </div>
  );
}


export default App;

