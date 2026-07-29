CREATE POLICY "Service role manages appointments"
ON public.appointments
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);