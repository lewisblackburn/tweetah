import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import { handleRedirect } from "../../lib/handleRedirect";
import { toErrorMap } from "../../lib/toErrorMap";
import { Button } from "../Button";
import FormLayout from "./FormLayout";
import InputField from "./InputField";

interface LoginProps {}

interface Values {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <div className="w-screen h-screen grid place-items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting, setErrors }: FormikHelpers<Values>
        ) => {
          setSubmitting(true);
          const response = await login({
            variables: {
              data: values,
            },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.login,
                },
              });
              cache.evict({ fieldName: "posts:{}" });
            },
          })
            .then(() => handleRedirect(router))
            .catch((e: any) => {
              if (e.graphQLErrors[0].extensions.exception.validationErrors)
                setErrors(toErrorMap(e));
              else {
                setErrors({ password: e.message });
              }
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <FormLayout>
            <Form>
              <h1 className="text-2xl font-bold ">Sign in to your account</h1>{" "}
              <div>
                <span className="text-sm text-gray-600">
                  Don't have an account?
                </span>{" "}
                <Link href="/register">
                  <a className="text-sm font-semibold text-gray-700">Sign up</a>
                </Link>
              </div>
              <InputField
                name="email"
                placeholder="email@provider.tdl"
                touched={touched.email}
                errors={errors.email}
                type="email"
              />
              <InputField
                name="password"
                placeholder="password"
                touched={touched.password}
                errors={errors.password}
                type="password"
              />
              <a
                className="inline-block text-sm text-gray-600 align-baseline hover:text-gray-800"
                href="/forgot"
              >
                Forgot Password?
              </a>
              <div className="flex w-full mt-8">
                <Button type="submit" loading={isSubmitting}>
                  Login
                </Button>
              </div>
            </Form>
          </FormLayout>
        )}
      </Formik>
    </div>
  );
};
