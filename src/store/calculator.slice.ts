import { makeAutoObservable } from "mobx";

class CalculatorSlice {
  result: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
}

const calculatorSlice = new CalculatorSlice();
export default calculatorSlice;
