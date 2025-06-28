import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://Vishal%27s%20First%20Postgre%20Project_owner:npg_GMs34FTHfpli@ep-delicate-mouse-a8zu08rp-pooler.eastus2.azure.neon.tech/Vishal%27s%20First%20Postgre%20Project?sslmode=require&channel_binding=require",
});

async function createUsersTable() {
  await client.connect();
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

async function getUserData(user_id: string) {
  try {
    const query = `SELECT users.id, users.email, users.username, addresses.user_id, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users 
    JOIN addresses 
    ON users.id = addresses.user_id 
    WHERE users.id = $1`;
    const res = await client.query(query, [user_id]);
    console.log({ Result: res.rows, total_count: res.rowCount });
  } catch (error) {
    console.error(error);
  }
}

getUserData("1");
