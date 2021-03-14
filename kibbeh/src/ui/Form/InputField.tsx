import {ErrorMessage, Field} from 'formik'
import React from 'react'

interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  errors: any
  touched: any
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  errors,
  touched,
}) => {
  return (
    <div className="mt-6 mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-700 capitalize"
      >
        {name}
      </label>
      <Field
        className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />

      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 truncate">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

export default InputField
