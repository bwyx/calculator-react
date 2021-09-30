export type Operator = '+' | '-' | '/' | '*'
export type Action = {
  operator: Operator
  value?: number
}

export interface Calc {
  actions: Action[]
  result: number | null
  getTemporaryResult: () => number
  type: (key: number) => void
  addOperator: (operator: Operator) => void
  calculate: () => void
  backspace: () => void
  reset: () => void
}
