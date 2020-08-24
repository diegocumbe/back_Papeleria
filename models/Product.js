var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({

    sku: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, default: 'Disponible' },
    image: { type: String, required: false },
    precio: { type: String, required: true }

}, { collection: 'products' });

module.exports = mongoose.model('Product', productSchema);