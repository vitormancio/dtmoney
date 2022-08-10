import { useState } from "react";

import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import { NewTransactionModal } from "./componets/NewTransactionModal";

import  Modal from 'react-modal'

import { GlobalStyle } from "./style/global";

Modal.setAppElement('#root')

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

    function handleOpenNewTransactionModal () {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal () {
        setIsNewTransactionModalOpen(false)
    }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
    </>
    
  );
}


