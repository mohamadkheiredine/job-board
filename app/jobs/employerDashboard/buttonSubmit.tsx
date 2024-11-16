import { Button } from "@/app/components/ui/button";
import { useFormStatus } from "react-dom";


export default function ButtonSubmit() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-indigo-500">{pending ? 'Adding...' : 'Add Job'}</Button>
  )
}