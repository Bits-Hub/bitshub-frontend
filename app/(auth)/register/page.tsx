"use client";

import { RegisterSchema, RegisterType } from "@/lib/schema/authSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/atoms/ui/button"
import { Input } from "@/components/atoms/ui/input"
import { Checkbox } from "@/components/atoms/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/ui/form";
import { PasswordInput } from "@/components/atoms/ui/password-input";
import { useSignUpMutation } from "@/redux/services/auth/authApi";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();
  const form = useForm<RegisterType>({ resolver: zodResolver(RegisterSchema) });
  const { register } = form;
  const [signUp, {
    data: registerData,
    error: registerError,
    isLoading: registerIsLoading,
    isError: registerIsError,
  }] = useSignUpMutation();

  const onSubmit = async (data: RegisterType) => {
    const parsedData = RegisterSchema.parse(data);
    const { termsAndConditions, ...dataToSend } = parsedData;
    toast.loading("Creating account...");
    try {
      await signUp(dataToSend).unwrap();
      toast.dismiss();
      router.push("/home");
      toast.success("Welcome to Bitshub");
    } catch (error) {
      toast.dismiss();
      toast.error(`An error occurred.${error}`);
    }
  }
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Sign up here if you&apos;re a new customer
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Enter password"  register={register("password")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-gray-600 ml-3 cursor pointer">
                        <span>I have read and agreed to the </span>{" "}
                        <span>
                          <a href="/#" className="text-primary">
                            terms and conditions
                          </a>
                        </span>
                      </FormLabel>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"
              // loading={registerIsLoading}
              disabled={registerIsLoading}
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >Create Account</Button>
          </form>
        </Form>
        <div className="flex mt-6 justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            or sign up with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="/"
            //   onClick={googleAuthHandler}
            className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?
          <span className="text-primary cursor-pointer">
            <Link href='/login'> Login Now</Link>
          </span>
        </p>
        <p className="mt-4 text-gray-600 text-center">
          Want to become a vendor?
          <span className="text-primary cursor-pointer">
            <Link href="/login/create-store"> Create a store</Link>
          </span>
        </p>
      </div>
    </div>
  )
}
