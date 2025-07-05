"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import { useEffect } from "react"

export default function Client() {
    const trpc = useTRPC()
    const {data} = useSuspenseQuery(trpc.hello.queryOptions({
        text: "hello"
    }))

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
       <div>{JSON.stringify(data)}</div>
    )
}