# Feature Flags (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇪🇹 [am](../../../am/docs/reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md)

---

> 無需重新部署即可變更 OmniRoute 行為的執行階段切換開關。
> 此處列出的每個旗標皆定義於
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> — 這是唯一的真實來源。儀表板與 REST API 皆讀取該檔案，
> 因此下表依其內容以 1:1 的方式產生。

---

## 什麼是功能旗標

功能旗標是具名的切換開關（布林值或列舉值），其值可在執行階段變更並
持久化至資料庫，無需重新部署程序。每個旗標皆由 `FeatureFlagDefinition`
描述，包含 `key`、`label`、`description`、`category`、`defaultValue`、
`type`，以及 `requiresRestart` 提示。

### 解析順序

旗標的**有效值**由
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) 依照以下
優先順序解析（順位最高者優先）：

1. **資料庫覆寫值** — 儲存於 `key_value` 資料表之
   `feature_flags` 命名空間下的值（透過儀表板或 REST API 設定）。
2. **環境變數** — `process.env[<KEY>]`，前提是已設定且非空值。
3. **定義預設值** — 來自 `featureFlagDefinitions.ts` 的 `defaultValue`。

當布林旗標的有效值為 `"true"`、`"1"` 或 `"yes"` 時，會被視為**已啟用**
（請參閱 `isFeatureFlagEnabled()`）。

> [!NOTE]
> 多數旗標也有一個記載於 [`ENVIRONMENT.md`](./ENVIRONMENT.md) 且**名稱相同**
> 的對應環境變數。旗標的資料庫覆寫值優先於該環境變數。具有
> `requiresRestart: true` 的旗標會立即持久化，但僅會在程序啟動時重新讀取
> — 切換此類旗標會在儀表板中顯示**「重新啟動伺服器」**橫幅。

---

## 旗標目錄

共 82 個旗標，分為 6 個類別。**預設值**是定義中的預設值——當資料庫覆寫值與環境變數皆不存在時所使用的值。

### 安全性（10）

| 鍵                                      | 類型    | 預設值   | 說明                                                                                                                                                                                                    |
| --------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | boolean | `false`  | 要求所有傳入的請求都必須提供 API 金鑰。                                                                                                                                                                 |
| `INPUT_SANITIZER_ENABLED`               | boolean | `true`   | 為所有請求啟用輸入清理。                                                                                                                                                                                |
| `INJECTION_GUARD_MODE`                  | enum    | `off`    | 提示詞注入防護模式。可用值：`off`、`warn`、`block`、`redact`。                                                                                                                                          |
| `PII_REDACTION_ENABLED`                 | boolean | `false`  | 從請求中遮蔽個人識別資訊（PII），此設定獨立於 `INPUT_SANITIZER_MODE`。                                                                                                                                  |
| `PII_RESPONSE_SANITIZATION`             | boolean | `false`  | 清理提供者回應中的個人識別資訊（PII）。                                                                                                                                                                 |
| `PII_RESPONSE_SANITIZATION_MODE`        | enum    | `redact` | 個人識別資訊（PII）回應清理模式。可用值：`redact`、`warn`、`block`、`off`。                                                                                                                             |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | boolean | `true`   | 舊版別名：此旗標在儀表板切換控制項中儲存的值會優先於環境變數讀取；任一位置中的 `false`、`0`、`no` 或 `off` 都會關閉對外 URL 防護機制的主機檢查，其效果與 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` 相同。 |
| `ALLOW_API_KEY_REVEAL`                  | boolean | `false`  | 允許已驗證身分的儀表板使用者顯示已儲存的 API 金鑰，而非只能看到遮罩後的值。                                                                                                                             |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | boolean | `false`  | 在 AUTH 記錄行中包含帳戶前綴（例如「Using <provider> account: abc12345...」）。預設停用，因此帳戶識別碼會從共用／多租戶程序記錄中遮蔽。此設定獨立於偵錯模式；切換偵錯模式不會顯示這些資訊。             |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | boolean | `false`  | 啟用 OIDC 時停用密碼登入，使使用者只能透過 OIDC 單一登入進行驗證。停用時（預設），密碼登入與 OIDC 皆可使用。                                                                                            |

### 網路（23）

| Key                                             | Type    | Default | Restart | Description                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------- | ------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | boolean | `false` | ✓       | 啟用 TLS 指紋隱匿模式。                                                                                                                                                                                                                                                                                                                                               |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | boolean | `false` |         | 允許 /v1/audio/* 路由使用託管於 localhost 之外、與 OpenAI 相容的提供者節點。預設關閉——將音訊路由至遠端主機會變更輸出流量身分，因此必須由操作員明確決定。永遠允許迴路節點，且不受此設定影響。                                                                                                                                                                          |
| `RERANK_REMOTE_PROVIDER_NODES`                  | boolean | `false` |         | 允許 POST /v1/rerank（以及記憶體引擎的迴路重新排序步驟）使用託管於 localhost 之外、與 OpenAI 相容的提供者節點。預設關閉——路由至遠端主機會變更輸出流量身分，因此必須由操作員明確決定。永遠允許迴路節點；遠端節點還必須通過提供者的對外 URL 原則。                                                                                                                      |
| `PROXY_AUTO_SELECT_ENABLED`                     | boolean | `false` |         | 當連線未指派 Proxy 時，自動從登錄檔中選取第一個可用的 Proxy。預設關閉（否則登錄檔中的任何 Proxy 都會成為全域備援——#3332）。                                                                                                                                                                                                                                           |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | boolean | `false` |         | 當 Proxy 連通性預先檢查失敗時，允許 OAuth 與提供者驗證流程繞過固定的 Proxy 並直接連線。預設關閉，因為這可能會變更輸出 IP。                                                                                                                                                                                                                                            |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | boolean | `true`  |         | 當多帳戶輪替執行器發生網路例外（逾時、連線遭拒或重設）時，若失敗的帳戶沒有專用 Proxy，則套用短暫冷卻，並在該次請求的剩餘過程中略過其他沒有 Proxy 的帳戶，而非逐一重試。預設開啟（安全：不會變更輸出 IP，只會降低共用輸出帳戶的延遲與冷卻風險）。停用後，會恢復在第一個未使用 Proxy 的帳戶擲回例外時立即傳播。                                                         |
| `ROTATION_ATTRIBUTION`                          | boolean | `false` |         | Opencode 輪替會記錄由哪個帳戶提供服務或哪個帳戶遭略過（僅記錄遮罩後的 ID，絕不記錄完整帳戶 ID），並將 Proxy 記錄項目連結至其請求，讓操作員能區分遭略過與未使用的帳戶。預設關閉。                                                                                                                                                                                      |
| `PROXY_SKIP_RECENTLY_FAILED`                    | boolean | `true`  |         | Proxy 集區與 Opencode 的每帳戶輪替會在每個程序的一段時間內，停止再次提供剛發生失敗的 Proxy（TCP 探測遭拒，或透過該 Proxy 收到 429）；每次重複失敗時，此期間都會加倍，直到達到上限。不會寫入 Proxy 狀態；若所有候選項目都被暫時擱置，選擇結果維持不變。預設開啟；`false` 會恢復一般選取方式。                                                                          |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |         | 對於配額依出口位址分桶的提供者，將與近期遭拒成員共用相同已觀測出口位址的集區成員，排序在健康成員之後。僅影響排序，絕不排除。需要 `PROXY_SKIP_RECENTLY_FAILED`，由其產生此功能所讀取的拒絕訊號。預設關閉。                                                                                                                                                             |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |         | 在儀表板的代理集區下，顯示過去 24 小時內有多少個已觀測出口 IP 為其成員提供服務，以及有多少連線使用了這些 IP。唯讀、根據代理日誌計算，絕不用於路由。預設關閉。                                                                                                                                                                                                         |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |         | 接受操作員為每個集區成員推送的帶日期已觀測位址，並將其與從日誌讀取的資料合併，以供顯示與集區排序使用。預設關閉：推送路由會回應 404，而集區讀取行為與先前完全相同。                                                                                                                                                                                                    |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |         | 對 OpenCode 執行器，監看串流 Responses 回覆的第一個主體位元組（時間窗：`RESPONSES_FIRST_BYTE_TIMEOUT_MS`，預設為 `15000`）。若 2xx Responses 串流在超過此時間窗後仍保持無資料，便視為停滯：將帳戶設為冷卻，並讓請求輪替至下一個帳戶一次；若第二次仍停滯，則立即失敗。預設關閉：停滯的串流會維持現行行為，等待至串流就緒逾時。                                         |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |         | OpenCode 執行器：收到帶有 `user_blocked` 拒絕的 403/451 時（非地理限制，亦非 Cloudflare 指紋拒絕），將被拒絕的帳戶設為冷卻，且每個請求最多輪替至下一個帳戶一次；若第二次仍遭拒，則原樣傳回，且不標記成功。預設關閉：繞過上游使用者封鎖進行路由可能看似規避措施，並使該標記擴散至整個帳戶群。                                                                          |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |         | OpenCode 輪替：連續發生兩次暫時性上游失敗（5xx 或空的 400）後，在切換至下一個帳戶前暫停——初始 1.5 秒，之後每次失敗加倍；每次暫停最長 6 秒，每個請求累計最長 10 秒；若用戶端中斷連線則略過。等待前會先釋放失敗的回應主體。預設關閉：容錯移轉維持立即執行。                                                                                                             |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |         | OpenCode 輪替：在重複收到暫時性 429（或出現新的集區壓力標記）後，以心跳訊號暫停請求，接著重播一段有上限的流程，依序最多嘗試 3 個帳戶，而非向整個帳戶群扇出。預設關閉：每次收到 429 時，仍會與先前完全相同地輪替至下一個帳戶。                                                                                                                                         |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |         | 串流聊天：當第一個上游回應主體在產生可用事件前停滯時，透過相同路由路徑發起一次有界限的第二次嘗試，使用相同的就緒時間預算，且不處罰帳戶。預設關閉：第一個回應主體停滯時，請求會直接失敗而不重試。                                                                                                                                                                      |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |         | 對於經轉譯的串流回合，當上游回合不含任何可用內容（僅推理完成或有價值的區塊數量為零）時，在向用戶端公開任何內容前，透過正常憑證路徑發起有界限的重試（最多 `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX` 次）。預設關閉：空白回合維持目前行為（空的 200 或空內容 502）。                                                                                                       |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |         | OpenCode 輪替：在環境集區情境下，當無代理帳戶收到依出口分桶之提供者傳回的 429 後，要求連線集區為下一次嘗試選擇另一個成員，而非使用相同出口位址重試。僅影響排序，絕不排除：集區耗盡時維持目前行為。預設關閉：每次收到 429 時，仍會與先前完全相同地輪替至下一個帳戶。                                                                                                   |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | boolean | `false` |         | OpenCode 輪替：遇到第一個被判定為真正速率限制的 429（可解析的 `Retry-After`，或回應本文指出速率／用量限制）時，停止帳戶輪替波次，並原樣傳回該上游 429。未分類的 429 會繼續輪替。預設關閉：免費方案依出口 IP 受到限制（#9611），因此每個 429 都會觸發輪替，而用盡所有帳戶的波次會傳回最後一個上游 429。                                                                |
| `MITM_DISABLE_TLS_VERIFY`                       | boolean | `false` | ✓       | 停用 MITM Proxy 的 TLS 憑證驗證。**危險。**                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | boolean | `false` |         | 在提供者 URL 驗證、模型探索、提供者節點基礎 URL 及 Proxy 備援測試中，關閉出站 URL 防護機制的主機檢查（包括雲端中繼資料封鎖），並允許私人 Webhook 目標。驗證、探索及提供者節點路徑已預設允許本機與 LAN URL（`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`）；Proxy 備援測試與私人 Webhook 目標僅參考 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`，並在其關閉時封鎖本機／LAN 主機。 |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | boolean | `true`  |         | 允許使用本機／私人位址（127.0.0.1、localhost、LAN）的提供者 URL。預設開啟（本機優先）：此時防護機制會封鎖雲端中繼資料端點（整個 169.254.0.0/16 以及已知的中繼資料主機名稱）。停用後會採用嚴格的僅限公開位址封鎖模式：私人與回送主機也會遭到封鎖。                                                                                                                     |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | boolean | `false` | ✓       | 啟用 Claude Code 相容提供者模式。                                                                                                                                                                                                                                                                                                                                     |

### 政策 (5)

| 鍵                              | 類型    | 預設值     | 說明                                                                                                                                 |
| ------------------------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `TOOL_POLICY_MODE`              | enum    | `disabled` | 工具使用政策的強制執行模式。值：`disabled`、`warn`、`block`。                                                                        |
| `RATE_LIMIT_AUTO_ENABLE`        | boolean | _(未設定)_ | 強制開啟／關閉自動啟用的速率限制安全防護；未設定時遵循儀表板設定（預設開啟）。                                                       |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | boolean | `false`    | 對直接單一模型請求略過 OmniRoute 的本機上下文視窗／最大輸入權杖檢查。上游限制仍然適用。                                              |
| `CAPABILITY_FILTER_ENABLED`     | boolean | `false`    | 當目標模型缺少必要能力（視覺、工具、結構化輸出、上下文視窗）時，在分派前拒絕請求。可保護繞過組合層相容性篩選器的直接單一提供者請求。 |
| `RADAR_ENABLED`                 | boolean | `false`    | 啟用 OmniRoute Radar 模組（目錄資訊流畫面與同步）。預設關閉；啟用只會解鎖 UI——資料同步仍需另外選擇加入。                             |

### 執行階段 (34)

| Key                                         | Type    | Default | Restart | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------- | ------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | boolean | `true`  |         | 當組合路由切換模型時，產生並注入對話摘要。停用後，模型切換將各自獨立處理，並防止對所有現有及未來的組合發出背景交接請求。                                                                                                                                                                                                                                                                                          |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | boolean | `true`  |         | 在轉送給用戶端之前，從 Responses API 直通串流中移除內部評論階段的輸出項目。停用後可接收原始上游評論。                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | boolean | `false` |         | 對 MCP 工具存取強制執行範圍限制。                                                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | boolean | `false` |         | 壓縮 MCP 工具描述以減少權杖用量。                                                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | boolean | `false` |         | 在執行階段啟用背景工作處理。                                                                                                                                                                                                                                                                                                                                                                                      |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | boolean | `false` | ✓       | 停用所有背景服務（配額重新整理、同步等）。                                                                                                                                                                                                                                                                                                                                                                        |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |         | 信任專案層級的 RTK 篩選器而不進行驗證。                                                                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓       | 匯入時啟動即時儀表板 WebSocket 伺服器（預設連接埠為 20132）。                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |         | 允許 Codex 使用 Responses-over-WebSocket 傳輸。關閉時，Codex 會回退至 HTTP Responses。                                                                                                                                                                                                                                                                                                                            |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |         | 允許 Codex 使用本機 app-server WebSocket JSON-RPC 傳輸（codexTransport=app-server）。關閉時，選擇使用 app-server 的連線會回退至 Codex 的其他傳輸方式。                                                                                                                                                                                                                                                            |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |         | 將預算耗盡的請求路由至緊急免費備援提供者／模型。（請參閱下方的[緊急預算備援](#emergency-budget-fallback)。）                                                                                                                                                                                                                                                                                                      |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |         | 在任何回應位元組送達用戶端之前，針對遭截斷的上游 SSE 串流啟用透明的提前重試。                                                                                                                                                                                                                                                                                                                                     |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |         | 允許串流復原在位元組已送達用戶端後重新請求並拼接回應。                                                                                                                                                                                                                                                                                                                                                            |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |         | 確保串流中途接續對工具呼叫是安全的：一旦已發出工具呼叫（正在進行中，或已完成且 finish_reason 為 tool_calls），絕不恢復遭截斷的串流，並在一次空白接續後關閉，而非耗盡全部預算。關閉時：採用發行版行為。                                                                                                                                                                                                            |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |         | 當 SSE 串流在發出任何有效影格前關閉，且同一連線的有限次重試已用盡時，容錯移轉一次至同層連線；若無可用的同層連線，則傳回原始的 `STREAM_EARLY_EOF` 502。預設為關閉：同一連線重試後，提前 EOF 仍為終止狀態。                                                                                                                                                                                                         |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |         | 在 `/v1/models` 回應中包含方便顯示的名稱欄位。若用戶端僅接受模型 ID，請停用此功能。                                                                                                                                                                                                                                                                                                                               |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |         | 控制 /v1/models 中模型 ID 的前綴方式。'dual'（預設）會同時輸出別名與標準提供者 ID 前綴，以維持向後相容性。'alias' 僅輸出簡短別名前綴（例如 ds-web/model，而非 deepseek-web/model）。'canonical' 僅輸出完整的提供者 ID 前綴。可用值：`dual`、`alias`、`canonical`。                                                                                                                                                |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |         | 啟用定期同步 Arena AI 排行榜的 ELO，以用於模型智慧排名。                                                                                                                                                                                                                                                                                                                                                          |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |         | 在 `/v1/models` 上公布 `claude/<provider>/<model>` 鏡像 ID，讓 Claude Code 閘道的模型探索功能列出非 Claude 模型。這是三級閘門中的全域層級（環境變數的優先順序高於儀表板覆寫值）。請參閱 [Claude Code 設定](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)。                                                                                             |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |         | no-think/<provider>/<model> 閘道別名的主開關。開啟（預設）：/v1/models 會為每個符合資格且支援思考的 Claude 模型公布無思考變體，而請求中傳送的 no-think/ ID 會解析回實際模型，並抑制推理。關閉：不公布任何變體，且 no-think/ ID 會如同其他未知模型 ID 一樣處理。開啟此功能時，每個模型的 ModelSpec.noThinkingAlias 選擇加入／退出設定仍然適用。                                                                    |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |         | 停用在 /v1/models 目錄中產生思考層級變體（例如 -low、-medium、-high）。                                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓       | 啟用針對提供者分派的每租戶自適應虛擬准入通道（#9654）：單一租戶的突發流量不再導致其他租戶收到 503。`OMNIROUTE_CHAT_VIRTUAL_LANES` 環境變數的優先順序高於此儀表板覆寫值；變更會在伺服器重新啟動時生效。                                                                                                                                                                                                            |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |         | 對於其標準擁有者沒有有效憑證，但由具有有效憑證的直通閘道進行路由的模型，在 /v1/models 上公告 <gateway-alias>/<model> 鏡像 ID。警告：全域啟用時，會為所有用戶端新增目錄項目。                                                                                                                                                                                                                                      |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |         | 為 New-API / One-API / Sub2API 聚合器相容節點啟用餘額偵測。啟用後，已設定聚合器旗標的相容節點會在儀表板和配額預檢路由中回報其餘額。                                                                                                                                                                                                                                                                               |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |         | 持續執行由伺服器擁有的非串流工具呼叫，直到模型傳回用戶端可用的回應。                                                                                                                                                                                                                                                                                                                                              |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |         | 搜尋統計資料和最近搜尋只會計入仍具有有效連線的提供者（duckduckgo-free 等無金鑰提供者一律計入）。停用時，會保留每一筆具有提供者 ID 的搜尋記錄。                                                                                                                                                                                                                                                                    |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |         | 儀表板提供者頁面：僅在提供者確實支援的訊號上顯示「免費」徽章——不再使用顯示名稱啟發法、非布林值的免費欄位，以及未記載免費方案之已註冊提供者名稱中的 :free 後綴。停用時，會保留既有的徽章規則。                                                                                                                                                                                                                     |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |         | 對於聚合後的 429/503 不可用回應，若無法得知明確的未來重試時間，則省略 `Retry-After`（而非使用虛構的 1 秒），新增 `error.retry_after_provenance`（`signal` \| `none`），並允許組合式排空路徑從 JSON 和純文字上游主體中讀取文字形式的重試提示。此欄位只會出現在由 `unavailableResponse()` 建立的回應中；其他 429/503 主體維持不變。                                                                                 |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |         | 當標記為僅在配額耗盡時才後援的 `priority` 組合目標，因可證明並非配額所致的原因（提供者斷路器開啟、預測式延遲略過）而停止組合時，回傳 502，而非看似配額問題的 503。因鎖定、冷卻、不可用、耗盡及並行上限而停止時，仍回傳 503。                                                                                                                                                                                      |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |         | 單純的 Mistral 401（`{"detail":"Unauthorized"}`，沒有明確的驗證訊號）對於已撤銷的金鑰和配額耗盡而言完全相同。啟用時，系統會讓連線進入冷卻，而非將其停放為 `expired`；每個連線每小時最多 3 次，下一次則會將其停放，因此已撤銷的金鑰最終仍會收斂至停放狀態。預設停用：每次單純的 Mistral 401 都會像以前一樣停放該連線。                                                                                             |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |         | 註冊 xai-oauth (xao) 與 grok-cli 圖像路由，並將 OpenAI 的 high/hd 品質對應至 xAI 的 medium。預設關閉：使用 API 金鑰的 xAI 圖像路徑會繼續使用現有的 OpenAI 相容請求，且不會註冊訂閱路由。                                                                                                                                                                                                                          |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |         | 使用 OAuth bearer token 從 https://api.x.ai/v1/models 擷取 xai-oauth 連線的即時 xAI 模型目錄，而非使用凍結的靜態種子。預設開啟。將此旗標設為 false 可繼續提供靜態種子。HTTP 失敗時，探索路由會回退至種子；旗標 getter 本身不會發出 HTTP 請求。                                                                                                                                                                    |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |         | 允許自動清理程序刪除早於 `OMNIROUTE_BATCH_RETENTION_DAYS` 的終止狀態（completed/failed/cancelled/expired）Batch API 工作及其逐行檢查點，並清除已超過自身 `expires_at` 的上傳檔案之 BLOB 內容。預設關閉：在操作人員選擇啟用之前，每個現有安裝都會完全依照先前方式保留這些資料。無論如何，操作人員觸發的 `DELETE /api/v1/batches/delete-completed` 路由均不受影響——這是獨立且無條件的公開 API 契約。                |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |         | 在選定 Antigravity 帳戶的請求串流生命週期內保留該帳戶，使並行重試或憑證移交無法再次選取已指派給進行中串流的帳戶。保留範圍限定為（連線、可呼叫的上游模型），因此同一帳戶仍可同時服務兩個不同的模型。當該模型的所有合格帳戶均已被租用時，請求會傳回結構化的 503 `antigravity_pool_busy`，並附上有上限的 `Retry-After`，而不是繼續將工作堆積至忙碌的帳戶。預設關閉：帳戶選取方式會完全維持不變，且不會進行任何保留。 |

### CLI (5)

| 鍵                                    | 類型    | 預設值  | 重新啟動 | 說明                                                                                                                                                     |
| ------------------------------------- | ------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓        | 為所有 CLI 用戶端啟用相容模式。                                                                                                                          |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |          | 啟用模型別名相容層。                                                                                                                                     |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |          | 啟用定價資料自動同步（也需要 `PRICING_SYNC_ENABLED` 環境變數）。                                                                                         |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |          | 在提供者模型同步後，自動根據即時目錄（重新）寫入 ~/.codex/*.config.toml 設定檔。絕不變更作用中/預設 Codex 設定。預設關閉。                               |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |          | 在提供者模型同步後，自動根據即時目錄（重新）寫入 ~/.claude/profiles/<name>/settings.json Claude Code 設定檔。絕不變更作用中/預設 Claude 設定。預設關閉。 |

### 健康狀態 (5)

| 鍵值                                      | 類型   | 預設值  | 說明                                                                                                                                                                                        |
| ----------------------------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | 布林值 | `false` | 停用本機執行個體的健康檢查端點。                                                                                                                                                            |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | 布林值 | `false` | 停用權杖驗證健康檢查。                                                                                                                                                                      |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | 布林值 | `false` | 啟用技能沙箱環境中的網路存取。                                                                                                                                                              |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | 布林值 | `false` | 在代理健康狀態掃描中，若探測遭目標拒絕（401/403/429），則重設代理的連續失敗次數。預設關閉：拒絕會維持中性狀態（#10654）。無論如何，5xx 均維持未定狀態；拒絕絕不會移除、停用或重新啟用代理。 |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | 布林值 | `false` | 在伺服器開始接受請求後（透過 `setImmediate`）執行啟動時的資料庫完整性／健康檢查，而不是阻塞啟動直到檢查完成（#13717）。預設關閉：啟動會與此 PR 之前完全相同地受到阻塞。                     |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` 及其舊版別名
> `INJECTION_GUARD_BLOCK_THRESHOLD` 會調整 `INJECTION_GUARD_MODE` 的
> `block` 模式，但它們是由
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> 讀取的一般環境變數，而非功能旗標：它們沒有資料庫覆寫值，也沒有儀表板切換開關。請參閱
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)。

> [!NOTE]
> `Restart` 欄會標示具有 `requiresRestart: true` 的旗標——其值會
> 立即持久化，但只有在程序重新載入後才會生效。列舉型
> 旗標會拒絕其允許集合以外的任何值（伺服器端會在
> `setFeatureFlagOverride()` 與 REST `PUT` 處理常式中進行驗證）。

---

## 切換功能旗標

### 儀表板

導覽至 **儀表板 → 設定 → 功能旗標**
(`/dashboard/settings/feature-flags`)。該網格
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
支援：

- 依據鍵或描述進行**搜尋**，並依類別進行**篩選**（加上一個合成的**需要重新啟動**視圖）。
- 布林旗標的**切換開關**和列舉旗標的**下拉式選單**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)。
- 每個旗標的**來源標籤** — `DB`、`ENV` 或 `DEF` — 顯示有效值來自何處。
- **重設**按鈕（僅針對 `DB` 來源的旗標顯示）以取消覆寫，以及底部的**重設所有覆寫**按鈕。
- 當 `requiresRestart` 旗標變更時，會顯示**重新啟動伺服器**橫幅。

### REST API

所有操作都透過單一路徑進行：
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)。
每個方法都需要經過驗證的儀表板會話（否則為 `401`）。

#### `GET /api/settings/feature-flags`

返回每個旗標及其有效值、來源和摘要。

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
    // ... 所有 77 個旗標
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

設定或移除單一覆寫。請求主體：`{ key: string; value?: string }`。
省略 `value` 會移除覆寫（恢復環境變數 / 預設值）。

```bash
# 設定一個 DB 覆寫
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# 移除覆寫（無 "value"）
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

回應會回顯新的 `effectiveValue`/`source`、`previousValue`/
`previousSource` 和 `requiresRestart`。未知鍵和超出範圍的列舉值將被 `400` 拒絕。

#### `DELETE /api/settings/feature-flags`

一次清除**所有** DB 覆寫，將每個旗標恢復為其環境變數 / 預設值。返回 `{ cleared: <count>, message: "..." }`。

> [!注意]
> 帶有 `requiresRestart: true` 的旗標僅在程序重新載入後生效。
> 儀表板的重新啟動流程會呼叫 `POST /api/restart`，然後輪詢
> `GET /api/health/ping` 直到伺服器恢復運作。

---

## 緊急預算備援

`OMNIROUTE_EMERGENCY_FALLBACK`（類別為 `runtime`，預設值為 `true`）控制
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
中的緊急免費備援路徑。啟用時，預算耗盡的請求會被路由至免費的備援
提供者/模型，而非直接失敗。若要停用此行為，並讓預算耗盡的請求
失敗，請透過儀表板切換開關、資料庫覆寫或
`OMNIROUTE_EMERGENCY_FALLBACK` 環境變數，將其設為 `false`（或 `0`）。
（已在 PR #3741 / #3752 中以儀表板切換開關的形式提供。）

由此備援機制提供的回應會帶有
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>`，
因此用戶端無須將 `X-OmniRoute-Provider` 與其請求進行比對，即可得知請求已被重新路由。
其他所有回應均不會包含此標頭。

---

## 另請參閱

- [環境變數參考](./ENVIRONMENT.md) — 大多數旗標都有一個同名的環境變數記錄於此（DB 覆寫的優先順序高於該環境變數）。
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — 所有旗標的權威來源。
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — 解析邏輯（`resolveFeatureFlag`、`isFeatureFlagEnabled`、
  `resolveAllFeatureFlags`）。
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — 在 `key_value` 資料表的 `feature_flags` 命名空間中持久儲存 DB 覆寫。
