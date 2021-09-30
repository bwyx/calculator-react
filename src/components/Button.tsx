import cx from 'clsx'

type ButtonProps = JSX.IntrinsicElements['button'] & {
  label: string
}

const Button = ({
  label,
  className,
  ...rest
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <div className={cx('flex p-0.5', className)}>
      <button {...rest} className={cx('p-6 flex-grow bg-gray-100')}>
        {label}
      </button>
    </div>
  )
}

export default Button
