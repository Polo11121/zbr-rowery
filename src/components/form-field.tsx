import { ChangeEvent, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormFieldProps = {
  id: string;
  label: string | ReactNode;
  type?: "text" | "email" | "tel" | "checkbox" | "textarea";
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
  checked?: boolean;
};

export const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  className = "",
  rows = 4,
  checked,
}: FormFieldProps) => {
  const baseInputProps = {
    id,
    required,
    "aria-required": required,
    placeholder,
  };

  const renderInput = () => {
    if (type === "checkbox") {
      return (
        <Input
          {...baseInputProps}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mt-1 hover:cursor-pointer"
        />
      );
    }

    if (type === "textarea") {
      return (
        <Textarea
          {...baseInputProps}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      );
    }

    return (
      <Input
        {...baseInputProps}
        type={type}
        value={value}
        onChange={onChange}
      />
    );
  };

  const labelClasses =
    type === "checkbox" ? "text-[13px] flex items-start gap-2 mb-6" : "";

  return (
    <label htmlFor={id} className={`${labelClasses} ${className}`}>
      {type === "checkbox" ? (
        <>
          {renderInput()}
          <span>{label}</span>
        </>
      ) : (
        <>
          {label}
          {renderInput()}
        </>
      )}
    </label>
  );
};
