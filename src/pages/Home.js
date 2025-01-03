import React from 'react';


function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Heat🔥Content</h1>
            <div className="max-w-2xl">
                <p className="text-lg mb-4">
                    Automated content curation system for creating and sharing short-form video clips from Youtube content.

                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Our Features</h2>
                    <ul className="space-y-2">
                        <li>✨ Automated clip creation</li>
                        <li>🎯 Community-driven content selection</li>
                        <li>🚀 Multi-platform distribution</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
