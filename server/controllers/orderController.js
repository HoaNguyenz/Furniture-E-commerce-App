const Order = require('../models/Order')


module.exports = {
    getUserOrder: async(req, res) => {
        const userId = req.params.id;

        try {
            const userOrder = await Order.find({userId}).populate({
                path: "productId",
                select: "-description -product_location"
            }).exec();

            res.status(200).json(userOrder);
          
        } catch (error) {
            res.status(500).json(error);
        }
    }
}