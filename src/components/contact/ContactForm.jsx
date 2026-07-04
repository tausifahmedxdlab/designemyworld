import { useState } from "react";

import { useForm } from "react-hook-form";

import { submitContactForm }
from "../../services/contactService";

import ContactSuccess
from "./ContactSuccess";

export default function ContactForm() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async data => {
    try {
      setLoading(true);

      await submitContactForm(data);

      setSuccess(true);
    } catch (error) {
      alert(
        "Unable to submit request."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return <ContactSuccess />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
      bg-panel
      border
      border-border
      rounded-3xl
      p-8
      space-y-5
    "
    >
      <div>
        <input
          placeholder="Full Name"
          {...register("name", {
            required: true
          })}
          className="
          w-full
          bg-background
          border
          border-border
          rounded-xl
          px-4
          py-4
        "
        />

        {errors.name && (
          <p className="text-red-500 mt-2">
            Name required
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Email"
          {...register("email", {
            required: true
          })}
          className="
          w-full
          bg-background
          border
          border-border
          rounded-xl
          px-4
          py-4
        "
        />

        {errors.email && (
          <p className="text-red-500 mt-2">
            Email required
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Project Type"
          {...register("project")}
          className="
          w-full
          bg-background
          border
          border-border
          rounded-xl
          px-4
          py-4
        "
        />
      </div>

      <div>
        <textarea
          rows="6"
          placeholder="Tell us about your project..."
          {...register("message", {
            required: true
          })}
          className="
          w-full
          bg-background
          border
          border-border
          rounded-xl
          px-4
          py-4
        "
        />

        {errors.message && (
          <p className="text-red-500 mt-2">
            Message required
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        py-4
        rounded-xl
        bg-accent
        text-black
        font-bold
      "
      >
        {loading
          ? "Submitting..."
          : "Request Quote"}
      </button>
    </form>
  );
}