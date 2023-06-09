"use client"

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"

const HomeForm = () => {

    const {handleSubmit,register} = useForm<AuthType>()
    const authenticateUser = async (data: AuthType) => {
        signIn("credentials",{callbackUrl: "/dash",...data})    
    }   

  return (
    <form method="post" onSubmit={handleSubmit(authenticateUser)}>
      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">
          Username
        </label>
        <input type="text" className="form-control" id="usernameInput" {...register("username")} />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          {...register("password")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default HomeForm;