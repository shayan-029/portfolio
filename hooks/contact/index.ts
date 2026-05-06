import { useEffect, useState } from "react";
import { Resend } from "resend";

const defaultValue = {
    name: '',
    phone: '',
    email: '',
    service: '',
    detail: ''
}

const options = [
    { id: '1', value: 'Website Development', label: 'Website Development' },
    { id: '2', value: 'Full Stack Web App', label: 'Full Stack Web App' },
    { id: '3', value: 'SEO & Digital Marketing', label: 'SEO & Digital Marketing' },
    { id: '4', value: 'Google My Business Setup', label: 'Google My Business Setup' },
    { id: '5', value: 'Complete Digital Package', label: 'Complete Digital Package' },
];

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export const useContact = () => {

    const [values, setValues] = useState(defaultValue);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
       
    await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
        setValues(defaultValue);
        setIsSent(true);

    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setValues((pre) => ({ ...pre, [name]: value }))
    }

    useEffect(() => {
        setTimeout(() => {
            setIsSent(false);
        }, 3000);
    }, [isSent])

    return {
        options,
        values,
        handleChange,
        handleSubmit,
        isSent
    }
}