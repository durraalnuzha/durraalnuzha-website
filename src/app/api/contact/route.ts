import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'جميع الحقول المطلوبة يجب تعبئتها' },
        { status: 400 }
      );
    }

    const contactData = {
      name,
      email,
      phone: phone || 'غير محدد',
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    console.log('Contact form submission:', contactData);

    return NextResponse.json(
      { success: true, message: 'تم استلام رسالتك بنجاح' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة طلبك' },
      { status: 500 }
    );
  }
}
