import React from 'react'

interface FormLayoutProps {}

export const FormLayout: React.FC<FormLayoutProps> = ({children}) => {
  return (
    <div className="container flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow xl:max-w-5xl">
      <div className="relative hidden h-full xl:block xl:w-1/2">
        <img
          className="absolute object-cover w-full h-auto"
          src="/form.jpeg"
          alt="my zomato"
        />
      </div>
      <div className="w-full p-8 xl:w-1/2">{children}</div>
    </div>
  )
}

export default FormLayout
