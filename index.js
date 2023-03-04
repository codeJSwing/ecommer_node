import express from "express"
const app = express()

import productRouter from "./routes/product.js"
import orderRouter from "./routes/order.js"
import bodyParser from "body-parser";

// setting
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// router
app.use("/product", productRouter)
app.use("/order", orderRouter)

const port = 4444 //문
app.listen(port, console.log("서버 started"))



// 코드 빌드 순서
// 1. 위에서 아래
// 2. 괄호는 함수들의 모음을 뜻한다.
// 3. '.' 은 하위 메소드를 호출한다.
// 4. equal을 기준으로 왼쪽에서 오른쪽으로 해석
// 5. , 는 그리고로 해석한다.