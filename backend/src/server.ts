import express from "express";
import mongoose, { Schema, model, isValidObjectId } from "mongoose";
import cors from "cors";

const dbConnect = () => {
    const uri =
        "mongodb+srv://20225381:20225381@cluster0.oshkcau.mongodb.net/it-4409?retryWrites=true&w=majority";

    mongoose
        .connect(uri)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("DB Error:", err));
};

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tên không được để trống"],
        minlength: [2, "Tên phải có ít nhất 2 ký tự"],
    },
    age: {
        type: Number,
        required: [true, "Tuổi không được để trống"],
        min: [0, "Tuổi phải >= 0"],
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Email không hợp lệ"],
    },
    address: String,
});

const UserModel = mongoose.model("User", UserSchema);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    cors({
        origin: "*",
    }),
);
dbConnect();

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
    try {
        const { name, age, email } = req.body;

        if (!name || !age || !email) {
            return res.status(400).json("Missing required fields");
        }

        const existed = await UserModel.findOne({ email }).lean();
        if (existed) {
            return res.status(409).json("Email already exists");
        }
        const created = await UserModel.create(req.body);
        res.status(201).json(created);
    } catch (err: any) {
        res.status(500).json(err.message || "Create user error");
    }
});

userRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(400).json("Invalid userId");
        }
        const user = await UserModel.findById(id).lean();
        if (!user) {
            return res.status(404).json("User not found");
        }
        res.status(200).json(user);
    } catch (err: any) {
        res.status(500).json(err.message || "Get user error");
    }
});

userRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json("Invalid userId");
        }
        if (req.body.email) {
            return res.status(400).json("User not change email");
        }

        const updated = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return res.status(404).json("User not found");
        }
        res.status(200).json(updated);
    } catch (err: any) {
        res.status(500).json(err.message || "Update user error");
    }
});

userRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json("Invalid userId");
        }
        const deleted = await UserModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json("User not found");
        }
        res.status(200).json("User deleted");
    } catch (err: any) {
        res.status(500).json(err.message || "Delete user error");
    }
});

userRouter.get("/", async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const name = req.query?.name;
        const limit = 10;
        const offset = (page - 1) * limit;

        const match: any = {};
        if (name) {
            match.name = { $regex: name, $options: "i" };
        }

        const pipeline = [{ $skip: offset }, { $limit: limit }, { $match: match }];

        const [users, count] = await Promise.all([
            UserModel.aggregate(pipeline),
            UserModel.countDocuments(match),
        ]);

        return res.status(200).json({
            data: users.map(({ __v, ...rest }) => rest),
            total: Math.ceil(count / limit),
            page,
            limit,
        });
    } catch (err) {
        console.log("get user error:", err);
        return res.status(500).json("Internal server error");
    }
});

app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("Server ON"));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
