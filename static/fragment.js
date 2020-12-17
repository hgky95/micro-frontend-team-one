class OneWallet extends HTMLElement {
    total = 10_000_000;

    connectedCallback() {
        this.currentAmount = this.total;
        this.render();

        window.addEventListener("team-three-update-total", (e) => {
            var amount = e.detail.amount;
            this.currentAmount = this.total - amount;
            this.render();
            this.notifyCurrentAmount();
        });

    }

    render() {
        let formattedCurrentAmount = parseInt(this.currentAmount).toLocaleString();
        this.innerHTML = `<div class="current-amount"> $${formattedCurrentAmount} </div>`;
    }

    notifyCurrentAmount() {
        this.dispatchEvent(
          new CustomEvent("team-one-current-amount", {
              bubbles: true,
              detail: { 'amount': this.currentAmount }
          })
        )
      }

}

window.customElements.define("one-wallet", OneWallet);


class OneBanner extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="banner">
                <img alt="Image of Bill Gates" src="images/billgates.jpg" class="banner-image center">
                <h3 class="banner-head">
                    Spend Bill Gates's Money
                </h3>
            </div>`;
    }
}

window.customElements.define("one-banner", OneBanner);
