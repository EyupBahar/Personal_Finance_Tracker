import "./App.css";
// import Balance from './components/Balance';
// import IncomeExpense from './components/IncomeExpense';
// import TransactionList from './components/TransactionList';
// import Transactions from './components/Transactions';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>FINANCE TRACKER</h1>
      {/* <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <Transactions/> */}
      <Home />
    </div>
  );
}

export default App;
