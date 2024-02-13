interface ITotalPrice {
	price: number
	isInstallment: boolean
	months: number
	discount?: number
}

const totalPrice = ({
	price,
	isInstallment,
	months,
	discount
}: ITotalPrice) => {
	if (isInstallment) {
		if (discount) {
			let priceOfDiscount = (price / 100) * discount
			return (price - priceOfDiscount) / months
		} else {
			return price / months
		}
	} else {
		if (discount) {
			return price - discount
		}
	}
	return price
}

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12
})

const price2 = totalPrice({
	price: 60000,
	isInstallment: true,
	months: 12
})

console.log(price)
console.log(price2)
