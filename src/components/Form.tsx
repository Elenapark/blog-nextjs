'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import { object, string, InferType } from 'yup';

export type MailForm = InferType<typeof formSchema>;

let formSchema = object({
  email: string().email(),
  subject: string().required(),
  message: string().required(),
});

export default function Form() {
  const [inputVal, setInputVal] = useState<MailForm>({
    email: '',
    subject: '',
    message: '',
  });

  const [notice, setNotice] = useState('');

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
      // yup validation
      const result = await formSchema.validate({
        email,
        subject,
        message,
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (!res.ok) {
        setNotice('메일 전송 실패');
        setTimeout(() => {
          setNotice('');
        }, 3000);

        return;
      }
      setNotice(data.message);
      setTimeout(() => {
        setNotice('');
      }, 4000);
      setInputVal({
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {notice && <h3 className="text-orange-400 font-bold">{`✨${notice}`}</h3>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 rounded-lg bg-orange-300 py-3 px-4"
      >
        <label id="email">Your Email</label>
        <input name="email" value={inputVal.email} onChange={handleChange} />
        <label id="email">Subject</label>
        <input
          name="subject"
          value={inputVal.subject}
          onChange={handleChange}
        />
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
    </>
  );
}
