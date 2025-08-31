import express from "express"


const app = express()
const router = express.Router()

// for user

router.get("/logs", (req, res) => {
	res.send({
		'message': 'ok'
	})
})

router.post("/logs", () => {})
router.get("/logs/:id", () => {})
router.get("/logs/export", () => {})
router.get("/logs/stats", () => {})
router.post("/logs/bulk", () => {})
router.delete("/logs/cleanup", () => {})
// router.ws

// admin only

router.get("/tenants", () => {})
router.post("/tenants", () => {})

app.get("/", (_, res) => {
	res.status(200).send({
		message: "Backend app is running"
	})
})
app.use("/api/v1", router)
app.listen(3000, () => {
	console.log("app running")
})
