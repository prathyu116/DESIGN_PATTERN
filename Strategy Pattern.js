
Strategy Pattern says it "defines a family of functionality, encapsulates each one, and makes them interchangeable". 
The Strategy Pattern is also known as the Policy



function Flipkart(pkg)
{
  this.calculate = () =>
  {
    // Flipkart calculations ...
    return 2.45
  }
}

function Aamazon(pkg)
{
  this.calculate = () =>
  {
    // Aamazon calculations ...
    return 1.56
  }
}

function Meesho(pkg)
{
  this.calculate = () =>
  {
    // Meesho calculations ...
    return 4.5
  }
}

function Shipping()
{
  this.company = ''
  this.setStrategy = company =>
  {
    this.company = company
  }
  this.calculate = pkg => {
    return this.company.calculate(pkg)
  }
}

const fedex = new Flipkart()
const ups = new Aamazon()
const usps = new Meesho()
const shipping = new Shipping()
const pkg = { from: "Alabama", to: "Georgia", weight: 1.56 } // Dummy package

shipping.setStrategy(fedex)
console.log("Flipkart: " + shipping.calculate(pkg))

shipping.setStrategy(ups)
console.log("Aamazon: " + shipping.calculate(pkg))

shipping.setStrategy(usps)
console.log("Meesho: " + shipping.calculate(pkg))
