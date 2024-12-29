"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().nonempty("Email is required."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, startTransition] = useTransition();
  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // const onSubmit = async (data: UserFormValue) => {
  //   startTransition(async () => {
  //     // setLoading(true);
  //     toast({
  //       title: "Login Successful",
  //       description: "You have successfully logged in!",
  //       variant: "default",
  //     });

  //     // Lakukan login menggunakan `signIn` jika diperlukan
  //     // signIn("credentials", {
  //     //   username: data.username,
  //     //   callbackUrl: callbackUrl ?? "/dashboard",
  //     // });
  //   });
  // };

  const onSubmit = () => {
    redirect("/persediaan/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your email..."
                  disabled={loading}
                  {...field}
                  className="h-14"
                />
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
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password..."
                    disabled={loading}
                    {...field}
                    className="h-14"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} className="w-full h-10" type="submit">
          <Link href='/persediaan/dashboard'> Login </Link>
          Login
        </Button>
      </form>
    </Form>
  );
}
