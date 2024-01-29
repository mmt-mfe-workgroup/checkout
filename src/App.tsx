import { useForm, SubmitHandler } from "react-hook-form"
import './App.css'

type Fields = {
  firstName: string
  lastName: string
  email: string
}

function App() {

  const {
    register,
    handleSubmit
  } = useForm<Fields>()

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log('form submission', data)
  }

  return (
    <div id="island" className="bg-slate-200 px-12">
      <section className="py-6">
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

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default App
