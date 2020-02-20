//<![CDATA[
class Token {
    constructor(tokenInstance) {
        this.props = tokenInstance
    }

    redeemed() {
        if(this.props.redeemed === "1") {
            return "ticket-redeemed"
        } else {
            return "ticket"
        }
    }

    render() {
        return `<div class=${this.redeemed()}>
            <div class="content">
                    <div class="type-section">
                        <span class="type">
                            TYPE ${this.props.category}
                        </span>
                    </div>
            </div>
        </div>`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens) => {
    const currentTokenInstance = web3.tokens.data.currentInstance;
    document.getElementById('root').innerHTML = new Token(currentTokenInstance).render();
};
//]]>
