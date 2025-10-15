// services/PortfolioService.js - Contoh struktur tabel untuk Supabase

/*
Struktur Tabel yang Dibutuhkan di Supabase:

1. projects:
  - id (int4, Primary Key, auto increment)
  - title (varchar)
  - description (text)
  - image (varchar)
  - tech (text[]) - array dari teknologi
  - link (varchar)
  - github (varchar)
  - created_at (timestamp)
  - updated_at (timestamp)

2. skills:
  - id (int4, Primary Key, auto increment)
  - category (varchar) - kategori seperti 'Frontend', 'Backend', dll
  - name (varchar) - nama skill
  - level (int2) - level dari 0-100
  - created_at (timestamp)
  - updated_at (timestamp)

3. about:
  - id (int4, Primary Key, auto increment)
  - section_title (varchar) - seperti 'Tentang Saya', 'Perjalanan Saya'
  - content (text) - konten bagian tersebut
  - order_index (int4) - urutan tampil
  - created_at (timestamp)
  - updated_at (timestamp)

4. timeline:
  - id (int4, Primary Key, auto increment)
  - year (varchar)
  - title (varchar)
  - description (text)
  - about_id (int4) - foreign key ke tabel about
  - order_index (int4) - urutan tampil
  - created_at (timestamp)
  - updated_at (timestamp)
*/