import { headers } from "next/headers";
import NotFoundPage, { type NotFoundLang } from "../../components/NotFoundPage";

export default async function LocalizedNotFound() {
  const requestHeaders = await headers();
  const siteLang = requestHeaders.get("x-site-lang");
  const lang: NotFoundLang = siteLang?.toLowerCase().startsWith("zh") ? "zh" : "en";

  return <NotFoundPage lang={lang} />;
}
