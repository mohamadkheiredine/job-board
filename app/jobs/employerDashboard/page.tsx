"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { jobSchema, TjobSchema } from "@/app/models/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import onSubmitAction from "./formSubmit";
import ButtonSubmit from "./buttonSubmit";
import { useRouter } from "next/navigation";

export default function EmployerDashboardPage() {
  const [state, formAction] = useActionState(onSubmitAction, {
    success: false,
    message: "",
  });

  const router = useRouter();

  const form = useForm<TjobSchema>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      job_title: "",
      location: "",
      salary: "",
      slug: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      router.push("/jobs");
    }
  }, [state.success, router]);

  return (
    <Form {...form}>
      <form
        action={formAction}
        ref={formRef}
        className="space-y-8 flex flex-col items-center justify-center"
      >
        <div className="flex gap-2">
          <FormField
            name="job_title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job title" {...field} />
                </FormControl>
                <FormDescription>Your job title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job location" {...field} />
                </FormControl>
                <FormDescription>Job Location</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <FormField
            name="salary"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job salary" {...field} />
                </FormControl>
                <FormDescription>Job Salary</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <FormField
            name="slug"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Slug</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job slug" {...field} />
                </FormControl>
                <FormDescription>Job Slug is like job name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <ButtonSubmit />
      </form>
      {state.message && <p>{state.message}</p>}
    </Form>
  );
}
