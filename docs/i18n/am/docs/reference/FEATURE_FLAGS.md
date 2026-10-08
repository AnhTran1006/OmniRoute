# Feature Flags (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> ያለ **ዳግም ማሰማራት** የOmniRouteን ባህሪ የሚቀይሩ የሩጫ ጊዜ መቀያየሪያዎች።
> እዚህ የተዘረዘረው እያንዳንዱ ጠቋሚ በ
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ውስጥ ተገልጿል — ይህም ብቸኛው የእውነት ምንጭ ነው። ዳሽቦርዱም ሆነ REST API ከዚያ
> ፋይል ስለሚያነቡ፣ ከታች ያለው ሰንጠረዥ ከእሱ ጋር 1:1 እንዲዛመድ ተፈጥሯል።

---

## የባህሪ ጠቋሚዎች ምንድን ናቸው

የባህሪ ጠቋሚ በስም የተሰየመ መቀያየሪያ (boolean ወይም enum) ሲሆን፣ እሴቱ በሩጫ ጊዜ
ሊቀየር እና ዳግም የሂደት ማሰማራት ሳያስፈልግ በውሂብ ጎታው ውስጥ ሊቀመጥ ይችላል። እያንዳንዱ
ጠቋሚ `key`፣ `label`፣ `description`፣ `category`፣ `defaultValue`፣ `type` እና `requiresRestart`
ፍንጭ ባለው `FeatureFlagDefinition` ይገለጻል።

### የመፍትሔ ቅደም ተከተል

የአንድ ጠቋሚ **ተግባራዊ እሴት** በ
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) በሚከተለው
ቅድሚያ ይወሰናል (ከፍተኛው ያሸንፋል)፦

1. **የDB ተተኪ እሴት** — በ`feature_flags` የስም ክልል ስር ባለው `key_value`
   ሰንጠረዥ ውስጥ የተከማቸ እሴት (በዳሽቦርዱ ወይም በREST API በኩል የሚዋቀር)።
2. **የአካባቢ ተለዋዋጭ** — ከተዋቀረ እና ባዶ ካልሆነ `process.env[<KEY>]`።
3. **የትርጉም ነባሪ** — ከ`featureFlagDefinitions.ts` የሚገኘው `defaultValue`።

የboolean ጠቋሚ ተግባራዊ እሴቱ `"true"`፣ `"1"` ወይም `"yes"` ሲሆን
**እንደነቃ** ይቆጠራል (`isFeatureFlagEnabled()`ን ይመልከቱ)።

> [!NOTE]
> አብዛኞቹ ጠቋሚዎች በ[`ENVIRONMENT.md`](./ENVIRONMENT.md) ውስጥ የተመዘገበ
> **ተመሳሳይ ስም** ያለው ተዛማጅ የአካባቢ ተለዋዋጭም አላቸው። የጠቋሚው የDB ተተኪ እሴት
> ከዚያ የአካባቢ ተለዋዋጭ ቅድሚያ ይኖረዋል። `requiresRestart: true` ያለው ጠቋሚ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ዳግም የሚነበበው ሂደቱ ሲጀምር ብቻ ነው — እሱን መቀያየር በዳሽቦርዱ ውስጥ
> **"አገልጋዩን ዳግም ያስጀምሩ"** የሚል ሰንደቅ ያሳያል።

---

## የጠቋሚዎች ካታሎግ

በ6 ምድቦች የተከፋፈሉ 82 ጠቋሚዎች። **ነባሪ** ማለት በትርጓሜው የተወሰነው ነባሪ እሴት ነው — ይህም
የDB መሻሪያም ሆነ የአካባቢ ተለዋዋጭ በማይኖርበት ጊዜ ጥቅም ላይ የሚውለው እሴት ነው።

### ደህንነት (10)

| ቁልፍ                                     | ዓይነት    | ነባሪ      | መግለጫ                                                                                                                                                                                                   |
| --------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `REQUIRE_API_KEY`                       | boolean | `false`  | ለሁሉም ገቢ ጥያቄዎች API ቁልፍ እንዲኖር አስገድድ።                                                                                                                                                                     |
| `INPUT_SANITIZER_ENABLED`               | boolean | `true`   | ለሁሉም ጥያቄዎች የግቤት ማጽዳትን አንቃ።                                                                                                                                                                             |
| `INJECTION_GUARD_MODE`                  | enum    | `off`    | የፕሮምፕት ኢንጀክሽን መከላከያ ሁነታ። እሴቶች፦ `off`፣ `warn`፣ `block`፣ `redact`።                                                                                                                                       |
| `PII_REDACTION_ENABLED`                 | boolean | `false`  | PIIን ከጥያቄዎች ውስጥ ደብቅ (`INPUT_SANITIZER_MODE` ላይ ጥገኛ አይደለም)።                                                                                                                                             |
| `PII_RESPONSE_SANITIZATION`             | boolean | `false`  | ከአቅራቢዎች ምላሾች ውስጥ PIIን አጽዳ።                                                                                                                                                                             |
| `PII_RESPONSE_SANITIZATION_MODE`        | enum    | `redact` | የPII ምላሽ ማጽዳት ሁነታ። እሴቶች፦ `redact`፣ `warn`፣ `block`፣ `off`።                                                                                                                                             |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | boolean | `true`   | የቆየ ተለዋጭ ስም፦ በዚህ ጠቋሚ የዳሽቦርድ ማብሪያ/ማጥፊያ ላይ የተቀመጠ እሴት ከአካባቢው በፊት ይነበባል፤ በሁለቱም ውስጥ `false`፣ `0`፣ `no` ወይም `off` እንደ `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` የወጪ URL መከላከያውን የአስተናጋጅ ፍተሻዎች ያጠፋል።            |
| `ALLOW_API_KEY_REVEAL`                  | boolean | `false`  | የተረጋገጡ የዳሽቦርድ ተጠቃሚዎች የተሸፈኑ እሴቶችን ብቻ ከማየት ይልቅ የተከማቹ API ቁልፎችን እንዲያሳዩ ፍቀድ።                                                                                                                               |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | boolean | `false`  | በAUTH ሎግ መስመሮች ውስጥ የመለያ ቅድመ ቅጥያን አካትት (ለምሳሌ፦ "<provider> መለያ ጥቅም ላይ እየዋለ ነው፦ abc12345...")። በጋራ/ባለብዙ ተከራይ የሂደት ሎጎች ውስጥ የመለያ መለያዎች እንዲደበቁ በነባሪነት ተሰናክሏል። ከDebug Mode ነጻ ነው፤ Debug Modeን መቀየር ይህን አያሳይም። |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | boolean | `false`  | OIDC ሲነቃ ተጠቃሚዎች በOIDC Single Sign-On ብቻ ማንነታቸውን እንዲያረጋግጡ የይለፍ ቃል መግቢያን አሰናክል። ሲሰናከል (ነባሪው)፣ ሁለቱም የይለፍ ቃል መግቢያ እና OIDC ይገኛሉ።                                                                            |

### አውታረ መረብ (23)

| ቁልፍ                                             | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------- | ------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | boolean | `false` | ✓         | የTLS fingerprint ስውር ሁነታን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                      |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | boolean | `false` |           | የ/v1/audio/* መስመሮች ከlocalhost ውጭ በሚስተናገዱ OpenAI-ተኳሃኝ የአቅራቢ ኖዶችን እንዲጠቀሙ ፍቀድ። በነባሪነት ጠፍቷል — ኦዲዮን ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ስለሚቀይር የኦፕሬተሩ ግልጽ ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ ይፈቀዳሉ እና ተጽዕኖ አያርፍባቸውም።                                                                                                                                                                                                        |
| `RERANK_REMOTE_PROVIDER_NODES`                  | boolean | `false` |           | POST /v1/rerank (እና የማህደረ ትውስታ ሞተሩ የloopback ዳግም-ደረጃ-አሰጣጥ ደረጃ) ከlocalhost ውጭ በሚስተናገዱ OpenAI-ተኳሃኝ የአቅራቢ ኖዶችን እንዲጠቀም ፍቀድ። በነባሪነት ጠፍቷል — ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ስለሚቀይር የኦፕሬተሩ ግልጽ ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ ይፈቀዳሉ፤ የሩቅ ኖዶች ደግሞ የአቅራቢውን የውጪ URL ፖሊሲ ማለፍ አለባቸው።                                                                                                                                       |
| `PROXY_AUTO_SELECT_ENABLED`                     | boolean | `false` |           | ለአንድ ግንኙነት ምንም proxy ባልተመደበበት ጊዜ፣ ከመዝገቡ ውስጥ የመጀመሪያውን የሚሰራ proxy በራስ-ሰር ምረጥ። በነባሪነት ጠፍቷል (አለበለዚያ በመዝገቡ ውስጥ ያለ ማንኛውም proxy ዓለም አቀፍ የመጠባበቂያ አማራጭ ይሆናል — #3332)።                                                                                                                                                                                                                                                        |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | boolean | `false` |           | የproxy ተደራሽነት ቅድመ-ምርመራዎች ሳይሳኩ ሲቀሩ፣ የOAuth እና የአቅራቢ ማረጋገጫ ፍሰቶች የተወሰነውን proxy አልፈው በቀጥታ እንዲገናኙ ፍቀድ። ይህ የወጪ ትራፊክ IPን ሊቀይር ስለሚችል በነባሪነት ጠፍቷል።                                                                                                                                                                                                                                                                           |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | boolean | `true`  |           | ለባለብዙ-መለያ የrotation አስፈጻሚ የአውታረ መረብ ልዩ ሁኔታ (ጊዜው ማለፍ፣ ግንኙነት ውድቅ መደረግ/ዳግም መጀመር) ሲከሰት፣ ያልተሳካው መለያ የራሱ proxy ከሌለው፣ እያንዳንዱን እንደገና ከመሞከር ይልቅ አጭር የማቀዝቀዣ ጊዜ ተግብር እና ለቀሪው ጥያቄ proxy የሌላቸውን ሌሎች መለያዎች ዝለል። በነባሪነት በርቷል (ደህንነቱ የተጠበቀ፦ የወጪ ትራፊክ IP ለውጥ የለም፤ በጋራ የወጪ ትራፊክ መለያዎች ላይ የመዘግየት/የማቀዝቀዣ ጊዜ አደጋን ብቻ ይቀንሳል)። የመጀመሪያው proxy የሌለው ውርወራ ሲከሰት ወዲያውኑ ማስተላለፍን ለመመለስ ያሰናክሉ።                                                     |
| `ROTATION_ATTRIBUTION`                          | boolean | `false` |           | የOpencode rotation የትኛው መለያ ጥያቄውን እንዳስተናገደ ወይም እንደተዘለለ ይመዘግባል (የተደበቁ ids ብቻ፣ ሙሉ የመለያ ids በፍጹም አይመዘገቡም) እንዲሁም የproxy ምዝግብ ማስገቢያዎችን ከጥያቄያቸው ጋር ያገናኛል፤ በዚህም ኦፕሬተሩ የተዘለሉ መለያዎችን ጥቅም ላይ ካልዋሉት መለየት ይችላል። በነባሪነት ጠፍቷል።                                                                                                                                                                                                    |
| `PROXY_SKIP_RECENTLY_FAILED`                    | boolean | `true`  |           | የProxy ስብስቦች እና የopencode በየመለያው rotation አሁን ያልተሳካ proxy (ውድቅ የተደረገ TCP ምርመራ፣ ወይም በእሱ በኩል የተቀበለ 429) ለእያንዳንዱ ሂደት በእያንዳንዱ ድግግሞሽ በእጥፍ ለሚጨምር እስከ አንድ ከፍተኛ ገደብ ድረስ ባለ ጊዜ ውስጥ ዳግም ማቅረብ ያቆማሉ። ምንም የproxy ሁኔታ አይጻፍም፤ እያንዳንዱ እጩ ወደ ጎን ቢቀመጥም ምርጫው ሳይቀየር ይቆያል። በነባሪነት በርቷል፤ `false` ቀላል ምርጫን ይመልሳል።                                                                                                                          |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |           | ኮታቸው በመውጫ አድራሻ ለሚከፋፈል አቅራቢዎች፣ በቅርቡ ውድቅ ከተደረገ አባል ጋር ተመሳሳይ የታየ የመውጫ አድራሻ የሚጋራውን የፑል አባል ከጤናማ አባላት በታች ደረጃ ይስጡት። ለቅደም ተከተል ብቻ ነው፤ ፈጽሞ አያገለውም። የሚያነበውን የውድቅነት ምልክት የሚያመነጨውን PROXY_SKIP_RECENTLY_FAILED ይፈልጋል። በነባሪነት ጠፍቷል።                                                                                                                                                                                             |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |           | በዳሽቦርዱ ውስጥ ከፕሮክሲ ፑል ስር፣ ባለፉት 24 h ምን ያህል የታዩ የመውጫ IPዎች አባላቱን እንዳገለገሉ እና ምን ያህል ግንኙነቶች እንደተጠቀሟቸው ያሳዩ። ለንባብ ብቻ ነው፣ ከፕሮክሲ ምዝግብ ይሰላል፣ ለማስተላለፊያ ፈጽሞ አይጠቀምም። በነባሪነት ጠፍቷል።                                                                                                                                                                                                                                                 |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |           | በኦፕሬተር የሚገፉ፣ ቀን የተመዘገበባቸውን የታዩ አድራሻዎች ለእያንዳንዱ የፑል አባል ይቀበሉ እና ለማሳያና ለፑል ቅደም ተከተል ከጆርናሉ ንባብ ጋር ያዋህዷቸው። በነባሪነት ጠፍቷል፦ የግፊት መስመሩ 404 ይመልሳል እና የፑል ንባቦች ልክ እንደበፊቱ ይሰራሉ።                                                                                                                                                                                                                                                  |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |           | ለOpenCode አስፈጻሚ፣ በዥረት የሚላክ የResponses ምላሽ የመጀመሪያውን የይዘት ባይት ይከታተሉ (መስኮት፦ `RESPONSES_FIRST_BYTE_TIMEOUT_MS`፣ ነባሪ `15000`)። ከመስኮቱ በላይ ጸጥ ብሎ የሚቆይ 2xx Responses ዥረት እንደተቋረጠ ይቆጠራል፦ መለያው ለጊዜው እንዲቀዘቅዝ ይደረጋል እና ጥያቄው አንድ ጊዜ ወደሚቀጥለው መለያ ይዞራል፤ ሁለተኛ መቋረጥ ወዲያውኑ ያሳንፋል። በነባሪነት ጠፍቷል፦ የተቋረጡ ዥረቶች እስከዥረት ዝግጁነት ጊዜ ገደብ ድረስ ያለውን የአሁኑን መጠበቅ ይቀጥላሉ።                                                                              |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |           | OpenCode አስፈጻሚ፦ የ`user_blocked` ውድቅነት ባለው 403/451 ላይ (በጂኦግራፊያዊ ምክንያት ያልሆነ፣ የCloudflare አሻራ ውድቅነትም ያልሆነ)፣ ውድቅ የተደረገውን መለያ ለጊዜው ያቀዘቅዙ እና በእያንዳንዱ ጥያቄ ቢበዛ አንድ ጊዜ ወደሚቀጥለው መለያ ያዙሩ፤ ሁለተኛ ውድቅነት የስኬት ምልክት ሳይደረግበት እንዳለ ይመለሳል። በነባሪነት ጠፍቷል፦ የላይኛውን አገልግሎት የተጠቃሚ እገዳ ለማለፍ መስመር መቀየር እንደማምለጥ ሊታይ እና ምልክቱን በመላው ስብስብ ሊያሰራጭ ይችላል።                                                                                              |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |           | OpenCode ማዞር፦ ሁለት ተከታታይ ጊዜያዊ የላይኛው አገልግሎት አለመሳካቶች (5xx ወይም ባዶ 400) ከተከሰቱ በኋላ፣ ወደሚቀጥለው መለያ ከመሄድዎ በፊት ለአፍታ ያቁሙ — 1.5s ሲሆን በእያንዳንዱ ተጨማሪ አለመሳካት በእጥፍ ይጨምራል፣ በእያንዳንዱ ማቆም 6s እና በእያንዳንዱ ጥያቄ 10s ላይ ይገደባል፣ ደንበኛው ሲቋረጥ ይዘለላል፤ ያልተሳካው ይዘት ከመጠበቅ በፊት ይለቀቃል። በነባሪነት ጠፍቷል፦ ወደ ተተኪ መቀየር ወዲያውኑ እንዳለ ይቆያል።                                                                                                                         |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |           | OpenCode ማዞር፦ ተደጋጋሚ ጊዜያዊ 429ዎች (ወይም አዲስ የፑል ጫና ምልክት) ከተከሰቱ በኋላ ጥያቄውን ከልብ ምት ጋር በተጠባባቂነት ያቆዩት፣ ከዚያም መላውን የመለያዎች ስብስብ በአንድ ጊዜ ከማሰራጨት ይልቅ እስከ 3 ተከታታይ መለያዎች ያለውን አንድ የተገደበ ዙር እንደገና ያጫውቱ። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                                                                          |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |           | ዥረታዊ ውይይት፦ የመጀመሪያው የላይኛው አገልግሎት ይዘት ጠቃሚ ክስተት ከማመንጨቱ በፊት ሲቋረጥ፣ በተመሳሳይ የማስተላለፊያ መስመር፣ በተመሳሳይ የዝግጁነት በጀት እና ያለመለያ ቅጣት አንድ የተገደበ ሁለተኛ ሙከራ ያድርጉ። በነባሪነት ጠፍቷል፦ የተቋረጠ የመጀመሪያ ይዘት ያለዳግም ሙከራ ጥያቄውን ያሳንፋል።                                                                                                                                                                                                                    |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |           | በተተረጎሙ ዥረታዊ ዙሮች ላይ፣ የላይኛው አገልግሎት ዙር ምንም ጠቃሚ ይዘት ካልያዘ (የምክንያት ማብራሪያ ብቻ ያለው ማጠናቀቂያ ወይም ዜሮ ዋጋ ያላቸው ቁርጥራጮች)፣ ማንኛውም ነገር ለደንበኛው ከመጋለጡ በፊት በመደበኛው የማረጋገጫ መንገድ የተገደቡ ዳግም ሙከራዎችን ያድርጉ (እስከ `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX`)። በነባሪነት ጠፍቷል፦ ባዶ ዙሮች የአሁኑን ባህሪ (ባዶ 200 ወይም ባዶ-ይዘት 502) ይዘው ይቆያሉ።                                                                                                                          |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |           | OpenCode ማዞር፦ በአካባቢ የፑል አውድ ስር ፕሮክሲ በሌለው መለያ ላይ ከመውጫ አድራሻ ኮታ ከሚከፋፍል አቅራቢ 429 ከመጣ በኋላ፣ ተመሳሳዩን የመውጫ አድራሻ እንደገና ከመሞከር ይልቅ ለሚቀጥለው ሙከራ ሌላ አባል እንዲመርጥ የግንኙነት ፑሉን ይጠይቁ። ቅደም ተከተል ብቻ ይሰጣል፣ ፈጽሞ አያገልም፦ የተሟጠጠ ፑል የአሁኑን ባህሪ ይቀጥላል። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                                         |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | boolean | `false` |           | OpenCode ማዞሪያ፦ እንደ እውነተኛ የፍጥነት ገደብ የተመደበው የመጀመሪያው 429 ሲከሰት (ሊተነተን የሚችል `Retry-After`፣ ወይም የፍጥነት/አጠቃቀም ገደብን የሚጠቅስ የምላሽ ይዘት) የመለያዎችን ዙር ያቁሙ እና ያንኑ የላይኛውን 429 ሳይቀየር ይመልሱ። ያልተመደቡ 429ዎች መዞራቸውን ይቀጥላሉ። በነባሪ ጠፍቷል፦ ነፃው ደረጃ በእያንዳንዱ የመውጫ IP የተገደበ ነው (#9611)፣ ስለዚህ እያንዳንዱ 429 ማዞሪያን ያስከትላል፣ እና ያለቀ ዙር የመጨረሻውን የላይኛውን 429 ይመልሳል።                                                                                           |
| `MITM_DISABLE_TLS_VERIFY`                       | boolean | `false` | ✓         | ለMITM ፕሮክሲው የTLS ሰርቲፊኬት ማረጋገጫን ያሰናክሉ። **አደገኛ።**                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | boolean | `false` |           | በአቅራቢ URL ማረጋገጫ፣ በሞዴል ፍለጋ፣ በአቅራቢ-ኖድ መሠረታዊ URLዎች እና በፕሮክሲ-መጠባበቂያ ሙከራው ላይ የወጪ URL ጠባቂውን የአስተናጋጅ ፍተሻዎች፣ የክላውድ-ሜታዳታ እገዳን ጨምሮ፣ ያጠፋል፤ እንዲሁም የግል webhook መዳረሻዎችን ይፈቅዳል። በማረጋገጫ፣ በፍለጋ እና በአቅራቢ-ኖድ መንገዶች ላይ አካባቢያዊ እና LAN URLዎች በነባሪ አስቀድመው ያልፋሉ (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)፤ የፕሮክሲ-መጠባበቂያ ሙከራው እና የግል webhook መዳረሻዎች `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`ን ብቻ ይመለከታሉ፣ እና ይህ ጠፍቶ ሳለ አካባቢያዊ/LAN አስተናጋጆችን ያግዳሉ። |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | boolean | `true`  |           | በአካባቢያዊ/የግል አድራሻዎች (127.0.0.1, localhost, LAN) ላይ የአቅራቢ URLዎችን ይፍቀዱ። በነባሪ በርቷል (አካባቢያዊ-ቀዳሚ)፦ ከዚያ ጠባቂው የክላውድ-ሜታዳታ የመዳረሻ ነጥቦችን (ሁሉንም 169.254.0.0/16 እና የታወቁትን የሜታዳታ አስተናጋጅ ስሞች) ያግዳል። ጥብቅ የሕዝብ-ብቻ እገዳን ለመጠቀም ያሰናክሉት፦ የግል እና loopback አስተናጋጆችም ይታገዳሉ።                                                                                                                                                                  |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | boolean | `false` | ✓         | ከClaude Code ጋር ተኳሃኝ የሆነውን የአቅራቢ ሁነታ ያንቁ።                                                                                                                                                                                                                                                                                                                                                                           |

### ፖሊሲዎች (5)

| ቁልፍ                             | ዓይነት    | ነባሪ        | መግለጫ                                                                                                                                                    |
| ------------------------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TOOL_POLICY_MODE`              | enum    | `disabled` | የመሣሪያ-አጠቃቀም ፖሊሲ ማስፈጸሚያ ሁነታ። እሴቶች፦ `disabled`፣ `warn`፣ `block`።                                                                                          |
| `RATE_LIMIT_AUTO_ENABLE`        | boolean | _(ያልተዋቀረ)_ | የፍጥነት-ገደብ ራስ-ሰር የማንቃት የደኅንነት መረብን በግድ ያብሩ/ያጥፉ፤ ካልተዋቀረ የዳሽቦርዱን ቅንብር ይከተላል (በነባሪ በርቷል)።                                                                   |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | boolean | `false`    | ለቀጥታ ነጠላ-ሞዴል ጥያቄዎች የOmniRouteን አካባቢያዊ የአውድ-መስኮት / ከፍተኛ-የግቤት-ቶከን ፍተሻ ይዝለሉ። የላይኛው አገልግሎት ገደቦች አሁንም ተፈጻሚ ናቸው።                                              |
| `CAPABILITY_FILTER_ENABLED`     | boolean | `false`    | የታለመው ሞዴል አስፈላጊ ችሎታዎችን (ምስል፣ መሣሪያዎች፣ የተዋቀረ ውጤት፣ የአውድ መስኮት) ከሌለው ከማስተላለፍ በፊት ጥያቄዎችን ውድቅ ያድርጉ። የጥምር-ንብርብር ተኳሃኝነት ማጣሪያን የሚያልፉ ቀጥተኛ ነጠላ-አቅራቢ ጥያቄዎችን ይከላከላል። |
| `RADAR_ENABLED`                 | boolean | `false`    | የOmniRoute Radar ሞጁሉን (የካታሎግ ፊድ ማያ ገጾችን እና ማመሳሰልን) ያንቁ። በነባሪ ጠፍቷል፤ ማንቃት የተጠቃሚ በይነገጹን ብቻ ይከፍታል — የውሂብ ማመሳሰል የተለየ መርጦ-መግቢያ ሆኖ ይቆያል።                       |

### የአሂድ ጊዜ (34)

| ቁልፍ                                         | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------- | ------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | ቡሊያን    | `true`  |           | የጥምር ማዘዋወር ሞዴሎችን ሲቀይር የውይይት ማጠቃለያዎችን ያመነጫል እና ያስገባል። የሞዴል ለውጦችን ለየብቻ ለማስተናገድ እና ለሁሉም ነባርና ወደፊት ለሚፈጠሩ ጥምሮች የጀርባ ርክክብ ጥያቄዎችን ለመከላከል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                       |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | ቡሊያን    | `true`  |           | ወደ ደንበኞች ከመላካቸው በፊት የውስጥ የአስተያየት ደረጃ ውፅዓት ንጥሎችን ከResponses API ቀጥታ-ማስተላለፊያ ዥረቶች ያስወግዳል። ያልተለወጠውን የላይኛው ምንጭ አስተያየት ለመቀበል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | ቡሊያን    | `false` |           | የMCP መሣሪያ መዳረሻ ላይ የወሰን ገደቦችን ያስፈጽማል።                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | ቡሊያን    | `false` |           | የቶከን አጠቃቀምን ለመቀነስ የMCP መሣሪያ መግለጫዎችን ያጥብቃል።                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | ቡሊያን    | `false` |           | በሩጫ ጊዜ የጀርባ ተግባር ሂደትን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | ቡሊያን    | `false` | ✓         | ሁሉንም የጀርባ አገልግሎቶች (የኮታ ማደስ፣ ማመሳሰል፣ ወዘተ) ያሰናክላል።                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |           | የፕሮጀክት ደረጃ RTK ማጣሪያዎችን ያለማረጋገጫ እመን።                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓         | በማስመጣት ጊዜ የቅጽበታዊ ዳሽቦርድ WebSocket አገልጋይን አስጀምር (በነባሪ port 20132)።                                                                                                                                                                                                                                                                                                                                                                                                                |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |           | Codex የResponses-over-WebSocket ማጓጓዣን እንዲጠቀም ፍቀድ። ሲጠፋ፣ Codex ወደ HTTP Responses ይመለሳል።                                                                                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |           | Codex የአካባቢ app-server WebSocket JSON-RPC ማጓጓዣን (`codexTransport=app-server`) እንዲጠቀም ፍቀድ። ሲጠፋ፣ app-serverን ለመጠቀም የተዋቀሩ ግንኙነቶች ወደ ሌሎች የCodex ማጓጓዣዎች ይመለሳሉ።                                                                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |           | በጀታቸው ያለቀባቸውን ጥያቄዎች ወደ አስቸኳይ ነፃ ተተኪ አቅራቢ/ሞዴል አስተላልፍ። (ከታች [የአስቸኳይ ጊዜ የበጀት ተተኪ](#emergency-budget-fallback)ን ይመልከቱ።)                                                                                                                                                                                                                                                                                                                                                             |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |           | ማንኛውም የምላሽ ባይቶች ወደ ደንበኛው ከመድረሳቸው በፊት ለተቋረጡ የላይኛው ምንጭ SSE ዥረቶች ግልጽ ያልሆነ ቀደምት ዳግም ሙከራን አንቃ።                                                                                                                                                                                                                                                                                                                                                                                       |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |           | ባይቶች ወደ ደንበኛው ከደረሱ በኋላም እንኳ የዥረት መልሶ ማግኛው ዳግም እንዲጠይቅና ምላሹን እንዲያገናኝ ፍቀድ።                                                                                                                                                                                                                                                                                                                                                                                                         |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |           | በዥረት መሀል የሚደረገውን ቀጣይነት ለመሣሪያ ጥሪ ደህንነቱ የተጠበቀ አድርግ፦ የመሣሪያ ጥሪ ከተላከ በኋላ (በሂደት ላይ ሆኖም ይሁን በ`finish_reason` `tool_calls` ቀድሞ ተጠናቆ) የተቋረጠ ዥረትን በፍጹም አትቀጥል፤ እንዲሁም መላውን በጀት ከማጥፋት ይልቅ ከአንድ ባዶ ቀጣይነት በኋላ ዝጋ። ሲጠፋ፦ የልቀት ባህሪ።                                                                                                                                                                                                                                                               |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |           | አንድ SSE ዥረት ምንም ጠቃሚ ፍሬም ሳያወጣ ሲዘጋ እና የተገደበው በተመሳሳይ ግንኙነት ላይ የሚደረግ ዳግም ሙከራ ሲያልቅ፣ አንድ ጊዜ ወደ ተጓዳኝ ግንኙነት ይቀየር፤ ሊጠቀሙበት የሚችሉት ተጓዳኝ ግንኙነት ከሌለ የመጀመሪያው `STREAM_EARLY_EOF` 502 ይመለሳል። በነባሪ ጠፍቷል፦ ቀደምት-EOF በተመሳሳይ ግንኙነት ላይ ከሚደረገው ዳግም ሙከራ በኋላ የመጨረሻ ሁኔታ ሆኖ ይቆያል።                                                                                                                                                                                                                           |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |           | በ`/v1/models` ምላሾች ውስጥ ለዕይታ ምቹ የሆኑ የስም መስኮችን ያካትቱ። የሞዴል IDዎችን ብቻ ለሚጠብቁ ደንበኞች ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                                            |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |           | በ/v1/models ውስጥ የሞዴል IDዎች ቅድመ ቅጥያ እንዴት እንደሚያገኙ ይቆጣጠራል። 'dual' (ነባሪ) ከቀድሞ ስሪቶች ጋር ለመጣጣም ሁለቱንም ተለዋጭ ስም እና መደበኛ የአቅራቢ-ID ቅድመ ቅጥያዎች ያወጣል። 'alias' አጭሩን የተለዋጭ ስም ቅድመ ቅጥያ ብቻ ያወጣል (ለምሳሌ ds-web/model፣ deepseek-web/model ሳይሆን)። 'canonical' ሙሉውን የአቅራቢ-ID ቅድመ ቅጥያ ብቻ ያወጣል። እሴቶች፦ `dual`፣ `alias`፣ `canonical`።                                                                                                                                                                        |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |           | ለሞዴል የብልህነት ደረጃዎች ወቅታዊ የArena AI የመሪዎች ሰሌዳ ELO ማመሳሰልን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |           | የClaude Code ጌትዌይ የሞዴል ፍለጋ Claude ያልሆኑ ሞዴሎችን እንዲዘረዝር፣ በ`/v1/models` ላይ የ`claude/<provider>/<model>` መስታወት IDዎችን ያስተዋውቁ። የሶስት-ደረጃ መቆጣጠሪያው አጠቃላይ ደረጃ ነው (env ከዳሽቦርዱ የማሻሻያ ቅንብር ይቀድማል)። [የClaude Code ውቅር](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)ን ይመልከቱ።                                                                                                                                                        |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |           | ለno-think/<provider>/<model> ጌትዌይ ተለዋጭ ስሞች ዋና መቀየሪያ። ሲበራ (ነባሪ)፦ /v1/models ለእያንዳንዱ ብቁ የማሰብ ችሎታ ላለው Claude ሞዴል ያለ-አስተሳሰብ ልዩነት ያስተዋውቃል፣ እና በጥያቄ ላይ የተላከ no-think/ ID ምክንያታዊ አስተሳሰቡ ታግዶ ወደ እውነተኛው ሞዴል ይፈታል። ሲጠፋ፦ ምንም ልዩነቶች አይተዋወቁም፣ እና no-think/ ID እንደማንኛውም ሌላ ያልታወቀ የሞዴል ID ይታያል። ይህ በርቶ ሳለ የእያንዳንዱ ሞዴል ModelSpec.noThinkingAlias የመርጦ መግባት/መውጣት ቅንብር አሁንም ተፈጻሚ ነው።                                                                                                              |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |           | በ/v1/models ካታሎግ ውስጥ የአስተሳሰብ ደረጃ ልዩነቶችን (ለምሳሌ -low፣ -medium፣ -high) ማመንጨትን ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓         | ለአቅራቢ መላኪያ በእያንዳንዱ ተከራይ ላይ የሚስማሙ ምናባዊ የመቀበያ መስመሮችን ያንቁ (#9654)፦ የአንድ ተከራይ ድንገተኛ ጭማሪ ከእንግዲህ ሌላው ተከራይ 503 እንዲያገኝ አያደርግም። `OMNIROUTE_CHAT_VIRTUAL_LANES` env var ከዚህ የዳሽቦርድ ማሻሻያ ቅንብር ይቀድማል፤ ለውጦች አገልጋዩ ዳግም ሲጀምር ተፈጻሚ ይሆናሉ።                                                                                                                                                                                                                                                        |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |           | ዋናው ባለቤት ገቢር ማረጋገጫ የሌለው፣ ነገር ግን ገቢር ማረጋገጫ ያለው passthrough gateway የሚያስተላልፋቸው ሞዴሎችን በተመለከተ የ<gateway-alias>/<model> መስታወት መለያዎችን በ/v1/models ላይ ያስተዋውቁ። ማስጠንቀቂያ፦ በዓለም አቀፍ ደረጃ ሲነቃ ለሁሉም ደንበኞች የካታሎግ ግቤቶችን ይጨምራል።                                                                                                                                                                                                                                                                  |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |           | ከNew-API / One-API / Sub2API aggregator ጋር ተኳሃኝ ለሆኑ ኖዶች የሂሳብ ቀሪ ማወቂያን ያንቁ። ሲነቃ፣ የaggregator ምልክት የተዘጋጀላቸው ተኳሃኝ ኖዶች የሂሳብ ቀሪያቸውን በዳሽቦርዱ እና በኮታ ቅድመ-ማጣሪያ ማስተላለፊያ ውስጥ ሪፖርት ያደርጋሉ።                                                                                                                                                                                                                                                                                                   |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |           | ሞዴሉ በደንበኛው ጥቅም ላይ ሊውል የሚችል ምላሽ እስኪመልስ ድረስ፣ ዥረት-አልባ በአገልጋዩ ባለቤትነት የሚተዳደሩ የመሣሪያ ጥሪዎችን ይቀጥሉ።                                                                                                                                                                                                                                                                                                                                                                                       |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |           | የፍለጋ ስታቲስቲክስ እና የቅርብ ጊዜ ፍለጋዎች አሁንም ገቢር ግንኙነት ያላቸውን አቅራቢዎች ብቻ ይቆጥራሉ (እንደ duckduckgo-free ያሉ ቁልፍ የማይፈልጉ አቅራቢዎች ሁልጊዜ ይቆጠራሉ)። ሲጠፋ፣ የአቅራቢ መለያ ያለውን እያንዳንዱን የተያዘ የፍለጋ ረድፍ ያቆያል።                                                                                                                                                                                                                                                                                                       |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |           | የዳሽቦርድ አቅራቢ ገጾች፦ የነፃ ባጁን አቅራቢው በሚያከብራቸው ምልክቶች ላይ ብቻ ያሳዩ — በሰነድ የተረጋገጠ ነፃ ደረጃ በሌላቸው የተመዘገቡ አቅራቢዎች ላይ የማሳያ-ስም ግምታዊ ዘዴን፣ boolean ያልሆኑ የነፃ መስኮችን እና የ:free ቅጥያዎችን ያስወግዳል። ሲጠፋ፣ ታሪካዊውን የባጅ ደንብ ያቆያል።                                                                                                                                                                                                                                                                                 |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |           | በተዋሃዱ 429/503 አይገኝም ምላሾች ላይ፣ የተወሰነ የወደፊት ዳግም ሙከራ ጊዜ በማይታወቅበት ጊዜ `Retry-After`ን ይተዉ (በሰው ሠራሽ 1s ፈንታ)፣ `error.retry_after_provenance` (`signal` \| `none`)ን ይጨምሩ፣ እንዲሁም የcombo drain ዱካዎች ከJSON እና ከንጹሕ-ጽሑፍ የupstream አካሎች ውስጥ በጽሑፍ የቀረቡ የዳግም ሙከራ ፍንጮችን እንዲያነቡ ይፍቀዱ። መስኩ የሚታየው በ`unavailableResponse()` በተገነቡ ምላሾች ላይ ብቻ ነው፤ ሌሎች የ429/503 አካሎች አይቀየሩም።                                                                                                                            |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |           | በኮታ መሟጠጥ ጊዜ ብቻ fallback እንዲደረግበት ምልክት የተደረገበት የ`priority` combo ዒላማ፣ ከኮታ ጋር እንደማይያያዝ በእርግጠኝነት ሊረጋገጥ በሚችል ምክንያት (የአቅራቢ circuit breaker ክፍት መሆን፣ ትንበያዊ የመዘግየት መዝለል) comboውን ሲያቆም፣ ኮታ ያለቀ የሚመስለውን 503 ከመመለስ ይልቅ 502 ይመልሱ። መቆለፍ፣ cooldown፣ አለመገኘት፣ መሟጠጥ እና የconcurrency-cap ማቆሚያዎች 503ን እንዳለ ያቆያሉ።                                                                                                                                                                                  |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |           | ተራ Mistral 401 (`{"detail":"Unauthorized"}`፣ ግልጽ የማረጋገጫ ምልክት የሌለው) ለተሻረ ቁልፍ እና ለተሟጠጠ ኮታ አንድ ዓይነት ነው። ሲነቃ፣ ግንኙነቱን `expired` ብሎ ከማቆም ይልቅ በcooldown ውስጥ ያስገባዋል፣ ይህም በእያንዳንዱ ግንኙነት በሰዓት ከ3 ጊዜ ያልበለጠ ነው፤ ቀጣዩ ግን ያቆመዋል፣ ስለዚህ የተሻረ ቁልፍ አሁንም ወደዚያው ውጤት ይደርሳል። በነባሪ ጠፍቷል፦ እያንዳንዱ ተራ Mistral 401 እንደቀድሞው ግንኙነቱን ያቆማል።                                                                                                                                                                     |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |           | የxai-oauth (xao) እና grok-cli ምስል መስመሮችን ይመዝግቡ፣ እንዲሁም የOpenAI ጥራት high/hdን ወደ xAI medium ይመድቡ። በነባሪ ጠፍቷል፦ በAPI ቁልፍ ላይ የተመሠረተው የxAI ምስል ዱካ ነባሩን ከOpenAI ጋር ተኳሃኝ የሆነ ጥያቄ መጠቀሙን ይቀጥላል፣ እና የደንበኝነት ምዝገባ መስመሮቹ አይመዘገቡም።                                                                                                                                                                                                                                                               |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |           | የቆመውን የማይለወጥ መነሻ ዝርዝር ከመጠቀም ይልቅ፣ የOAuth bearer tokenን በመጠቀም ለxai-oauth ግንኙነቶች ቀጥታውን የxAI ሞዴል ካታሎግ ከhttps://api.x.ai/v1/models ያምጡ። በነባሪ በርቷል። የማይለወጠውን መነሻ ዝርዝር ማቅረብን ለመቀጠል ጠቋሚውን ወደ false ያዘጋጁ። የHTTP አለመሳካቶች በግኝት መስመሩ ውስጥ ወደ መነሻ ዝርዝሩ ይመለሳሉ፤ የጠቋሚው getter ራሱ HTTP አያስኬድም።                                                                                                                                                                                                    |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |           | ራስ-ሰር የማጽዳት ሂደቱ ከ`OMNIROUTE_BATCH_RETENTION_DAYS` የቆዩ የመጨረሻ ሁኔታ ላይ የደረሱ (completed/failed/cancelled/expired) የBatch API ሥራዎችን ከእያንዳንዱ መስመር checkpoints ጋር እንዲሰርዝ፣ እንዲሁም የየራሳቸውን `expires_at` ያለፉ የተሰቀሉ ፋይሎችን BLOB ይዘት እንዲያጸዳ ይፍቀዱ። በነባሪ ጠፍቷል፦ ኦፕሬተር ለማንቃት እስኪመርጥ ድረስ እያንዳንዱ ነባር ጭነት ይህን ውሂብ ልክ እንደበፊቱ ያቆየዋል። በኦፕሬተር የሚጀመረው `DELETE /api/v1/batches/delete-completed` መስመር በሁለቱም ሁኔታዎች አይነካም — እሱ የተለየ፣ ቅድመ ሁኔታ የሌለው ይፋዊ የAPI ውል ነው።                                             |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |           | የመረጠው ጥያቄ በዥረት ላይ እስካለ ድረስ የተመረጠውን Antigravity መለያ ይያዙ፤ ይህም በተመሳሳይ ጊዜ የሚካሄድ ዳግም ሙከራ ወይም የcredential handoff አስቀድሞ በሂደት ላይ ላለ ዥረት የተመደበን መለያ እንደገና እንዳይመርጥ ያደርጋል። ማስያዣው በ(connection, callable upstream model) ወሰን የተገደበ ነው፣ ስለዚህ አንድ መለያ አሁንም ሁለት የተለያዩ ሞዴሎችን በአንድ ጊዜ ማገልገል ይችላል። ሁሉም ብቁ መለያዎች ለዚያ ሞዴል አስቀድመው ተይዘው ከሆነ፣ ጥያቄው በተጨናነቀ መለያ ላይ ከመከማቸት ይልቅ፣ የተዋቀረ 503 `antigravity_pool_busy` ከተገደበ `Retry-After` ጋር ይመልሳል። በነባሪ ጠፍቷል፦ የመለያ ምርጫው ልክ እንደበፊቱ ይቆያል፣ እና ምንም ማስያዣ አይደረግም። |

### CLI (5)

| ቁልፍ                                   | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                 |
| ------------------------------------- | ------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓         | ለሁሉም የCLI ደንበኞች የተኳኋኝነት ሁነታን ያንቁ።                                                                                                                                    |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |           | የሞዴል alias ተኳኋኝነት ንብርብርን ያንቁ።                                                                                                                                        |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |           | ራስ-ሰር የዋጋ አወጣጥ ውሂብ ማመሳሰልን ያንቁ (`PRICING_SYNC_ENABLED` environment variableንም ይፈልጋል)።                                                                                 |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |           | ከprovider ሞዴል ማመሳሰል በኋላ፣ የ~/.codex/*.config.toml profile ፋይሎችን ከቀጥታ ካታሎጉ ራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን Codex config ፈጽሞ አይለውጥም። በነባሪ ጠፍቷል።                           |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |           | ከprovider ሞዴል ማመሳሰል በኋላ፣ የ~/.claude/profiles/<name>/settings.json Claude Code profilesን ከቀጥታ ካታሎጉ ራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን Claude config ፈጽሞ አይለውጥም። በነባሪ ጠፍቷል። |

### ጤና (5)

| ቁልፍ                                       | ዓይነት    | ነባሪ     | መግለጫ                                                                                                                                                                                                          |
| ----------------------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | boolean | `false` | የአካባቢያዊ ኢንስታንስ ጤና ምርመራ መጨረሻ ነጥብን ያሰናክሉ።                                                                                                                                                                       |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | boolean | `false` | የቶከን ማረጋገጫ ጤና ምርመራን ያሰናክሉ።                                                                                                                                                                                    |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | boolean | `false` | በችሎታዎች sandbox አካባቢ ውስጥ የአውታረ መረብ መዳረሻን ያንቁ።                                                                                                                                                                  |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | boolean | `false` | በፕሮክሲ ጤና ቅኝት ውስጥ፣ ዒላማው ያልተቀበለው መርማሪ (401/403/429) የፕሮክሲውን ተከታታይ-ውድቀት ቆጠራ ዳግም ያስጀምራል። በነባሪ ጠፍቷል፦ አለመቀበል ገለልተኛ ሆኖ ይቆያል (#10654)። 5xx በሁለቱም ሁኔታ የማያሳምን ሆኖ ይቆያል፤ አለመቀበል ፕሮክሲን ፈጽሞ አያስወግድም፣ አያሰናክልም ወይም ዳግም አያነቃም። |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | boolean | `false` | የአገልጋዩን መጀመር እስኪጠናቀቅ ከማገድ ይልቅ፣ አገልጋዩ ጥያቄዎችን መቀበል ከጀመረ በኋላ (በ`setImmediate` በኩል) የጅምር DB ታማኝነት/ጤና ምርመራውን ያሂዱ (#13717)። በነባሪ ጠፍቷል፦ ጅምሩ ከዚህ PR በፊት እንደነበረው በትክክል ይታገዳል።                                          |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` እና የቆየ ተለዋጭ ስሙ
> `INJECTION_GUARD_BLOCK_THRESHOLD` የ`INJECTION_GUARD_MODE`ን `block` ሁነታ
> ያስተካክላሉ፣ ነገር ግን እነሱ በ
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> የሚነበቡ መደበኛ የአካባቢ ተለዋዋጮች እንጂ የባህሪ ጠቋሚዎች አይደሉም፦ የDB መሻርም ሆነ የዳሽቦርድ መቀያየሪያ የላቸውም።
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)ን ይመልከቱ።

> [!NOTE]
> የ`Restart` ዓምድ `requiresRestart: true` ያላቸውን ጠቋሚዎች ይለያል — እሴቱ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ሂደቱ ዳግም ከተጫነ በኋላ ብቻ ተግባራዊ ይሆናል። Enum
> ጠቋሚዎች ከተፈቀደላቸው ስብስብ ውጭ ያለን ማንኛውንም እሴት ውድቅ ያደርጋሉ (በአገልጋይ በኩል በ
> `setFeatureFlagOverride()` እና በREST `PUT` ተቆጣጣሪው ውስጥ የተረጋገጠ)።

---

## ጠቋሚዎችን ማብራትና ማጥፋት

### ዳሽቦርድ

ወደ **ዳሽቦርድ → ቅንብሮች → የባህሪ ጠቋሚዎች**
(`/dashboard/settings/feature-flags`) ይሂዱ። ሰንጠረዡ
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
የሚከተሉትን ይደግፋል፦

- በቁልፍ ወይም በመግለጫ **መፈለግ**፣ እና በምድብ **ማጣራት** (በተጨማሪም የተፈጠረ
  **ዳግም ማስጀመር ያስፈልገዋል** እይታ)።
- ለቡሊያን ጠቋሚዎች **ማብሪያ/ማጥፊያ** እና ለenum ጠቋሚዎች **ተቆልቋይ ምናሌ**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)።
- በእያንዳንዱ ጠቋሚ ላይ ውጤታማው እሴት ከየት እንደመጣ የሚያሳይ **የምንጭ ባጅ** — `DB`፣ `ENV`፣ ወይም `DEF`።
- ልዩ ቅንብሩን ለማስወገድ **ዳግም አስጀምር** አዝራር (`DB` ምንጭ ላላቸው ጠቋሚዎች ብቻ የሚታይ)፣
  እና ከታች **ሁሉንም ልዩ ቅንብሮች ዳግም አስጀምር** አዝራር።
- `requiresRestart` ያለው ጠቋሚ ሲቀየር **ሰርቨሩን ዳግም አስጀምር** ባነር።

### REST API

ሁሉም ክወናዎች በአንድ መስመር ብቻ ያልፋሉ፦
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)።
እያንዳንዱ ዘዴ የተረጋገጠ የዳሽቦርድ ክፍለ ጊዜ ይፈልጋል (ካልሆነ `401`)።

#### `GET /api/settings/feature-flags`

እያንዳንዱን ጠቋሚ ከውጤታማ እሴቱ፣ ምንጩ እና ማጠቃለያው ጋር ይመልሳል።

```jsonc
{
  "flags": [
    {
      "key": "REQUIRE_API_KEY",
      "label": "Require API Key",
      "description": "Require an API key for all incoming requests",
      "category": "security",
      "type": "boolean",
      "enumValues": null,
      "defaultValue": "false",
      "effectiveValue": "false",
      "source": "default", // "db" | "env" | "default"
      "requiresRestart": false,
      "warningLevel": "caution",
    },
    // ... ሁሉም 77 ጠቋሚዎች
  ],
  "summary": {
    "total": 56,
    "active": 0,
    "inactive": 0,
    "overriddenByDb": 0,
    "overriddenByEnv": 0,
  },
}
```

#### `PUT /api/settings/feature-flags`

አንድ ልዩ ቅንብር ያዘጋጁ ወይም ያስወግዱ። የጥያቄ አካል፦ `{ key: string; value?: string }`።
`value`ን አለማካተት ልዩ ቅንብሩን ያስወግዳል (የenv / default እሴቱን ይመልሳል)።

```bash
# የDB ልዩ ቅንብር አዘጋጅ
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# ልዩ ቅንብሩን አስወግድ ("value" የለም)
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

ምላሹ አዲሱን `effectiveValue`/`source`፣ `previousValue`/
`previousSource` እና `requiresRestart` መልሶ ያሳያል። ያልታወቁ ቁልፎች እና ከተፈቀደው ክልል ውጭ ያሉ የenum
እሴቶች በ`400` ውድቅ ይደረጋሉ።

#### `DELETE /api/settings/feature-flags`

**ሁሉንም** የDB ልዩ ቅንብሮች በአንድ ጊዜ ያጸዳል፣ እያንዳንዱን ጠቋሚ ወደ env / default
እሴቱ ይመልሳል። `{ cleared: <count>, message: "..." }`ን ይመልሳል።

> [!NOTE]
> `requiresRestart: true` ያላቸው ጠቋሚዎች ሥራ ላይ የሚውሉት ፕሮሰሱ ዳግም ከተጫነ በኋላ ብቻ ነው።
> የዳሽቦርዱ ዳግም ማስጀመሪያ ፍሰት `POST /api/restart`ን ይጠራል፣ ከዚያም ሰርቨሩ ዳግም እስኪነሳ ድረስ
> `GET /api/health/ping`ን በተደጋጋሚ ይፈትሻል።

---

## የአደጋ ጊዜ በጀት አማራጭ

`OMNIROUTE_EMERGENCY_FALLBACK` (ምድብ `runtime`፣ ነባሪ `true`) በ
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
ውስጥ ያለውን የአደጋ ጊዜ ነፃ አማራጭ መንገድ ይቆጣጠራል።
ሲነቃ፣ በጀታቸውን የጨረሱ ጥያቄዎች ሙሉ በሙሉ ከመክሸፍ ይልቅ ወደ ነፃ አማራጭ
አቅራቢ/ሞዴል ይመራሉ። ይህን ባህሪ ለማሰናከል እና በጀታቸውን የጨረሱ ጥያቄዎች
እንዲከሽፉ ለማድረግ፣ በዳሽቦርድ ማብሪያ/ማጥፊያ፣ በDB መሻር፣ ወይም በ
`OMNIROUTE_EMERGENCY_FALLBACK` የአካባቢ ተለዋዋጭ በኩል — ወደ `false` (ወይም `0`)
ያቀናብሩት። (በPRs #3741 / #3752 ውስጥ እንደ የዳሽቦርድ ማብሪያ/ማጥፊያ ቀርቧል።)

በዚህ አማራጭ የቀረበ ምላሽ
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>` ይይዛል፤ በዚህም
ደንበኛው `X-OmniRoute-Provider`ን ከጥያቄው ጋር ሳያነጻጽር ጥያቄው እንደገና መመራቱን
ማወቅ ይችላል። ይህ ራስጌ በሌሎች ምላሾች ሁሉ ላይ አይኖርም።

---

## በተጨማሪ ይመልከቱ

- [የአካባቢ ተለዋዋጮች ማጣቀሻ](./ENVIRONMENT.md) — አብዛኛዎቹ ጠቋሚዎች እዚያ የተመዘገበ ተመሳሳይ ስም ያለው የአካባቢ ተለዋዋጭ አላቸው (የDB መሻር ከእሱ ይቀድማል)።
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — ለእያንዳንዱ ጠቋሚ ትክክለኛው የመረጃ ምንጭ።
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — የመፍታት አመክንዮ (`resolveFeatureFlag`፣ `isFeatureFlagEnabled`፣
  `resolveAllFeatureFlags`)።
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — በ`key_value` ሰንጠረዥ
  `feature_flags` namespace ውስጥ የDB መሻርን በቋሚነት ማከማቸት።
