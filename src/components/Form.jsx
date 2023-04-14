import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"
import { FormRow, Spinner } from "./index"
import customKeyboardEvent from "../utils/customKeyboardEvent"

export default function Form() {
  const [isSendingEmail, setIsSendingEmail] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    // SIMPLE VALIDATION CHECK
    if (Object.values(values).some((val) => !val))
      return toast.warning(
        `Please fill all the information so that I can get back to you`
      )

    setIsSendingEmail(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // FIRE SPLINE ANIMATION
      customKeyboardEvent("keyup", "Insert")
      toast.success(`GREAT! Email sent will get back to you ASAP`)
    } catch (error) {
      toast.error(`Something went wrong, please try again`)
    } finally {
      setIsSendingEmail(false)
    }
  }

  return (
    <form
      className="
        sm:w-[80%] rounded-3xl ml-auto
        relative z-30 mx-auto lg:mb-0 
        sm:p-2.5 lg:p-3 xl:p-5 
        flex flex-col lg:flex-1 gap-1 lg:gap-2 
        
        sm:border border-white/30 
        sm:bg-gradient-to-bl 
        from-white/30 to-white/20 
        lg:(from-white/20 to-transparent)
        shadow-xl  shadow-sky-300/20 backdrop-blur-md mb-3
      "
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-2 lg:gap-5 [&>*]:flex-1">
        <FormRow
          type="text"
          name="title"
          handleChange={handleChange}
          values={values}
        />
        <FormRow
          type="text"
          name="name"
          require
          handleChange={handleChange}
          values={values}
        />
      </div>
      <FormRow
        type="email"
        name="email"
        require
        handleChange={handleChange}
        values={values}
      />
      <FormRow
        type="textarea"
        name="message"
        require
        handleChange={handleChange}
        values={values}
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`w-full py-1 mt-1  text-xl font-semibold uppercase rounded-xl relative transition duration-200 ${
          isSendingEmail
            ? "bg-gray-400 text-gray-500 cursor-not-allowed"
            : "bg-green-700 text-white hover:bg-green-500"
        }`}
        disabled={isSendingEmail}
      >
        {isSendingEmail ? (
          <div className="flex items-center justify-center gap-1">
            <Spinner />
            Sending...
          </div>
        ) : (
          <span>Send</span>
        )}
      </motion.button>
    </form>
  )
}
