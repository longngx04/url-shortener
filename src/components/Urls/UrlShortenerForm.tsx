"use client";

import { Form, FormItem, FormControl, FormField, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { urlFormData } from "../../lib/type";
import { urlSchema } from "../../lib/type";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export function UrlShortenerForm(){

    const form = useForm<urlFormData>({
        resolver: zodResolver(urlSchema),
        defaultValues: {
            url: "",
        },
    });
    return (
        <>
        <div className="w-full max-w-2xl mx-auto">
            <Form {...form}>
                <form className="space-y-4">              
                    <div className="flex flex-col sm:flex-row gap-2">                                   
                      <FormField
                      control = {form.control}
                      name = "url"
                      render={({field}) => (
                        <FormItem className="flex-1">
                            <FormControl>
                            <Input
                            placeholder="Paste your long url here"
                            {...field}
                            disabled = {false}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                      )}
                      />
                      <Button type="submit" disabled ={false}>
                        Shorten your link</Button>  
                    </div>
                </form>
            </Form>
        </div>
        </>
    );
}