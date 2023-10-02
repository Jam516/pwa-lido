"use client"
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


function TitleBlock() {
  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Stake ETH
      </h1><p className="max-w-[700px] text-lg text-muted-foreground">
        Stake ETH and receive stETH
      </p>
    </div>
  );
}

function StakeBlock() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center gap-2 py-3 ">
          <Input />
          <Button className="w-full bg-blue-500	hover:bg-blue-400">Submit</Button>
        </div>
      </CardContent>
      <CardFooter>
        <ul className="text-xs text-foreground/60">
          <li>You will receive: 0 stETH</li>
          <li>Exchange Rate: 1 ETH = 1 stETH</li>
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
      <StakeBlock />
    </div>
  )
}
