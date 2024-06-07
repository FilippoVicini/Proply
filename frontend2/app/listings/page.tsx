"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { Range } from "react-date-range";
import { toast } from "react-toastify";
import ListingInfo from "@/components/listing/ListingInfo";
import ListingReservation from "@/components/listing/ListingReservation";
import ListingHead from "@/components/listing/ListingHead";
import Container from "@/components/Container";
import { categories } from "@/components/navbar/Categories";
import house from "@/assets/images/house.jpg";
const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
};

// Dummy data for the listing
const dummyListing = {
    id: "1",
    title: "Beautiful Beach House",
    description: "Enjoy a lovely stay at this beach house with stunning views.",
    imageSrc: "/house",
    locationValue: "Beach City, CA",
    price: 200,
    roomCount: 3,
    guestCount: 6,
    bathroomCount: 2,
    category: "Beach",
    user: {
        id: "user1",
        name: "John Doe",
        avatarSrc: "/images/user.jpg",
    },
};

// Dummy data for reservations
const dummyReservations = [
    {
        startDate: "2024-06-15",
        endDate: "2024-06-20",
    },
    {
        startDate: "2024-07-01",
        endDate: "2024-07-05",
    },
];

function ListingClient() {

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(dummyListing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const onCreateReservation = useCallback(() => {
        setIsLoading(true);

        setTimeout(() => {
            toast.success("Success!");
            setDateRange(initialDateRange);
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (dayCount && dummyListing.price) {
                setTotalPrice(dayCount * dummyListing.price);
            } else {
                setTotalPrice(dummyListing.price);
            }
        }
    }, [dateRange]);

    const category = useMemo(() => {
        return categories.find((item) => item.label === dummyListing.category);
    }, [dummyListing.category]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={dummyListing.title}
                        imageSrc={dummyListing.imageSrc}
                        locationValue={dummyListing.locationValue}
                        id={dummyListing.id}
                        currentUser={null} // No user data in this dummy example
                    />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <ListingInfo
                            category={category}
                            description={dummyListing.description}
                            roomCount={dummyListing.roomCount}
                            guestCount={dummyListing.guestCount}
                            bathroomCount={dummyListing.bathroomCount}
                            locationValue={dummyListing.locationValue}
                        />


                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ListingClient;
