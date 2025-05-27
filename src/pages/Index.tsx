
import React from 'react';
import { Search, BookOpen, Eye, ExternalLink, Star, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const tutorialCategories = [
    {
      id: 1,
      title: "AI Fundamentals",
      description: "Start your journey with the basics of artificial intelligence",
      level: "Beginner",
      lessons: 12,
      duration: "4 hours",
      icon: "🧠",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Neural Networks",
      description: "Deep dive into the building blocks of modern AI",
      level: "Intermediate",
      lessons: 18,
      duration: "8 hours",
      icon: "🕸️",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Large Language Models",
      description: "Understand GPT, BERT, and transformer architectures",
      level: "Advanced",
      lessons: 15,
      duration: "10 hours",
      icon: "🤖",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Computer Vision",
      description: "Learn how AI sees and interprets visual data",
      level: "Intermediate",
      lessons: 14,
      duration: "6 hours",
      icon: "👁️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Generative Models",
      description: "Create art, text, and media with AI",
      level: "Advanced",
      lessons: 20,
      duration: "12 hours",
      icon: "🎨",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Ethics & Safety",
      description: "Responsible AI development and deployment",
      level: "Beginner",
      lessons: 8,
      duration: "3 hours",
      icon: "⚖️",
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const visualizations = [
    {
      title: "Neural Network Playground",
      description: "Interactive visualization of how neural networks learn",
      type: "Interactive Demo",
      difficulty: "Beginner"
    },
    {
      title: "Attention Mechanism",
      description: "See how transformers focus on different parts of input",
      type: "Animation",
      difficulty: "Advanced"
    },
    {
      title: "Gradient Descent",
      description: "Watch optimization algorithms find the best solution",
      type: "Simulation",
      difficulty: "Intermediate"
    },
    {
      title: "Backpropagation",
      description: "Understand how neural networks learn from mistakes",
      type: "Step-by-step",
      difficulty: "Intermediate"
    }
  ];

  const externalResources = [
    {
      title: "OpenAI Research Papers",
      description: "Latest research from OpenAI team",
      type: "Research",
      url: "https://openai.com/research/",
      rating: 5
    },
    {
      title: "Hugging Face Course",
      description: "Comprehensive NLP and transformer course",
      type: "Course",
      url: "https://huggingface.co/course",
      rating: 5
    },
    {
      title: "Andrej Karpathy's YouTube",
      description: "Neural networks explained from first principles",
      type: "Video",
      url: "https://youtube.com/@AndrejKarpathy",
      rating: 5
    },
    {
      title: "Papers With Code",
      description: "Latest AI research with implementation",
      type: "Repository",
      url: "https://paperswithcode.com/",
      rating: 4
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h1 className="text-2xl font-bold text-white">GenAI Academy</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#tutorials" className="text-white/80 hover:text-white transition-colors">Tutorials</a>
              <a href="#visualizations" className="text-white/80 hover:text-white transition-colors">Visualizations</a>
              <a href="#resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GenAI</span> for Free
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your complete learning platform for Generative AI - from fundamentals to cutting-edge research. 
            Interactive tutorials, visualizations, and curated resources all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search tutorials, concepts, or resources..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2">
              Start Learning
            </Button>
          </div>
          <div className="flex justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>50K+ Learners</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>100+ Tutorials</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section id="tutorials" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Learning Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialCategories.map((category) => (
              <Card key={category.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-white/70">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getLevelColor(category.level)}>{category.level}</Badge>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{category.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{category.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visualizations Section */}
      <section id="visualizations" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white mb-4 text-center">Interactive Visualizations</h3>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Understand complex AI concepts through interactive demos and visual explanations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualizations.map((viz, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Eye className="w-8 h-8 text-blue-400" />
                    <Badge className={getLevelColor(viz.difficulty)}>{viz.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-white">{viz.title}</CardTitle>
                  <CardDescription className="text-white/70">{viz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{viz.type}</span>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section id="resources" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white mb-4 text-center">Curated Resources</h3>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Hand-picked external resources from top researchers, institutions, and practitioners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <ExternalLink className="w-6 h-6 text-green-400" />
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < resource.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-white/70">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-white/20 text-white">{resource.type}</Badge>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      Visit Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <h4 className="text-xl font-bold text-white">GenAI Academy</h4>
          </div>
          <p className="text-white/60 mb-6">
            Democratizing AI education through free, high-quality content for everyone.
          </p>
          <div className="flex justify-center space-x-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
