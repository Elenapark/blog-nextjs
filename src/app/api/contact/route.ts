import sendEmail from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (!request || request.method !== 'POST') {
    throw new Error('잘못된 요청입니다.');
  }

  if (!request.body) {
    throw new Error('body가 없습니다.');
  }

  try {
    const body = await request.json();
    const { email, subject, message } = body;
    const emailResult = await sendEmail({ email, subject, message });

    console.log('message Id:', emailResult.messageId);
    return NextResponse.json({
      status: 'success',
      code: 200,
      message: '메일이 성공적으로 전송되었습니다.',
    });
  } catch (err) {
    console.error(err);
  }
}
