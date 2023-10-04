"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function TitleBlock() {
    return (
        <div className="flex flex-col items-center pt-4">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Reward History
            </h1><p className="max-w-[700px] text-lg text-muted-foreground">
                Track your ETH staking rewards

            </p>
        </div>
    );
}

function RewardsBlock() {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col items-center gap-2 py-3 ">
                    <h1 className="font-extrabold">Connect Wallet to see history</h1>
                </div>
            </CardContent>
            <CardFooter>
                <ul className="text-sm text-foreground/60">
                    <li>stETH Balance: 0 stETH</li>
                    <li>stETH Rewarded: 0 stETH</li>
                    <li>Average APR: 0%</li>
                </ul>
            </CardFooter>
        </Card>
    );
}


export default function IndexPage() {
    return (

        <div className="flex flex-col items-center gap-6 py-3 ">
            {/* <DesktopBlocker /> */}

            <TitleBlock />
            <RewardsBlock />

        </div>
    )
}
