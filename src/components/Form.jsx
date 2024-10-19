/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx"; // For password visibility toggle
import TickMarkIcon from "../utils/svg/TickMarkIcon";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    navigate("/chat");
  };

  const email = watch("email"); // Watch email input for dynamic validation
  const password = watch("password"); // Watch password input

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const inputDiv = "flex flex-col gap-y-[0.5rem]";
  const label = "text-md font-medium font-lato text-primary-highlight_text";
  const input = "outline-none w-full";
  const errorStyle = "text-red-400 text-sm";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-[1.5rem]"
    >
      {/* Email Input Field */}
      <div className={inputDiv}>
        <label className={label}>Email</label>
        <div className="h-[48px] border-2 border-[#D7D7D7] px-5 rounded-[6px] flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className={`${input} ${errors.email ? "border-red-400" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {/* TickMarkIcon isValid is determined based on the email validity */}
          <TickMarkIcon isValid={!errors.email && email} />
        </div>
        {/* Email Error Message */}
        {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
      </div>

      {/* Password Input Field */}
      <div className={inputDiv}>
        <label className={label}>Password</label>
        <div className="h-[48px] border-2 border-[#D7D7D7] px-5 rounded-[6px] flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className={`${input} ${errors.password ? "border-red-400" : ""}`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {/* Toggle Password Visibility */}
          <span
            onClick={togglePasswordVisibility}
            className="cursor-pointer text-[#E1E6EF]"
          >
            {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
          </span>
        </div>
        {/* Password Error Message */}
        {errors.password && (
          <p className={errorStyle}>{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#E5E7EB] text-primary-dull_text h-[48px] rounded-[8px] flex justify-center items-center font-Jakarta font-semibold"
      >
        Sign In
      </button>
    </form>
  );
}

export default Form;
