import create from 'zustand'
import produce from 'immer'

import type { Calc, Action, Operator } from '~/types/Calc.type'

const initialState: Action[] = []

export const useCalc = create<Calc>((set, get) => {
  const getTemporaryResult = () =>
    get()
      .actions.map(({ operator, value = 0 }) => {
        if (operator === '-') return value * -1

        return value
      })
      .reduce((prevValue, currentValue) => prevValue + currentValue)

  const type = (value: number) =>
    set(
      produce<Calc>((state) => {
        if (state.result) state.result = null
        if (!state.actions.length) {
          state.actions.push({ operator: '+', value })
          return
        }
        const lastAction = state.actions[state.actions.length - 1]

        lastAction.value = lastAction.value
          ? parseInt(`${lastAction.value}${value}`)
          : value
      })
    )

  const addOperator = (operator: Operator) =>
    set(
      produce<Calc>((state) => {
        if (state.result !== null) {
          const isPositive = state.result >= 0

          state.actions.push({
            operator: isPositive ? '+' : '-',
            value: Math.abs(state.result)
          })
          state.result = null
        }
        if (!state.actions.length) {
          state.actions.push({ operator })
          return
        }

        const lastAction = state.actions[state.actions.length - 1]

        lastAction.value !== undefined
          ? state.actions.push({ operator })
          : (lastAction.operator = operator)
      })
    )

  const calculate = () =>
    set(
      produce<Calc>((state) => {
        if (!state.actions.length) return

        state.result = state.getTemporaryResult()
        state.actions = initialState
      })
    )

  const backspace = () =>
    set(
      produce<Calc>((state) => {
        if (!state.actions.length) return
        if (state.result) state.result = null

        const lastAction = state.actions[state.actions.length - 1]

        if (!lastAction.value) {
          if (state.actions.length > 1)
            state.actions = state.actions.slice(0, -1)
          return
        }

        lastAction.value =
          parseInt(lastAction.value.toString().slice(0, -1)) || undefined
      })
    )

  const reset = () =>
    set({
      actions: initialState,
      result: null
    })

  return {
    actions: initialState,
    result: null,
    getTemporaryResult,
    type,
    addOperator,
    calculate,
    backspace,
    reset
  }
})
