# Merge Queue & Manual Merge-Train Runbook (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/MERGE_TRAIN.md) · 🇪🇹 [am](../../../am/docs/ops/MERGE_TRAIN.md) · 🇸🇦 [ar](../../../ar/docs/ops/MERGE_TRAIN.md) · 🇦🇿 [az](../../../az/docs/ops/MERGE_TRAIN.md) · 🇧🇬 [bg](../../../bg/docs/ops/MERGE_TRAIN.md) · 🇧🇩 [bn](../../../bn/docs/ops/MERGE_TRAIN.md) · 🇧🇦 [bs](../../../bs/docs/ops/MERGE_TRAIN.md) · 🇨🇿 [cs](../../../cs/docs/ops/MERGE_TRAIN.md) · 🇩🇰 [da](../../../da/docs/ops/MERGE_TRAIN.md) · 🇩🇪 [de](../../../de/docs/ops/MERGE_TRAIN.md) · 🇬🇷 [el](../../../el/docs/ops/MERGE_TRAIN.md) · 🇪🇸 [es](../../../es/docs/ops/MERGE_TRAIN.md) · 🇪🇪 [et](../../../et/docs/ops/MERGE_TRAIN.md) · 🇮🇷 [fa](../../../fa/docs/ops/MERGE_TRAIN.md) · 🇫🇮 [fi](../../../fi/docs/ops/MERGE_TRAIN.md) · 🇫🇷 [fr](../../../fr/docs/ops/MERGE_TRAIN.md) · 🇮🇪 [ga](../../../ga/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [gu](../../../gu/docs/ops/MERGE_TRAIN.md) · 🇮🇱 [he](../../../he/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [hi](../../../hi/docs/ops/MERGE_TRAIN.md) · 🇭🇷 [hr](../../../hr/docs/ops/MERGE_TRAIN.md) · 🇭🇺 [hu](../../../hu/docs/ops/MERGE_TRAIN.md) · 🇦🇲 [hy](../../../hy/docs/ops/MERGE_TRAIN.md) · 🇮🇩 [id](../../../id/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ig](../../../ig/docs/ops/MERGE_TRAIN.md) · 🇮🇹 [it](../../../it/docs/ops/MERGE_TRAIN.md) · 🇯🇵 [ja](../../../ja/docs/ops/MERGE_TRAIN.md) · 🇬🇪 [ka](../../../ka/docs/ops/MERGE_TRAIN.md) · 🇰🇭 [km](../../../km/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [kn](../../../kn/docs/ops/MERGE_TRAIN.md) · 🇰🇷 [ko](../../../ko/docs/ops/MERGE_TRAIN.md) · 🇱🇹 [lt](../../../lt/docs/ops/MERGE_TRAIN.md) · 🇱🇻 [lv](../../../lv/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ml](../../../ml/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [mr](../../../mr/docs/ops/MERGE_TRAIN.md) · 🇲🇾 [ms](../../../ms/docs/ops/MERGE_TRAIN.md) · 🇲🇹 [mt](../../../mt/docs/ops/MERGE_TRAIN.md) · 🇲🇲 [my](../../../my/docs/ops/MERGE_TRAIN.md) · 🇳🇵 [ne](../../../ne/docs/ops/MERGE_TRAIN.md) · 🇳🇱 [nl](../../../nl/docs/ops/MERGE_TRAIN.md) · 🇳🇴 [no](../../../no/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [or](../../../or/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [pa](../../../pa/docs/ops/MERGE_TRAIN.md) · 🇵🇭 [phi](../../../phi/docs/ops/MERGE_TRAIN.md) · 🇵🇱 [pl](../../../pl/docs/ops/MERGE_TRAIN.md) · 🇵🇹 [pt](../../../pt/docs/ops/MERGE_TRAIN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/MERGE_TRAIN.md) · 🇷🇴 [ro](../../../ro/docs/ops/MERGE_TRAIN.md) · 🇷🇺 [ru](../../../ru/docs/ops/MERGE_TRAIN.md) · 🇱🇰 [si](../../../si/docs/ops/MERGE_TRAIN.md) · 🇸🇰 [sk](../../../sk/docs/ops/MERGE_TRAIN.md) · 🇸🇮 [sl](../../../sl/docs/ops/MERGE_TRAIN.md) · 🇷🇸 [sr](../../../sr/docs/ops/MERGE_TRAIN.md) · 🇸🇪 [sv](../../../sv/docs/ops/MERGE_TRAIN.md) · 🇰🇪 [sw](../../../sw/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ta](../../../ta/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [te](../../../te/docs/ops/MERGE_TRAIN.md) · 🇹🇭 [th](../../../th/docs/ops/MERGE_TRAIN.md) · 🇹🇷 [tr](../../../tr/docs/ops/MERGE_TRAIN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/MERGE_TRAIN.md) · 🇵🇰 [ur](../../../ur/docs/ops/MERGE_TRAIN.md) · 🇺🇿 [uz](../../../uz/docs/ops/MERGE_TRAIN.md) · 🇻🇳 [vi](../../../vi/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [yo](../../../yo/docs/ops/MERGE_TRAIN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/MERGE_TRAIN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/MERGE_TRAIN.md)

---

Tun daga v3.8.49 (WS3.2/WS3.4 na shirin inganci/gudu), hanyar haɗawa ta tsohuwa don
PRs da aka yi wa bita zuwa `release/vX.Y.Z` ita ce **layin jiran haɗawa na Mergify** (`.mergify.yml`);
**jirgin haɗawa na hannu** da aka rubuta a ƙasa shi ne MADADIN GAGGAWA — ana amfani da shi yayin matsaloli,
dakatar da fitar da sigar, ko kuma idan shirin Mergify Open Source ya taɓa canzawa.

## Hanyar tsohuwa: layin jiran Mergify

1. Kamfen-kamfen sun yi wa PR bita/sun tabbatar da lafiyarsa, kuma an amince da shi ta ƙofar ⭐
   kafin haɗawa ta mai shi (rahoton + shawarar kowane abu — duba `/merge-prs` Mataki na 0.75).
2. Mai shi (ko zaman da ke aiki bisa shawarar mai shi) yana sanya alamar **`queue`**.
   Alamar ITA ce amincewar haɗawa; Mergify kawai yake aiwatar da ita.
3. Mergify yana haɗa har zuwa PRs 10 da ke layin jira cikin rukuni, yana tantance rukunin da fast-gates,
   sannan ya haɗa su (squash). Rukuni mai ja ana **raba shi biyu kai tsaye** — ana ware PR
   mai laifi cikin kusan sake-tantancewa log2(N), sannan a cire shi daga layin jira; sauran su ci gaba.
4. Bayan haɗawa, tsarin aiki na ci gaba na release-green yana tantance sabon tip lokacin push
   kuma yana buɗe issue na danganta alhaki idan haɗin ya haifar da koma baya (ba ya taɓa yin auto-revert).

Matakan kariya (sun yi daidai da `CLAUDE.md` Hard Rules #21/#22):

- **An buɗe dakatar da fitar da siga** → KAR a sanya wa PRs masu nufin reshen da aka dakatar alama; fara
  karkatar da su zuwa `release/vX+1` mai aiki.
- **PR na wani zaman da har yanzu ake aiki a kansa** → kada a taɓa sanya masa alama; zaman da ya mallake shi ne kaɗai
  zai saka aikinsa a layin jira.
- Diffs na gwaje-gwaje kawai da PRs masu alamar `hotfix` sun riga sun gudanar da CI da aka rage (duba
  `RELEASE_CHECKLIST.md` → Hotfix Fast-Lane); sharuɗɗan layin jira suna karɓar duk wani
  rukunin gwaje-gwajen da aka gudanar a zahiri (`#check-failure=0` + `#check-pending=0`).

## Madadin gaggawa: jirgin haɗawa na hannu

Ana amfani da shi lokacin da babu layin jiran. Wannan yana ƙa'ida aikin da ya kammala PRs 33 a
rana ɗaya yayin zagayen v3.8.47:

1. **Haɗa rukunin** (~10–30 PRs da aka yi wa bita+aka amince da su). Duba karo na `linked:`
   (`tap.testFiles` iri ɗaya, sassan CHANGELOG iri ɗaya) sannan a jera waɗannan ɗaya bayan ɗaya.
2. **Tantance SAU ƊAYA**: a cikin keɓantaccen worktree daga tip na release, haɗa dukkan
   heads na rukunin a gida, sannan gudanar da jerin gwaje-gwajen da suka yi daidai da na release
   (`npm run check:release-green`, ƙara `--with-build` kafin release).
   `scripts/release/merge-train.sh <base> <PR#>…` yana sarrafa matakai 1–2 ta atomatik (PRs masu karo
   sukan fita, jirgin ya ci gaba). Cikakken yanayi yana gudanar da `npm run test:unit` — runner
   da aka daidaita don na'urar (`--test-concurrency=20`), **ba** shards biyu na CI masu cores 4
   da ke gudana ɗaya bayan ɗaya ba, waɗanda suka sa babban matakin ya yi amfani da kusan 25% na na'ura mai cores 16 (an gyara
   2026-07-18). `--fast` (kammala manyan jiragen cikin rana, mai shi ya amince 2026-07-18)
   yana riƙe kowace ƙofar static + vitest amma yana gudanar da fayilolin node:test da PRs
   da aka ɗora suka canza kawai; har yanzu DOLE ne a gudanar da CIKAKKEN jerin gwaje-gwajen aƙalla sau ɗaya kowace rana a kan
   tip da aka tara (jirgi guda ba tare da `--fast` ba).
3. **Kore** → haɗa PRs ɗin a jere (ana sake duba `state,headRefOid` kafin kowanne —
   PR da head ɗinsa ya motsa zai koma layin bita). Tabbatar cewa net diff na kowane haɗawa shi ne
   canjin PR ɗin kansa (babu auto-resolve reverts: bincika `git diff --stat` don
   gogewa da ta fita daga iyakar aiki).
4. **Ja** → raba rukunin gida biyu (tantance kowane rabi) maimakon sake tantancewa
   ɗaya bayan ɗaya; mayar da PR mai laifi zuwa layin bita tare da shaidar.
5. **Kada a taɓa**: haɗawa zuwa reshen da aka dakatar yayin freeze; amfani da `git stash` a ko'ina;
   sake gudanar da CI gaba ɗaya da fatan ja zai ɓace (ƙa'ida: ja bayani ne).

## Matakan aiki (dalilin da ya sa layin jiran yake da aminci da fast-gates kawai)

- **Ga kowane PR** (quality.yml fast-gates): gwaje-gwajen da TIA ya shafa + cikakken unit mai shards 4 +
  vitest + tarin lint + typecheck + amincin docs/changelog.
- **Ga kowane rukuni/tip** (continuous release-green): ƙofofin WAJIBI na `--quick` a kowane push zuwa
  reshen release; cikakken binciken `--with-build --full-ci` sau 3 a rana.
- **Ga kowane release** (ci.yml a kan release PR): cikakken matrix har da E2E ×9,
  package-artifact + tarball boot-smoke, coverage/ratchets.

Ba a tantance komai ƙasa da yadda ake yi a baya — kawai ana gudanar da nauyin gwaje-gwaje mai nauyi ga kowane rukuni/tip
maimakon ga kowane PR, wanda shi ne ke kawar da zagayen O(N).

## Abubuwan da ake buƙata a sabon checkout don `merge-train.sh`

Script ɗin yana gudanar da **preflight** mai dakatarwa nan take idan an sami kuskure a kan root checkout (kafin kowane aikin
worktree) domin shigarwa da ta lalace kada ta taɓa ɓoye kanta a matsayin jirgi mai ja:

1. `npm ci`, sannan a gudanar da `bun` postinstall da npm yake toshewa:
   `(cd node_modules/bun && node install.js)` — in ba haka ba `check:provider-consistency`
   da `check:known-symbols` (duka `bun scripts/…`) za su gaza a kan jirgin DA base ba tare da
   layin violation ba.
2. Kada a sami ragowar `node_modules/node_modules` (bishiyar dependencies mai kwafi; React yana lodawa sau biyu
   kuma jerin gwaje-gwajen UI vitest suna gaza nan take).
3. `node_modules/.bin/tsc` ya kasance kuma yana iya gudana (shigarwa marar cikawa ba ta da shi).

Jirgin yana gudanar da `npm run check:cycles:ratchet` mai toshe ci gaba; `npm run check:cycles`
kawai na ba da shawara ne (yana jera SCCs kuma yana fita da non-zero ko da base ɗin yana cikin ƙoshin lafiya).
