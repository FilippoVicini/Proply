import { expect } from "chai";
import { ethers } from "hardhat";

describe("PropertySale", function () {
    async function deployPropertySaleFixture() {
        // Contracts are deployed using the first signer/account by default
        const [seller, buyer] = await ethers.getSigners();

        const PropertySale = await ethers.getContractFactory("PropertySale");
        const propertySale = await PropertySale.deploy();

        return { propertySale, seller, buyer };
    }

    describe("Deployment", function () {
        it("Should set the right seller", async function () {
            const { propertySale, seller } = await deployPropertySaleFixture();

            expect(await propertySale.seller()).to.equal(seller.address);
        });
    });

    describe("Offers", function () {
        it("Should allow a buyer to initiate an offer", async function () {
            const { propertySale, buyer } = await deployPropertySaleFixture();

            const price = ethers.utils.parseEther("1.0");
            await expect(propertySale.connect(buyer).initiateOffer(price))
                .to.emit(propertySale, "OfferInitiated")
                .withArgs(buyer.address, price);

            expect(await propertySale.buyer()).to.equal(buyer.address);
            expect(await propertySale.price()).to.equal(price);
        });

        it("Should not allow the seller to initiate an offer", async function () {
            const { propertySale, seller } = await deployPropertySaleFixture();

            const price = ethers.utils.parseEther("1.0");
            await expect(propertySale.connect(seller).initiateOffer(price)).to.be.revertedWith(
                "Seller cannot initiate an offer."
            );
        });

        it("Should allow the seller to accept an offer", async function () {
            const { propertySale, seller, buyer } = await deployPropertySaleFixture();

            const price = ethers.utils.parseEther("1.0");
            await propertySale.connect(buyer).initiateOffer(price);

            await expect(propertySale.connect(seller).acceptOffer())
                .to.emit(propertySale, "OfferAccepted")
                .withArgs(seller.address, buyer.address, price);

            expect(await propertySale.offerAccepted()).to.be.true;
        });

        it("Should not allow the seller to accept an offer if no offer has been initiated", async function () {
            const { propertySale, seller } = await deployPropertySaleFixture();

            await expect(propertySale.connect(seller).acceptOffer()).to.be.revertedWith(
                "No offer has been initiated yet."
            );
        });

        it("Should not allow a buyer to initiate another offer after one has been accepted", async function () {
            const { propertySale, seller, buyer } = await deployPropertySaleFixture();

            const price = ethers.utils.parseEther("1.0");
            await propertySale.connect(buyer).initiateOffer(price);
            await propertySale.connect(seller).acceptOffer();

            const newPrice = ethers.utils.parseEther("2.0");
            await expect(propertySale.connect(buyer).initiateOffer(newPrice)).to.be.revertedWith(
                "An offer has already been accepted."
            );
        });
    });
});
