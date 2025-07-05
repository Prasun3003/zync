// 'use client'
import { getQueryClient ,trpc } from "@/trpc/server";
import { HydrationBoundary } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import Client from "./client";
import { Suspense } from "react";

const Page =  async () => {


   const queryClient = getQueryClient();
   void queryClient.prefetchQuery(trpc.hello.queryOptions({
    text: "hello"
   }))
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<div>Loading...</div>}>
                <Client />
            </Suspense> 
        </HydrationBoundary>
    )
}
export default Page