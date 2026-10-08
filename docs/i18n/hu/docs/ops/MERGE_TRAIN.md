# Merge Queue & Manual Merge-Train Runbook (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/MERGE_TRAIN.md) · 🇪🇹 [am](../../../am/docs/ops/MERGE_TRAIN.md) · 🇸🇦 [ar](../../../ar/docs/ops/MERGE_TRAIN.md) · 🇦🇿 [az](../../../az/docs/ops/MERGE_TRAIN.md) · 🇧🇬 [bg](../../../bg/docs/ops/MERGE_TRAIN.md) · 🇧🇩 [bn](../../../bn/docs/ops/MERGE_TRAIN.md) · 🇧🇦 [bs](../../../bs/docs/ops/MERGE_TRAIN.md) · 🇨🇿 [cs](../../../cs/docs/ops/MERGE_TRAIN.md) · 🇩🇰 [da](../../../da/docs/ops/MERGE_TRAIN.md) · 🇩🇪 [de](../../../de/docs/ops/MERGE_TRAIN.md) · 🇬🇷 [el](../../../el/docs/ops/MERGE_TRAIN.md) · 🇪🇸 [es](../../../es/docs/ops/MERGE_TRAIN.md) · 🇪🇪 [et](../../../et/docs/ops/MERGE_TRAIN.md) · 🇮🇷 [fa](../../../fa/docs/ops/MERGE_TRAIN.md) · 🇫🇮 [fi](../../../fi/docs/ops/MERGE_TRAIN.md) · 🇫🇷 [fr](../../../fr/docs/ops/MERGE_TRAIN.md) · 🇮🇪 [ga](../../../ga/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [gu](../../../gu/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ha](../../../ha/docs/ops/MERGE_TRAIN.md) · 🇮🇱 [he](../../../he/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [hi](../../../hi/docs/ops/MERGE_TRAIN.md) · 🇭🇷 [hr](../../../hr/docs/ops/MERGE_TRAIN.md) · 🇦🇲 [hy](../../../hy/docs/ops/MERGE_TRAIN.md) · 🇮🇩 [id](../../../id/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [ig](../../../ig/docs/ops/MERGE_TRAIN.md) · 🇮🇹 [it](../../../it/docs/ops/MERGE_TRAIN.md) · 🇯🇵 [ja](../../../ja/docs/ops/MERGE_TRAIN.md) · 🇬🇪 [ka](../../../ka/docs/ops/MERGE_TRAIN.md) · 🇰🇭 [km](../../../km/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [kn](../../../kn/docs/ops/MERGE_TRAIN.md) · 🇰🇷 [ko](../../../ko/docs/ops/MERGE_TRAIN.md) · 🇱🇹 [lt](../../../lt/docs/ops/MERGE_TRAIN.md) · 🇱🇻 [lv](../../../lv/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ml](../../../ml/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [mr](../../../mr/docs/ops/MERGE_TRAIN.md) · 🇲🇾 [ms](../../../ms/docs/ops/MERGE_TRAIN.md) · 🇲🇹 [mt](../../../mt/docs/ops/MERGE_TRAIN.md) · 🇲🇲 [my](../../../my/docs/ops/MERGE_TRAIN.md) · 🇳🇵 [ne](../../../ne/docs/ops/MERGE_TRAIN.md) · 🇳🇱 [nl](../../../nl/docs/ops/MERGE_TRAIN.md) · 🇳🇴 [no](../../../no/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [or](../../../or/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [pa](../../../pa/docs/ops/MERGE_TRAIN.md) · 🇵🇭 [phi](../../../phi/docs/ops/MERGE_TRAIN.md) · 🇵🇱 [pl](../../../pl/docs/ops/MERGE_TRAIN.md) · 🇵🇹 [pt](../../../pt/docs/ops/MERGE_TRAIN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/MERGE_TRAIN.md) · 🇷🇴 [ro](../../../ro/docs/ops/MERGE_TRAIN.md) · 🇷🇺 [ru](../../../ru/docs/ops/MERGE_TRAIN.md) · 🇱🇰 [si](../../../si/docs/ops/MERGE_TRAIN.md) · 🇸🇰 [sk](../../../sk/docs/ops/MERGE_TRAIN.md) · 🇸🇮 [sl](../../../sl/docs/ops/MERGE_TRAIN.md) · 🇷🇸 [sr](../../../sr/docs/ops/MERGE_TRAIN.md) · 🇸🇪 [sv](../../../sv/docs/ops/MERGE_TRAIN.md) · 🇰🇪 [sw](../../../sw/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [ta](../../../ta/docs/ops/MERGE_TRAIN.md) · 🇮🇳 [te](../../../te/docs/ops/MERGE_TRAIN.md) · 🇹🇭 [th](../../../th/docs/ops/MERGE_TRAIN.md) · 🇹🇷 [tr](../../../tr/docs/ops/MERGE_TRAIN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/MERGE_TRAIN.md) · 🇵🇰 [ur](../../../ur/docs/ops/MERGE_TRAIN.md) · 🇺🇿 [uz](../../../uz/docs/ops/MERGE_TRAIN.md) · 🇻🇳 [vi](../../../vi/docs/ops/MERGE_TRAIN.md) · 🇳🇬 [yo](../../../yo/docs/ops/MERGE_TRAIN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/MERGE_TRAIN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/MERGE_TRAIN.md)

---

A v3.8.49-es verzió óta (a minőségi/sebességi terv WS3.2/WS3.4 pontjai) az ellenőrzött PR-ek
`release/vX.Y.Z` ágba történő egyesítésének alapértelmezett útvonala a **Mergify egyesítési sora** (`.mergify.yml`);
az alább dokumentált **kézi egyesítési szerelvény** a TARTALÉK megoldás — incidensek,
kiadási befagyasztások idején, vagy ha a Mergify nyílt forráskódú csomagja valaha megváltozik.

## Alapértelmezett útvonal: a Mergify sora

1. A PR-t a kampányok ellenőrizték, minden ellenőrzése zöld, és megkapta a tulajdonos egyesítés előtti ⭐
   jóváhagyását (a jelentést és az elemenkénti döntést — lásd: `/merge-prs`, 0.75. lépés).
2. A tulajdonos (vagy a tulajdonos döntése alapján eljáró munkamenet) alkalmazza a **`queue`**
   címkét. A címke MAGA az egyesítési jóváhagyás; a Mergify csak végrehajtja azt.
3. A Mergify legfeljebb 10 sorban álló PR-t kötegel, a gyors ellenőrzési kapuk alapján ellenőrzi a köteget,
   majd egyesíti (squash). A piros köteget **automatikusan felezi** — a hibát okozó PR-t
   körülbelül log2(N) újraellenőrzéssel elkülöníti és eltávolítja a sorból; a többi folytatódik.
4. Az egyesítés után a folyamatos kiadásizöld-állapot munkafolyamat push esetén ellenőrzi az új csúcsot,
   és hozzárendelési issue-t nyit, ha a kombináció regressziót okozott (automatikus visszaállítás soha nincs).

Védőkorlátok (a `CLAUDE.md` 21./22. szigorú szabályának megfelelően):

- **Kiadási befagyasztás van érvényben** → NE címkézz a befagyasztott ágat célzó PR-eket; előbb módosítsd a célágat
  az aktív `release/vX+1` ágra.
- **Másik munkamenet folyamatban lévő PR-je** → soha ne címkézd; csak a tulajdonos munkamenet állíthatja sorba
  a saját munkáját.
- A kizárólag teszteket módosító diffek és a `hotfix` címkével ellátott PR-ek eleve csökkentett CI-t futtatnak (lásd:
  `RELEASE_CHECKLIST.md` → Gyorsított hotfix-útvonal); a sor feltételei az ellenőrzések ténylegesen
  lefutott készletét fogadják el (`#check-failure=0` + `#check-pending=0`).

## Tartalék megoldás: a kézi egyesítési szerelvény

A sor elérhetetlensége esetén használandó. Ez foglalja szabályba azt a gyakorlatot, amely a v3.8.47-es
ciklus során egyetlen nap alatt 33 PR-t dolgozott fel:

1. **Állítsd össze a köteget** (~10–30 ellenőrzött és jóváhagyott PR). Ellenőrizd a `linked:` ütközéseket
   (azonos `tap.testFiles`, azonos CHANGELOG-részletek), és ezeket sorosan dolgozd fel.
2. **Ellenőrizd EGYSZER**: a kiadási csúcsról leválasztott, elkülönített worktree-ban egyesítsd helyileg a köteg
   összes fejét, majd futtasd a kiadással egyenértékű tesztkészletet
   (`npm run check:release-green`, kiadás előtt kiegészítve a `--with-build` kapcsolóval).
   A `scripts/release/merge-train.sh <base> <PR#>…` automatizálja az 1–2. lépést (az ütköző
   PR-ek kiesnek, a szerelvény folytatódik). A teljes mód az `npm run test:unit` parancsot futtatja — a
   gépre hangolt futtatóval (`--test-concurrency=20`), **nem** a két, egymás után futó, 4 magos CI-szilánkkal,
   amelyek miatt a domináns fázis egy 16 magos gép kapacitásának csak ~25%-át használta (javítva:
   2026-07-18). A `--fast` (napközbeni óriásszerelvények feldolgozásához, tulajdonosi jóváhagyás:
   2026-07-18) megtart minden statikus kaput és a vitestet, de csak a szerelvényre felvett PR-ek által
   módosított node:test fájlokat futtatja; a TELJES tesztkészletet továbbra is naponta legalább egyszer
   futtatni kell az összegyűlt csúcson (egy szerelvény a `--fast` nélkül).
3. **Zöld** → egyesítsd sorban a PR-eket (mindegyik előtt újra ellenőrizve a `state,headRefOid` értékeket —
   az a PR, amelynek feje elmozdult, visszakerül ellenőrzésre). Bizonyítsd, hogy minden egyesítés nettó diffje
   kizárólag a PR saját módosítása (nincs automatikus feloldással történő visszaállítás: ellenőrizd a
   `git diff --stat` kimenetét a hatókörön kívüli törlések kiszűréséhez).
4. **Piros** → felezd a köteget (mindkét felet külön ellenőrizve) az egyenkénti újraellenőrzés helyett;
   a hibát okozó PR-t a bizonyítékokkal együtt küldd vissza az ellenőrzési sorba.
5. **Soha**: ne egyesíts a befagyasztás alatt a befagyasztott ágba; sehol ne használd a `git stash` parancsot;
   ne futtasd újra válogatás nélkül a CI-t abban bízva, hogy a piros állapot eltűnik (szabály: a piros állapot információ).

## Szintek (miért biztonságos a sor kizárólag gyors kapukkal)

- **PR-enként** (quality.yml gyors kapuk): TIA által érintett tesztek + teljes, 4 szilánkos egységteszt +
  vitest + lintelési csomag + típusellenőrzés + dokumentáció/CHANGELOG integritásának ellenőrzése.
- **Kötegenként/csúcsonként** (folyamatos kiadásizöld-állapot): `--quick` KÖTELEZŐ kapuk a kiadási ágba történő
  minden push esetén; teljes `--with-build --full-ci` ellenőrzések naponta 3×.
- **Kiadásonként** (ci.yml a kiadási PR-en): a teljes mátrix, beleértve az E2E ×9-et,
  a csomag-artefaktumot, a tarball indítási füsttesztjét, valamint a lefedettséget/ratchet-ellenőrzéseket.

Semmit sem ellenőrzünk ritkábban, mint korábban — a nagy erőforrásigényű felület egyszerűen kötegenként/csúcsonként
fut PR-enként helyett, és ez szünteti meg az O(N) számú oda-vissza kört.

## A `merge-train.sh` friss checkoutjára vonatkozó előfeltételek

A szkript egy gyorsan hibára futó **előzetes ellenőrzést** végez a gyökér-checkouton (minden worktree-művelet
előtt), így egy hibás telepítés soha nem álcázhatja magát piros szerelvénynek:

1. Futtasd az `npm ci` parancsot, majd a `bun` npm által blokkolt postinstallját:
   `(cd node_modules/bun && node install.js)` — enélkül a `check:provider-consistency`
   és a `check:known-symbols` (mindkettő `bun scripts/…`) a szerelvényen ÉS a bázison is
   hibát jelez, szabálysértést jelző sor nélkül.
2. Nem lehet kóbor `node_modules/node_modules` könyvtár (duplikált függőségi fa; a React kétszer töltődik be,
   és a felhasználói felületi vitest-tesztkészletek azonnal elbuknak).
3. A `node_modules/.bin/tsc` fájlnak jelen kell lennie és futtathatónak kell lennie (részleges telepítésből hiányzik).

A szerelvény a blokkoló `npm run check:cycles:ratchet` parancsot futtatja; a puszta `npm run check:cycles`
csak tájékoztató jellegű (felsorolja az SCC-ket, és még egészséges bázison is nullától eltérő kóddal lép ki).
