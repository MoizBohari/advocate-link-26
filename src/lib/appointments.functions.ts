import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  service_type: z.string().min(1).max(100),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  preferred_time: z.string().min(1).max(20),
  notes: z.string().max(1000).optional(),
});

export const createAppointment = createServerFn({ method: "POST" })
  .validator((data: unknown) => appointmentSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("appointments").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service_type: data.service_type,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      notes: data.notes,
    });

    if (error) {
      console.error("Failed to insert appointment", error);
      throw new Error("Failed to submit appointment. Please try again.");
    }

    return { success: true };
  });
