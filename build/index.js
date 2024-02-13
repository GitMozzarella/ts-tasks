const totalPrice = ({ price, isInstallment, months, discount }) => {
    if (discount) {
        let priceDiscount = (price / 100) * discount;
        let resultPrice = price - priceDiscount;
        return resultPrice / months;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12
});
console.log(price);
export {};
//# sourceMappingURL=index.js.map