const fakeProducts = {	
    airpods: { name: "Airpods", price: "199", img: "airpods.jpg" },	
    shoe: { name: "Air Jordans", price: "125", img: "air-jordans.jpg" },	
    iphone: { name: "Smartphone", price: "699", img: "smartphone.jpg" },	
    book: { name: "Book", price: "15", img: "book.jpg" },	
    bike: { name: "Bike", price: "800", img: "bike.jpg" },	
    videoGame: { name: "Gaming Console", price: "299", img: "video-game.jpg" }	
}

// Init sandbox products
var pricingTables = document.getElementById("pricing-tables");
for (const key in fakeProducts) {
    if (fakeProducts.hasOwnProperty(key)) {
        const element = fakeProducts[key];
        pricingTables.innerHTML += `
            <div class="pure-u-1 pure-u-md-1-3">
                <div class="pricing-table dummy-product stripe">
                    <div class="pricing-table-header">
                        <span class="pricing-table-price">Dummy ${element.name} ${element.price}$</span>
                    </div>
                    <div class="pricing-table-footer">
                        <button class="sell-button pure-button stripe" data-product="${key}">Sell</button>
                        <button class="buy-button pure-button pure-button-primary stripe" data-product="${key}" data-price="${element.price}">Buy</button>
                    </div>
                </div>
            </div>`;
    }
}

// Simulate case team 3 update receipt total - done
document.getElementsByClassName('dummy-total-1000000')[0]?.addEventListener("click", () => {
    this.dispatchEvent(
      new CustomEvent("team-three-update-total", {
          bubbles: true,
          detail: { 'amount': 1000000 }
      })
    )
});

document.getElementsByClassName('dummy-total-9999999')[0]?.addEventListener("click", () => {
    /* TODO: Notify event total is changed to 9999999 to test current amount */
    this.dispatchEvent(
        new CustomEvent("team-three-update-total", {
            bubbles: true,
            detail: { 'amount': 9999999 }
        })
      )
});

// Simulate event receiver "current amount changes"
window.addEventListener("team-one-current-amount", (e) => {
    /* TODO: Verify that received event contain correct amount. */
    console.log("Received")
});

