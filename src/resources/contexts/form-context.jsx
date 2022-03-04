import { createContext, useContext } from 'react'

const FormContext = createContext({})

export function useForm() {
  return useContext(FormContext)
}

export default FormContext
