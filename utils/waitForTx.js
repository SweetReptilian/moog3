export default async function waitForTx(tableland, txnHash) {
    // Try to get the receipt from the tx hash
    // The value is 'undefined' while the create table tx is in flux
    let table = await tableland.receipt(txnHash);
    let tries = 0;
    // Set some Promise & timeout to allow for retry logic until 'table' exists
    while (!table && tries < 5) {
        await new Promise((resolve) => setTimeout(resolve, 1500 + tries * 500));
        table = await tableland.receipt(txnHash);
        tries++;
    }
    // Return a boolean to represent the tx confirmation status after the retry logic has passed
    return table;
}