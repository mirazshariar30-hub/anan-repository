/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, customer name)
  - `phone` (text, contact phone)
  - `reservation_date` (date, requested date)
  - `reservation_time` (text, requested time slot)
  - `guests` (int, number of guests)
  - `notes` (text, optional requests/remarks)
  - `locale` (text, submission language ja/en)
  - `created_at` (timestamptz, defaults to now())
2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated INSERT only (public submission form).
  No SELECT/UPDATE/DELETE for anon — staff manage rows out-of-band.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  guests integer NOT NULL CHECK (guests > 0 AND guests <= 20),
  notes text,
  locale text NOT NULL DEFAULT 'ja' CHECK (locale IN ('ja', 'en')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
