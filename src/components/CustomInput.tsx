import { authFormSchema } from "@/lib/utils";
import React from "react";
import { FieldPath, FormProps } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = authFormSchema("sign-up");

type CustomInputProps = {
  form: FormProps<any>;
  label: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

export const CustomInput = ({
  form,
  label,
  name,
  placeholder,
  type = "text",
}: CustomInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormItem>
            <FormLabel className="form-label">{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </FormItem>
        </div>
      )}
    />
  );
};
