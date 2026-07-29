import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useServerFn } from "@tanstack/react-start";
import { createAppointment } from "@/lib/appointments.functions";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20, "Phone number is too long"),
  service_type: z.string().min(1, "Please select a service"),
  preferred_date: z.date({ required_error: "Please select a preferred date" }),
  preferred_time: z.string().min(1, "Please select a preferred time"),
  notes: z.string().max(1000, "Notes must be under 1000 characters").optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Mustak Bohari" },
      {
        name: "description",
        content:
          "Schedule a legal consultation with Advocate Mustak Bohari. Submit your preferred date, time, and service online.",
      },
      { property: "og:title", content: "Book an Appointment — Mustak Bohari" },
      {
        property: "og:description",
        content:
          "Schedule a legal consultation with Advocate Mustak Bohari. Submit your preferred date, time, and service online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/appointment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
});

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitAppointment = useServerFn(createAppointment);

  const form = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service_type: "",
      preferred_time: "",
      notes: "",
    },
  });

  async function onSubmit(data: AppointmentForm) {
    try {
      await submitAppointment({
        data: {
          ...data,
          preferred_date: format(data.preferred_date, "yyyy-MM-dd"),
        },
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Appointment submission failed", error);
    }
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Book an Appointment</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fill in the form below to request a consultation. We will review your request and confirm your appointment.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-lg border border-gold/20 bg-gold/5 p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Appointment Request Received</h2>
            <p className="mt-2 text-muted-foreground">
              Thank you for reaching out. We will contact you shortly to confirm your appointment details.
            </p>
            <Button
              className="mt-6 bg-gold text-gold-foreground hover:bg-gold-light"
              onClick={() => setSubmitted(false)}
            >
              Book Another Appointment
            </Button>
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                            <SelectItem value="Family Law">Family Law</SelectItem>
                            <SelectItem value="Bail Application">Bail Application</SelectItem>
                            <SelectItem value="Divorce & Custody">Divorce & Custody</SelectItem>
                            <SelectItem value="Legal Documentation">Legal Documentation</SelectItem>
                            <SelectItem value="General Consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="preferred_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date.getDay() === 0}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferred_time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                            <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                            <SelectItem value="02:00 PM">02:00 PM</SelectItem>
                            <SelectItem value="03:00 PM">03:00 PM</SelectItem>
                            <SelectItem value="04:00 PM">04:00 PM</SelectItem>
                            <SelectItem value="05:00 PM">05:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your legal matter or any specific requirements"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gold text-gold-foreground hover:bg-gold-light"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}
