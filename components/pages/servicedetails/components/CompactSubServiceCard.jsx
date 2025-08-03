"use client"
import { CheckCircle, ChevronDown, ChevronUp, Clock, ExternalLink, IndianRupee, Star, Zap } from 'lucide-react';
import React, { useState } from 'react'

    const  CompactSubServiceCard = ({ subService, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg text-white font-bold text-xs">
              {index + 1}
            </div>
            {index === 0 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <Star className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs text-yellow-700 dark:text-yellow-300 font-medium">Popular</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-lg font-bold text-primary-600 dark:text-primary-400">
              <IndianRupee className="w-4 h-4" />
              <span>{subService.pricing?.starting?.replace('₹', '') || 'Custom'}</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {subService.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {subService.description}
        </p>

        {/* Timeline */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>{subService.pricing?.timeline || 'Flexible timeline'}</span>
        </div>

        {/* Key Benefits Preview */}
        {subService.keyBenefits && (
          <div className="mb-4">
            <div className="space-y-1">
              {subService.keyBenefits.slice(0, isExpanded ? undefined : 2).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && subService.pricing?.included && (
        <div className="px-6 pb-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-500" />
              What's Included
            </h4>
            <div className="space-y-1">
              {subService.pricing.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Card Footer */}
      <div className="p-6 pt-0 space-y-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-300"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>View Details</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300 text-sm">
            Get Started
          </button>
          <button className="px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 rounded-lg transition-colors duration-300 text-sm">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
    </div>
  );
}

export default CompactSubServiceCard
