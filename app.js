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
};

const unknownAcronyms = new Set();
const defaultMessage = {
  quick: "先輸入一個概念",
  plain: "可以輸入課堂上聽不懂的名詞，例如 RAG、熵、LLM 或邊際效用。",
  analogy: "像問同學：這到底是在幹嘛？先用白話抓方向。",
  points: ["輸入名詞", "按下解釋", "看短版重點"],
  sentence: "請先輸入一個概念，系統會產生適合放進報告或作業中的造句。",
  visual: ["輸入概念", "生成解釋", "搭配圖像"],
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

function shortLabel(value) {
  const text = String(value);
  return text.length > 9 ? `${text.slice(0, 9)}...` : text;
}

function makeGenericExplanation(term) {
  const lower = term.toLowerCase();
  const full = acronymFullNames[lower];
  const needsLookup = unknownAcronyms.has(lower);
  const shortTerm = term.length > 8 ? `${term.slice(0, 8)}...` : term;

  if (!full) {
    return {
      quick: `查不到「${shortTerm}」`,
      plain: `目前內建資料沒有「${term}」的可靠解釋，所以先不硬掰答案。請換一個常見說法，或補充它是哪一門課的概念。`,
      analogy: "像在圖書館找不到書名，先確認拼字、作者或分類，會比較容易找到。",
      points: [
        needsLookup ? "若是縮寫，先確認全名" : "確認名稱有沒有打錯",
        "可補充科目或領域",
        "避免產生不可靠答案",
      ],
      sentence: "目前查找不到可靠定義，因此暫不提供專業造句，避免誤用概念。",
      visual: ["查無可靠資料", "確認名稱", "補充領域再試"],
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

function setPoints(points, elements) {
  elements.points.innerHTML = "";
  points.slice(0, 3).forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    elements.points.appendChild(item);
  });
}

function renderLearningVisual(steps, elements) {
  const labels = steps.slice(0, 3).map((step) => escapeHtml(shortLabel(step)));
  elements.visual.innerHTML = `
    <svg viewBox="0 0 620 190" role="img" aria-label="概念流程圖">
      <defs>
        <marker id="arrow-head" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#c9d2e2"></path>
        </marker>
      </defs>
      <rect x="20" y="52" width="150" height="76" rx="8" class="svg-blue"></rect>
      <rect x="235" y="52" width="150" height="76" rx="8" class="svg-green"></rect>
      <rect x="450" y="52" width="150" height="76" rx="8" class="svg-coral"></rect>
      <path d="M180 90 H222" class="svg-arrow"></path>
      <path d="M395 90 H437" class="svg-arrow"></path>
      <text x="95" y="97" text-anchor="middle">${labels[0] || "概念"}</text>
      <text x="310" y="97" text-anchor="middle">${labels[1] || "關係"}</text>
      <text x="525" y="97" text-anchor="middle">${labels[2] || "結果"}</text>
    </svg>
  `;
}

function renderData(data, elements) {
  elements.quick.textContent = data.quick;
  elements.plain.textContent = data.plain;
  elements.analogy.textContent = data.analogy;
  elements.sentence.textContent = data.sentence;
  setPoints(data.points, elements);
  renderLearningVisual(data.visual, elements);
}

function renderExplanation(term, elements) {
  const normalized = term.toLowerCase();
  const key = knownConcepts[term] ? term : aliases[normalized] || normalized;
  const data = knownConcepts[key] || makeGenericExplanation(term);

  renderData(data, elements);
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
    !elements.visual
  ) {
    return;
  }

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const term = cleanText(elements.input.value);
    if (!term) {
      renderData(defaultMessage, elements);
      elements.input.focus();
      return;
    }

    if (isLikelyAcronym(term) && !acronymFullNames[term.toLowerCase()]) {
      unknownAcronyms.add(term.toLowerCase());
    }

    renderExplanation(term, elements);
  });

  elements.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      elements.input.value = chip.dataset.example;
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
