// components/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false });

        router.push("/login");
    };

    return (
        <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
            Sign Out
        </button>
    );
}
