import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="mx-auto max-w-7xl text-2xl gap-2 px-5">
            {children}
        </div>
    )
}

export default Container;