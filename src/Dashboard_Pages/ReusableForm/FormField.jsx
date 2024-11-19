const FormField = ({
  label,
  type = "text",
  name,
  register,
  validationRules = {},
  error,
  isTextarea = false,
  ...rest
}) => {
  const Field = isTextarea ? "textarea" : "input";
  return (
    <div className="mb-3">
      <label className="font-medium mb-1 block">{label}</label>
      <Field
        {...register(name, validationRules)}
        className="border border-gray-300 px-4 py-3 w-full bg-white"
        {...rest}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
