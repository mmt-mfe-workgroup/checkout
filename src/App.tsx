// @ts-nocheck
import { lazy, Suspense, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import {Meta, MetaProps} from './components/meta'
import './App.css'

const RemoteButton = lazy(() => import('UI/Button'));

type Fields = {
  firstName: string
  lastName: string
  email: string
}

const metaparams: MetaProps = {
  framework: "React@18.2",
  app: "mfe-checkout@0.0.1",
  cdn: "surge.sh",
  shared: ['UI/Button'],
  listen: ['view:x-ray']
}

function App() {
  const [ show, setShow ] = useState<boolean>(false)
  const {
    register,
    handleSubmit
  } = useForm<Fields>()

  useEffect(() => {
    window.addEventListener('view:x-ray', xHandler as never)
    return () => {
      window.removeEventListener('view:x-ray', xHandler as never)
    }
  }, [])
  
  const xHandler = ({ detail }: CustomEvent<boolean>) => {
    setShow(detail)
  }  
  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log('form submission', data)
  }

  return (
    <div id="island" className= "px-12">
      { show && Meta(metaparams)}
      { !show &&
      <section id="app" className="py-8">
      <h2 className="text-2xl font-bold text-gray-900">Checkout App</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto py-6">
      <p className="max-w-sm mb-5 text-left">Lets take your details so we can take payment quickly and get your items dispatched straight away..</p>
        <div className="mb-5 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
          <input {...register('firstName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-5 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
          <input {...register('lastName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-10 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input {...register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteButton label="Submit" type="submit"/>
        </Suspense>
        </form>
      </section>}
    </div>
  )
}

export default App
