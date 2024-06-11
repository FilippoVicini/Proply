// pages/house/[id].tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import {ConnectButton} from "@rainbow-me/rainbowkit";

const HouseDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const houses = [
        { id: 1, name: 'Cozy Cottage', price: '£200,000', image: 'https://images.unsplash.com/photo-1618660920685-4505debb785a?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description : 'A cozy cottage in the countryside'},
        { id: 2, name: 'Modern Villa', price: '£500,000', image: 'https://images.unsplash.com/photo-1592676720632-e0f4741e1f46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpdGlzaCUyMGhvdXNlfGVufDB8fDB8fHww', description : 'A modern villa with state-of-the-art amenities' },
        { id: 3, name: 'Beach House', price: '£750,000', image: 'https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJpdGlzaCUyMGhvdXNlfGVufDB8fDB8fHww', description : 'A beautiful beach house with stunning ocean views' },
    ];
    const house = houses.find(h => h.id.toString() === id);

    const [offer, setOffer] = useState('');

    const handleOfferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOffer(e.target.value);
    };

    if (!house) {
        return <div>House not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full py-5 bg-[#232329] flex justify-center">
                <ConnectButton />
                <h1 className="text-3xl text-white">House Marketplace</h1>
            </header>
            <main className="flex-grow flex flex-col items-center mt-10 w-full px-4">
                <div className="w-full max-w-4xl bg-white">
                    <img src={house.image} alt={house.name} className="w-full h-110 object-cover"/>
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-4">{house.name}</h2>
                        <p className="text-xl text-gray-600 mb-4">{house.price}</p>
                        <p className="text-lg text-gray-800 mb-6">{house.description}</p>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="offer" className="text-lg font-medium mb-2">Make an Offer</label>
                            <input
                                type="text"
                                id="offer"
                                className="border border-gray-300 rounded-md p-2 text-lg"
                                placeholder="Enter your offer"
                                value={offer}
                                onChange={handleOfferChange}
                            />
                        </div>
                        <Link href="/" className="text-blue-500">Back to listings</Link>
                    </div>
                </div>
            </main>
            <footer className="w-full py-5 bg-[#232329] text-center">
                <p className="text-white">Made with ❤️ by Proply Team</p>
            </footer>
        </div>
    );
};

export default HouseDetail;
