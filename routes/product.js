// 1.
import express from "express"
const router = express.Router()
// 3.

// product와 관련된 CRUD API를 생성

// product를 불러오는 API
router.get("/", (req, res) => {
    res.json({
        msg : "get all products"
    })
})

// product를 생성해주는 API
router.post("/create", (req, res) => {
    res.json({
        msg : "create product"
    })
})

// product를 수정해주는 API
router.put("/", (req, res) => {
    res.json({
        msg : "update product"
    })
})

// product를 삭제해주는 API
router.delete("/delete", (req, res) => {
    res.json({
        msg : "deleted product"
    })
})
// 2.
// module.exports = router
export default router