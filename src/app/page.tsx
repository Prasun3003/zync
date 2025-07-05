import { Button } from "@/components/ui/button"

import { prisma } from "@/lib/db"
const Page = async () => {
    const users = await prisma.user.findUnique({ where: { id: 1 } })
    return (
        <main className="flex flex-col gap-2">
            {users?.name}
        </main>
    )
}
export default Page