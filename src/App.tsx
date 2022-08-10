import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import  Modal from 'react-modal'
import { GlobalStyle } from "./style/global";
import { useState } from "react";

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

      <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
            >
                <h1>Cadastrar transação</h1>
      </Modal>

      <GlobalStyle />
    </>
    
  );
}


