import { useCalc } from './store'
import {
  NumerikButtons,
  RightActionButtons,
  TopActionButtons
} from '~/components'

function App() {
  const result = useCalc((s) => s.result)
  const actions = useCalc((s) => s.actions)
  const getTemporaryResult = useCalc((s) => s.getTemporaryResult)
  const showTemporaryResult =
    actions.length > 1 && actions[1].value !== undefined

  const Actions = () => (
    <>
      {actions.length
        ? actions.map(({ operator, value }, i) => {
            const isFirstValue = i === 0
            const isPlus = operator === '+'
            const isUndefined = value === undefined

            const formattedNumber = isUndefined ? null : value.toLocaleString()

            return (
              <span key={i}>
                {isFirstValue && isPlus ? null : operator}
                {formattedNumber}
              </span>
            )
          })
        : null}
    </>
  )

  const Result = () => (
    <div className="text-2xl font-semibold">{result?.toLocaleString()}</div>
  )

  return (
    <>
      <pre className="text-xs text-gray-400 whitespace-normal">
        {JSON.stringify({ result })}
        <br />
        {JSON.stringify(actions)}
      </pre>
      <div>
        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <div className="flex">
              {result !== null ? <Result /> : <Actions />}
            </div>
            {showTemporaryResult ? (
              <span className="text-gray-300">
                {getTemporaryResult().toLocaleString()}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <TopActionButtons />
          <div className="flex">
            <NumerikButtons />
            <RightActionButtons />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
