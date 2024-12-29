import Image from "next/image";
import IconPgn from "@/assets/images/PGN_Solution.png";
import UserAuthForm from "./user-auth-form";

export default function LoginViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center w-full lg:max-w-none lg:px-0 bg-neutral-100">
      <div className="flex flex-col h-full justify-center items-center p-4 lg:p-8">
        <div className="mb-6">
          <Image src={IconPgn} alt="Logo PGN" width={200} />
        </div>
        <div className="flex w-full flex-col justify-center space-y-6 sm:w-[470px] bg-white px-6 py-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-medium tracking-tight text-center text-[#232323]">
            Login to Your Account
          </h1>

          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
