import { NextRequest, NextResponse } from 'next/server';

import { cdnService } from '@/services/cdn';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const bucket = formData.get('bucket') as string;
  const path = formData.get('path') as string;

  try {
    const result = await cdnService.upload(path, file, bucket);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const formData = await request.formData();
  const objectName = formData.get('objectName') as string;
  const bucket = formData.get('bucket') as string;

  try {
    const result = await cdnService.delete(objectName, bucket);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
  }
}
