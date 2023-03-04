import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg : "get all order"
    })
})

router.post("/create", (req, res) => {

    const newOrder = {
        title: req.body.orderTitle,
        qty: req.body.orderQty,
        product: req.body.orderProduct
    }
    res.json({

        msg : "create order",
        orderInfo : newOrder
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg : "update order"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg : "deleted order"
    })
})

// module.exports = router
export default router