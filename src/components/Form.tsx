'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import { object, string, InferType } from 'yup';

type Form = InferType<typeof formSchema>;

let formSchema = object({
  email: string().email(),
  subject: string().required(),
  message: string().required(),
});

export default function Form() {
  const [inputVal, setInputVal] = useState<Form>({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, subject, message } = inputVal;

    try {
      const result = await formSchema.validate({
        email,
        subject,
        message,
      });
      console.log(result);
      // TODO: API CALL
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-lg bg-orange-300 py-3 px-4"
    >
      <label id="email">Your Email</label>
      <input name="email" value={inputVal.email} onChange={handleChange} />
      <label id="email">Subject</label>
      <input name="subject" value={inputVal.subject} onChange={handleChange} />
      <label id="email">Message</label>
      <textarea
        name="message"
        cols={30}
        rows={10}
        value={inputVal.message}
        onChange={handleChange}
      />
      <Button
        title="제출"
        type="submit"
        className="bg-orange-400 rounded-md font-bold py-1"
      />
    </form>
  );
}
