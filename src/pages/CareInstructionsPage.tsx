import React, { useState } from 'react';
import { Droplets, Sun, Scissors, Thermometer, Calendar, Lightbulb } from 'lucide-react';

const CareInstructionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'flowers' | 'seedlings'>('flowers');

  const flowerCareGuides = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Watering Fresh Cut Flowers',
      tips: [
        'Change water every 2-3 days or when it becomes cloudy',
        'Use lukewarm water (room temperature) for best results',
        'Add flower food to extend bloom life',
        'Fill vase 2/3 full with fresh, clean water',
        'Remove any leaves below the waterline to prevent bacteria'
      ]
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Proper Stem Cutting',
      tips: [
        'Cut stems at a 45-degree angle under running water',
        'Use sharp, clean scissors or floral shears',
        'Cut 1-2 inches off the bottom of each stem',
        'Re-cut stems every few days when changing water',
        'Cut stems while submerged to prevent air bubbles'
      ]
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Light and Temperature',
      tips: [
        'Keep flowers away from direct sunlight',
        'Avoid placing near heat sources (radiators, stoves)',
        'Maintain room temperature between 65-75°F (18-24°C)',
        'Provide bright, indirect light for best color retention',
        'Avoid drafty areas and air conditioning vents'
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Extending Flower Life',
      tips: [
        'Remove wilted flowers and leaves promptly',
        'Mist petals lightly with water (avoid fuzzy flowers)',
        'Add a teaspoon of sugar to vase water for nutrition',
        'Use aspirin or lemon-lime soda as natural preservatives',
        'Keep arrangements in cool areas overnight'
      ]
    }
  ];

  const seedlingCareGuides = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Watering Seedlings',
      tips: [
        'Water when top inch of soil feels dry to touch',
        'Use room temperature water to avoid shock',
        'Water at the base, avoiding leaves when possible',
        'Ensure good drainage to prevent root rot',
        'Water in the morning for best absorption'
      ]
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Light Requirements',
      tips: [
        'Provide 12-16 hours of light daily for most seedlings',
        'Use grow lights if natural light is insufficient',
        'Gradually introduce to direct sunlight (hardening off)',
        'Rotate containers regularly for even growth',
        'Watch for stretching - indicates need for more light'
      ]
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Temperature Control',
      tips: [
        'Maintain consistent temperature between 65-75°F (18-24°C)',
        'Avoid temperature fluctuations and drafts',
        'Use heat mats for warm-season crops if needed',
        'Gradually acclimate to outdoor temperatures',
        'Protect from frost and extreme weather'
      ]
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Transplanting Tips',
      tips: [
        'Transplant when seedlings have 2-4 true leaves',
        'Water thoroughly before and after transplanting',
        'Handle by leaves, not stems, to avoid damage',
        'Plant at the same depth as in original container',
        'Provide shade for first few days after transplanting'
      ]
    }
  ];

  const currentGuides = selectedCategory === 'flowers' ? flowerCareGuides : seedlingCareGuides;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Plant Care Instructions</h1>
          <p className="text-xl text-green-100">
            Expert tips to keep your plants healthy and thriving
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex">
            <button
              onClick={() => setSelectedCategory('flowers')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                selectedCategory === 'flowers'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Cut Flowers
            </button>
            <button
              onClick={() => setSelectedCategory('seedlings')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                selectedCategory === 'seedlings'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Seedlings & Plants
            </button>
          </div>
        </div>

        {/* Care Guides */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {currentGuides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <div className="text-green-600">{guide.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
              </div>
              <ul className="space-y-3">
                {guide.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seasonal Care Tips */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Seasonal Care Calendar</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring (Mar-May)</h3>
              <p className="text-sm text-gray-600">Start seedlings indoors, prepare garden beds, begin regular watering schedule</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Summer (Jun-Aug)</h3>
              <p className="text-sm text-gray-600">Increase watering frequency, provide shade during hot days, harvest flowers regularly</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍂</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Autumn (Sep-Nov)</h3>
              <p className="text-sm text-gray-600">Reduce watering, collect seeds, prepare plants for cooler weather</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Winter (Dec-Feb)</h3>
              <p className="text-sm text-gray-600">Minimal watering, protect from frost, plan next season's garden</p>
            </div>
          </div>
        </div>

        {/* Common Problems */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Problems & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-900 mb-3">🥀 Wilting Flowers</h3>
              <p className="text-red-800 text-sm mb-3">
                <strong>Causes:</strong> Dehydration, bacterial growth, old age
              </p>
              <p className="text-red-800 text-sm">
                <strong>Solutions:</strong> Fresh water, re-cut stems, remove bacteria sources
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">🌱 Leggy Seedlings</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>Causes:</strong> Insufficient light, overcrowding, high temperature
              </p>
              <p className="text-yellow-800 text-sm">
                <strong>Solutions:</strong> More light, proper spacing, cooler conditions
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">💧 Overwatering</h3>
              <p className="text-blue-800 text-sm mb-3">
                <strong>Signs:</strong> Yellow leaves, musty smell, fungal growth
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Solutions:</strong> Reduce watering, improve drainage, remove affected parts
              </p>
            </div>
          </div>
        </div>

        {/* Expert Tips */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Advice?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every plant is unique, and sometimes you need specific guidance. Our gardening experts are available 
            to provide personalized care advice for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Ask Our Experts
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
              Download Care Guide PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareInstructionsPage;