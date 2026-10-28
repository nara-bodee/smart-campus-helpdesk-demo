# Database schema

Migration `api/migrations/001_schema.sql`; SQLite file `api/data/helpdesk.sqlite`. Foreign keys enabled on every connection; seed is idempotent.

- users: id, full_name, unique email, password_hash, role, created_at.
- service_requests: id, unique request_number, requester_id, title, category, description, building, room_number, priority, status, assigned_technician_id, created_at, updated_at.
- request_attachments: id, request_id, filename, file_path, mime_type, file_size.
- assignments: id, request_id, technician_id, assigned_by, assigned_at.
- status_history: id, request_id, old_status, new_status, changed_by, note, changed_at.
- notifications: id, user_id, request_id, message, is_read, created_at.

References use foreign keys, with CHECK constraints and indexes for ownership, technician, history and notifications. The schema_migrations table records migration 001.
