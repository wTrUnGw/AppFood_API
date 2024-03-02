import mysql from "mysql2";
import sequelize from "../models/connect.js";
import initModels from "../models/init-model.js";
import { where } from "sequelize";

// MODEL SEQUELIZE
let model = initModels(sequelize);

// CHUỖI KẾT NỐI
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3307",
  database: "db_youtube",
});

// LẤY DANH SÁCH NHÀ HÀNG
const getappfood = async (req, res) => {
  try {
    let data = await model.appfood.findAll();

    res.status(200).send(data);
  } catch {
    console.log("lỖI");
  }
};

// LIKE NHÀ HÀNG
const likeappfood = async (req, res) => {
  try {
    // let { appfoodId } = req.params;
    let { user_id, appfoodId } = req.body;

    await model.like_res.create({
      res_id: appfoodId,
      user_id: user_id,
      date_like: new Date(),
    });

    res.status(201).json({ message: "Like success" });
  } catch {
    console.log("lỖI");
  }
};

// UNLIKE NHÀ HÀNG
const unlikeappfood = async (req, res) => {
  // đồng bộ => try catch, async await
  try {
    let { user_id, appfoodId } = req.body;
    // Kiểm tra xem đã có lượt like từ người dùng cho bài viết này chưa
    let likeRecord = await model.like_res.findOne({
      where: {
        res_id: appfoodId,
        user_id: user_id,
      },
    });

    if (likeRecord) {
      // Nếu đã có lượt like, xóa lượt like khỏi cơ sở dữ liệu
      await model.like_res.destroy({
        where: {
          res_id: appfoodId,
          user_id: user_id,
        },
      });

      res.status(201).json({ message: "Unlike success" });
    } else {
      res.status(404).json({ error: "Like not found" });
    }
    res.status(200).send(likeRecord);
  } catch {
    console.log("lỖI");
  }
};

// LẤY LIKE CỦA NHÀ HÀNG
const getLikeOfappfood = async (req, res) => {
  try {
    let { appfoodId } = req.body;

    let appfood = await model.like_res.findAndCountAll({
      where: {
        res_id: appfoodId,
      },
    });

    console.log(appfood.count);

    res.status(200).send(`Số lượng like của nhà hàng: ${appfood.count}`);
  } catch {
    console.log("lỖI");
  }
};

// LẤY NHỮNG ĐÁNH GIÁ CỦA NHÀ HÀNG
const getRateappfood = async (req, res) => {
  try {
    let { appfoodId } = req.body;

    let data = await model.rate_res.findAll({
      where: {
        res_id: appfoodId,
      },
    });

    res.status(200).send(data);
  } catch {
    console.log("lỖI");
  }
};

// LẤY NHỮNG ĐÁNH GIÁ CỦA USER
const getUserRate = async (req, res) => {
  try {
    let { user_id } = req.body;

    let data = await model.rate_res.findAll({
      where: {
        user_id: user_id,
      },
    });

    res.status(200).send(data);
  } catch {
    console.log("lỖI");
  }
};

// ĐÁNH GIÁ NHÀ HÀNG
const rateappfood = async (req, res) => {
  try {
    let { user_id, appfoodId, amount } = req.body;

    await model.rate_res.create({
      res_id: appfoodId,
      user_id: user_id,
      date_rate: new Date(),
      amount: amount,
    });

    res.status(201).json({ message: "Rate success" });
  } catch {
    console.log("lỖI");
  }
};

// ORDER MÓN ĂN
const order = async (req, res) => {
  try {
    let { user_id, food_id, amount, order_code, arr_sub_id } = req.body;

    await model.orders.create({
      user_id: user_id,
      food_id: food_id,
      amount: amount,
      order_code: order_code,
      arr_sub_id: arr_sub_id,
    });

    res.status(201).json({ message: "Order success" });
  } catch {
    console.log("lỖI");
  }
};

// EXPORT
export {
  getappfood,
  likeappfood,
  unlikeappfood,
  getLikeOfappfood,
  getRateappfood,
  rateappfood,
  getUserRate,
  order,
};
