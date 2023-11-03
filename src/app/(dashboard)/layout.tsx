import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
                <h1 className="text-2xl font-bold">W<span className="italic text-emerald-700 tracking-tighter">event</span>ify</h1>
                <UserButton afterSignOutUrl="/sign-in" />
            </nav>
            <main className="flex w-full flex-grow">{children}</main>
        </div>
    )
}
export default Layout
