'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQ() {
    const faqItems = [
    {
        id: 'medilogic-item-1',
        question: 'Is my personal health information secure?',
        answer: 'Yes. We use industry-standard encryption and security protocols to protect all patient data. Your information is confidential and is only accessible by you and your consulting doctor.',
    },
    {
        id: 'medilogic-item-2',
        question: 'How does an online consultation work?',
        answer: 'After you book an appointment, you will receive a secure link for a video call. At the scheduled time, simply click the link to connect with your doctor and begin your consultation.',
    },
    {
        id: 'medilogic-item-3',
        question: 'Are the prescriptions provided online valid?',
        answer: 'Yes. All prescriptions issued through Medilogic are from licensed and certified doctors. They are legally valid and can be used to purchase medications at any pharmacy.',
    },
    {
        id: 'medilogic-item-4',
        question: 'How do the dosage reminders work?',
        answer: 'You can set custom reminders for each of your medications directly in the app. Medilogic will send you notifications to ensure you take your medicine at the correct time, helping you stay on track with your treatment plan.',
    },
    {
        id: 'medilogic-item-5',
        question: 'What types of doctors are available for consultation?',
        answer: 'Medilogic has a wide network of doctors specializing in various fields, including general medicine, pediatrics, dermatology, and more. You can browse doctor profiles to find the right specialist for your needs.',
    },
];
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div className="group" key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr
                                    className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    
                </div>
            </div>
        </section>
    );
}
