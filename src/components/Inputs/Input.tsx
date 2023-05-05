import type { HTMLInputTypeAttribute } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { AgeForm } from "src/utils/types/ageForm";

interface InputProps extends UseControllerProps<AgeForm> {
  label: string;
  type?: HTMLInputTypeAttribute;
  htmlFor: string;
  placeholder?: string;
}

const Input = ({
  name,
  control,
  rules,
  label,
  type = "text",
  htmlFor,
  placeholder,
}: InputProps) => {
  const {
    field: input,
    formState: { errors },
  } = useController({
    name,
    control,
    rules: {
      ...rules,
      required: { value: true, message: "This field is required" },
    },
  });
  return (
    <div className={`${errors[name] ? "text-red-500" : ""}`}>
      <label
        htmlFor={htmlFor}
        className="letter tracking-wides mb-1 block text-sm font-bold uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id="day"
        className={`w-full rounded-sm px-2 py-2 font-bold text-black outline outline-1 outline-slate-400 md:px-4 md:py-3 md:text-xl ${
          errors[name] ? "outline-red-500" : ""
        }`}
        placeholder={placeholder}
        {...input}
      />
      <span className="text-sm text-red-600">{errors[name]?.message}</span>
    </div>
  );
};

export default Input;
