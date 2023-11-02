import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <UserButton afterSignOutUrl="/" />
            <main className="flex w-full flex-grow">{children}</main>
        </>
    )
}
export default Layout
