# Merge Queue & Manual Merge-Train Runbook (தமிழ்)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/MERGE_TRAIN.md) · 🇪🇹 [am](../../../am/docs/ops/MERGE_TRAIN.md) · 🇸🇦 [ar](../../../ar/docs/ops/MERGE_TRAIN.md) · 🇦🇿 [az](../../../az/docs/ops/MERGE_TRAIN.md) · 🇧🇬 [bg](../../../bg/docs/ops/MERGE_TRAIN.md) · 🇧🇩 [bn](../../../bn/docs/ops/MERGE_TRAIN.md) · 🇧🇦 [bs](../../../bs/docs/ops/MERGE_TRAIN.md) · 🇨🇿 [cs](../../../cs/docs/ops/MERGE_TRAIN.md) · 🇩🇰 [da](../../../da/docs/ops/MERGE_TRAIN.md) · 🇩🇪 [de](../../../de/docs/ops/MERGE_TRAIN.md) · 🇬🇷 [el](../../../el/docs/ops/MERGE_TRAIN.md) · 🇪🇸 [es](../../../es/docs/ops/MERGE_TRAIN.md) · 🇪🇪 [et](../../../et/docs/ops/MERGE_TRAIN.md) · 🇮🇷 [fa](../../../fa/docs/ops/MERGE_TRAIN.md) · 🇫🇮 [fi](../../../fi/docs/ops/MERGE_TRAIN.md) · 🇫🇷 [fr](../../../fr/docs/ops/MERGE_TRAIN.md) · 🇮🇪 [ga](../../../ga/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [gu](../../../gu/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ha](../../../ha/docs/ops/MERGE_TRAIN.md) · 🇮🇱 [he](../../../he/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [hi](../../../hi/docs/ops/MERGE_TRAIN.md) · 🇭🇷 [hr](../../../hr/docs/ops/MERGE_TRAIN.md) · 🇭🇺 [hu](../../../hu/docs/ops/MERGE_TRAIN.md) · 🇦🇲 [hy](../../../hy/docs/ops/MERGE_TRAIN.md) · 🇮🇩 [id](../../../id/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ig](../../../ig/docs/ops/MERGE_TRAIN.md) · 🇮🇹 [it](../../../it/docs/ops/MERGE_TRAIN.md) · 🇯🇵 [ja](../../../ja/docs/ops/MERGE_TRAIN.md) · 🇬🇪 [ka](../../../ka/docs/ops/MERGE_TRAIN.md) · 🇰🇭 [km](../../../km/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [kn](../../../kn/docs/ops/MERGE_TRAIN.md) · 🇰🇷 [ko](../../../ko/docs/ops/MERGE_TRAIN.md) · 🇱🇹 [lt](../../../lt/docs/ops/MERGE_TRAIN.md) · 🇱🇻 [lv](../../../lv/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ml](../../../ml/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [mr](../../../mr/docs/ops/MERGE_TRAIN.md) · 🇲🇾 [ms](../../../ms/docs/ops/MERGE_TRAIN.md) · 🇲🇹 [mt](../../../mt/docs/ops/MERGE_TRAIN.md) · 🇲🇲 [my](../../../my/docs/ops/MERGE_TRAIN.md) · 🇳🇵 [ne](../../../ne/docs/ops/MERGE_TRAIN.md) · 🇳🇱 [nl](../../../nl/docs/ops/MERGE_TRAIN.md) · 🇳🇴 [no](../../../no/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [or](../../../or/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [pa](../../../pa/docs/ops/MERGE_TRAIN.md) · 🇵🇭 [phi](../../../phi/docs/ops/MERGE_TRAIN.md) · 🇵🇱 [pl](../../../pl/docs/ops/MERGE_TRAIN.md) · 🇵🇹 [pt](../../../pt/docs/ops/MERGE_TRAIN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/MERGE_TRAIN.md) · 🇷🇴 [ro](../../../ro/docs/ops/MERGE_TRAIN.md) · 🇷🇺 [ru](../../../ru/docs/ops/MERGE_TRAIN.md) · 🇱🇰 [si](../../../si/docs/ops/MERGE_TRAIN.md) · 🇸🇰 [sk](../../../sk/docs/ops/MERGE_TRAIN.md) · 🇸🇮 [sl](../../../sl/docs/ops/MERGE_TRAIN.md) · 🇷🇸 [sr](../../../sr/docs/ops/MERGE_TRAIN.md) · 🇸🇪 [sv](../../../sv/docs/ops/MERGE_TRAIN.md) · 🇰🇪 [sw](../../../sw/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [te](../../../te/docs/ops/MERGE_TRAIN.md) · 🇹🇭 [th](../../../th/docs/ops/MERGE_TRAIN.md) · 🇹🇷 [tr](../../../tr/docs/ops/MERGE_TRAIN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/MERGE_TRAIN.md) · 🇵🇰 [ur](../../../ur/docs/ops/MERGE_TRAIN.md) · 🇺🇿 [uz](../../../uz/docs/ops/MERGE_TRAIN.md) · 🇻🇳 [vi](../../../vi/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [yo](../../../yo/docs/ops/MERGE_TRAIN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/MERGE_TRAIN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/MERGE_TRAIN.md)

---

v3.8.49 முதல் (தரம்/வேகத் திட்டத்தின் WS3.2/WS3.4), மதிப்பாய்வு செய்யப்பட்ட PR-களை
`release/vX.Y.Z`-இல் இணைப்பதற்கான இயல்புநிலைப் பாதை **Mergify இணைப்பு வரிசை** (`.mergify.yml`);
கீழே ஆவணப்படுத்தப்பட்டுள்ள **கைமுறை merge-train** ஒரு மாற்று வழியாகும் — சம்பவங்கள்,
வெளியீட்டு முடக்கங்கள் அல்லது Mergify Open Source திட்டம் எப்போதாவது மாறினால் இது பயன்படுத்தப்படும்.

## இயல்புநிலைப் பாதை: Mergify வரிசை

1. PR, பிரச்சாரங்களால் மதிப்பாய்வு செய்யப்பட்டு/பச்சை நிலை பெற்று, உரிமையாளரின் இணைப்புக்கு முந்தைய ⭐
   வாயிலால் அங்கீகரிக்கப்படுகிறது (அறிக்கை + ஒவ்வொரு உருப்படிக்குமான முடிவு — `/merge-prs` படி 0.75-ஐப் பார்க்கவும்).
2. உரிமையாளர் (அல்லது உரிமையாளரின் முடிவின்படி செயல்படும் அமர்வு) **`queue`**
   லேபிளைப் பயன்படுத்துகிறார். அந்த லேபிளே இணைப்பு அங்கீகாரம்; Mergify அதைச் செயல்படுத்துவது மட்டுமே.
3. Mergify வரிசையிலுள்ள அதிகபட்சம் 10 PR-களைத் தொகுதியாக்கி, fast-gates-க்கு எதிராகத் தொகுதியைச்
   சரிபார்த்து, இணைக்கிறது (squash). சிவப்பு நிலையிலுள்ள தொகுதி **தானாக இரண்டாகப் பிரிக்கப்படுகிறது** — சிக்கலுக்குரிய PR
   சுமார் log2(N) மறுசரிபார்ப்புகளில் தனிமைப்படுத்தப்பட்டு வரிசையிலிருந்து நீக்கப்படுகிறது; மீதமுள்ளவை தொடர்கின்றன.
4. இணைப்புக்குப் பிறகு, தொடர்ச்சியான release-green பணிப்பாய்வு, push செய்யப்படும்போது புதிய tip-ஐச்
   சரிபார்த்து, சேர்க்கையால் பின்னடைவு ஏற்பட்டிருந்தால் attribution issue ஒன்றைத் திறக்கிறது (தானாக revert செய்யாது).

பாதுகாப்பு வரம்புகள் (`CLAUDE.md` கடுமையான விதிகள் #21/#22-ஐப் பிரதிபலிப்பவை):

- **வெளியீட்டு முடக்கம் செயலில் உள்ளது** → முடக்கப்பட்ட கிளையைக் குறிவைக்கும் PR-களுக்கு லேபிளிட வேண்டாம்; முதலில் செயலில் உள்ள
  `release/vX+1`-ஐக் குறிவைக்குமாறு மாற்றவும்.
- **வேறொரு அமர்வின் செயல்பாட்டிலுள்ள PR** → அதற்கு ஒருபோதும் லேபிளிட வேண்டாம்; உரிமையுள்ள அமர்வு மட்டுமே
  தனது பணியை வரிசைப்படுத்த வேண்டும்.
- சோதனைகள் மட்டுமே கொண்ட diff-களும் `hotfix` லேபிளிடப்பட்ட PR-களும் ஏற்கனவே குறைக்கப்பட்ட CI-ஐ இயக்குகின்றன
  (`RELEASE_CHECKLIST.md` → Hotfix Fast-Lane-ஐப் பார்க்கவும்); உண்மையில் இயக்கப்பட்ட எந்தச் சரிபார்ப்புத்
  தொகுப்பையும் வரிசை நிபந்தனைகள் ஏற்கின்றன (`#check-failure=0` + `#check-pending=0`).

## மாற்று வழி: கைமுறை merge-train

வரிசை கிடைக்காதபோது பயன்படுத்தப்படும். v3.8.47 சுழற்சியின்போது ஒரே நாளில் 33 PR-களை
முடித்த நடைமுறையை இது முறைப்படுத்துகிறது:

1. **தொகுதியை உருவாக்கவும்** (மதிப்பாய்வு செய்யப்பட்டு+அங்கீகரிக்கப்பட்ட சுமார் 10–30 PR-கள்). `linked:` மோதல்களைச்
   சரிபார்த்து (அதே `tap.testFiles`, அதே CHANGELOG பகுதிகள்), அவற்றைத் தொடர்வரிசைப்படுத்தவும்.
2. **ஒருமுறை மட்டும் சரிபார்க்கவும்**: வெளியீட்டு tip-இலிருந்து உருவாக்கப்பட்ட தனிமைப்படுத்தப்பட்ட worktree-இல், தொகுதியின் அனைத்து
   head-களையும் உள்ளூரில் இணைத்து, பின்னர் வெளியீட்டிற்குச் சமமான தொகுப்பை இயக்கவும்
   (`npm run check:release-green`; வெளியீட்டுக்கு முன் `--with-build`-ஐச் சேர்க்கவும்).
   `scripts/release/merge-train.sh <base> <PR#>…`, படிகள் 1–2-ஐத் தானியக்கமாக்குகிறது (மோதும்
   PR-கள் வெளியேற்றப்படும்; train தொடரும்). முழுப் பயன்முறை `npm run test:unit`-ஐ இயக்குகிறது — அதாவது
   இயந்திரத்திற்கேற்ப சீரமைக்கப்பட்ட runner (`--test-concurrency=20`), **இரண்டு தொடர் 4-core CI
   shard-கள் அல்ல**; அவை ஒரு 16-core இயந்திரத்தில் பிரதான கட்டத்தை சுமார் 25% பயன்பாட்டிலேயே இயக்கின (இது
   2026-07-18 அன்று சரிசெய்யப்பட்டது). `--fast` (ஒரே நாளுக்குள் mega-train-களை முடிப்பதற்காக, உரிமையாளரால் 2026-07-18 அன்று அங்கீகரிக்கப்பட்டது)
   ஒவ்வொரு static gate + vitest-ஐயும் வைத்துக்கொள்கிறது, ஆனால் train-இல் ஏற்றப்பட்ட PR-களால் மாற்றப்பட்ட
   node:test கோப்புகளை மட்டுமே இயக்குகிறது; குவிக்கப்பட்ட tip மீது முழுத் தொகுப்பு ஒரு நாளுக்கு குறைந்தது
   ஒருமுறையாவது இயங்க வேண்டும் (`--fast` இல்லாத ஒரு train).
3. **பச்சை** → PR-களை வரிசையாக இணைக்கவும் (ஒவ்வொன்றுக்கும் முன் `state,headRefOid`-ஐ மீண்டும் சரிபார்த்து —
   head மாறியுள்ள PR மீண்டும் மதிப்பாய்வுக்குள் செல்கிறது). ஒவ்வொரு இணைப்பின் நிகர diff-ம் அந்த
   PR-க்குச் சொந்தமான மாற்றமே என்பதை நிரூபிக்கவும் (தானாக resolve செய்யப்பட்ட revert-கள் கூடாது: வரம்பிற்கு அப்பாற்பட்ட
   நீக்கங்களைக் கண்டறிய `git diff --stat`-ஐத் தணிக்கை செய்யவும்).
4. **சிவப்பு** → ஒவ்வொன்றாக மீண்டும் சரிபார்ப்பதற்குப் பதிலாகத் தொகுதியை இரு பாதிகளாகப் பிரிக்கவும்
   (ஒவ்வொரு பாதியையும் சரிபார்க்கவும்); சிக்கலுக்குரிய PR-ஐ ஆதாரத்துடன் மீண்டும் மதிப்பாய்வு வரிசைக்குத் திருப்பவும்.
5. **ஒருபோதும் செய்யக்கூடாதவை**: முடக்கத்தின் போது முடக்கப்பட்ட கிளையில் இணைத்தல்; எங்கும் `git stash` பயன்படுத்துதல்;
   சிவப்பு நிலை மறைந்துவிடும் என்ற நம்பிக்கையில் CI-ஐ மொத்தமாக மீண்டும் இயக்குதல் (விதி: சிவப்பு நிலை என்பது தகவல்).

## அடுக்கமைப்பு (fast-gates மட்டும் இருந்தாலும் வரிசை ஏன் பாதுகாப்பானது)

- **ஒவ்வொரு PR-க்கும்** (quality.yml fast-gates): TIA-வால் பாதிக்கப்படும் சோதனைகள் + முழுமையான unit 4-shard +
  vitest + lint தொகுப்பு + typecheck + docs/changelog ஒருமைப்பாடு.
- **ஒவ்வொரு தொகுதி/tip-க்கும்** (தொடர்ச்சியான release-green): வெளியீட்டுக் கிளைக்கான ஒவ்வொரு push-இலும் `--quick` HARD gates;
  முழுமையான `--with-build --full-ci` சரிபார்ப்புகள் நாளொன்றுக்கு 3×.
- **ஒவ்வொரு வெளியீட்டுக்கும்** (வெளியீட்டு PR-இல் ci.yml): E2E ×9 உள்ளிட்ட முழுமையான matrix,
  package-artifact + tarball boot-smoke, coverage/ratchets.

முன்பைவிட எதுவும் குறைவாகச் சரிபார்க்கப்படவில்லை — கனமான சரிபார்ப்புப் பரப்பு மட்டும் ஒவ்வொரு PR-க்கும்
பதிலாக ஒவ்வொரு தொகுதி/tip-க்கும் இயங்குகிறது; இதுவே O(N) சுற்றுப்பயணங்களை நீக்குகிறது.

## `merge-train.sh`-க்கான புதிய checkout முன்தேவைகள்

செயலிழந்த install ஒருபோதும் சிவப்பு train போலத் தோன்றாமல் இருக்க, script மூல checkout-இல்
(எந்த worktree பணிக்கும் முன்) பிழை ஏற்பட்டவுடன் நிறுத்தும் **preflight**-ஐ இயக்குகிறது:

1. `npm ci`, பின்னர் npm தடுக்கும் `bun` postinstall-ஐ இயக்கவும்:
   `(cd node_modules/bun && node install.js)` — இல்லையெனில் `check:provider-consistency`
   மற்றும் `check:known-symbols` (இரண்டும் `bun scripts/…`) ஆகியவை train-இலும் base-இலும்
   எந்த violation வரியும் இல்லாமல் தோல்வியடையும்.
2. தேவையற்ற `node_modules/node_modules` இருக்கக்கூடாது (இது நகலான dependency tree; React இருமுறை ஏற்றப்பட்டு
   UI vitest தொகுப்புகள் உடனடியாகத் தோல்வியடையும்).
3. `node_modules/.bin/tsc` இருக்க வேண்டும், மேலும் இயக்கக்கூடியதாக இருக்க வேண்டும் (முழுமையற்ற install-இல் அது இருக்காது).

train, தடுக்கும் தன்மையுள்ள `npm run check:cycles:ratchet`-ஐ இயக்குகிறது; தனியாக இயக்கப்படும் `npm run check:cycles`
ஆலோசனைக்கானது (அது SCC-களைப் பட்டியலிட்டு, ஆரோக்கியமான base-இலும் பூஜ்ஜியமல்லாத exit code-உடன் வெளியேறும்).
