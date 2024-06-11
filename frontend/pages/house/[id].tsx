// pages/house/[id].tsx

import { useRouter } from 'next/router';
import Link from 'next/link';

const HouseDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const houses = [
        { id: 1, name: 'Cozy Cottage', price: '$200,000', image: 'https://images.unsplash.com/photo-1618660920685-4505debb785a?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description : 'A cozy cottage in the countryside'},
        { id: 2, name: 'Modern Villa', price: '$500,000', image: 'https://images.unsplash.com/photo-1592676720632-e0f4741e1f46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpdGlzaCUyMGhvdXNlfGVufDB8fDB8fHww', description : 'A cozy cottage in the countryside' },
        { id: 3, name: 'Beach House', price: '$750,000', image: 'https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJpdGlzaCUyMGhvdXNlfGVufDB8fDB8fHww', description : 'A cozy cottage in the countryside' },
        { id: 3, name: 'Beach House', price: '$750,000', image: 'https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJpdGlzaCUyMGhvdXNlfGVufDB8fDB8fHww', description : 'A cozy cottage in the countryside'},
    ];
    const house = houses.find(h => h.id.toString() === id);

    if (!house) {
        return <div>House not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full py-5 bg-blue-300 flex justify-center">
                <h1 className="text-3xl text-blue-900">House Marketplace</h1>
            </header>
            <main className="flex-grow flex flex-col items-center mt-10">
                <div className="border rounded-lg p-4 text-center max-w-lg">
                    <img src={house.image} alt={house.name} className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h2 className="text-2xl mb-2">{house.name}</h2>
                    <p className="text-xl mb-4">{house.price}</p>
                    <p className="text-lg mb-4">{house.description}</p>
                    <Link href="/" className="text-blue-500">Back to listings</Link>
                </div>
            </main>
            <footer className="w-full py-5 bg-blue-300 text-center">
                <p className="text-blue-900">Made with ❤️ by your friends at #60DaysofXRPL London 😎</p>
            </footer>
        </div>
    );
};

export default HouseDetail;
