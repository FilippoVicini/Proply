import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";


import SampleListingCards from "@/components/listing/SampleListingCard";


export default async function Home() {


  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          <SampleListingCards/>
        </div>
      </Container>
    </ClientOnly>
  );
}
