import {NextResponse} from 'next/server';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export function GET(){
 const key=process.env.GEMINI_API_KEY?.trim();
 const configured=Boolean(key && !/^(your_|paste_|replace_)/i.test(key));
 return NextResponse.json({configured,models:[process.env.GEMINI_MODEL||'gemini-3.8-flash',process.env.GEMINI_FALLBACK_MODEL_1||'gemini-3.6-flash',process.env.GEMINI_FALLBACK_MODEL_2||'gemini-3.5-flash-lite'],note:configured?'API key detected by Next.js server. This does not verify key validity or quota.':'Missing API key. Create .env.local next to package.json, add GEMINI_API_KEY, and restart the dev server.'},{headers:{'Cache-Control':'no-store'}});
}
