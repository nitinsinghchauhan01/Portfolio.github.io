import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultPortfolioData } from '../data/portfolio';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(() => {
    const savedData = localStorage.getItem('portfolioData_v3');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error("Error parsing saved portfolio data:", error);
        return defaultPortfolioData;
      }
    }
    return defaultPortfolioData;
  });

  useEffect(() => {
    localStorage.setItem('portfolioData_v3', JSON.stringify(portfolioData));
  }, [portfolioData]);

  const updateData = (newData) => {
    setPortfolioData(newData);
  };

  const resetToCV = () => {
    setPortfolioData(defaultPortfolioData);
  };

  return (
    <PortfolioContext.Provider value={{ data: portfolioData, updateData, resetToCV }}>
      {children}
    </PortfolioContext.Provider>
  );
};
