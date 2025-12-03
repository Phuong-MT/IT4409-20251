const users = [
  { "name": "Nguyen Van An", "age": 28, "email": "an.nguyen@example.com", "address": "Ha Noi" },
  { "name": "Tran Thi Bich", "age": 22, "email": "bich.tran@example.com", "address": "Da Nang" },
  { "name": "Le Minh Khoa", "age": 31, "email": "khoa.le@example.com", "address": "Ho Chi Minh" },
  { "name": "Pham Hoang Nam", "age": 19, "email": "nam.pham@example.com", "address": "Hai Phong" },
  { "name": "Vo Thi My Duyen", "age": 24, "email": "duyen.vo@example.com", "address": "Can Tho" },
  { "name": "Nguyen Hoang Bao", "age": 35, "email": "bao.nguyen@example.com", "address": "Hue" },
  { "name": "Phan Quoc Tuan", "age": 27, "email": "tuan.phan@example.com", "address": "Quang Nam" },
  { "name": "Bui Thanh Nhan", "age": 30, "email": "nhan.bui@example.com", "address": "Nha Trang" },
  { "name": "Do Thi Lan", "age": 26, "email": "lan.do@example.com", "address": "Ha Nam" },
  { "name": "Truong Minh Hieu", "age": 21, "email": "hieu.truong@example.com", "address": "Binh Duong" },

  { "name": "Dang Thuy Tien", "age": 23, "email": "tien.dang@example.com", "address": "Dak Lak" },
  { "name": "Huynh Tan Dat", "age": 29, "email": "dat.huynh@example.com", "address": "Long An" },
  { "name": "Nguyen Thi Quy", "age": 33, "email": "quy.nguyen@example.com", "address": "Vinh" },
  { "name": "Lam Gia Bao", "age": 20, "email": "giabao.lam@example.com", "address": "Quang Ngai" },
  { "name": "Trinh Hong Nhung", "age": 34, "email": "nhung.trinh@example.com", "address": "Ha Giang" },
  { "name": "Mai Duc Thang", "age": 25, "email": "thang.mai@example.com", "address": "Thanh Hoa" },
  { "name": "Vu Thi Yen", "age": 32, "email": "yen.vu@example.com", "address": "Thai Binh" },
  { "name": "Hoang Phuc Loc", "age": 18, "email": "loc.hoang@example.com", "address": "Tay Ninh" },
  { "name": "Nguyen Nhat Khanh", "age": 27, "email": "khanh.nguyen@example.com", "address": "Phu Tho" },
  { "name": "Le Anh Thu", "age": 24, "email": "thu.le@example.com", "address": "Kon Tum" },

  { "name": "Tran Bao Chau", "age": 30, "email": "chau.tran@example.com", "address": "Dong Nai" },
  { "name": "Nguyen Hoai Nam", "age": 28, "email": "hoainam.nguyen@example.com", "address": "Soc Trang" },
  { "name": "Pham Thi Kim", "age": 22, "email": "kim.pham@example.com", "address": "Bac Giang" },
  { "name": "Bui Minh Duc", "age": 36, "email": "duc.bui@example.com", "address": "Yen Bai" },
  { "name": "Ho Thi Ngoc Anh", "age": 21, "email": "anh.ho@example.com", "address": "Cao Bang" }
]


const main= async()=>{
        try{
            const [userPosts] = await Promise.all(users.map((user)=>{
                fetch("http://localhost:3000/api/user",{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
            }))
            console.log("insert db done")
        }catch(err){
            console.log("insert db faild: ", err);
        }
}
main();