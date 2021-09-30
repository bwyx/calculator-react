import { useCalc } from '~/store'
import { Button } from '~/components'

const NumerikButtons = () => {
  const type = useCalc((s) => s.type)
  const backspace = useCalc((s) => s.backspace)

  return (
    <div className="flex flex-col flex-grow w-3/4">
      <div className="flex flex-wrap-reverse">
        {[...Array(9)].map((number, i) => (
          <Button
            key={i}
            label={`${i + 1}`}
            onClick={() => type(i + 1)}
            className="w-1/3"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button label="<-" className="w-1/3" onClick={backspace} />
        <Button label="0" className="w-1/3" onClick={() => type(0)} />
        <Button label="." className="w-1/3" />
      </div>
    </div>
  )
}

export default NumerikButtons
