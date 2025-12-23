import React, { useState } from 'react';
import SideBar from './SideBar';
import './AddQA.css';
import { Plus, FileText, Upload, Send, Edit3, Trash2 } from 'lucide-react';

const AddQA = () => {
    const [isActive, setIsActive] = useState(true);

    const questions = [
        {
            id: 1,
            type: 'Multiple Choice Question',
            question: 'Q1: How often do you feel stressed?',
            options: [
                { text: 'Always (Score: 4)', value: 'A' },
                { text: 'Often (Score: 3)', value: 'B' },
                { text: 'Sometimes (Score: 2)', value: 'C' },
                { text: 'Never (Score: 1)', value: 'D' },
            ],
        },
        {
            id: 2,
            type: 'Multiple Choice Question',
            question: 'Q2: In the past week, how often have you felt nervous or on edge?',
            options: [
                { text: 'Nearly every day (Score: 4)', value: 'A' },
                { text: 'More than half the days (Score: 3)', value: 'B' },
                { text: 'Several days (Score: 2)', value: 'C' },
                { text: 'Not at all (Score: 1)', value: 'D' },
            ],
        },
        {
            id: 3,
            type: 'Multiple Choice Question',
            question: 'Q3: How well have you been able to control your worrying?',
            options: [
                { text: 'Not at all (Score: 4)', value: 'A' },
                { text: 'With some difficulty (Score: 3)', value: 'B' },
                { text: 'Fairly well (Score: 2)', value: 'C' },
                { text: 'Very well (Score: 1)', value: 'D' },
            ],
        },
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter add-qa-container">
            <SideBar />

            <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Stress & Anxiety Assessment</h1>
                    
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#FEF3C7] text-gray-900 rounded-lg hover:bg-[#FDE68A] transition-colors font-medium">
                        <Plus size={20} />
                        Add New Question
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        <FileText size={20} />
                        Import Questions
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        <Upload size={20} />
                        Import material
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        <Send size={20} />
                        send notification
                    </button>
                </div>

                {/* Test Status and Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* Activate Test Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Activate Test</h3>
                            <p className="text-gray-500 text-sm">Make the test available for patients.</p>
                        </div>
                        <div className="toggle-wrapper">
                            <input
                                type="checkbox"
                                id="toggle"
                                checked={isActive}
                                onChange={() => setIsActive(!isActive)}
                                className="toggle-checkbox"
                            />
                            <label htmlFor="toggle" className="toggle-label"></label>
                        </div>
                    </div>

                    {/* Preview/Publish Controls */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-end gap-4">
                        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                            Preview Test
                        </button>
                        <button className="px-6 py-2 bg-[#FCD34D] text-gray-900 rounded-lg hover:bg-[#fbbf24] transition-colors font-medium shadow-sm">
                            Publish Test
                        </button>
                    </div>
                </div>

                {/* Questions Section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions</h2>

                    <div className="space-y-6">
                        {questions.map((q) => (
                            <div key={q.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm qa-card relative group">
                                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                        <Edit3 size={20} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="mb-4">
                                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{q.type}</span>
                                    <h3 className="text-xl font-semibold text-gray-900 mt-2">{q.question}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 pl-4">
                                    {q.options.map((opt, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <span className="font-medium mr-2">{opt.value}.</span>
                                            {opt.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQA;
