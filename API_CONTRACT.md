# API contract

Base `/api`. Authenticated calls require `Authorization: Bearer <JWT>`. JSON errors: `{ "error": { "message": "..." } }`. Validation 422, authentication 401, permission 403, missing resource 404, duplicates/invalid transitions 409, server errors 500.

| Method | Path | Access and body |
|---|---|---|
| GET | /health | Public |
| POST | /auth/register | full_name, email, password, role (student/lecturer/staff) |
| POST | /auth/login | email, password; returns token and user |
| GET | /auth/me | Authenticated |
| GET | /requests | Own requests; query search, status |
| POST | /requests | student/lecturer/staff; multipart title, category, description, building, room_number, priority (Low/Medium/High), optional image (JPG/PNG/WebP, max 5 MiB) |
| GET | /requests/:id | owner, assigned technician or admin; includes history and attachments |
| GET | /attachments/:id | same access as request; image bytes |
| GET | /admin/dashboard | admin; total, pending, in_progress, completed |
| GET | /admin/requests | admin; query search, status |
| GET | /admin/technicians | admin |
| PATCH | /admin/requests/:id/assign | admin; technician_id |
| PATCH | /admin/requests/:id/status | admin; status and optional note |
| GET | /technician/tasks | assigned technician |
| PATCH | /technician/tasks/:id/status | assigned technician; status and optional note |
| GET | /notifications | authenticated; own notifications |
| PATCH | /notifications/:id/read | notification owner |

Transitions: Pending → In Progress → Completed. Assignment and status changes create history and relevant notifications in a transaction.
