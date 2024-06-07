"use client";

import React from "react";

import useCountries from "@/hook/useCountries";
import { motion } from "framer-motion";
import Image from "next/image";
import house from "../../public/assets/house.jpg";
import HeartButton from "@/components/HeartButton";
import Button from "@/components/Button";

const sampleListings = [
    {
        id: "1",
        imageSrc: house,
        locationValue: "NY",
        price: 120,
        category: "Apartment",
    },
    {
        id: "2",
        imageSrc: house,
        locationValue: "CA",
        price: 150,
        category: "House",
    },
    {
        id: "3",
        imageSrc: house,
        locationValue: "FL",
        price: 100,
        category: "Condo",
    },
];

const sampleUser = {
    id: "user1",
    name: "John Doe",
    email: "john.doe@example.com",
};

const SampleListingCards = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleListings.map((listing) => {

                return (
                    <motion.div
                        key={listing.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="col-span-1 cursor-pointer group"
                    >
                        <div className="flex flex-col gap-2 w-full">
                            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                                <Image
                                    fill
                                    className="object-cover h-full w-full group-hover:scale-110 transition"
                                    src={listing.imageSrc}
                                    alt="listing"
                                />
                                <div className="absolute top-3 right-3">

                                </div>
                            </div>
                            <div className="font-semibold text-lg">

                            </div>
                            <div className="font-light text-neutral-500">
                                {listing.category}
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <div className="flex gap-1 font-semibold">
                                    ${listing.price} <div className="font-light"> Night</div>
                                </div>
                            </div>
                            {/* Add action button if needed */}
                            {/* <Button
                                disabled={false}
                                small
                                label={"Action"}
                                onClick={() => {}}
                            /> */}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default SampleListingCards;
