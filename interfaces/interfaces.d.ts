interface Transaction {
  id: number;
  title: string;
  credit: boolean;
  debit: boolean;
  type: number;
  details: string;
  time: string;
}

interface Account {
  bank: string;
  cash: boolean;
  acc_no: number;
  title: string;
  balance: number;
}

interface Person {
  name: string;
  type: string;
  bal: number;
  deadline: string;
  severity: number;
}

interface CreditCard {
  name: string;
  bank: string;
  cardno: number;
  acc: number;
  ifsc: string;
  cvv: number;
  setdate: string;
  balance: number;
  total: number;
}

interface Remind {
  id: number;
  title: string;
  credit: boolean;
  debit: boolean;
  type: number;
  details: string;
  time: string;
}

interface Subscriptions {
  id: number;
  title: string;
  amount: number;
  type: number;
  details: string;
  time: string;
}

