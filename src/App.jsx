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
import feezImage from './assets/feez.PNG'


function SocialLink({ href, children, className = "", variant = "icon" }) {
  const baseClasses = "transition-colors cursor-pointer";
  const variantClasses = {
    icon: "hover:text-blue-400",
    button: "bg-blue-500 text-white font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
  };
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}


const socialConfig = {
  twitter: {
    url: "https://x.com/thegreatfeez",
    icon: faTwitter,
    xIcon: faXTwitter,
    label: "X",
    hoverColor: "hover:text-blue-400"
  },
  facebook: {
    url: "https://facebook.com/thegreatfeez",
    icon: faFacebook,
    label: "Facebook",
    hoverColor: "hover:text-blue-600"
  },
  instagram: {
    url: "https://instagram.com/thegreatfeez",
    icon: faInstagram,
    label: "Instagram",
    hoverColor: "hover:text-pink-400"
  },
  github: {
    url: "https://github.com/thegreatfeez",
    icon: faGithub,
    label: "GitHub",
    hoverColor: "hover:text-gray-400"
  },
  email: {
    url: "mailto:thegreatfeez@example.com",
    icon: faEnvelope,
    label: "Email",
    hoverColor: "hover:bg-gray-100"
  }
};

function ProfileImage() {
  return (
    <img
      src={feezImage}
      alt="Thegreatfeez"
      className="rounded-t-xl w-full object-cover"
    />
  );
}

function ProfileMain() {
  return (
    <div className="bg-gray-900 text-white p-6 text-center">
      <h1 className="text-2xl font-bold">Thegreatfeez</h1>
      <p className="text-orange-400 font-medium">Frontend Developer</p>
      <p className="text-sm text-gray-400 mt-1">thegreatfeez.web3</p>

      <div className="flex justify-center gap-4 mt-4">
        <SocialLink href={socialConfig.email.url} variant="button" className="bg-gray-800 hover:bg-gray-500">
          <FontAwesomeIcon icon={socialConfig.email.icon} />
          {socialConfig.email.label}
        </SocialLink>
        
        <SocialLink href={socialConfig.twitter.url} variant="button">
          <FontAwesomeIcon icon={socialConfig.twitter.xIcon} />
          {socialConfig.twitter.label}
        </SocialLink>
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

function ProfileFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center gap-6 rounded-b-xl">
      {Object.entries(socialConfig).slice(0, 4).map(([key, config]) => (
        <SocialLink key={key} href={config.url} className={config.hoverColor}>
          <FontAwesomeIcon icon={config.icon} className="text-xl" />
        </SocialLink>
      ))}
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