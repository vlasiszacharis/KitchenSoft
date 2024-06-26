import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn } from "../../../utils/api/apiClient";
import { useMutation, useQueryClient } from "react-query";
const ItemSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
});

function SignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(postSignIn, {
    onSuccess: () => {
      queryClient.invalidateQueries("SignUp");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    },
    onError: (error) => {
      console.error("Failed to post data", error);
      // setTimeout(() => {
      //   navigate("/dashboard");
      // }, 1200);
    },
  });

  const handleSubmit = (values: any) => {
    const newUser = {
      name: "name",
      password: "password",
    };

    mutation.mutate(newUser);
  };
  return (
    <>
      <div className="bg-custom-navy h-screen">
        <div className="flex justify-start items-center gap-1 pt-5 pl-8 ">
          <img src={logo} width={"70px"} className="App-logo" alt="logo" />

          <h1 className="font-manrope text-2xl tracking-wider text-white bg-custom-navy font-semibold text-opacity-100 ">
            <Link to="/app/dashboard">EasyKitchen</Link>
          </h1>
        </div>
        <div className="absolute top-16 left-1/3 right-1/3  ">
          <div className="flex flex-col p-8 gap-4 bg-white rounded-lg  ">
            <Formik
              initialValues={{
                name: "",
                password: "",
                acceptTerms: false,
              }}
              validationSchema={ItemSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="text-2xl flex justify-start font-bold text-center pb-8">
                  Sign In
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col col-span-2">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <Field
                      name="name"
                      className="mt-1 py-2 w-full pl-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out"
                      placeholder="Add Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label htmlFor="password" className="font-bold">
                      Password
                    </label>
                    <Field
                      name="password"
                      className="mt-1 py-2 w-full pl-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out"
                      placeholder="Add Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4 px-2 pt-6">
                  <button
                    type="submit"
                    className="bg-custom-navy hover:bg-blue-800 py-3 px-6 w-full justify-center items-center font-normal text-white rounded-md transition duration-150 ease-in-out"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
