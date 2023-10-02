"use client"
import Link from "next/link"
import { DesktopBlocker } from "@/components/desktop-blocker"
import { LidoLogo } from "@/components/lidologo"
import { ConnectKitButton } from "connectkit";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function HeadBlock() {
    return (
        <div className="flex w-full justify-between px-3">
            <LidoLogo />
            <ConnectKitButton />
        </div>
    );
}

function TitleBlock() {
    return (
        <>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Reward History
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
                Track your Ethereum staking rewards with Lido.
            </p>
        </>
    );
}

function RewardsBlock() {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col items-center gap-2 py-3 ">
                    <Input />
                    <Button>Check</Button>
                </div>
            </CardContent>
        </Card>
    );
}


export default function IndexPage() {
    return (

        <div className="flex flex-col items-center gap-2 py-3 ">
            {/* <DesktopBlocker /> */}
            <HeadBlock />
            <TitleBlock />
            <RewardsBlock />

        </div>
    )
}
