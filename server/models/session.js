class Session {
    constructor(sessionId, userId, expirationTime) {
        this.sessionId = sessionId;
        this.user = { email: null, id: userId };
        this.cart = [];
        this.order = null;
        this.expirationTime = expirationTime;
    }

    getSessionId() {
        return this.sessionId;
    }

    getUser() {
        return this.user;
    }

    setUserEmail(email) {
        this.user.email = email;
    }

    getCart() {
        return this.cart;
    }

    addToCart(item) {
        this.cart.push(item);
    }

    getOrder() {
        return this.order;
    }

    setOrder(order) {
        this.order = order;
    }

    getExpirationTime() {
        return this.expirationTime;
    }

    setExpirationTime(newExpirationTime) {
        this.expirationTime = newExpirationTime;
    }
}

module.exports = Session;