import React, { ReactNode, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const firstNameRef = useRef<HTMLInputElement | null>(null); // Update the type of firstNameRef
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const { ref, ...rest } = register("firstName");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...rest}
        name="firstName"
        ref={(e) => {
          ref(e);
          firstNameRef.current = e; // Update the assignment to firstNameRef
        }}
      />
      <input
        className="form-control"
        placeholder="Email address or Username"
        {...register("email_username")}
        type="text"
      />

      <button>Submit</button>
    </form>
  );
}
