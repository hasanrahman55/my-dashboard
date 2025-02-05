"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginPage() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard/analytic");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px] bg-white shadow-md rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-gray-500">
            Please enter your credentials to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button className="w-full" onClick={handleNavigation}>
            Sign In
          </Button>
          <p className="text-sm text-gray-600 text-center">
            Don&apos;t have an account yet?
            <Link
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
