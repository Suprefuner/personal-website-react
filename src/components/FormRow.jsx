export default function FormRow({
  type,
  name,
  labelText,
  require,
  values,
  handleChange,
}) {
  return (
    <div className="flex flex-col font-[500] capitalize">
      <label for={name} className="mb-0.5 ml-1.5">
        {labelText || name}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          require={require}
          placeholder=" "
          className="px-1.5 py-1 resize-none rounded-xl bg-white/50 outline-offset-1 outline-2 outline-sky-400"
          value={values.message}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder=" "
          require={require}
          className="px-1.5 py-1 rounded-xl bg-white/50 outline-offset-1 outline-2 outline-sky-400"
          value={values[name]}
          onChange={handleChange}
        />
      )}
    </div>
  )
}
