# Merge Queue & Manual Merge-Train Runbook (ଓଡ଼ିଆ)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/MERGE_TRAIN.md) · 🇪🇹 [am](../../../am/docs/ops/MERGE_TRAIN.md) · 🇸🇦 [ar](../../../ar/docs/ops/MERGE_TRAIN.md) · 🇦🇿 [az](../../../az/docs/ops/MERGE_TRAIN.md) · 🇧🇬 [bg](../../../bg/docs/ops/MERGE_TRAIN.md) · 🇧🇩 [bn](../../../bn/docs/ops/MERGE_TRAIN.md) · 🇧🇦 [bs](../../../bs/docs/ops/MERGE_TRAIN.md) · 🇨🇿 [cs](../../../cs/docs/ops/MERGE_TRAIN.md) · 🇩🇰 [da](../../../da/docs/ops/MERGE_TRAIN.md) · 🇩🇪 [de](../../../de/docs/ops/MERGE_TRAIN.md) · 🇬🇷 [el](../../../el/docs/ops/MERGE_TRAIN.md) · 🇪🇸 [es](../../../es/docs/ops/MERGE_TRAIN.md) · 🇪🇪 [et](../../../et/docs/ops/MERGE_TRAIN.md) · 🇮🇷 [fa](../../../fa/docs/ops/MERGE_TRAIN.md) · 🇫🇮 [fi](../../../fi/docs/ops/MERGE_TRAIN.md) · 🇫🇷 [fr](../../../fr/docs/ops/MERGE_TRAIN.md) · 🇮🇪 [ga](../../../ga/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [gu](../../../gu/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ha](../../../ha/docs/ops/MERGE_TRAIN.md) · 🇮🇱 [he](../../../he/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [hi](../../../hi/docs/ops/MERGE_TRAIN.md) · 🇭🇷 [hr](../../../hr/docs/ops/MERGE_TRAIN.md) · 🇭🇺 [hu](../../../hu/docs/ops/MERGE_TRAIN.md) · 🇦🇲 [hy](../../../hy/docs/ops/MERGE_TRAIN.md) · 🇮🇩 [id](../../../id/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ig](../../../ig/docs/ops/MERGE_TRAIN.md) · 🇮🇹 [it](../../../it/docs/ops/MERGE_TRAIN.md) · 🇯🇵 [ja](../../../ja/docs/ops/MERGE_TRAIN.md) · 🇬🇪 [ka](../../../ka/docs/ops/MERGE_TRAIN.md) · 🇰🇭 [km](../../../km/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [kn](../../../kn/docs/ops/MERGE_TRAIN.md) · 🇰🇷 [ko](../../../ko/docs/ops/MERGE_TRAIN.md) · 🇱🇹 [lt](../../../lt/docs/ops/MERGE_TRAIN.md) · 🇱🇻 [lv](../../../lv/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ml](../../../ml/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [mr](../../../mr/docs/ops/MERGE_TRAIN.md) · 🇲🇾 [ms](../../../ms/docs/ops/MERGE_TRAIN.md) · 🇲🇹 [mt](../../../mt/docs/ops/MERGE_TRAIN.md) · 🇲🇲 [my](../../../my/docs/ops/MERGE_TRAIN.md) · 🇳🇵 [ne](../../../ne/docs/ops/MERGE_TRAIN.md) · 🇳🇱 [nl](../../../nl/docs/ops/MERGE_TRAIN.md) · 🇳🇴 [no](../../../no/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [pa](../../../pa/docs/ops/MERGE_TRAIN.md) · 🇵🇭 [phi](../../../phi/docs/ops/MERGE_TRAIN.md) · 🇵🇱 [pl](../../../pl/docs/ops/MERGE_TRAIN.md) · 🇵🇹 [pt](../../../pt/docs/ops/MERGE_TRAIN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/MERGE_TRAIN.md) · 🇷🇴 [ro](../../../ro/docs/ops/MERGE_TRAIN.md) · 🇷🇺 [ru](../../../ru/docs/ops/MERGE_TRAIN.md) · 🇱🇰 [si](../../../si/docs/ops/MERGE_TRAIN.md) · 🇸🇰 [sk](../../../sk/docs/ops/MERGE_TRAIN.md) · 🇸🇮 [sl](../../../sl/docs/ops/MERGE_TRAIN.md) · 🇷🇸 [sr](../../../sr/docs/ops/MERGE_TRAIN.md) · 🇸🇪 [sv](../../../sv/docs/ops/MERGE_TRAIN.md) · 🇰🇪 [sw](../../../sw/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ta](../../../ta/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [te](../../../te/docs/ops/MERGE_TRAIN.md) · 🇹🇭 [th](../../../th/docs/ops/MERGE_TRAIN.md) · 🇹🇷 [tr](../../../tr/docs/ops/MERGE_TRAIN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/MERGE_TRAIN.md) · 🇵🇰 [ur](../../../ur/docs/ops/MERGE_TRAIN.md) · 🇺🇿 [uz](../../../uz/docs/ops/MERGE_TRAIN.md) · 🇻🇳 [vi](../../../vi/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [yo](../../../yo/docs/ops/MERGE_TRAIN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/MERGE_TRAIN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/MERGE_TRAIN.md)

---

v3.8.49 (quality/velocity ଯୋଜନାର WS3.2/WS3.4) ପରଠାରୁ, ସମୀକ୍ଷା କରାଯାଇଥିବା PRଗୁଡ଼ିକୁ
`release/vX.Y.Z`ରେ ମର୍ଜ କରିବା ପାଇଁ ଡିଫଲ୍ଟ ପଥ ହେଉଛି **Mergify ମର୍ଜ କ୍ୟୁ** (`.mergify.yml`);
ନିମ୍ନରେ ଲିପିବଦ୍ଧ **ମାନୁଆଲ୍ ମର୍ଜ-ଟ୍ରେନ୍** ହେଉଛି FALLBACK — ଘଟଣା ସମୟରେ,
ରିଲିଜ୍ ଫ୍ରିଜ୍ ସମୟରେ, କିମ୍ବା Mergify Open Source ଯୋଜନା କେବେ ପରିବର୍ତ୍ତିତ ହେଲେ ଏହା ବ୍ୟବହୃତ ହୁଏ।

## ଡିଫଲ୍ଟ ପଥ: Mergify କ୍ୟୁ

1. ପ୍ରଚାରଗୁଡ଼ିକ ଦ୍ୱାରା PR ସମୀକ୍ଷିତ/ଗ୍ରୀନ୍ ହୁଏ ଏବଂ ମାଲିକଙ୍କ ପ୍ରି-ମର୍ଜ ⭐
   ଗେଟ୍ ଦ୍ୱାରା ଅନୁମୋଦିତ ହୁଏ (ରିପୋର୍ଟ + ପ୍ରତ୍ୟେକ ଆଇଟମ୍ ପାଇଁ ନିଷ୍ପତ୍ତି — `/merge-prs` ପଦକ୍ଷେପ 0.75 ଦେଖନ୍ତୁ)।
2. ମାଲିକ (କିମ୍ବା ମାଲିକଙ୍କ ନିଷ୍ପତ୍ତି ଆଧାରରେ କାର୍ଯ୍ୟ କରୁଥିବା ସେସନ୍) **`queue`**
   ଲେବଲ୍ ପ୍ରୟୋଗ କରନ୍ତି। ଏହି ଲେବଲ୍ ହିଁ ମର୍ଜ ଅନୁମୋଦନ; Mergify କେବଳ ଏହାକୁ କାର୍ଯ୍ୟକାରୀ କରେ।
3. Mergify କ୍ୟୁରେ ଥିବା ସର୍ବାଧିକ 10ଟି PRକୁ ବ୍ୟାଚ୍ କରେ, fast-gates ବିପକ୍ଷରେ ବ୍ୟାଚ୍ଟିକୁ ବୈଧତା ଯାଞ୍ଚ କରେ,
   ଏବଂ ମର୍ଜ (squash) କରେ। ଏକ ରେଡ୍ ବ୍ୟାଚ୍ **ସ୍ୱୟଂଚାଳିତ ଭାବେ ଦ୍ୱିଭାଜିତ ହୁଏ** — ତ୍ରୁଟିକାରୀ PRକୁ
   ~log2(N) ପୁନଃବୈଧତା ଯାଞ୍ଚରେ ପୃଥକ କରି କ୍ୟୁରୁ ହଟାଇ ଦିଆଯାଏ; ଅବଶିଷ୍ଟଗୁଡ଼ିକ ଆଗକୁ ବଢ଼େ।
4. ମର୍ଜ ପରେ, ଅବିରତ release-green ୱର୍କଫ୍ଲୋ push ସମୟରେ ନୂଆ tipକୁ ବୈଧତା ଯାଞ୍ଚ କରେ
   ଏବଂ ସଂଯୋଜନଟି ରିଗ୍ରେସ୍ କରିଥିଲେ ଏକ attribution issue ଖୋଲେ (କେବେ ବି ସ୍ୱୟଂଚାଳିତ ଭାବେ revert କରେ ନାହିଁ)।

ସୁରକ୍ଷା ନିୟମାବଳୀ (`CLAUDE.md`ର Hard Rules #21/#22କୁ ପ୍ରତିଫଳିତ କରେ):

- **ରିଲିଜ୍ ଫ୍ରିଜ୍ ଖୋଲା ଅଛି** → ଫ୍ରିଜ୍ ହୋଇଥିବା ବ୍ରାଞ୍ଚକୁ ଲକ୍ଷ୍ୟ କରୁଥିବା PRଗୁଡ଼ିକୁ ଲେବଲ୍ କରନ୍ତୁ ନାହିଁ; ପ୍ରଥମେ
  ସକ୍ରିୟ `release/vX+1`କୁ ପୁନଃଲକ୍ଷ୍ୟ କରନ୍ତୁ।
- **ଅନ୍ୟ ଏକ ସେସନ୍ର ଚାଲୁଥିବା PR** → ଏହାକୁ କେବେ ବି ଲେବଲ୍ କରନ୍ତୁ ନାହିଁ; କେବଳ ମାଲିକାନାଧୀନ ସେସନ୍ ନିଜ କାମକୁ କ୍ୟୁ କରେ।
- କେବଳ ପରୀକ୍ଷା ଥିବା diff ଏବଂ `hotfix`-ଲେବଲ୍ ଥିବା PRଗୁଡ଼ିକ ପୂର୍ବରୁ ହ୍ରାସିତ CI ଚଲାନ୍ତି (
  `RELEASE_CHECKLIST.md` → Hotfix Fast-Lane ଦେଖନ୍ତୁ); କ୍ୟୁ ସର୍ତ୍ତଗୁଡ଼ିକ ବାସ୍ତବରେ ଚାଲିଥିବା
  ଯେକୌଣସି check ସେଟ୍କୁ ଗ୍ରହଣ କରେ (`#check-failure=0` + `#check-pending=0`)।

## ଫଲ୍ବ୍ୟାକ୍: ମାନୁଆଲ୍ ମର୍ଜ-ଟ୍ରେନ୍

କ୍ୟୁ ଉପଲବ୍ଧ ନଥିବା ବେଳେ ଏହା ବ୍ୟବହୃତ ହୁଏ। ଏହା v3.8.47 ଚକ୍ର ସମୟରେ ଗୋଟିଏ ଦିନରେ
33ଟି PR ନିଷ୍କାସନ କରିଥିବା ପ୍ରଚଳନକୁ ବିଧିବଦ୍ଧ କରେ:

1. **ବ୍ୟାଚ୍ ଏକତ୍ର କରନ୍ତୁ** (~10–30ଟି ସମୀକ୍ଷିତ+ଅନୁମୋଦିତ PR)। `linked:` ସଂଘର୍ଷଗୁଡ଼ିକ ଯାଞ୍ଚ କରନ୍ତୁ
   (ସମାନ `tap.testFiles`, ସମାନ CHANGELOG hunk) ଏବଂ ସେଗୁଡ଼ିକୁ କ୍ରମିକ ଭାବେ ପ୍ରକ୍ରିୟାକରଣ କରନ୍ତୁ।
2. **ଥରେ ମାତ୍ର ବୈଧତା ଯାଞ୍ଚ କରନ୍ତୁ**: release tipରୁ ସୃଷ୍ଟ ଏକ ପୃଥକ worktreeରେ, ସମସ୍ତ batch
   headକୁ ସ୍ଥାନୀୟ ଭାବେ ମର୍ଜ କରନ୍ତୁ, ତା'ପରେ release-ସମତୁଲ୍ୟ suite ଚଲାନ୍ତୁ
   (`npm run check:release-green`, ରିଲିଜ୍ ପୂର୍ବରୁ `--with-build` ଯୋଡ଼ନ୍ତୁ)।
   `scripts/release/merge-train.sh <base> <PR#>…` ପଦକ୍ଷେପ 1–2କୁ ସ୍ୱୟଂଚାଳିତ କରେ (ସଂଘର୍ଷକାରୀ
   PRଗୁଡ଼ିକ ବାହାରିଯାଏ, ଟ୍ରେନ୍ ଜାରି ରହେ)। Full modeରେ `npm run test:unit` ଚାଲେ —
   box-ଅନୁକୂଳିତ runner (`--test-concurrency=20`), **ଦୁଇଟି କ୍ରମିକ 4-core CI
   shard ନୁହେଁ**, ଯାହା 16-core boxର ପ୍ରମୁଖ ପର୍ଯ୍ୟାୟକୁ ~25%ରେ ଚଲାଉଥିଲା (ସମାଧାନ
   2026-07-18)। `--fast` (ଦିନ ମଧ୍ୟରେ mega-train ନିଷ୍କାସନ, 2026-07-18ରେ ମାଲିକଙ୍କ ଦ୍ୱାରା ଅନୁମୋଦିତ)
   ପ୍ରତ୍ୟେକ static gate + vitestକୁ ରଖେ, କିନ୍ତୁ ଚଢ଼ାଯାଇଥିବା PRଗୁଡ଼ିକ ଦ୍ୱାରା ପରିବର୍ତ୍ତିତ କେବଳ node:test ଫାଇଲ୍ଗୁଡ଼ିକୁ
   ଚଲାଏ; ସଞ୍ଚିତ tipରେ FULL suite ଏବେ ବି ପ୍ରତିଦିନ ଅତିକମ୍ରେ ଥରେ
   ଚାଲିବା ଆବଶ୍ୟକ (`--fast` ବିନା ଗୋଟିଏ ଟ୍ରେନ୍)।
3. **ଗ୍ରୀନ୍** → PRଗୁଡ଼ିକୁ କ୍ରମାନୁସାରେ ମର୍ଜ କରନ୍ତୁ (ପ୍ରତ୍ୟେକଟି ପୂର୍ବରୁ `state,headRefOid` ପୁନଃଯାଞ୍ଚ କରି —
   ଯେଉଁ PRର head ପରିବର୍ତ୍ତିତ ହୋଇଛି, ତାହା ପୁଣି ସମୀକ୍ଷାକୁ ଯାଏ)। ପ୍ରତ୍ୟେକ ମର୍ଜର net diff ଯେ
   PRର ନିଜସ୍ୱ ପରିବର୍ତ୍ତନ, ତାହା ପ୍ରମାଣ କରନ୍ତୁ (କୌଣସି auto-resolve revert ନୁହେଁ: ପରିସର ବାହାରର
   ଅପସାରଣ ପାଇଁ `git diff --stat` ଅଡିଟ୍ କରନ୍ତୁ)।
4. **ରେଡ୍** → ଗୋଟିଏ ପରେ ଗୋଟିଏ ପୁନଃବୈଧତା ଯାଞ୍ଚ କରିବା ପରିବର୍ତ୍ତେ ବ୍ୟାଚ୍କୁ ଅଧା ଅଧା କରି ଦ୍ୱିଭାଜିତ କରନ୍ତୁ (ପ୍ରତ୍ୟେକ ଅଧାକୁ ବୈଧତା ଯାଞ୍ଚ କରନ୍ତୁ);
   ପ୍ରମାଣ ସହିତ ତ୍ରୁଟିକାରୀ PRକୁ ପୁଣି review queueକୁ ପଠାନ୍ତୁ।
5. **କେବେ ବି ନୁହେଁ**: ଫ୍ରିଜ୍ ସମୟରେ ଫ୍ରିଜ୍ ହୋଇଥିବା ବ୍ରାଞ୍ଚରେ ମର୍ଜ କରିବା; କୌଣସି ସ୍ଥାନରେ `git stash`;
   ରେଡ୍ ଅଦୃଶ୍ୟ ହୋଇଯିବ ବୋଲି ଆଶା କରି CIକୁ ସାମୂହିକ ଭାବେ ପୁନଃଚଲାଇବା (ନିୟମ: ରେଡ୍ ହେଉଛି ସୂଚନା)।

## ସ୍ତରୀକରଣ (କେବଳ fast-gates ସହିତ କ୍ୟୁ କାହିଁକି ସୁରକ୍ଷିତ)

- **ପ୍ରତ୍ୟେକ PR ପାଇଁ** (quality.yml fast-gates): TIA-ପ୍ରଭାବିତ ପରୀକ୍ଷା + ସମ୍ପୂର୍ଣ୍ଣ unit 4-shard +
  vitest + lint bag + typecheck + docs/changelog ଅଖଣ୍ଡତା।
- **ପ୍ରତ୍ୟେକ batch/tip ପାଇଁ** (ଅବିରତ release-green): release branchକୁ ପ୍ରତ୍ୟେକ pushରେ `--quick` HARD gates;
  ସମ୍ପୂର୍ଣ୍ଣ `--with-build --full-ci` sweep ଦିନକୁ 3 ଥର।
- **ପ୍ରତ୍ୟେକ ରିଲିଜ୍ ପାଇଁ** (release PRରେ ci.yml): E2E ×9 ସମେତ ସମ୍ପୂର୍ଣ୍ଣ matrix,
  package-artifact + tarball boot-smoke, coverage/ratchets।

ପୂର୍ବାପେକ୍ଷା କୌଣସି ଜିନିଷର କମ୍ ବୈଧତା ଯାଞ୍ଚ ହେଉନାହିଁ — ଭାରୀ surface କେବଳ ପ୍ରତ୍ୟେକ PR ପରିବର୍ତ୍ତେ ପ୍ରତ୍ୟେକ batch/tip ପାଇଁ
ଚାଲେ, ଯାହା O(N) round-tripଗୁଡ଼ିକୁ ହଟାଏ।

## `merge-train.sh` ପାଇଁ ନୂଆ-checkout ପୂର୍ବାବଶ୍ୟକତା

ସ୍କ୍ରିପ୍ଟଟି root checkoutରେ (କୌଣସି worktree କାମ ପୂର୍ବରୁ) ଏକ fail-fast **preflight** ଚଲାଏ,
ଯାହାଦ୍ୱାରା ଏକ ଭଙ୍ଗା install କେବେ ବି ରେଡ୍ ଟ୍ରେନ୍ ଭାବେ ଛଦ୍ମବେଶ ଧାରଣ କରିପାରିବ ନାହିଁ:

1. `npm ci`, ତା'ପରେ npm ଅବରୋଧ କରୁଥିବା `bun` postinstall ଚଲାନ୍ତୁ:
   `(cd node_modules/bun && node install.js)` — ନହେଲେ `check:provider-consistency`
   ଏବଂ `check:known-symbols` (ଉଭୟ `bun scripts/…`) ଟ୍ରେନ୍ ଏବଂ base ଉଭୟରେ
   କୌଣସି violation line ବିନା ବିଫଳ ହୁଏ।
2. କୌଣସି ଅନାବଶ୍ୟକ `node_modules/node_modules` ନଥିବା ଆବଶ୍ୟକ (ଏକ ନକଲି dependency tree; React ଦୁଇଥର ଲୋଡ୍ ହୁଏ
   ଏବଂ UI vitest suiteଗୁଡ଼ିକ ତୁରନ୍ତ ବିଫଳ ହୁଏ)।
3. `node_modules/.bin/tsc` ଉପସ୍ଥିତ ଏବଂ executable ହେବା ଆବଶ୍ୟକ (ଏକ ଆଂଶିକ installରେ ଏହା ନଥାଏ)।

ଟ୍ରେନ୍ଟି ଅବରୋଧକ `npm run check:cycles:ratchet` ଚଲାଏ; କେବଳ `npm run check:cycles`
ପରାମର୍ଶମୂଳକ (ଏହା SCCଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରେ ଏବଂ ସୁସ୍ଥ baseରେ ମଧ୍ୟ non-zero ସହିତ ବନ୍ଦ ହୁଏ)।
