import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()
  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        title={error}
        ref={inputRef}
        placeholder=' '
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
        data-testid={props.name}
        autoComplete='off'
      />
      <label
        data-testid={`${props.name}-label`}
        title={error}
        onClick={() => { inputRef.current.focus() }}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
