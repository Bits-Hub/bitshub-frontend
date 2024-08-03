"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
    register: UseFormRegisterReturn;
    placeholder: string;
}

export function PasswordInput({
    register,
    placeholder,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const toggle = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <>
            <div className="py-2 relative">
                <Input
                    {...register}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className="border-[#E5E9EB] border bg-[#F6F8F9] focus-visible:ring-primary placeholder:font-light placeholder:text-sm placeholder:text-#6E7C87"
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center mt-1 mr-3"
                    onClick={toggle}>
                    {showPassword ? (<EyeIcon className="w-4 h-4" />) : (<EyeSlashIcon className="w-4 h-4" />)}
                </button>
            </div>
        </>
    );
}
