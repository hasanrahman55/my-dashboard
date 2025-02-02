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

export default function SignUpPage() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard/analytic");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px] bg-white shadow-md rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Create an Account
          </CardTitle>
          <CardDescription className="text-gray-500">
            Join us by filling in your details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-gray-700">
                  Full Name
                </Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password" className="text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button className="w-full" onClick={handleNavigation}>
            Sign Up
          </Button>
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              href="/"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
