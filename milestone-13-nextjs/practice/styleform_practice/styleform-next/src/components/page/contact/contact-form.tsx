'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormProps {
    className?: string;
}

interface FormInputs {
    name: string;
    email: string;
    number: string;
    message: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success('Your information is submitted!');
        reset();
    };
    return (
        <div className={className}>
            <h3 className="d2c_section_sub_title mt-6 lg:mt-0">contact us</h3>
            <form className="mt-6 space-y-8" data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter your number"
                                {...register('number', {
                                    required: 'Number is required',
                                    pattern: {
                                        value: /^\+?[0-9\s()-]+$/, // Allow digits, spaces, parentheses, and optional plus sign
                                        message: 'Phone number must be valid and can include +, spaces, and parentheses'
                                    },
                                    minLength: {
                                        value: 10, // Minimum length for the phone number
                                        message: 'Phone number must be at least 10 digits'
                                    },
                                    maxLength: {
                                        value: 20, // Adjusted maximum length for the phone number
                                        message: 'Phone number must be no more than 20 characters'
                                    }
                                })}
                            />
                            {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                        </div>
                    </div>
                </div>

                <div>
                    <textarea
                        rows={4}
                        className="form-control"
                        placeholder="Enter your message"
                        {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>

                <div>
                    <button type="submit" className={`d2c_btn ${isSubmitting ? 'relative flex justify-center items-center text-transparent after:content-[""] after:absolute after:w-4 after:h-4 after:rounded-full after:border-2 after:border-t-blue-500 after:border-gray-200 after:animate-spin' : ''}`}>
                        Send now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;