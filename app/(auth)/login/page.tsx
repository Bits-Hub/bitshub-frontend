"use client";

import { LoginSchema, LoginType } from '@/lib/schema/authSchema';
import { useLoginMutation } from '@/redux/services/auth/authApi';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from "@/components/atoms/ui/button"
import { Input } from "@/components/atoms/ui/input"
import { Checkbox } from "@/components/atoms/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/ui/form";
import { PasswordInput } from '@/components/atoms/ui/password-input';


export default function Login() {
  const router = useRouter()
  const form = useForm<LoginType>({ resolver: zodResolver(LoginSchema) });
  const { register } = form;
  const [login, {
    data: loginData,
    error: loginError,
    isLoading: loginIsLoading,
    isError: loginIsError,
  }] = useLoginMutation();
  console.log('here')

  const onSubmit = async (data: LoginType) => {
    //todo:  change this loading toasts to a loading spinner in the button
    toast.loading("Logging in...");
    const parsedData = LoginSchema.parse(data);
    const { rememberMe, ...dataToSend } = parsedData;
    try {
      await login(dataToSend).unwrap();
      toast.dismiss();
      router.push("/home");
      console.log(loginData)
      toast.success("Welcome back to Bitshub");
    } catch (error) {
      toast.dismiss();
      toast.error(`An error occurred.${error}`);
    }
  }
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returning user
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
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
                      <PasswordInput placeholder="Enter password" register={register("password")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-4">
                    <div className='flex items-center space-x-1'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-600 ml-3 cursor pointer">
                          Remember me
                        </FormLabel>
                      </div>
                    </div>
                    <Link href="/forgot" className="text-primary cursor-pointer">
                      Forgot password?
                    </Link>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"
              // loading={loginIsLoading}
              disabled={loginIsLoading}
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >Login</Button>
          </form>
        </Form>

        <div className="flex mt-6 justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
          >
            Facebook
          </a>
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don&apos;t have an account?
          <span className="text-primary cursor-pointer">
            <Link href="/register"> Create account</Link>
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


