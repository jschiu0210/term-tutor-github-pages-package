const knownConcepts = {
  rag: {
    title: "RAG",
    full: "Retrieval-Augmented Generation",
    quick: "讓AI先查資料再回答",
    plain:
      "RAG 是讓 AI 回答前，先找相關資料，再根據資料整理答案的方法。它不是只靠記憶，而是先翻資料再說明。",
    analogy: "像考試可以翻書找答案，再用自己的話寫出來。",
    points: ["全名是 Retrieval-Augmented Generation", "先搜尋資料", "再產生較準確答案"],
    sentence: "這個客服系統採用 RAG，先檢索公司知識庫，再產生符合內部規範的回答。",
    visual: ["使用者提問", "搜尋資料庫", "AI 整理回答"],
  },
  transformer: {
    title: "Transformer",
    full: "Transformer",
    quick: "讓AI抓住文字重點",
    plain:
      "Transformer 會看一句話中哪些字彼此最有關，再整理出意思。現在很多聊天 AI 和翻譯工具都靠它理解文字。",
    analogy: "像讀文章時用螢光筆標出重點，再判斷整段在說什麼。",
    points: ["找出字和字的關係", "適合處理文字", "常用在聊天AI"],
    sentence: "Transformer 透過注意文字之間的關聯，提升了機器翻譯與文字生成的表現。",
    visual: ["輸入文字", "判斷關聯", "產生理解"],
  },
  "熵": {
    title: "熵",
    quick: "混亂程度的量尺",
    plain:
      "熵可以想成一個東西有多亂、多不確定。越難猜下一步會發生什麼，熵就越高；越整齊明確，熵就越低。",
    analogy: "像房間越亂，你越難立刻找到鑰匙，混亂感就越高。",
    points: ["衡量混亂", "衡量不確定", "越亂通常越難預測"],
    sentence: "在熱力學中，封閉系統的熵通常會隨時間增加，代表可用能量逐漸分散。",
    visual: ["整齊狀態", "能量分散", "混亂增加"],
  },
  "邊際效用": {
    title: "邊際效用",
    quick: "多一份帶來的滿足",
    plain:
      "邊際效用是在看你多得到一個東西時，多增加多少滿足感。通常第一個最有感，越多個之後感覺會變小。",
    analogy: "像很餓時第一片披薩超好吃，第五片就沒那麼快樂。",
    points: ["看新增一份的感受", "常會越來越小", "幫助判斷選擇值不值得"],
    sentence: "當消費者已經喝了三杯奶茶，第四杯帶來的邊際效用通常會下降。",
    visual: ["第1份很滿足", "第2份普通", "第3份變少"],
  },
  "薛丁格的貓": {
    title: "薛丁格的貓",
    quick: "沒看前結果不確定",
    plain:
      "薛丁格的貓是在說：有些微小世界的狀態，在你真的觀察前，不能簡單說它已經是哪一種結果。",
    analogy: "像外送還沒打開前，你不確定餐點有沒有少，打開那一刻才知道。",
    points: ["強調觀察前的不確定", "用貓當想像例子", "幫助討論量子世界"],
    sentence: "薛丁格的貓常被用來說明量子疊加：在觀察前，系統不能被視為單一確定狀態。",
    visual: ["盒子未打開", "狀態不確定", "觀察後確定"],
  },
  "薛定諤的貓": {
    title: "薛定諤的貓",
    quick: "沒看前結果不確定",
    plain:
      "薛定諤的貓是在說：有些微小世界的狀態，在你真的觀察前，不能簡單說它已經是哪一種結果。",
    analogy: "像外送還沒打開前，你不確定餐點有沒有少，打開那一刻才知道。",
    points: ["強調觀察前的不確定", "用貓當想像例子", "幫助討論量子世界"],
    sentence: "薛定諤的貓常被用來說明量子疊加：在觀察前，系統不能被視為單一確定狀態。",
    visual: ["盒子未打開", "狀態不確定", "觀察後確定"],
  },
};

const acronymFullNames = {
  ai: "Artificial Intelligence",
  api: "Application Programming Interface",
  cnn: "Convolutional Neural Network",
  gdp: "Gross Domestic Product",
  llm: "Large Language Model",
  nlp: "Natural Language Processing",
  rag: "Retrieval-Augmented Generation",
  roi: "Return on Investment",
};

const supplementalConcepts = {
  "knowledge graph": {
    title: "Knowledge Graph",
    quick: "把知識串成人脈網",
    plain:
      "Knowledge Graph 是把人、文件、產品、部門等資料，用關係線連起來，讓系統知道誰和誰有關。",
    analogy: "像社群網站的人脈圖，可以看出誰認識誰、誰和哪件事有關。",
    points: ["中文常稱知識圖譜", "重點是資料之間的關係", "適合整理企業知識"],
    sentence: "企業可用 Knowledge Graph 串聯文件、客戶與產品資料，提升跨部門知識查找效率。",
    visual: ["資料節點", "關係連線", "知識網絡"],
  },
  "ontology": {
    title: "Ontology",
    quick: "統一知識分類規則",
    plain:
      "Ontology 是先定好資料怎麼分類、命名和連結，讓不同部門講同一件事時不會各說各話。",
    analogy: "像圖書館分類法，先規定書要放哪一類，大家才找得到。",
    points: ["中文常稱知識本體", "定義分類和關係", "讓資料更一致"],
    sentence: "建立 Ontology 可協助企業統一名詞定義，避免不同系統對同一資料產生不同解讀。",
    visual: ["定義類別", "統一名稱", "串接知識"],
  },
  "cache indexing": {
    title: "Cache Indexing",
    quick: "先整理好方便快找",
    plain:
      "Cache Indexing 是先把常用資料和搜尋線索整理好，之後查詢時不用從頭翻，速度會更快。",
    analogy: "像考前先做索引標籤，翻課本時不用一頁一頁找。",
    points: ["預先建立索引", "減少重複查找", "提升搜尋速度"],
    sentence: "系統導入 Cache Indexing 後，可縮短知識庫查詢時間並降低後端服務負載。",
    visual: ["常用資料", "建立索引", "快速查詢"],
  },
  "vector search": {
    title: "Vector Search",
    quick: "找意思相近的資料",
    plain:
      "Vector Search 會把文字轉成數字特徵，再用距離找出意思接近的內容，不只比對一模一樣的字。",
    analogy: "像找味道相近的餐廳，不只找店名完全一樣的餐廳。",
    points: ["中文常稱向量搜尋", "比對語意相似度", "常用在 AI 知識庫"],
    sentence: "透過 Vector Search，使用者即使用不同說法提問，也能找到語意相近的企業文件。",
    visual: ["文字轉數字", "比對距離", "找相似內容"],
  },
  embedding: {
    title: "Embedding",
    quick: "把內容變成數字特徵",
    plain:
      "Embedding 是把文字、圖片或聲音轉成一串數字，讓電腦能比較它們的意思有多接近。",
    analogy: "像把每首歌標上節奏、情緒、速度分數，方便找相似歌曲。",
    points: ["中文常稱向量化", "把內容變數字", "支援語意搜尋"],
    sentence: "文件經過 Embedding 後，系統能以語意相似度排序搜尋結果。",
    visual: ["原始內容", "數字特徵", "相似度比較"],
  },
  llm: {
    title: "LLM",
    full: "Large Language Model",
    quick: "會理解文字的大型AI",
    plain:
      "LLM 是讀過大量文字資料的 AI，可以用文字回答問題、摘要、翻譯，也能協助寫作和分析。",
    analogy: "像一位讀過很多資料的助教，能根據問題整理出回答。",
    points: ["全名是 Large Language Model", "擅長處理文字", "需要資料輔助才更可靠"],
    sentence: "企業導入 LLM 時，通常會搭配內部知識庫，以降低回答不準確的風險。",
    visual: ["大量文字", "模型學習", "生成回答"],
  },
  "harness engineering": {
    title: "Harness Engineering",
    quick: "把開發流程自動化",
    plain:
      "Harness Engineering 可理解為用工具管理軟體開發、測試、部署流程，讓團隊更穩定地交付系統。",
    analogy: "像工廠輸送帶，把檢查、包裝、出貨流程排好，自動往下一站走。",
    points: ["偏 DevOps 工程", "強調流程自動化", "降低部署風險"],
    sentence: "Harness Engineering 能協助團隊自動化測試與部署流程，提升軟體交付的一致性。",
    visual: ["程式提交", "自動測試", "部署上線"],
  },
  agent: {
    title: "Agent",
    quick: "會幫你做事的AI",
    plain:
      "Agent 是不只回答問題，還能依照目標規劃步驟、使用工具，幫你完成任務的 AI 小助手。",
    analogy: "像旅行助理，不只告訴你景點，還能幫你排行程、訂票、提醒時間。",
    points: ["能規劃步驟", "能使用工具", "適合自動化任務"],
    sentence: "AI Agent 可根據使用者需求呼叫內部系統，完成查詢、彙整與通知等工作。",
    visual: ["接收目標", "使用工具", "完成任務"],
  },
  skills: {
    title: "Skills",
    quick: "AI可使用的能力包",
    plain:
      "Skills 是把某種固定能力包起來，讓 AI 遇到特定任務時知道該用什麼方法完成。",
    analogy: "像手機 app，每個 app 負責一種功能，需要時再打開使用。",
    points: ["封裝特定能力", "讓AI按任務使用", "可持續擴充"],
    sentence: "在 Agent 系統中，Skills 可封裝文件摘要、資料查詢或簡報生成等專門能力。",
    visual: ["任務需求", "選擇技能", "完成輸出"],
  },
  ".md檔": {
    title: ".MD檔",
    quick: "好讀的純文字文件",
    plain:
      ".MD 檔是 Markdown 文件，可以用簡單符號寫標題、清單、連結和程式碼，很適合寫說明文件。",
    analogy: "像比較整齊的記事本，不用複雜排版也能清楚呈現內容。",
    points: ["副檔名通常是 .md", "適合寫文件", "可轉成網頁格式"],
    sentence: "團隊可用 .MD 檔撰寫專案說明，讓開發者快速理解安裝方式與使用流程。",
    visual: ["純文字", "簡單標記", "清楚文件"],
  },
  "資料與流程孤島": {
    title: "資料與流程孤島",
    quick: "資料卡在各自系統",
    plain:
      "資料與流程孤島是指不同部門或系統各自保存資料，彼此不互通，導致查資料和做事都變慢。",
    analogy: "像每個社團都有自己的名單，但學校沒有一份整合清單。",
    points: ["資料分散", "流程不連貫", "會降低協作效率"],
    sentence: "若企業存在資料與流程孤島，AI 系統就難以取得完整脈絡並支援跨部門決策。",
    visual: ["部門A", "無法互通", "部門B"],
  },
  poc: {
    title: "POC",
    full: "Proof of Concept",
    quick: "先小規模驗證可行",
    plain:
      "POC 是正式投入前的小型試驗，用來確認一個想法、技術或方案到底能不能行得通。",
    analogy: "像開餐廳前先試賣幾天，看客人反應和流程是否順暢。",
    points: ["全名是 Proof of Concept", "中文是概念驗證", "降低正式導入風險"],
    sentence: "公司先進行 POC，以驗證 RAG 知識庫是否能有效回答內部員工問題。",
    visual: ["提出想法", "小規模測試", "決定導入"],
  },
  n8n: {
    title: "N8N",
    quick: "無程式自動流程工具",
    plain:
      "N8N 是用來串接不同系統的自動化工具，可以把表單、資料庫、通知等流程接起來。",
    analogy: "像把延長線和轉接頭接好，讓不同電器能一起運作。",
    points: ["開源自動化工具", "串接不同服務", "常用於後台流程"],
    sentence: "團隊可用 N8N 串接表單與通知系統，讓資料新增後自動通知負責人。",
    visual: ["觸發事件", "串接工具", "自動通知"],
  },
  serp: {
    title: "SERP",
    quick: "內部系統縮寫需先定義",
    plain:
      "SERP 若是公司內部系統名稱，外部學生通常不知道意思，簡報中應先說明它代表哪個系統。",
    analogy: "像班上私下取的綽號，外班同學聽到不一定知道是誰。",
    points: ["屬內部縮寫", "初次出現要解釋", "可改成傳統資料庫"],
    sentence: "若簡報提到 SERP，應補充它是內部舊系統或傳統資料庫，避免聽眾誤解。",
    visual: ["內部縮寫", "補充說明", "聽眾理解"],
  },
  hallucination: {
    title: "Hallucination",
    quick: "AI亂編答案",
    plain:
      "Hallucination 是 AI 看起來很有自信，但其實產生了錯誤、沒有根據或不存在的內容。",
    analogy: "像同學不知道答案卻講得很肯定，聽起來像真的但其實不對。",
    points: ["中文常稱幻覺", "答案可能不真實", "需要查證來源"],
    sentence: "RAG 可透過引用內部資料來源，降低 LLM 產生 Hallucination 的機率。",
    visual: ["問題", "無根據生成", "需要查證"],
  },
  token: {
    title: "Token",
    quick: "AI讀文字的小單位",
    plain:
      "Token 是 AI 處理文字時切出的小單位，可能是一個字、半個詞或一段符號。",
    analogy: "像把文章切成積木，AI 一塊一塊讀進去。",
    points: ["文字處理單位", "影響可讀長度", "和成本常有關"],
    sentence: "若文件超過模型的 Token 上下文容量，系統需要先切分或摘要內容。",
    visual: ["長文章", "切成Token", "模型讀取"],
  },
  "fine-tuning": {
    title: "Fine-tuning",
    quick: "讓AI更懂特定任務",
    plain:
      "Fine-tuning 是用特定資料再訓練 AI，讓它更適合某個領域、語氣或工作任務。",
    analogy: "像一般家教再接受某科特訓，變得更會教那一科。",
    points: ["中文常稱微調", "需要訓練資料", "適合固定任務"],
    sentence: "客服模型可透過 Fine-tuning 學習公司回覆語氣與常見問題處理方式。",
    visual: ["通用模型", "領域資料", "專用模型"],
  },
  "ci/cd": {
    title: "CI/CD",
    quick: "自動測試與交付程式",
    plain:
      "CI/CD 是讓程式更新後，自動進行檢查、測試和部署，減少人工操作造成的錯誤。",
    analogy: "像作業交出去前有自動檢查清單，通過後才送到老師手上。",
    points: ["持續整合", "持續交付", "提升上線穩定度"],
    sentence: "導入 CI/CD 後，團隊能在程式提交後自動執行測試並部署到測試環境。",
    visual: ["提交程式", "自動測試", "部署交付"],
  },
  pipeline: {
    title: "Pipeline",
    quick: "一步接一步的流程",
    plain:
      "Pipeline 是把工作拆成一連串步驟，前一步完成後再交給下一步處理。",
    analogy: "像飲料店流程：點餐、調飲、封膜、取餐，一站接一站。",
    points: ["中文常稱管線", "流程分成多站", "常用於工程自動化"],
    sentence: "資料 Pipeline 可自動完成擷取、清理、轉換與匯入資料庫的流程。",
    visual: ["步驟1", "步驟2", "步驟3"],
  },
  devops: {
    title: "DevOps",
    quick: "開發和維運一起合作",
    plain:
      "DevOps 是讓寫程式的人和維護系統的人更緊密合作，讓軟體更快、更穩地上線。",
    analogy: "像廚師和外場一起調整流程，餐點才能快又穩地送到客人桌上。",
    points: ["Development + Operations", "重視協作", "常搭配自動化工具"],
    sentence: "DevOps 文化能縮短開發到部署的時間，並提升服務穩定性。",
    visual: ["開發", "協作自動化", "維運"],
  },
  orchestrator: {
    title: "Orchestrator",
    quick: "負責安排工具合作",
    plain:
      "Orchestrator 是負責決定流程順序、分派任務、協調不同工具一起工作的系統角色。",
    analogy: "像樂團指揮，讓不同樂器在正確時間進場。",
    points: ["中文可稱編排器", "協調多個流程", "常見於自動化系統"],
    sentence: "AI Orchestrator 可根據任務需求，決定要先查資料、再呼叫工具或產生摘要。",
    visual: ["接收任務", "分派工具", "整合結果"],
  },
  "mcp server": {
    title: "MCP Server",
    quick: "讓AI連接外部工具",
    plain:
      "MCP Server 是讓 AI 以一致方式取得工具、資料或系統能力的連接服務。",
    analogy: "像萬用轉接座，讓不同設備都能用同一種方式接上。",
    points: ["全名是 Model Context Protocol", "連接工具與資料", "支援AI取得脈絡"],
    sentence: "企業可透過 MCP Server 讓 AI Agent 安全地查詢內部資料庫或使用指定工具。",
    visual: ["AI Agent", "MCP Server", "內部工具"],
  },
  "semantic search": {
    title: "Semantic Search",
    quick: "用意思找資料",
    plain:
      "Semantic Search 是根據問題的意思找資料，不只看關鍵字是否完全相同。",
    analogy: "像你說想吃清爽午餐，系統也能找到沙拉和越南河粉，而不是只找清爽兩個字。",
    points: ["中文常稱語意搜尋", "理解查詢意思", "適合知識庫搜尋"],
    sentence: "Semantic Search 能讓員工用自然語句查詢文件，而不必精準輸入檔名或關鍵字。",
    visual: ["使用者問題", "理解意思", "找相關文件"],
  },
  asr: {
    title: "ASR",
    full: "Automatic Speech Recognition",
    quick: "把語音變文字",
    plain:
      "ASR 是讓電腦聽懂聲音，並把說話內容轉成文字的技術。",
    analogy: "像會自動打字的會議記錄員，把大家說的話即時記下來。",
    points: ["全名是 Automatic Speech Recognition", "中文是語音辨識", "常用於會議逐字稿"],
    sentence: "Meeting Copilot 可透過 ASR 將會議錄音轉成逐字稿，再交由 LLM 摘要重點。",
    visual: ["語音輸入", "辨識文字", "產生逐字稿"],
  },
  nlp: {
    title: "NLP",
    full: "Natural Language Processing",
    quick: "讓電腦處理人類語言",
    plain:
      "NLP 是讓電腦理解、分析和產生人類語言的技術，例如摘要、分類、翻譯和問答。",
    analogy: "像請電腦當語文助教，幫你讀懂句子並整理重點。",
    points: ["全名是 Natural Language Processing", "中文是自然語言處理", "支援文字AI應用"],
    sentence: "NLP 技術可協助系統自動分類客服訊息並擷取重要資訊。",
    visual: ["文字資料", "語言分析", "任務輸出"],
  },
  diarization: {
    title: "Diarization",
    quick: "分辨誰在說話",
    plain:
      "Diarization 是把一段錄音切開，判斷不同時間是由哪位說話者發言。",
    analogy: "像會議記錄旁邊標註：這句是A說的，那句是B說的。",
    points: ["中文可稱語者切割", "分辨不同說話者", "常用於會議紀錄"],
    sentence: "Diarization 能在會議逐字稿中標示不同語者，方便後續追蹤責任與決議。",
    visual: ["會議錄音", "切分語者", "標示發言"],
  },
  "semantic endpointer": {
    title: "Semantic Endpointer",
    quick: "按語意切開語音",
    plain:
      "Semantic Endpointer 是根據一句話的意思和停頓，把語音切成較自然的段落。",
    analogy: "像幫逐字稿加句號，不只看停頓，也看一句話意思有沒有講完。",
    points: ["語音處理技術", "判斷段落結束", "讓摘要更準確"],
    sentence: "Semantic Endpointer 可改善會議逐字稿分段，使後續摘要更符合語意脈絡。",
    visual: ["連續語音", "判斷語意", "自然分段"],
  },
  ocr: {
    title: "OCR",
    full: "Optical Character Recognition",
    quick: "把圖片文字讀出來",
    plain:
      "OCR 是辨識圖片、掃描檔或 PDF 裡的文字，讓原本不能搜尋的內容變成可處理文字。",
    analogy: "像把照片上的筆記重新打成可複製的文字檔。",
    points: ["全名是 Optical Character Recognition", "中文是光學文字辨識", "常用於PDF和掃描文件"],
    sentence: "導入 OCR 後，系統能擷取掃描合約中的文字並放入知識庫搜尋。",
    visual: ["圖片文件", "辨識文字", "可搜尋資料"],
  },
  chunking: {
    title: "Chunking",
    quick: "把長文件切小段",
    plain:
      "Chunking 是把很長的文件切成較小段落，方便 AI 搜尋、讀取和引用。",
    analogy: "像把大章節切成小卡片，複習時比較好找重點。",
    points: ["切分長文件", "方便向量化", "提升檢索品質"],
    sentence: "RAG 系統通常會先進行 Chunking，再將每個段落向量化並建立索引。",
    visual: ["長文件", "切成段落", "建立索引"],
  },
  "multi-modal": {
    title: "Multi-modal",
    quick: "同時理解多種資料",
    plain:
      "Multi-modal 是讓 AI 同時處理文字、圖片、聲音或影片，而不是只看單一資料形式。",
    analogy: "像人上課會同時看投影片、聽老師說話、讀講義。",
    points: ["中文是多模態", "處理多種資料", "適合複雜情境理解"],
    sentence: "多模態 AI 可同時分析會議錄音、投影片與文字紀錄，產生更完整的摘要。",
    visual: ["文字圖片聲音", "一起分析", "完整理解"],
  },
  copilot: {
    title: "Copilot",
    quick: "AI協作助理",
    plain:
      "Copilot 通常指能陪你完成工作的 AI 助理，例如協助寫程式、整理文件或產生建議。",
    analogy: "像副駕駛，不是取代你開車，而是在旁邊提醒和輔助。",
    points: ["常見於AI產品名稱", "協助完成任務", "需確認具體產品"],
    sentence: "GitHub Copilot 可在開發者撰寫程式時，提供程式碼建議與範例。",
    visual: ["使用者工作", "AI建議", "共同完成"],
  },
  gemini: {
    title: "Gemini",
    quick: "Google的生成式AI",
    plain:
      "Gemini 是 Google 推出的生成式 AI 模型系列，可用來問答、摘要、寫作和處理多模態資料。",
    analogy: "像 Google 版本的 AI 助教，可以協助處理文字和部分多媒體任務。",
    points: ["Google AI模型", "可生成文字", "支援多種應用"],
    sentence: "Gemini 可用於文件摘要、資料分析與多模態內容理解等工作情境。",
    visual: ["輸入資料", "Gemini分析", "生成結果"],
  },
  prompt: {
    title: "Prompt Engineering",
    quick: "把問題問得更清楚",
    plain:
      "Prompt Engineering 是設計給 AI 的指令，讓 AI 更清楚知道要做什麼、用什麼格式回答。",
    analogy: "像跟店員點餐，說清楚口味、份量和不要什麼，餐點才更接近你要的。",
    points: ["中文可稱提示工程", "重點是清楚下指令", "會影響AI回答品質"],
    sentence: "良好的 Prompt Engineering 能讓 Copilot 產生更符合需求的程式碼與文件摘要。",
    visual: ["清楚指令", "AI理解", "產出更準"],
  },
  "microsoft copilot": {
    title: "Microsoft Copilot",
    quick: "微軟的AI工作助理",
    plain:
      "Microsoft Copilot 是整合在微軟工具中的 AI 助理，可協助寫信、整理文件、摘要會議和分析資料。",
    analogy: "像 Office 裡的助教，陪你整理 Word、Excel、Teams 裡的工作。",
    points: ["微軟AI產品", "支援辦公工作", "和GitHub Copilot用途不同"],
    sentence: "Microsoft Copilot 可協助員工摘要 Teams 會議內容並整理後續待辦事項。",
    visual: ["辦公資料", "Copilot協助", "完成工作"],
  },
  "github copilot": {
    title: "GitHub Copilot",
    quick: "幫忙寫程式的AI",
    plain:
      "GitHub Copilot 是給開發者使用的 AI 程式助理，能根據註解或上下文建議程式碼。",
    analogy: "像寫程式時旁邊有學長姐提醒你下一段可以怎麼寫。",
    points: ["AI程式助理", "常用於開發環境", "仍需要人工檢查"],
    sentence: "GitHub Copilot 能依照開發者撰寫的 Prompt，產生函式範例並加速原型開發。",
    visual: ["程式需求", "AI建議", "人工檢查"],
  },
  notebooklm: {
    title: "NotebookLM",
    quick: "用資料做筆記助理",
    plain:
      "NotebookLM 是 Google 的 AI 筆記工具，可根據你放進去的資料做摘要、問答和整理。",
    analogy: "像只讀你指定講義的讀書助教，回答比較貼近那些資料。",
    points: ["Google AI工具", "以指定資料為主", "適合讀書和研究整理"],
    sentence: "學生可將課堂講義匯入 NotebookLM，請系統整理章節重點與複習問題。",
    visual: ["上傳資料", "AI整理", "問答摘要"],
  },
  "gemini enterprise": {
    title: "Gemini Enterprise",
    quick: "企業版Google AI平台",
    plain:
      "Gemini Enterprise 是面向企業的 Google AI 服務，協助員工在工作資料中搜尋、分析和自動化任務。",
    analogy: "像公司專用的 AI 助理平台，比一般聊天工具更重視企業資料和權限。",
    points: ["Google企業AI服務", "整合工作資料", "重視權限和治理"],
    sentence: "Gemini Enterprise 可協助企業員工查找內部文件並產生符合權限規範的摘要。",
    visual: ["企業資料", "權限控管", "AI協作"],
  },
  api: {
    title: "API",
    full: "Application Programming Interface",
    quick: "系統之間溝通的接口",
    plain:
      "API 是讓不同軟體互相交換資料或功能的規則，讓一個系統可以請另一個系統幫忙做事。",
    analogy: "像餐廳點餐窗口，你不用進廚房，只要照規則點餐就能拿到餐點。",
    points: ["全名是 Application Programming Interface", "中文是應用程式介面", "用來串接系統"],
    sentence: "AI Agent 可透過 API 呼叫企業內部系統，取得訂單狀態或客戶資料。",
    visual: ["系統A", "API接口", "系統B"],
  },
  saas: {
    title: "SaaS",
    full: "Software as a Service",
    quick: "直接租用線上軟體",
    plain:
      "SaaS 是透過網路使用軟體服務，不需要自己安裝和維護整套系統。",
    analogy: "像訂閱 Netflix，看影片不用自己架影音平台。",
    points: ["全名是 Software as a Service", "雲端軟體服務", "常用訂閱制"],
    sentence: "企業採用 SaaS CRM，可快速啟用客戶管理功能並降低維護成本。",
    visual: ["雲端軟體", "網路登入", "直接使用"],
  },
  paas: {
    title: "PaaS",
    full: "Platform as a Service",
    quick: "租用開發平台",
    plain:
      "PaaS 是提供開發和部署應用程式的平台，開發者不用自己管理底層伺服器。",
    analogy: "像租一個設備齊全的廚房，你只要專心做菜。",
    points: ["全名是 Platform as a Service", "提供開發平台", "減少基礎設施管理"],
    sentence: "開發團隊可利用 PaaS 快速部署應用程式，而不必自行維護伺服器環境。",
    visual: ["平台服務", "開發部署", "應用上線"],
  },
  iaas: {
    title: "IaaS",
    full: "Infrastructure as a Service",
    quick: "租用雲端硬體資源",
    plain:
      "IaaS 是向雲端業者租用伺服器、儲存空間和網路等基礎資源。",
    analogy: "像租倉庫和水電，你可以自己決定裡面要怎麼擺設備。",
    points: ["全名是 Infrastructure as a Service", "提供基礎雲端資源", "彈性較高"],
    sentence: "企業可使用 IaaS 建立測試環境，依需求調整運算資源。",
    visual: ["雲端資源", "自行配置", "運行系統"],
  },
  roi: {
    title: "ROI",
    full: "Return on Investment",
    quick: "投入後值不值得",
    plain:
      "ROI 是用來看一筆投資帶來多少回報，幫助判斷花的錢和時間是否划算。",
    analogy: "像買補習課，會想知道成績進步值不值得那筆學費。",
    points: ["全名是 Return on Investment", "中文是投資報酬率", "常用於效益評估"],
    sentence: "企業評估 AI 工具時，會比較導入成本與節省工時，以計算 ROI。",
    visual: ["投入成本", "產生效益", "評估回報"],
  },
  kpi: {
    title: "KPI",
    full: "Key Performance Indicator",
    quick: "衡量成果的關鍵指標",
    plain:
      "KPI 是用來衡量目標是否達成的數字或指標，例如完成率、準確率、營收或滿意度。",
    analogy: "像課程成績標準，用考試、作業和出席看你學得如何。",
    points: ["全名是 Key Performance Indicator", "中文是關鍵績效指標", "用來追蹤目標"],
    sentence: "若知識庫專案的 KPI 是搜尋命中率，團隊就需要持續改善資料品質與標註方式。",
    visual: ["設定目標", "追蹤數字", "評估成果"],
  },
  mvp: {
    title: "MVP",
    full: "Minimum Viable Product",
    quick: "能先驗證的最小產品",
    plain:
      "MVP 是先做出最基本但可使用的版本，用來快速測試市場或使用者是否真的需要。",
    analogy: "像開店前先擺快閃攤，確認有人買再投資正式店面。",
    points: ["全名是 Minimum Viable Product", "中文是最小可行性產品", "用來快速驗證需求"],
    sentence: "團隊先推出 MVP，驗證學生是否願意使用 AI 名詞解釋工具。",
    visual: ["最小功能", "使用者測試", "決定迭代"],
  },
  workflow: {
    title: "Workflow",
    quick: "工作一步步怎麼跑",
    plain:
      "Workflow 是一件工作從開始到完成的流程安排，包含誰負責、何時處理、下一步做什麼。",
    analogy: "像社團辦活動流程：申請場地、宣傳、報名、簽到、活動結束。",
    points: ["中文是工作流", "描述工作步驟", "可搭配自動化工具"],
    sentence: "Workflow 自動化可讓表單送出後自動建立任務並通知負責人。",
    visual: ["觸發事件", "流程步驟", "完成任務"],
  },
  ad: {
    title: "AD / AAD",
    full: "Active Directory",
    quick: "管理帳號和權限",
    plain:
      "AD 或 AAD 是企業用來管理員工帳號、登入身份和系統權限的服務。",
    analogy: "像學校的學生證系統，決定你能進哪些教室、借哪些設備。",
    points: ["AD 是 Active Directory", "AAD 常指 Azure AD", "用於身份與權限管理"],
    sentence: "企業系統可串接 AD 或 AAD，確認使用者身份後再開放對應資料權限。",
    visual: ["員工帳號", "身份驗證", "權限控管"],
  },
  sso: {
    title: "SSO",
    full: "Single Sign-On",
    quick: "一次登入多個系統",
    plain:
      "SSO 是讓使用者登入一次後，就能使用多個被授權的系統，不必每個系統都重新登入。",
    analogy: "像用一張學生證進圖書館、電腦教室和宿舍門禁。",
    points: ["全名是 Single Sign-On", "中文是單一登入", "常搭配權限控管"],
    sentence: "AI 知識庫導入 SSO 後，可依使用者身份限制可查詢的文件範圍。",
    visual: ["一次登入", "驗證身份", "使用多系統"],
  },
  b2c: {
    title: "B2C",
    full: "Business to Consumer",
    quick: "企業賣給一般消費者",
    plain:
      "B2C 是企業直接面向一般消費者提供產品或服務，例如電商、餐飲和旅遊訂票。",
    analogy: "像你在網路商店直接跟品牌買東西。",
    points: ["全名是 Business to Consumer", "客戶是一般消費者", "重視使用者體驗"],
    sentence: "B2C 平台通常會利用推薦系統提升消費者的購買轉換率。",
    visual: ["企業", "商品服務", "消費者"],
  },
  b2b: {
    title: "B2B",
    full: "Business to Business",
    quick: "企業賣給企業",
    plain:
      "B2B 是企業提供產品或服務給其他企業，例如軟體系統、原物料或顧問服務。",
    analogy: "像餐廳向供應商買食材，不是一般客人去買。",
    points: ["全名是 Business to Business", "客戶是企業", "決策流程通常較長"],
    sentence: "B2B SaaS 公司會透過客戶成功團隊協助企業完成系統導入。",
    visual: ["企業A", "產品服務", "企業B"],
  },
  b2e: {
    title: "B2E",
    full: "Business to Employee",
    quick: "企業服務自己的員工",
    plain:
      "B2E 是企業提供給內部員工使用的服務或系統，例如內部知識庫、人資平台或員工入口網站。",
    analogy: "像學校提供給學生和老師用的校務系統。",
    points: ["全名是 Business to Employee", "使用者是內部員工", "常見於內部平台"],
    sentence: "企業建置 B2E AI 助理，可協助員工查詢制度、流程與內部文件。",
    visual: ["企業系統", "內部服務", "員工使用"],
  },
  erp: {
    title: "ERP",
    full: "Enterprise Resource Planning",
    quick: "整合企業資源的系統",
    plain:
      "ERP 是企業用來管理財務、採購、庫存、生產等核心流程的整合系統。",
    analogy: "像公司的總控台，把不同部門的重要資料集中管理。",
    points: ["全名是 Enterprise Resource Planning", "中文是企業資源規劃", "整合核心營運流程"],
    sentence: "AI Agent 若能串接 ERP，就可以協助查詢庫存、訂單與採購狀態。",
    visual: ["財務採購庫存", "ERP整合", "營運決策"],
  },
  crm: {
    title: "CRM",
    full: "Customer Relationship Management",
    quick: "管理客戶關係的系統",
    plain:
      "CRM 是企業用來記錄客戶資料、銷售進度、服務紀錄和行銷互動的系統。",
    analogy: "像業務團隊的客戶通訊錄加追蹤筆記。",
    points: ["全名是 Customer Relationship Management", "中文是客戶關係管理", "支援銷售和客服"],
    sentence: "客服人員可透過 CRM 查詢客戶歷史紀錄，再提供更精準的服務。",
    visual: ["客戶資料", "互動紀錄", "服務銷售"],
  },
  "vc joint venture": {
    title: "VC / Joint Venture",
    quick: "用投資或合資合作",
    plain:
      "VC 是創投，會投資有潛力的新公司；Joint Venture 是兩家公司合資成立或合作經營一個新事業。",
    analogy: "像兩個社團一起出錢出人辦活動，共同承擔風險，也一起分享成果。",
    points: ["VC 是 Venture Capital", "Joint Venture 是合資事業", "都常用於企業合作"],
    sentence: "企業可透過 VC 投資新創，或以 Joint Venture 與夥伴共同開發新市場。",
    visual: ["資金或夥伴", "共同投入", "新事業成長"],
    i18n: {
      en: {
        quick: "Investment or joint partnership",
        plain:
          "VC means venture capital, which invests in promising companies. A joint venture is a shared business created or operated by two or more partners.",
        analogy: "Like two clubs funding and running one event together, sharing both risk and results.",
        points: ["VC means Venture Capital", "Joint Venture means shared business", "Both support business growth"],
        sentence: "A company may use VC investment or a joint venture to enter a new market with lower shared risk.",
        visual: ["Capital or partner", "Shared input", "New venture grows"],
      },
      ja: {
        quick: "投資や合弁で協力する",
        plain:
          "VC は有望な企業に投資するベンチャーキャピタルです。Joint Venture は複数の会社が共同で作る、または運営する事業です。",
        analogy: "二つのサークルが一緒に資金と人を出してイベントを開くようなものです。",
        points: ["VC はベンチャー投資", "Joint Venture は合弁事業", "企業連携で使われる"],
        sentence: "企業は VC 投資や Joint Venture により、新市場への参入リスクを分担できる。",
        visual: ["資金や相手", "共同投入", "新事業が成長"],
      },
      ko: {
        quick: "투자나 합작으로 협력",
        plain:
          "VC는 성장 가능성이 있는 회사에 투자하는 벤처캐피털입니다. Joint Venture는 둘 이상의 회사가 함께 만들거나 운영하는 합작 사업입니다.",
        analogy: "두 동아리가 함께 돈과 인력을 내어 행사를 운영하고 결과를 나누는 것과 같습니다.",
        points: ["VC는 벤처캐피털", "Joint Venture는 합작 사업", "기업 협력에 자주 쓰임"],
        sentence: "기업은 VC 투자나 Joint Venture를 통해 위험을 나누며 새로운 시장에 진입할 수 있다.",
        visual: ["자본 또는 파트너", "공동 투입", "신사업 성장"],
      },
    },
  },
  digitization: {
    title: "Digitization",
    quick: "把資料變成數位格式",
    plain:
      "Digitization 是把紙本、照片或錄音等類比資料轉成電腦可以保存和處理的數位資料。",
    analogy: "像把紙本講義掃描成 PDF，之後就能搜尋、複製和分享。",
    points: ["中文是數位化", "把類比資料轉成數位", "是數位轉型的基礎"],
    sentence: "企業先進行 Digitization，將紙本合約轉成可搜尋的電子文件。",
    visual: ["紙本資料", "轉成檔案", "可搜尋處理"],
    i18n: {
      en: {
        quick: "Turn information into digital form",
        plain:
          "Digitization means converting paper, photos, audio, or other analog materials into digital data that computers can store and process.",
        analogy: "Like scanning handouts into PDFs so they can be searched and shared.",
        points: ["Converts analog to digital", "Makes data easier to store", "Foundation of digital transformation"],
        sentence: "The company began digitization by converting paper contracts into searchable electronic documents.",
        visual: ["Paper data", "Digital file", "Searchable data"],
      },
      ja: {
        quick: "情報をデジタル形式にする",
        plain:
          "Digitization は紙、写真、音声などをコンピューターで保存・処理できるデジタルデータに変えることです。",
        analogy: "紙の資料を PDF にスキャンして検索や共有をしやすくするイメージです。",
        points: ["アナログをデジタル化", "保存しやすくする", "DX の土台になる"],
        sentence: "企業は紙の契約書を検索可能な電子文書に変換することで Digitization を進めた。",
        visual: ["紙資料", "デジタル化", "検索可能"],
      },
      ko: {
        quick: "정보를 디지털 형식으로 전환",
        plain:
          "Digitization은 종이, 사진, 음성 같은 아날로그 자료를 컴퓨터가 저장하고 처리할 수 있는 디지털 데이터로 바꾸는 것입니다.",
        analogy: "종이 강의안을 PDF로 스캔해 검색하고 공유할 수 있게 만드는 것과 같습니다.",
        points: ["아날로그를 디지털로 전환", "저장과 처리가 쉬움", "디지털 전환의 기반"],
        sentence: "기업은 종이 계약서를 검색 가능한 전자 문서로 바꾸며 Digitization을 시작했다.",
        visual: ["종이 자료", "디지털 파일", "검색 가능"],
      },
    },
  },
  globalization: {
    title: "Globalization",
    quick: "讓事業走向全球",
    plain:
      "Globalization 是產品、服務、人才和資金跨越國界流動，讓企業和市場彼此更緊密連結。",
    analogy: "像一款手機 App 可以在不同國家下載，服務不再只限本地。",
    points: ["中文是全球化", "跨國市場連結", "需要考慮文化與法規"],
    sentence: "企業推動 Globalization 時，必須調整產品語言、付款方式與在地法規要求。",
    visual: ["本地市場", "跨國連結", "全球營運"],
    i18n: {
      en: {
        quick: "Expand business across borders",
        plain:
          "Globalization is the movement of products, services, people, and capital across countries, making markets more connected.",
        analogy: "Like an app that can be downloaded and used in many countries, not only at home.",
        points: ["Connects global markets", "Crosses national borders", "Requires local adaptation"],
        sentence: "When pursuing globalization, a company must adapt language, payments, and compliance for local markets.",
        visual: ["Local market", "Cross-border link", "Global operation"],
      },
      ja: {
        quick: "事業を世界へ広げる",
        plain:
          "Globalization は商品、サービス、人材、資金が国境を越えて動き、市場同士がつながることです。",
        analogy: "一つのアプリが複数の国で使われるようになるイメージです。",
        points: ["市場を国際的につなぐ", "国境を越える", "現地対応が必要"],
        sentence: "Globalization を進める企業は、言語、決済、規制に合わせた対応が必要である。",
        visual: ["国内市場", "国際連携", "世界展開"],
      },
      ko: {
        quick: "사업을 세계로 확장",
        plain:
          "Globalization은 제품, 서비스, 인재, 자본이 국경을 넘어 이동하며 시장이 더 긴밀히 연결되는 현상입니다.",
        analogy: "하나의 앱이 여러 나라에서 다운로드되고 사용되는 것과 같습니다.",
        points: ["세계 시장 연결", "국경을 넘는 활동", "현지화가 필요"],
        sentence: "기업이 Globalization을 추진할 때는 언어, 결제, 현지 규정을 함께 고려해야 한다.",
        visual: ["현지 시장", "국경 연결", "글로벌 운영"],
      },
    },
  },
  capitalization: {
    title: "Capitalization",
    quick: "把資源變成資本價值",
    plain:
      "Capitalization 可指把能力、品牌、資料或資產轉成可估值、可投資、可成長的資本價值。",
    analogy: "像把個人作品整理成作品集，讓能力變得看得見、能被評價。",
    points: ["中文可稱資本化", "把資源變可估值", "常見於商業策略"],
    sentence: "企業可透過資料 Capitalization，將營運資料轉化為新服務與決策資產。",
    visual: ["原始資源", "整理估值", "形成資本"],
    i18n: {
      en: {
        quick: "Turn resources into capital value",
        plain:
          "Capitalization means turning assets, capabilities, data, or brands into value that can be measured, invested in, or scaled.",
        analogy: "Like organizing your work into a portfolio so your ability becomes visible and valuable.",
        points: ["Turns resources into value", "Supports investment decisions", "Common in business strategy"],
        sentence: "Data capitalization can turn operational data into new services and strategic decision assets.",
        visual: ["Raw resource", "Valuation", "Capital value"],
      },
      ja: {
        quick: "資源を資本価値に変える",
        plain:
          "Capitalization は能力、ブランド、データ、資産を評価・投資・拡大できる価値に変えることです。",
        analogy: "作品をポートフォリオにまとめ、能力を見える価値にするようなものです。",
        points: ["資源を価値化する", "投資判断に役立つ", "事業戦略で使われる"],
        sentence: "企業はデータの Capitalization により、運用データを新サービスや意思決定資産に変えられる。",
        visual: ["元の資源", "価値評価", "資本価値"],
      },
      ko: {
        quick: "자원을 자본 가치로 전환",
        plain:
          "Capitalization은 역량, 브랜드, 데이터, 자산을 평가하거나 투자하고 확장할 수 있는 가치로 바꾸는 것입니다.",
        analogy: "작업물을 포트폴리오로 정리해 능력을 보이는 가치로 만드는 것과 같습니다.",
        points: ["자원을 가치로 전환", "투자 판단에 활용", "비즈니스 전략에서 사용"],
        sentence: "기업은 데이터 Capitalization을 통해 운영 데이터를 새로운 서비스와 의사결정 자산으로 바꿀 수 있다.",
        visual: ["원천 자원", "가치 평가", "자본 가치"],
      },
    },
  },
  lifestylization: {
    title: "Lifestylization",
    quick: "把產業變生活體驗",
    plain:
      "Lifestylization 是公司自造詞，可譯為生活產業化或生活產業話，指把產品或服務包裝成貼近日常生活的體驗。",
    analogy: "像咖啡不只賣飲料，而是賣讀書、社交、放鬆的生活場景。",
    points: ["公司自造詞", "可譯生活產業化", "強調生活情境與體驗"],
    sentence: "品牌透過 Lifestylization，將單一商品延伸成飲食、旅遊與社群互動的生活體驗。",
    visual: ["產品服務", "生活情境", "體驗品牌"],
    i18n: {
      en: {
        quick: "Turn business into lifestyle experience",
        plain:
          "Lifestylization is a company-coined term. It means shaping products or services into everyday lifestyle experiences, not only functional offerings.",
        analogy: "Like a cafe selling not only coffee, but also a place to study, socialize, and relax.",
        points: ["Company-coined term", "Lifestyle-oriented business", "Focuses on daily experience"],
        sentence: "Through lifestylization, the brand extends a product into dining, travel, and community experiences.",
        visual: ["Product", "Lifestyle scene", "Brand experience"],
      },
      ja: {
        quick: "事業を生活体験にする",
        plain:
          "Lifestylization は会社独自の造語で、商品やサービスを日常生活に近い体験として設計する考え方です。",
        analogy: "カフェがコーヒーだけでなく、勉強、交流、休憩の場を提供するようなものです。",
        points: ["会社独自の造語", "生活体験を重視", "商品を場面に広げる"],
        sentence: "Lifestylization により、ブランドは商品を飲食、旅行、コミュニティ体験へ広げられる。",
        visual: ["商品", "生活場面", "ブランド体験"],
      },
      ko: {
        quick: "사업을 생활 경험으로 전환",
        plain:
          "Lifestylization은 회사가 만든 용어로, 제품이나 서비스를 일상생활에 가까운 경험으로 설계하는 뜻입니다.",
        analogy: "카페가 커피뿐 아니라 공부, 만남, 휴식의 공간을 파는 것과 같습니다.",
        points: ["회사 자체 용어", "생활 경험 중심", "제품을 생활 장면으로 확장"],
        sentence: "브랜드는 Lifestylization을 통해 단일 제품을 식음, 여행, 커뮤니티 경험으로 확장할 수 있다.",
        visual: ["제품", "생활 장면", "브랜드 경험"],
      },
    },
  },
  "professional management": {
    title: "Professional Management",
    quick: "由專業經理人治理",
    plain:
      "專業經理人化可譯為 Professionalization of Management，指公司逐步由受過管理訓練的專業經理人負責經營。",
    analogy: "像球隊不只靠老闆熱情，而是請專業教練和經理團隊管理訓練、戰術和營運。",
    points: ["建議英文是 Professionalization of Management", "強調制度化管理", "降低只靠個人經驗的風險"],
    sentence: "Professionalization of Management helps a family business move from founder-led decisions to systematic governance.",
    visual: ["個人經驗", "制度管理", "專業治理"],
    i18n: {
      en: {
        quick: "Run by professional managers",
        plain:
          "Professionalization of Management means shifting a company toward systematic management led by trained professional managers.",
        analogy: "Like a sports team hiring professional coaches and managers instead of relying only on the owner's passion.",
        points: ["Best translation: Professionalization of Management", "Emphasizes systematic governance", "Reduces reliance on personal experience"],
        sentence: "Professionalization of Management helps a family business move from founder-led decisions to systematic governance.",
        visual: ["Personal experience", "Management system", "Professional governance"],
      },
      ja: {
        quick: "専門経営者による運営",
        plain:
          "Professionalization of Management は、訓練を受けた専門経営者が制度的に会社を運営する方向へ移ることです。",
        analogy: "球団がオーナーの情熱だけでなく、専門コーチと運営チームで管理するようなものです。",
        points: ["英訳は Professionalization of Management", "制度的な経営を重視", "個人経験への依存を下げる"],
        sentence: "Professionalization of Management は、創業者中心の判断から制度的ガバナンスへの移行を助ける。",
        visual: ["個人経験", "管理制度", "専門経営"],
      },
      ko: {
        quick: "전문 경영인이 운영",
        plain:
          "Professionalization of Management는 훈련받은 전문 경영인이 제도적으로 회사를 운영하도록 전환하는 것을 뜻합니다.",
        analogy: "구단이 구단주의 열정만이 아니라 전문 감독과 운영팀으로 훈련과 전략을 관리하는 것과 같습니다.",
        points: ["영문 번역: Professionalization of Management", "제도적 경영 강조", "개인 경험 의존 감소"],
        sentence: "Professionalization of Management는 창업자 중심 의사결정에서 체계적 거버넌스로 전환하는 데 도움을 준다.",
        visual: ["개인 경험", "관리 제도", "전문 경영"],
      },
    },
  },
  mcp: {
    title: "MCP",
    full: "Model Context Protocol",
    quick: "讓AI接工具的規格",
    plain:
      "MCP 是一種讓 AI 用一致方式連接外部工具、資料和服務的規格，方便系統安全地取得需要的脈絡。",
    analogy: "像通用插座，讓不同工具都能用同一套規則接上 AI。",
    points: ["全名是 Model Context Protocol", "連接工具和資料", "讓AI取得工作脈絡"],
    sentence: "企業可透過 MCP 讓 AI Agent 查詢內部資料庫，同時維持工具存取規範。",
    visual: ["AI需求", "MCP連接", "工具資料"],
  },
  genai: {
    title: "GenAI",
    full: "Generative AI",
    quick: "會生成內容的AI",
    plain:
      "GenAI 是生成式 AI，可以根據使用者指令產生文字、圖片、程式碼、摘要或其他內容。",
    analogy: "像一位會依照題目寫草稿的助教，但內容仍需要人檢查。",
    points: ["全名是 Generative AI", "可生成多種內容", "需要查證與引導"],
    sentence: "企業導入 GenAI 時，應搭配資料治理與人工審核，降低錯誤內容風險。",
    visual: ["使用者指令", "生成模型", "內容輸出"],
  },
  "模型即應用": {
    title: "模型即應用",
    quick: "模型本身就是功能核心",
    plain:
      "模型即應用是說 AI 模型不只是藏在後台的零件，而是直接成為產品功能和使用體驗的核心。",
    analogy: "像導航 App 的核心不是地圖圖片，而是會幫你規劃路線的演算法。",
    points: ["模型成為產品核心", "體驗直接來自AI能力", "產品差異來自模型表現"],
    sentence: "在模型即應用的產品中，使用者感受到的價值主要來自模型的理解與生成能力。",
    visual: ["AI模型", "產品功能", "使用者價值"],
  },
  "智能即產品": {
    title: "智能即產品",
    quick: "賣的是AI能力本身",
    plain:
      "智能即產品是指產品的主要價值來自 AI 判斷、生成或自動執行能力，而不只是傳統軟體介面。",
    analogy: "像買的不是一張表格，而是一個會幫你整理表格、找問題的助理。",
    points: ["AI能力就是賣點", "重視自動化與判斷", "產品價值更動態"],
    sentence: "當智能即產品成為趨勢，企業需要把 AI 能力設計成可被使用者直接感知的服務。",
    visual: ["資料輸入", "智能判斷", "產品價值"],
  },
  "通用即垂直": {
    title: "通用即垂直",
    quick: "通用AI要落到場景",
    plain:
      "通用即垂直是說通用 AI 能力要真正有用，通常需要放進特定產業、角色或流程裡，變成垂直應用。",
    analogy: "像萬用刀很厲害，但拿到廚房、露營或修理場景，才知道怎麼發揮。",
    points: ["通用能力需場景化", "垂直應用更貼近需求", "需要領域資料輔助"],
    sentence: "通用即垂直代表企業應將大型模型能力嵌入客服、法務或研發等具體流程。",
    visual: ["通用模型", "特定場景", "垂直應用"],
  },
  "原生即工程": {
    title: "原生即工程",
    quick: "AI原生也要工程落地",
    plain:
      "原生即工程是提醒大家，AI 原生產品不只靠模型想像，還需要資料、流程、權限、監控和部署等工程能力。",
    analogy: "像餐廳不只要有好食譜，還要有廚房、流程、衛生和出餐管理。",
    points: ["AI原生需要工程支撐", "不只模型展示", "重視可維運與可擴充"],
    sentence: "原生即工程強調，AI 應用若要進企業，就必須具備穩定部署與權限控管能力。",
    visual: ["AI想法", "工程系統", "穩定落地"],
  },
  "長尾需求": {
    title: "長尾需求",
    quick: "少量但很多種的需求",
    plain:
      "長尾需求是指每一種需求看起來人不多，但種類非常多，加起來可能形成很大的市場或工作量。",
    analogy: "像書店不只賣暢銷書，很多冷門書各賣一點，加起來也很可觀。",
    points: ["單一需求量小", "種類很多", "AI適合處理客製化需求"],
    sentence: "GenAI 可協助企業用較低成本回應大量長尾需求，例如個人化客服與客製內容生成。",
    visual: ["少量需求", "種類很多", "累積價值"],
  },
  "數據": {
    title: "數據",
    quick: "可被分析的資料",
    plain:
      "數據是被收集、整理後可用來分析和判斷的資料，例如銷售紀錄、點擊率、問卷結果或感測器讀數。",
    analogy: "像班級成績表，單一分數是資料，整理後就能看出整體學習狀況。",
    points: ["資料經整理可分析", "支援決策", "AI需要高品質數據"],
    sentence: "企業若想讓 AI 回答更準確，就需要先整理乾淨且有代表性的數據。",
    visual: ["原始資料", "整理分析", "輔助決策"],
  },
  "模型": {
    title: "模型",
    quick: "用來判斷或生成的規則",
    plain:
      "模型是電腦從資料中學到的判斷方式，可以用來分類、預測、生成內容或協助決策。",
    analogy: "像你看過很多考古題後，學會判斷下一題大概怎麼解。",
    points: ["從資料學規律", "可預測或生成", "表現取決於資料與設計"],
    sentence: "若訓練資料品質不足，模型即使很大，也可能產生不穩定或偏誤的結果。",
    visual: ["訓練資料", "學習規律", "產生輸出"],
  },
  ar: {
    title: "AR",
    full: "Augmented Reality",
    quick: "把虛擬物疊到現實",
    plain:
      "AR 是擴增實境，會在真實世界畫面上疊加虛擬資訊，例如手機鏡頭中出現方向箭頭或商品預覽。",
    analogy: "像用手機看房間時，螢幕上直接看到家具擺進去的樣子。",
    points: ["全名是 Augmented Reality", "中文是擴增實境", "現實畫面加上虛擬資訊"],
    sentence: "零售業可用 AR 讓顧客在家中預覽家具擺放效果。",
    visual: ["真實世界", "疊加資訊", "互動體驗"],
  },
  vr: {
    title: "VR",
    full: "Virtual Reality",
    quick: "進入全虛擬世界",
    plain:
      "VR 是虛擬實境，使用者戴上裝置後會進入電腦生成的虛擬環境，感覺像置身其中。",
    analogy: "像不是看遊戲畫面，而是整個人走進遊戲場景裡。",
    points: ["全名是 Virtual Reality", "中文是虛擬實境", "沉浸在虛擬環境"],
    sentence: "VR 可用於安全訓練，讓學員在虛擬場景中練習高風險操作。",
    visual: ["戴上裝置", "虛擬環境", "沉浸互動"],
  },
  mr: {
    title: "MR",
    full: "Mixed Reality",
    quick: "真實與虛擬可互動",
    plain:
      "MR 是混合實境，讓虛擬物件不只疊在現實上，還能和真實空間產生互動。",
    analogy: "像虛擬模型放在桌上，還能繞著它看、移動它或和它互動。",
    points: ["全名是 Mixed Reality", "中文是混合實境", "虛實物件可互動"],
    sentence: "工程師可用 MR 在真實機台旁查看虛擬維修指引。",
    visual: ["真實空間", "虛擬物件", "互動操作"],
  },
  xr: {
    title: "XR",
    full: "Extended Reality",
    quick: "AR、VR、MR的總稱",
    plain:
      "XR 是延展實境，是 AR、VR、MR 等沉浸式技術的總稱，用來描述各種虛實融合體驗。",
    analogy: "像把手機、平板、筆電都統稱為數位裝置，XR 是一整類技術的總稱。",
    points: ["全名是 Extended Reality", "涵蓋AR、VR、MR", "描述沉浸式體驗"],
    sentence: "品牌可透過 XR 活動，讓消費者用沉浸式方式體驗新品。",
    visual: ["AR", "VR/MR", "XR總稱"],
  },
  "agentic workflow": {
    title: "Agentic Workflow",
    quick: "讓AI代理跑完整流程",
    plain:
      "Agentic Workflow 是讓 AI Agent 根據目標規劃步驟、呼叫工具、檢查結果，完成一串工作流程。",
    analogy: "像助教不只回答問題，還會查資料、整理表格、寄信提醒，自己把流程跑完。",
    points: ["由AI代理推動流程", "會使用工具", "適合多步驟任務"],
    sentence: "Agentic Workflow 可讓 AI 自動完成資料查詢、摘要生成與任務派送。",
    visual: ["設定目標", "Agent執行", "完成流程"],
  },
  "dynamic workflow": {
    title: "Dynamic Workflow",
    quick: "會依情況改變流程",
    plain:
      "Dynamic Workflow 是流程不完全固定，系統會根據資料、狀態或判斷結果，選擇下一步要做什麼。",
    analogy: "像 GPS 導航會依照塞車情況即時改路線。",
    points: ["流程會動態調整", "依條件決定下一步", "適合不確定情境"],
    sentence: "客服系統可用 Dynamic Workflow 依問題類型自動分流到不同處理流程。",
    visual: ["輸入狀態", "判斷條件", "改變流程"],
  },
  "沙盒": {
    title: "沙盒 / 沙箱",
    quick: "安全隔離的測試空間",
    plain:
      "沙盒或沙箱是隔離的測試環境，讓程式、檔案或 AI 工具可以先在安全範圍內執行，避免影響正式系統。",
    analogy: "像小朋友在沙坑玩，就算弄亂也不會把整個教室弄髒。",
    points: ["隔離測試環境", "降低正式系統風險", "常用於資安與開發"],
    sentence: "開發團隊會先在沙盒環境測試 AI Agent 的工具呼叫，再部署到正式系統。",
    visual: ["待測功能", "隔離環境", "安全驗證"],
  },
  openclaw: {
    title: "OpenClaw／OpenCopilot",
    quick: "未定義的AI框架代稱",
    plain:
      "OpenClaw 或 OpenCopilot 若未先定義，聽眾容易不知道是正式產品、內部代號，還是開源框架。",
    analogy: "像簡報突然出現一個沒介紹過的專案代號，大家會先卡在名字上。",
    points: ["先確認是否正式名稱", "簡報中要補定義", "可改稱開源AI協作框架"],
    sentence: "若使用 OpenCopilot 一詞，簡報應先說明它指的是開源 AI 協作框架，而非假設聽眾已熟悉。",
    visual: ["陌生代稱", "補充定義", "避免混淆"],
  },
};

Object.assign(knownConcepts, supplementalConcepts);

const aliases = {
  "rag（檢索增強生成）": "rag",
  "檢索增強生成": "rag",
  "retrieval-augmented generation": "rag",
  "知識圖譜": "knowledge graph",
  "知識本體": "ontology",
  "向量搜尋": "vector search",
  "向量資料庫": "vector search",
  "vector db": "vector search",
  "向量化": "embedding",
  "大語言模型": "llm",
  "large language model": "llm",
  "ai agent": "agent",
  "agentic ai": "agent",
  "智能代理": "agent",
  "快取索引": "cache indexing",
  "概念驗證": "poc",
  "proof of concept": "poc",
  "幻覺": "hallucination",
  "ai亂編答案": "hallucination",
  "token上下文容量": "token",
  "微調": "fine-tuning",
  "持續整合": "ci/cd",
  "持續交付": "ci/cd",
  "管線": "pipeline",
  "流水線": "pipeline",
  "編排器": "orchestrator",
  "model context protocol": "mcp server",
  "語意搜尋": "semantic search",
  "語音辨識": "asr",
  "自然語言處理": "nlp",
  "語者切割": "diarization",
  "語者分群": "diarization",
  "語意分段模型": "semantic endpointer",
  "光學文字辨識": "ocr",
  "多模態": "multi-modal",
  "多模態辨識": "multi-modal",
  "markdown": ".md檔",
  "md檔": ".md檔",
  "harness": "harness engineering",
  "opencopilot": "openclaw",
  "openclaw／opencopilot": "openclaw",
  "prompt engineering": "prompt",
  "提示工程": "prompt",
  "提示詞工程": "prompt",
  "microsoft copilot／github copilot": "microsoft copilot",
  "github/microsoft copilot": "github copilot",
  "應用程式介面": "api",
  "software as a service": "saas",
  "platform as a service": "paas",
  "infrastructure as a service": "iaas",
  "投資報酬率": "roi",
  "關鍵績效指標": "kpi",
  "minimum viable product": "mvp",
  "最小可行性產品": "mvp",
  "工作流": "workflow",
  "工作流自動化": "workflow",
  "workflow automation": "workflow",
  "aad": "ad",
  "active directory": "ad",
  "azure ad": "ad",
  "權限控管": "sso",
  "單一登入": "sso",
  "single sign-on": "sso",
  "b2c / b2b / b2e": "b2c",
  "b2b / b2c / b2e": "b2b",
  "企業資源規劃": "erp",
  "客戶關係管理": "crm",
  "vc join venture": "vc joint venture",
  "joint venture": "vc joint venture",
  "venture capital": "vc joint venture",
  "數位化": "digitization",
  "全球化": "globalization",
  "資本化": "capitalization",
  "生活產業話": "lifestylization",
  "生活產業化": "lifestylization",
  "專業經理人化": "professional management",
  "professionalization of management": "professional management",
  "mcp server": "mcp",
  "model context protocol": "mcp",
  "generative ai": "genai",
  "生成式ai": "genai",
  "生成式 ai": "genai",
  "模型即應用": "模型即應用",
  "智能即產品": "智能即產品",
  "通用即垂直": "通用即垂直",
  "原生即工程": "原生即工程",
  "長尾需求": "長尾需求",
  "data": "數據",
  "model": "模型",
  "augmented reality": "ar",
  "virtual reality": "vr",
  "mixed reality": "mr",
  "extended reality": "xr",
  "agentic workflow": "agentic workflow",
  "dynamic workflow": "dynamic workflow",
  "龍蝦": "openclaw",
  "open claw": "openclaw",
  "沙箱": "沙盒",
  "sandbox": "沙盒",
};

const unknownAcronyms = new Set();
let currentLanguage = "zh";
let currentTerm = "";
const unknownTerms = [];

const uiText = {
  zh: {
    eyebrow: "課堂黑話即時救援",
    title: "蛤? 這位演講的大哥剛剛說什麼? 請餵我翻譯蒟蒻",
    subtitle: "把課堂黑話、AI 術語、企業簡報詞，翻成大一生與學員也聽得懂的版本。",
    inputLabel: "想理解什麼？",
    languageLabel: "語系",
    explainButton: "請講人話",
    quickHeading: "一句話先救你",
    plainHeading: "說人話版本",
    analogyHeading: "拿生活來比一下",
    pointsHeading: "關鍵重點",
    sentenceHeading: "報告可以這樣寫",
    visualHeading: "這個詞怎麼運作",
    logKicker: "課後發問暫存",
    logTitle: "可以舉手發問的詞",
    emptyLog: "目前沒有查不到的詞彙可以做提問",
    helperNote: "輸入黑話，系統會翻成白話；查不到就自動存到課後提問清單。",
    placeholder: "例如：RAG、VC Joint Venture、Digitization",
  },
  en: {
    eyebrow: "Fast concept helper for students",
    title: "Plain-Language Term Tutor",
    subtitle: "Enter a term or theory and get a short, clear, everyday explanation.",
    inputLabel: "What do you want to understand?",
    languageLabel: "Language",
    explainButton: "Explain",
    quickHeading: "Quick Understanding",
    plainHeading: "Plain Explanation",
    analogyHeading: "Everyday Analogy",
    pointsHeading: "Key Points",
    sentenceHeading: "Use It In A Sentence",
    visualHeading: "How This Term Works",
    logKicker: "After-class question log",
    logTitle: "Terms worth asking about",
    emptyLog: "No unknown terms yet for follow-up questions.",
    helperNote: "Enter confusing jargon, get a plain explanation; unknown terms are saved for after-class questions.",
    placeholder: "e.g. RAG, VC Joint Venture, Digitization",
  },
  ja: {
    eyebrow: "大学生向けの高速理解ツール",
    title: "やさしい専門用語チューター",
    subtitle: "専門用語や理論を入力すると、短く分かりやすく説明します。",
    inputLabel: "何を理解したいですか？",
    languageLabel: "言語",
    explainButton: "説明",
    quickHeading: "一言で理解",
    plainHeading: "やさしい説明",
    analogyHeading: "日常のたとえ",
    pointsHeading: "重要ポイント",
    sentenceHeading: "文章での使い方",
    visualHeading: "この用語の仕組み",
    logKicker: "授業後の質問メモ",
    logTitle: "質問できる用語",
    emptyLog: "今のところ質問用に残す未登録語はありません。",
    helperNote: "分かりにくい用語を入力すると、やさしい説明に変換します。未登録語は質問メモに残ります。",
    placeholder: "例：RAG、VC Joint Venture、Digitization",
  },
  ko: {
    eyebrow: "대학생을 위한 빠른 개념 이해 도구",
    title: "쉬운 용어 튜터",
    subtitle: "전문 용어나 이론을 입력하면 짧고 쉽게 설명합니다.",
    inputLabel: "무엇을 이해하고 싶나요?",
    languageLabel: "언어",
    explainButton: "설명",
    quickHeading: "한 줄 이해",
    plainHeading: "쉬운 설명",
    analogyHeading: "생활 속 비유",
    pointsHeading: "핵심 포인트",
    sentenceHeading: "문장 속 활용",
    visualHeading: "이 용어가 작동하는 방식",
    logKicker: "수업 후 질문 메모",
    logTitle: "질문할 만한 용어",
    emptyLog: "아직 질문할 수 있는 미등록 용어가 없습니다.",
    helperNote: "어려운 용어를 입력하면 쉬운 설명으로 바꾸고, 모르는 용어는 질문 메모에 저장합니다.",
    placeholder: "예: RAG, VC Joint Venture, Digitization",
  },
};

const defaultMessage = {
  quick: "先輸入一個概念",
  plain: "可以輸入課堂上聽不懂的名詞，例如 RAG、熵、LLM 或邊際效用。",
  analogy: "像問同學：這到底是在幹嘛？先用白話抓方向。",
  points: ["輸入名詞", "按下解釋", "看短版重點"],
  sentence: "請先輸入一個概念，系統會產生適合放進報告或作業中的造句。",
  visual: ["輸入概念", "生成解釋", "搭配圖像"],
  i18n: {
    en: {
      quick: "Enter a concept first",
      plain: "Type a term from class, such as RAG, LLM, POC, or Digitization.",
      analogy: "Like asking a classmate, 'What does this actually do?' Start with the plain idea.",
      points: ["Enter a term", "Press Explain", "Read the short summary"],
      sentence: "Enter a concept first, and the app will generate a sentence suitable for reports or assignments.",
      visual: ["Enter concept", "Generate explanation", "Add visual aid"],
    },
    ja: {
      quick: "まず概念を入力",
      plain: "授業で分からない用語を入力してください。例：RAG、LLM、POC、Digitization。",
      analogy: "友だちに「これは何をするもの？」と聞くように、まず大意をつかみます。",
      points: ["用語を入力", "説明を押す", "短い要点を見る"],
      sentence: "概念を入力すると、レポートや課題に使える文を生成します。",
      visual: ["概念を入力", "説明を生成", "図で補助"],
    },
    ko: {
      quick: "먼저 개념을 입력하세요",
      plain: "수업에서 이해하기 어려운 용어를 입력하세요. 예: RAG, LLM, POC, Digitization.",
      analogy: "친구에게 '이게 정확히 뭘 하는 거야?'라고 묻듯이 먼저 핵심을 잡습니다.",
      points: ["용어 입력", "설명 누르기", "짧은 요약 보기"],
      sentence: "개념을 입력하면 보고서나 과제에 쓸 수 있는 문장을 생성합니다.",
      visual: ["개념 입력", "설명 생성", "그림 보조"],
    },
  },
};

function cleanText(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 48);
}

function isLikelyAcronym(value) {
  return /^[A-Za-z]{2,8}$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function makeGenericExplanation(term) {
  const lower = term.toLowerCase();
  const full = acronymFullNames[lower];
  const needsLookup = unknownAcronyms.has(lower);
  const shortTerm = term.length > 8 ? `${term.slice(0, 8)}...` : term;

  if (!full) {
    return {
      quick: `查不到「${shortTerm}」`,
      plain: `恭喜你，可以舉手發問了!! 因為教授沒有內建定義，這題我先不硬掰。請換個說法，或補一下領域試試。`,
      analogy: "像課堂投影片突然冒出沒解釋的縮寫，這時候舉手問很合理。",
      points: [
        needsLookup ? "若是縮寫，先確認全名" : "確認名稱有沒有打錯",
        "可補充科目或領域",
        "避免產生不可靠答案",
      ],
      sentence: "目前查找不到可靠定義，因此暫不提供專業造句，避免誤用概念。",
      visual: ["查無內建定義", "記到提問清單", "課後發問"],
      i18n: {
        en: {
          quick: `No result for "${shortTerm}"`,
          plain: `The built-in glossary does not yet have a reliable explanation for "${term}". Try another common name, or add the course/field context.`,
          analogy: "Like not finding a book in the library; check the spelling, author, or category first.",
          points: [
            needsLookup ? "If it is an acronym, check the full name" : "Check spelling or naming",
            "Add subject or field context",
            "Avoid unreliable answers",
          ],
          sentence: "No professional sentence is provided because the definition is not reliable yet.",
          visual: ["No reliable data", "Check name", "Add context"],
        },
        ja: {
          quick: `「${shortTerm}」は見つかりません`,
          plain: `内蔵用語集には「${term}」の信頼できる説明がまだありません。別の一般的な名称を試すか、科目や分野を補足してください。`,
          analogy: "図書館で本が見つからない時、まず書名、著者、分類を確認するようなものです。",
          points: [
            needsLookup ? "略語なら正式名称を確認" : "表記を確認",
            "科目や分野を補足",
            "不確かな回答を避ける",
          ],
          sentence: "定義がまだ信頼できないため、専門的な例文は提供しません。",
          visual: ["信頼資料なし", "名称確認", "分野を補足"],
        },
        ko: {
          quick: `"${shortTerm}"을 찾을 수 없음`,
          plain: `내장 용어집에는 "${term}"에 대한 신뢰할 수 있는 설명이 아직 없습니다. 더 일반적인 이름을 입력하거나 과목/분야를 보충해 주세요.`,
          analogy: "도서관에서 책을 못 찾을 때 먼저 제목, 저자, 분류를 확인하는 것과 같습니다.",
          points: [
            needsLookup ? "약어라면 전체 이름 확인" : "철자나 명칭 확인",
            "과목이나 분야 보충",
            "부정확한 답변 방지",
          ],
          sentence: "정의가 아직 신뢰할 수 없으므로 전문 예문은 제공하지 않습니다.",
          visual: ["신뢰 자료 없음", "명칭 확인", "분야 보충"],
        },
      },
    };
  }

  return {
    quick: `先看「${shortTerm}」用途`,
    plain: `${term} 全名是 ${full}。${term} 可以先理解成一種幫人解決問題的想法或工具。先不用背定義，重點是看它用在哪裡、幫誰做什麼。`,
    analogy: `像用 Google 搜尋陌生詞：先看最常出現的用途，再用自己的話整理。`,
    points: [
      full ? `全名是 ${full}` : "先找它想解決的問題",
      needsLookup && !full ? "若是縮寫，先確認全名" : "再看它怎麼做到",
      "最後用生活例子記住",
    ].slice(0, 3),
    sentence: `在課堂討論中，${term} 可用來說明特定工具或方法如何協助解決問題。`,
    visual: [`${shortTerm}`, "用途", "應用情境"],
  };
}

function localizeData(data) {
  if (currentLanguage === "zh" || !data.i18n || !data.i18n[currentLanguage]) {
    return data;
  }

  return {
    ...data,
    ...data.i18n[currentLanguage],
  };
}

function updateUiLanguage(elements) {
  const text = uiText[currentLanguage] || uiText.zh;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[key]) {
      node.textContent = text[key];
    }
  });
  elements.input.placeholder = text.placeholder;
  elements.language.setAttribute("aria-label", text.languageLabel);
  renderUnknownLog(elements);
}

function setPoints(points, elements) {
  elements.points.innerHTML = "";
  points.slice(0, 3).forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    elements.points.appendChild(item);
  });
}

function renderLearningVisual(steps, elements) {
  const labels = steps.slice(0, 3).map(escapeHtml);
  elements.visual.innerHTML = `
    <div class="flow-diagram" role="img" aria-label="概念流程圖">
      <div class="flow-node flow-blue">${labels[0] || "概念"}</div>
      <div class="flow-arrow"></div>
      <div class="flow-node flow-green">${labels[1] || "關係"}</div>
      <div class="flow-arrow"></div>
      <div class="flow-node flow-coral">${labels[2] || "結果"}</div>
    </div>
  `;
}

function renderData(data, elements) {
  const localized = localizeData(data);
  elements.quick.textContent = localized.quick;
  elements.plain.textContent = localized.plain;
  elements.analogy.textContent = localized.analogy;
  elements.sentence.textContent = localized.sentence;
  setPoints(localized.points, elements);
  renderLearningVisual(localized.visual, elements);
}

function renderUnknownLog(elements) {
  elements.unknownLog.innerHTML = "";
  elements.emptyLog.hidden = unknownTerms.length > 0;

  unknownTerms.forEach((term) => {
    const item = document.createElement("li");
    item.textContent = term;
    elements.unknownLog.appendChild(item);
  });
}

function addUnknownTerm(term, elements) {
  if (!unknownTerms.includes(term)) {
    unknownTerms.push(term);
  }
  renderUnknownLog(elements);
}

function renderExplanation(term, elements) {
  const normalized = term.toLowerCase();
  const key = knownConcepts[term] ? term : aliases[normalized] || normalized;
  const isKnown = !!knownConcepts[key];
  const data = isKnown ? knownConcepts[key] : makeGenericExplanation(term);

  renderData(data, elements);
  return isKnown;
}

function initApp() {
  const elements = {
    form: document.querySelector("#explain-form"),
    input: document.querySelector("#concept"),
    quick: document.querySelector("#quick"),
    plain: document.querySelector("#plain"),
    analogy: document.querySelector("#analogy"),
    points: document.querySelector("#points"),
    sentence: document.querySelector("#sentence"),
    visual: document.querySelector("#concept-visual"),
    language: document.querySelector("#language"),
    unknownLog: document.querySelector("#unknown-log"),
    emptyLog: document.querySelector("#empty-log"),
    chips: document.querySelectorAll("[data-example]"),
  };

  if (
    !elements.form ||
    !elements.input ||
    !elements.quick ||
    !elements.plain ||
    !elements.analogy ||
    !elements.points ||
    !elements.sentence ||
    !elements.visual ||
    !elements.language ||
    !elements.unknownLog ||
    !elements.emptyLog
  ) {
    return;
  }

  updateUiLanguage(elements);

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const term = cleanText(elements.input.value);
    currentTerm = term;
    if (!term) {
      renderData(defaultMessage, elements);
      elements.input.focus();
      return;
    }

    if (isLikelyAcronym(term) && !acronymFullNames[term.toLowerCase()]) {
      unknownAcronyms.add(term.toLowerCase());
    }

    const isKnown = renderExplanation(term, elements);
    if (!isKnown) {
      addUnknownTerm(term, elements);
    }
  });

  elements.language.addEventListener("change", () => {
    currentLanguage = elements.language.value;
    updateUiLanguage(elements);
    if (currentTerm) {
      renderExplanation(currentTerm, elements);
    } else {
      renderData(defaultMessage, elements);
    }
  });

  elements.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      elements.input.value = chip.dataset.example;
      currentTerm = chip.dataset.example;
      renderExplanation(chip.dataset.example, elements);
      elements.input.focus();
    });
  });

  window.__termTutorReady = true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
