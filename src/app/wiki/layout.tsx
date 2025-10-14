"use client"
export default function WikiLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="border-[1px] border-zinc-800 mx-6 mt-2 rounded-md p-2">{children}</div>
        </>
    );
}