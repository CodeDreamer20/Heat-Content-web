import React from 'react';


function Privacy () {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="max-w-2xl">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
                    <p className="mb-4">
                        We collect minimal information necessary for service operation, including account details and usage statistics.
                    </p>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
                    <p className="mb-4">
                        Collected data is used solely for service improvement and is never shared with third parties.
                    </p>
                </section>
            </div>
        </div>
    );
}


export default Privacy;