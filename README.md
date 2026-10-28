# Smart Campus Helpdesk — Local Demo

ต้นแบบสำหรับทดสอบ Sprint 1 และแนวทาง Sprint 2 ไม่ใช่หลักฐานว่า Term Project จริงเสร็จสมบูรณ์ ระบบใช้ข้อมูลสมมติและทำงานบน localhost

ความสามารถ: สมัครและเข้าสู่ระบบ แจ้งปัญหาพร้อมภาพ ดูคำร้อง ผู้ดูแลมอบหมายช่าง ช่างเปลี่ยนสถานะ Pending → In Progress → Completed และดูการแจ้งเตือน

## สถาปัตยกรรม
React + Vite → API client → Express routes/controllers → SQLite prepared statements → JSON กลับไป frontend. ใช้ React Router, JWT, bcryptjs, Multer และ SQLite ผ่าน node:sqlite (Node.js 22.13+). การตรวจสิทธิ์และธุรกรรมอยู่ฝั่ง API. โค้ด route/controller/service/repository รวมอยู่ใน `api/src/app.js` และฐานข้อมูลอยู่ใน `api/src/database/` ยังไม่ได้แยกครบทุก layer ตามโครงสร้างที่เสนอ

- `api/migrations/`: SQL schema; `api/tests/`: tests; `api/data/`, `api/uploads/`: runtime data
- `frontend/src/`: React UI และ API client; `scripts/setup.js`: เตรียมฐานข้อมูล

## ติดตั้งและรัน
```sh
npm install
npm run setup
npm run dev
```
เปิด URL ของ Vite ที่ terminal แสดง (ปกติ http://127.0.0.1:5173). Setup สร้าง `api/.env` พร้อม secret แบบสุ่มเฉพาะเมื่อยังไม่มี และ seed โดยไม่ล้างข้อมูลเดิม. ห้ามเผยแพร่ `.env`. Vite proxy `/api` ไปยัง localhost:3000.

โหมด server เดียว: `npm run build` แล้ว `npm start` เปิด http://127.0.0.1:3000. Server bind เฉพาะ loopback.

## บัญชีสาธิต
รหัสผ่านทุกบัญชี `Demo1234!` สำหรับข้อมูลสาธิตเท่านั้น

| บทบาท | อีเมล |
|---|---|
| Student | student1@demo.local, student2@demo.local |
| Lecturer | lecturer@demo.local |
| Staff | staff@demo.local |
| Technician | tech1@demo.local, tech2@demo.local |
| Admin | admin@demo.local |

## ทดสอบและรีเซ็ต
`npm test` ใช้ฐานข้อมูลและโฟลเดอร์ชั่วคราว ไม่ล้างข้อมูล runtime. `npm run reset -w api` ลบฐานข้อมูล demo แล้วสร้างใหม่ เฉพาะ development ไม่มี public reset API; ไฟล์ภาพเก่าใน uploads ไม่ถูกลบอัตโนมัติ.

ตาราง users, service_requests, request_attachments, assignments, status_history, notifications ดู [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md); endpoints ดู [API_CONTRACT.md](API_CONTRACT.md).

## ข้อจำกัด
ใช้ @rollup/wasm-node แทน native Rollup เพื่อให้ build บนเครื่องทดสอบที่เปิด Windows Smart App Control ได้; ยังไม่ได้ทดสอบ browser E2E ดู [TEST_REPORT.md](TEST_REPORT.md). Token เก็บใน localStorage และ logout ลบ token ใน browser โดยไม่เพิกถอนที่ server. รูปตรวจ signature เบื้องต้นและขนาด ไม่ใช่การ decode หรือสแกนมัลแวร์. ไม่มี WebSocket, rate limiting, email หรือกู้รหัสผ่าน. ไม่ใช่ระบบ production.
