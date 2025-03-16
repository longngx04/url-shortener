import { UrlShortenerForm } from "@/components/Urls/UrlShortenerForm";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">ShortyUrl</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Paste your link here</p>

        <UrlShortenerForm/>
      </div>
    </div>
  );
}
