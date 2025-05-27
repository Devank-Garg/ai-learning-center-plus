import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const NeuralNetworkPlayground = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Neural Network Playground</h1>
          </div>
        </div>
      </header>
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Eye className="w-8 h-8 text-blue-400" />
                <Badge className="bg-green-100 text-green-800">Beginner</Badge>
              </div>
              <CardTitle className="text-white">Neural Network Playground</CardTitle>
              <CardDescription className="text-white/70">
                Interactive visualization of how neural networks learn. Experiment with parameters and see how the network adapts in real time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white/80 mb-4">
                {/* Placeholder for the interactive visualization component */}
                <div className="w-full h-96 flex items-center justify-center bg-black/30 rounded-lg border border-white/20">
                  <span className="text-white/40">[Interactive Neural Network Visualization Coming Soon]</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white mt-4" onClick={() => window.history.back()}>
                Back
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NeuralNetworkPlayground;
