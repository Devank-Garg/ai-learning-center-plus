import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

// --- Neural Network Diagram Visualizer ---
const LAYERS = [
	{ name: "Input", size: 3 },
	{ name: "Hidden 1", size: 4 },
	{ name: "Hidden 2", size: 3 },
	{ name: "Output", size: 2 },
];

const highlightColors = [
	"bg-blue-400", // Input
	"bg-purple-400", // Hidden 1
	"bg-pink-400", // Hidden 2
	"bg-green-400", // Output
];

const NeuralNetworkDiagram: React.FC = () => {
	const [step, setStep] = React.useState(0);
	const [auto, setAuto] = React.useState(true); // Auto highlight ON initially
	const [randomNeurons, setRandomNeurons] = React.useState<{ [layerIdx: number]: number[] }>({});

	React.useEffect(() => {
		if (!auto) return;
		if (step > LAYERS.length) return;
		const timer = setTimeout(() => {
			setStep((prev) => (prev < LAYERS.length ? prev + 1 : 0));
		}, 900);
		return () => clearTimeout(timer);
	}, [auto, step]);

	// When entering a hidden layer, pick random neurons to highlight
	React.useEffect(() => {
		if (step === 0 || step === LAYERS.length - 1 || step >= LAYERS.length) return;
		// Only for hidden layers (not input or output)
		const layer = LAYERS[step];
		const count = Math.max(1, Math.floor(Math.random() * layer.size)); // At least 1 neuron
		const indices = Array.from({ length: layer.size }, (_, i) => i);
		const shuffled = indices.sort(() => 0.5 - Math.random());
		setRandomNeurons((prev) => ({ ...prev, [step]: shuffled.slice(0, count) }));
	}, [step]);

	const handleNext = () => {
		setStep((prev) => (prev < LAYERS.length ? prev + 1 : 0));
		setAuto(false);
	};

	const handleAuto = () => {
		setAuto((prev) => !prev);
	};

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex flex-row gap-12 justify-center items-center min-h-[300px]">
				{LAYERS.map((layer, layerIdx) => (
					<div key={layer.name} className="flex flex-col items-center gap-4">
						<span className="text-white/80 text-xs mb-2">{layer.name} Layer</span>
						{Array.from({ length: layer.size }).map((_, neuronIdx) => {
							let highlight = false;
							if (step > layerIdx) {
								// Already passed, highlight all
								highlight = true;
							} else if (step === layerIdx) {
								if (layerIdx === 0 || layerIdx === LAYERS.length - 1) {
									// Input or output: highlight all
									highlight = true;
								} else {
									// Hidden: highlight only random subset
									highlight = randomNeurons[layerIdx]?.includes(neuronIdx);
								}
							}
							return (
								<div
									key={neuronIdx}
									className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs transition-all duration-300
                    ${highlight ? highlightColors[layerIdx] : "bg-black/40"}
                    ${step === layerIdx && highlight ? "ring-4 ring-yellow-300" : ""}
                  `}
								>
									{layerIdx + 1}.{neuronIdx + 1}
								</div>
							);
						})}
					</div>
				))}
				{/* Draw lines between layers (simple SVG overlay) */}
				<svg width="0" height="0">
					<defs>
						<marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
							<path d="M0,0 L0,6 L6,3 z" fill="#fff" />
						</marker>
					</defs>
				</svg>
			</div>
			<div className="flex gap-4">
				<Button onClick={handleNext} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
					{step < LAYERS.length ? `Highlight ${LAYERS[step].name} Layer` : "Reset"}
				</Button>
				<Button onClick={handleAuto} variant={auto ? "secondary" : "outline"} className="border-white/30 text-white">
					{auto ? "Pause Auto Highlight" : "Auto Highlight"}
				</Button>
			</div>
			<div className="text-white/60 text-xs mt-2">Click the button to step through the network layers, or use auto highlight.</div>
		</div>
	);
};

const TheorySection = () => {
	return (
		<section className="mt-12 p-8 rounded-lg bg-white/10 text-white/90">
			<h2 className="text-2xl font-bold mb-4">Theory & Math: Neural Networks</h2>
			<p className="mb-4">
				A <b>neural network</b> is a computational model inspired by the human brain. It consists of interconnected nodes (neurons) organized in layers. Each neuron receives inputs, applies weights and a bias, sums them, and passes the result through an activation function (like the sigmoid).
			</p>
			<div className="mb-4">
				<b>Single Neuron (Perceptron) Equation:</b>
				<pre className="bg-black/30 rounded p-4 mt-2 text-white/80 overflow-x-auto">{`output = activation(w₁·x₁ + w₂·x₂ + ... + wₙ·xₙ + b)`}</pre>
				<div className="text-sm text-white/70 mt-2">
					Where:
					<ul className="list-disc ml-6">
						<li>
							<b>x₁, x₂, ..., xₙ</b>: Inputs
						</li>
						<li>
							<b>w₁, w₂, ..., wₙ</b>: Weights
						</li>
						<li>
							<b>b</b>: Bias
						</li>
						<li>
							<b>activation</b>: Non-linear function (e.g., sigmoid, ReLU)
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-4">
				<b>Sigmoid Activation Function:</b>
				<pre className="bg-black/30 rounded p-4 mt-2 text-white/80 overflow-x-auto">{`sigmoid(x) = 1 / (1 + exp(-x))`}</pre>
			</div>
			<div className="mb-4">
				<b>Learning:</b> Neural networks learn by adjusting weights and biases to minimize the difference between predicted and actual outputs, typically using algorithms like <b>gradient descent</b> and <b>backpropagation</b>.
			</div>
			<div className="mb-2">
				<b>Why Non-linearity?</b> Activation functions introduce non-linearity, allowing neural networks to model complex patterns beyond simple linear relationships.
			</div>
		</section>
	);
};

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
								{/* Neural Network Diagram Visualization */}
								<NeuralNetworkDiagram />
							</div>
							<Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white mt-4" onClick={() => window.history.back()}>
								Back
							</Button>
						</CardContent>
					</Card>
					<TheorySection />
				</div>
			</main>
		</div>
	);
};

export default NeuralNetworkPlayground;
