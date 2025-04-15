import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountDeletionPage from './AccountDeletion'
import { Menu } from "lucide-react";
import TermsConditionsContent from './TermsConditions'

function App() {

  const [activeTab, setActiveTab] = useState(0);
  const [tabsVisible, setTabsVisible] = useState(true);
  const tabs = ["Eliminar Cuenta", "Términos y condiciones"];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black p-6 md:p-12 font-sans"
      style={{
        maxWidth: "100%",
        minHeight: "100%"
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-md" 
        >
        <div className="mb-6 text-center"
               style={{
                position: "sticky",
                top: 10
              }}>
          <button
            onClick={() => setTabsVisible(!tabsVisible)}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {tabsVisible && (
          <>
            <div className="flex space-x-4 mb-6"
                           style={{
                            position: "sticky",
                            top: 50
                          }}>
              {tabs.map((label, idx) => (
                <button
                  key={label}
                  className={`px-4 py-2 font-semibold rounded-lg transition-all duration-200`}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    backgroundColor: (activeTab == idx ? "white" : "black"),
                    color: (activeTab == idx ? "black" : "white"),
                    
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
            {activeTab === 0 && <AccountDeletionPage />}
            {activeTab === 1 && <TermsConditionsContent />}
      </div>
    </div>
  );

}

export default App
