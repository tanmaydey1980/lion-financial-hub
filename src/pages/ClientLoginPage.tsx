
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import PageHeader from "@/components/layout/PageHeader";

const ClientLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to authentication
    console.log("Login attempt:", { email, password, rememberMe });
    // For demo, we'd show a success message
    alert("This is a demo login. In a real application, you would be authenticated.");
  };

  return (
    <>
      <PageHeader 
        title="Client Login" 
        subtitle="Access your secure client portal"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />

      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <h2 className="text-2xl font-bold text-icea-navy text-center">Login to Your Account</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Link to="#" className="text-sm text-icea-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="rememberMe" 
                      checked={rememberMe} 
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                    />
                    <label 
                      htmlFor="rememberMe" 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-icea-navy text-white">
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-6">
              <div className="text-sm text-center">
                <span className="text-gray-600">Don't have an account?</span>{" "}
                <Link to="#" className="text-icea-blue hover:underline font-medium">
                  Contact us to register
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
            <h3 className="text-lg font-medium mb-2">Security Notice</h3>
            <p className="text-sm text-gray-600">
              For your security, please ensure you're on the official ICEA Lion website
              before entering your credentials. We will never ask for your password over
              phone or email.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLoginPage;
