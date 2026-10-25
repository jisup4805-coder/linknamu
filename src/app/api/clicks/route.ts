import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 반환
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find().toArray();
    const counts: Record<string, number> = {};
    for (const link of links) counts[link.id] = 0;
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return NextResponse.json(counts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "잘못된 링크입니다." }, { status: 400 });
  }

  try {
    const collection = await getClicksCollection();
    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
