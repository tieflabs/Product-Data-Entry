const form = document.getElementById('product-form');
const downloadBtn = document.getElementById('download-btn');
let products = [];

// Add product to array and clear form
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const quantity = parseInt(e.target.elements.quantity.value);
    const price = parseFloat(e.target.elements.price.value);
    if (name && quantity && price) {
        products.push({ name, quantity, price });
        form.reset();
    }
});

// Download data as CSV file
downloadBtn.addEventListener('click', () => {
    if (products.length) {
        const csv = products.map(p => `${p.name},${p.quantity},${p.price}`).join('\n');
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        downloadLink.download = 'product_data.csv';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
});