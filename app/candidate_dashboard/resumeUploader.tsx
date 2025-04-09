'use client';
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { fileSchema, TfileSchema } from "../models/formSchema"; // Adjust path as needed
import { z } from "zod";
import Image from "next/image";

interface PickedFile extends TfileSchema {
  preview: string; // This will store the file preview (data URL)
}

export default function ResumeUploader() {
  const [pickedFile, setPickedFile] = useState<PickedFile | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    fileInput.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedFile(null);
      return;
    }

    try {
      const validatedFile = fileSchema.parse({
        name: file.name,
        size: file.size,
        type: file.type,
      });

      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setPickedFile({
          ...validatedFile,
          preview: e.target?.result as string,
        });
      };
      fileReader.readAsDataURL(file);
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.errors.map(e => e.message).join(", "));
      }
      setPickedFile(null);
    }
  };

  return (
    <div>
      <label htmlFor="resume">Your Resume</label>
      <div className="flex sm:items-start gap-6 mb-4 flex-col sm:flex-row">
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedFile && <p className="m-0 p-4">No Resume Entered Yet.</p>}
          {pickedFile && pickedFile.type === 'application/pdf' && (
            <p>Selected PDF: {pickedFile.name}</p>
          )}
          {pickedFile && pickedFile.type.startsWith('image/') && (
            <Image
            src={pickedFile.preview}
            alt="Preview"
            className="w-full h-full object-cover"
            width={160}
            height={160}
          />
          )}
        </div>

        <input 
          type="file" 
          className="hidden"
          name="resume"
          accept="application/pdf, image/png, image/jpeg" // Fixed typo here
          ref={fileInput}
          onChange={handleFileChange}
        />

        <Button
          className="justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer w-fit"
          type="button"
          onClick={handlePickClick}
        >
          Pick your Resume
        </Button>
      </div>
    </div>
  );
}