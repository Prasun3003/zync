import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-3xl">
            <h1 className="bg-orange-300 p-x-2 p-y-1 font-bold text-center flex items-center justify-between" >Home Page <Button variant="primary">Primary</Button></h1>
        </main>
    )
}