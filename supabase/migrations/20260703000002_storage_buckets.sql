-- Englify — Phase 2.1: Storage buckets.
-- Buckets are private by default (least privilege). Objects are namespaced by
-- user id: the first path segment must equal auth.uid()
-- (e.g. avatars/<user_id>/photo.png). Upload UI arrives in a later phase.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars', 'avatars', true, 2097152,
   array['image/png', 'image/jpeg', 'image/webp', 'image/gif']),
  ('portfolio', 'portfolio', false, 10485760, null),
  ('speaking-recordings', 'speaking-recordings', false, 26214400,
   array['audio/webm', 'audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/ogg']),
  ('certificates', 'certificates', false, 5242880,
   array['application/pdf', 'image/png', 'image/jpeg'])
on conflict (id) do nothing;

-- Avatars: publicly readable, owner-managed.
create policy "Avatar images are publicly readable"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Users can upload their own avatar"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can update their own avatar"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can delete their own avatar"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

-- Private buckets: owner-only access.
create policy "Users can read their own private files"
  on storage.objects for select
  to authenticated
  using (
    bucket_id in ('portfolio', 'speaking-recordings', 'certificates')
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can upload their own private files"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id in ('portfolio', 'speaking-recordings', 'certificates')
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can update their own private files"
  on storage.objects for update
  to authenticated
  using (
    bucket_id in ('portfolio', 'speaking-recordings', 'certificates')
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can delete their own private files"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id in ('portfolio', 'speaking-recordings', 'certificates')
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
