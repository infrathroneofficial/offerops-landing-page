import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_API_URL = "https://api.airtable.com/v0";

export async function POST(request: NextRequest) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  const emailField = process.env.AIRTABLE_EMAIL_FIELD;

  if (!apiKey || !baseId || !tableName || !emailField) {
    return NextResponse.json(
      { error: "Airtable configuration is not set." },
      { status: 503 },
    );
  }

  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid work email." },
      { status: 400 }
    );
  }

  const url = `${AIRTABLE_API_URL}/${baseId}/${encodeURIComponent(tableName)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            [emailField]: email,
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Airtable create record failed:", response.status, err);
    return NextResponse.json(
      { error: "Could not add you to the waitlist. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
