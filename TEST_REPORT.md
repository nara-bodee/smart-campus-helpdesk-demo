# Test report

2026-10-28, Node v24.19.0, Windows.

- PASS `npm run setup`: generated local secret and initialized/seeded SQLite.
- PASS `npm test`: 8 tests (one parent and seven subtests), 0 failures. Covers registration, duplicate email, login, invalid/missing token, creation with image, validation, ownership/image access, dashboard, assignment, invalid technician, unauthorized actions, sequential status updates, task list, history, notifications, foreign key/unique constraints, rollback, seed idempotence and reopening. Uses a temporary database.
- PASS `npm run build`: Vite build completed using @rollup/wasm-node 4.65.1. React Router emitted warnings that module-level `use client` directives were ignored.
- PASS `npm run dev -w frontend`: Vite started and returned HTTP 200 for the index and transformed App.jsx.
- PASS `npm rebuild esbuild --foreground-scripts` and esbuild transform: postinstall and native executable worked on the test machine. Windows Smart App Control remained enabled.
- NOT RUN browser E2E, responsive visual QA, production `npm start` flow. API workflow tests and HTTP checks do not establish complete browser functionality.

## Manual browser checklist on an environment that permits Vite
1. Run setup and dev; log in as student1; create a request with an image, verify Pending; log out.
2. Log in as admin, locate it and assign tech1; log out.
3. Log in as tech1, change status to In Progress then Completed; log out.
4. Log in as student1; inspect Completed, status history and notifications; mark one read.
5. Reload and confirm persistence. Check access as student2 and tech2 and inspect mobile layout.

Run the browser checklist to validate the full UI workflow.
