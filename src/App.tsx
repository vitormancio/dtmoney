import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import {createServer} from 'miragejs'
import { GlobalStyle } from "./style/global";

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [ 
        {
          id:1,
          title:'Transaction 1',
          amount:400,
          type:'deposit',
          category:'Food',
          createdAt: new Date()

        }
      ]

    })
  }
}) 

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
    
  );
}


