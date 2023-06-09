"use client"
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const loginForm = useForm<AuthType>();
  const { register, handleSubmit } = loginForm;
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/";
  const [formError,setFormError] = useState('')
  const [success,setSuccess] = useState('')
  const router = useRouter()

  const handleLogin: SubmitHandler<AuthType> = async (data) => {
    const res = await signIn("credentials", { callbackUrl: callbackUrl, ...data ,redirect: false});
    if (res?.error) {
      setFormError("Invalid Credentials")
    }
    if (res?.url) {
      setSuccess("Login Successful")
      router.push(res.url)
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="col-4">
        <div className="col">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register("username")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password")}
            />
          </div>
          <div>
            <span style={{ color: "red"}}>{ formError }</span>
            <span style={{ color: "green"}}>{ success }</span>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary d-grid">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
