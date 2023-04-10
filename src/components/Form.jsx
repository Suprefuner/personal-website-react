import { useState } from "react"
import FormRow from "./FormRow"

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="relative z-30 p-5 space-y-2 shadow-xl shadow-sky-300/30 bg-white/20 rounded-3xl backdrop-blur-sm">
      <div className="flex gap-5">
        <FormRow
          type="text"
          name="title"
          handleChange={handleChange}
          values={values}
        />
        <FormRow
          type="text"
          name="name"
          require={true}
          handleChange={handleChange}
          values={values}
        />
      </div>
      <FormRow
        type="email"
        name="email"
        require={true}
        handleChange={handleChange}
        values={values}
      />
      <FormRow
        type="textarea"
        name="message"
        require={true}
        handleChange={handleChange}
        values={values}
      />
      <button className="w-full py-1 text-xl font-semibold text-white uppercase bg-green-700 rounded-xl">
        send
      </button>
    </form>
  )
}
