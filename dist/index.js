"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://Vishal%27s%20First%20Postgre%20Project_owner:npg_GMs34FTHfpli@ep-delicate-mouse-a8zu08rp-pooler.eastus2.azure.neon.tech/Vishal%27s%20First%20Postgre%20Project?sslmode=require&channel_binding=require",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        //   const result = await client.query(`
        //         CREATE TABLE users (
        //             id SERIAL PRIMARY KEY,
        //             username VARCHAR(50) UNIQUE NOT NULL,
        //             email VARCHAR(255) UNIQUE NOT NULL,
        //             password VARCHAR(255) NOT NULL,
        //             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        //         );
        //     `);
        //   console.log(result);
        //   const result = await client.query(`
        //               CREATE TABLE addresses (
        //                 id SERIAL PRIMARY KEY,
        //                 user_id INTEGER NOT NULL,
        //                 city VARCHAR(100) NOT NULL,
        //                 country VARCHAR(100) NOT NULL,
        //                 street VARCHAR(255) NOT NULL,
        //                 pincode VARCHAR(20),
        //                 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        //                 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        //             );
        //     `);
        //   console.log(result);
    });
}
createUsersTable();
// async function insertAddressData() {
//   try {
//     const insetQuery =
//       "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');";
//     const res = await client.query(insetQuery);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// }
// insertAddressData();
function getUserData(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `SELECT users.id, users.email, users.username, addresses.user_id, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users 
    JOIN addresses 
    ON users.id = addresses.user_id 
    WHERE users.id = $1`;
            const res = yield client.query(query, [user_id]);
            console.log({ Result: res.rows, total_count: res.rowCount });
        }
        catch (error) {
            console.error(error);
        }
    });
}
getUserData("1");
