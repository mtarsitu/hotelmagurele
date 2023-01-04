function cursorLoading() {
    document.body.className = 'loading';
}

function removeCursorLoading() {
    document.body.className = 'default';
}

export { cursorLoading, removeCursorLoading };