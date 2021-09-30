import { useCalc } from '~/store'
import { Button } from '~/components'

interface Props {}

const ActionButtons = (props: Props) => {
  const addOperator = useCalc((s) => s.addOperator)
  const calculate = useCalc((s) => s.calculate)

  return (
    <div className="flex flex-col w-1/4">
      <Button
        label="+"
        className="flex-grow"
        onClick={() => addOperator('+')}
      />
      <Button label="=" className="flex-grow" onClick={calculate} />
    </div>
  )
}

export default ActionButtons
