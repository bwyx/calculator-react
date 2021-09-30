import { useCalc } from '~/store'
import { Button } from '~/components'

interface Props {}

const TopActionButtons = (props: Props) => {
  const addOperator = useCalc((s) => s.addOperator)
  const reset = useCalc((s) => s.reset)

  return (
    <div className="flex">
      <Button onClick={reset} label="C" className="w-1/3" />
      <Button onClick={() => console.log('/')} label="/" className="w-1/3" />
      <Button onClick={() => console.log('*')} label="*" className="w-1/3" />
      <Button onClick={() => addOperator('-')} label="-" className="w-1/3" />
    </div>
  )
}

export default TopActionButtons
