"use client"
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
import { useAccount, useBalance } from "wagmi";
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from 'react';
import { stethConfig } from '@/abi/stethabi'
import {
  useContractWrite,
  usePrepareContractWrite
} from "wagmi";
import { parseEther } from 'viem'

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

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
  const isMounted = useIsMounted();

  const { address, isConnected } = useAccount();

  const {
    data: ethData,
    isError: ethIsError,
    isLoading: ethIsLoading,
  } = useBalance({
    address: address,
    watch: true,
  });

  const ethBalance = parseFloat(ethData?.formatted || "0")?.toFixed(3);

  const {
    data: stethData,
    isError: stethIsError,
    isLoading: stethIsLoading,
  } = useBalance({
    address: address,
    token: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    watch: true,
  });

  const stethBalance = parseFloat(stethData?.formatted || "0")?.toFixed(3);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the input value state when the input changes
    setInputValue(event.target.value);
  };

  const isNotNumber = isNaN(Number(inputValue));

  const { config } = usePrepareContractWrite({
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    abi: stethConfig.abi,
    functionName: "submit",
    value: parseEther(inputValue),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  if (!isMounted) return null;

  return (
    <Card>
      {!isConnected
        ? <div className="py-2"></div>
        :
        <CardHeader >
          <CardDescription>Available to stake</CardDescription>
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl">
            {ethBalance} ETH
          </h1>
          <Separator />
          <CardDescription>Staked amount</CardDescription>
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl">
            {stethBalance} stETH
          </h1>
        </CardHeader>
      }
      <CardContent>
        <div className="flex flex-col items-center gap-2 py-3 ">
          <Input placeholder="ETH Amount" value={inputValue}
            onChange={handleInputChange} />
          <Button
            onClick={() => write?.()}
            className="w-full bg-blue-500	hover:bg-blue-400"
            disabled={
              inputValue === "" ||
              isNotNumber ||
              !isConnected ||
              Number(inputValue) > Number(ethBalance)
            }>
            Submit
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        {Number(inputValue) > Number(ethBalance) && (
          <div className="text-foreground/70">You dont have enough ETH...</div>
        )}
        {isLoading && <div className="text-foreground/70">Check Wallet</div>}
        {isSuccess && <div className="text-foreground/70">Transaction: {JSON.stringify(data)}</div>}
        {/* <ul className="text-xs text-foreground/60">
          <li>You will receive: 0 stETH</li>
          <li>Exchange Rate: 1 ETH = 1 stETH</li>
        </ul> */}
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
