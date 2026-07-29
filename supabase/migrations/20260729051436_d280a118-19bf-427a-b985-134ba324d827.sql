REVOKE INSERT ON public.appointments FROM anon;
DROP POLICY IF EXISTS "Allow public appointment submissions" ON public.appointments;