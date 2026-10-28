# Test report

2026-10-28, Node v24.19.0, Windows.

- PASS `npm run setup`: generated local secret and initialized/seeded SQLite.
- PASS `npm test`: 8 tests (one parent and seven subtests), 0 failures. Covers registration, duplicate email, login, invalid/missing token, creation with image, validation, ownership/image access, dashboard, assignment, invalid technician, unauthorized actions, sequential status updates, task list, history, notifications, foreign key/unique constraints, rollback, seed idempotence and reopening. Uses a temporary database.
- FAIL `npm run build`: Windows Application Control blocked loading `rollup.win32-x64-msvc.node` (`ERR_DLOPEN_FAILED`). No build produced. Policy was not bypassed.
- NOT RUN browser E2E, responsive visual QA, production `npm start` flow: frontend toolchain blocked. API workflow tests do not establish browser functionality.

## Manual browser checklist on an environment that permits Vite
1. Run setup and dev; log in as student1; create a request with an image, verify Pending; log out.
2. Log in as admin, locate it and assign tech1; log out.
3. Log in as tech1, change status to In Progress then Completed; log out.
4. Log in as student1; inspect Completed, status history and notifications; mark one read.
5. Reload and confirm persistence. Check access as student2 and tech2 and inspect mobile layout.

Run the build and browser checklist before publishing.
