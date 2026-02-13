import { headers } from "next/headers";
import { redirect } from "next/navigation";

function pickLanguageFromAcceptLanguage(acceptLanguage: string | null): "zh" | "en" {
  if (!acceptLanguage) {
    return "en";
  }

  return /\bzh(?:-[A-Za-z]{2,4})?\b/i.test(acceptLanguage) ? "zh" : "en";
}

export default async function RootPage() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language");
  const targetLang = pickLanguageFromAcceptLanguage(acceptLanguage);

  redirect(`/${targetLang}`);
}
