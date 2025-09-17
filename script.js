const homeScreen = document.getElementById('home-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startStationInput = document.getElementById('start-station');
const endStationInput = document.getElementById('end-station');
const searchButton = document.getElementById('search-button');
const backToHomeButton = document.getElementById('back-to-home-button');
const resultArea = document.getElementById('result-area');
const tabNav = document.querySelector('.tab-nav');

searchButton.addEventListener('click', function() {
    homeScreen.classList.remove('active');
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.add('active');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        loadingScreen.classList.remove('active');
        resultScreen.classList.add('active');
        generateResult();
    }, 2000);
});

backToHomeButton.addEventListener('click', function() {
    resultScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

tabNav.addEventListener('click', function(event) {
    if (!event.target.classList.contains('tab-button')) return;

    tabNav.querySelector('.active').classList.remove('active');
    resultArea.querySelector('.active').classList.remove('active');

    const tabId = event.target.dataset.tab;
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
});

function generateResult() {
    const start = startStationInput.value;
    const end = endStationInput.value;

    let recommendHTML, fastHTML, cheapHTML, easyHTML;

    if (start === '心斎橋' && end === '梅田') {
        recommendHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>おすすめルート</h2>
                    <span class="price">240円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">19:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-train"></i> 大阪メトロ御堂筋線 (新大阪行き)</p>
                        <p class="details"><i class="fa-solid fa-person-booth"></i> 2番線</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">19:06</p>
                        <p class="station">梅田</p>
                    </div>
                </div>
            </div>`;
        
        fastHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>最速ルート</h2>
                    <span class="price">1250円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">19:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-taxi"></i> タクシー (約10分)</p>
                        <p class="details"><i class="fa-solid fa-road"></i> 交通状況により変動あり</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">19:10</p>
                        <p class="station">梅田</p>
                    </div>
                </div>
            </div>`;
        
        cheapHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>格安ルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">19:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-person-walking"></i> 全行程徒歩 (55分)</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">19:55</p>
                        <p class="station">梅田</p>
                    </div>
                </div>
            </div>`;

        easyHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>らくらくルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">19:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-person-walking"></i> 全行程徒歩 (55分)</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">19:55</p>
                        <p class="station">梅田</p>
                    </div>
                </div>
            </div>`;

    } else if (start === '心斎橋' && end === '札幌') {
        recommendHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>おすすめルート</h2>
                    <span class="price">38,520円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">08:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-train"></i> 御堂筋線 → JR東海道本線</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え3回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">08:30</p>
                        <p class="station">新大阪</p>
                        <p class="details"><i class="fa-solid fa-train-bullet"></i> 新幹線 のぞみ → はやぶさ</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">14:10</p>
                        <p class="station">新函館北斗</p>
                        <p class="details"><i class="fa-solid fa-train"></i> 特急 北斗 (札幌行き)</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">17:48</p>
                        <p class="station">札幌</p>
                    </div>
                </div>
            </div>`;
        
        fastHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>最速ルート</h2>
                    <span class="price">5,000,000円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">10:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-taxi"></i> タクシーで楽屋Aへ</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え2回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">11:00</p>
                        <p class="station">楽屋A</p>
                        <p class="details"><i class="fa-solid fa-handshake"></i> ボニーボニーからジェットを拝借</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">13:00</p>
                        <p class="station">羽田空港</p>
                        <p class="details"><i class="fa-solid fa-jet-fighter"></i> 自家用ジェット (札幌行き)</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">14:30</p>
                        <p class="station">札幌</p>
                    </div>
                </div>
            </div>`;
        
        const sapporoHitchhike = `
            <div class="route-card">
                <div class="route-header">
                    <h2>格安ルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">DAY 1</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-person-walking"></i> 徒歩 (本州縦断)</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え1回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 30</p>
                        <p class="station">青森県・竜飛崎</p>
                        <p class="details"><i class="fa-solid fa-person-swimming"></i> 遊泳 (津軽海峡)</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY ？？</p>
                        <p class="station">その後姿を見たものはいない</p>
                    </div>
                </div>
            </div>`;
        cheapHTML = easyHTML = sapporoHitchhike;


    } else if (start === '心斎橋' && end === 'ニューヨーク') {
        recommendHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>おすすめルート</h2>
                    <span class="price">250,000円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">10:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-bus"></i> 空港リムジンバス</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え1回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">11:00</p>
                        <p class="station">関西国際空港</p>
                        <p class="details"><i class="fa-solid fa-plane"></i> 国際線 (ロサンゼルス行き)</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">翌08:00</p>
                        <p class="station">ロサンゼルス国際空港</p>
                        <p class="details"><i class="fa-solid fa-plane-departure"></i> アメリカ国内線 (JFK行き)</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">翌16:00</p>
                        <p class="station">ニューヨーク</p>
                    </div>
                </div>
            </div>`;

        fastHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>最速ルート</h2>
                    <span class="price">12,000,000円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">13:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-truck-monster"></i> 地下発射場（淀屋橋）へ移動</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">14:00</p>
                        <p class="station">地下発射場（淀屋橋）</p>
                        <p class="details"><i class="fa-solid fa-rocket"></i> 弾道飛行シャトル (2時間)</p>
                        <p class="details"><i class="fa-solid fa-user-astronaut"></i> Gに耐える訓練が必要</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">16:00</p>
                        <p class="station">ニューヨーク</p>
                    </div>
                </div>
            </div>`;

        cheapHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>格安ルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">DAY 1</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-person-military-pointing"></i> 潜入スキルを習得</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え1回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 2</p>
                        <p class="station">神戸港</p>
                        <p class="details"><i class="fa-solid fa-box"></i> コンテナに隠れて乗船 (25日)</p>
                        <p class="details"><i class="fa-solid fa-triangle-exclamation"></i> 見つかると強制送還</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 27</p>
                        <p class="station">ニューヨーク</p>
                    </div>
                </div>
            </div>`;
        
        easyHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>らくらくルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">いつでも</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-person-swimming"></i> ひたすら泳ぐ</p>
                        <p class="details"><i class="fa-solid fa-earth-asia"></i> 太平洋は広いぞ</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">あ、あかんわこれ</p>
                        <p class="station">サメの胃の中</p>
                    </div>
                </div>
            </div>`;
        

    } else if (start === '心斎橋' && end === '月') {
        recommendHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>おすすめルート</h2>
                    <span class="price">5,800,000,000円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">DAY 1</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-bus"></i> JAXA行きバス</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え2回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 2-30</p>
                        <p class="station">JAXA 宇宙センター</p>
                        <p class="details"><i class="fa-solid fa-dumbbell"></i> 無重力・サバイバル訓練</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 31</p>
                        <p class="station">関西国際空港 宇宙港</p>
                        <p class="details"><i class="fa-solid fa-plane-up"></i> スペースプレーン『天神』</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 32</p>
                        <p class="station">国際宇宙ステーション</p>
                        <p class="details"><i class="fa-solid fa-satellite"></i> 月着陸船『とくのしん』</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">DAY 33</p>
                        <p class="station">月</p>
                    </div>
                </div>
            </div>`;

        fastHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>最速ルート</h2>
                    <span class="price">25,000,000,000円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">13:00</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-truck-monster"></i> 地下発射場（淀屋橋）へ移動</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">14:00</p>
                        <p class="station">地下発射場（淀屋橋）</p>
                        <p class="details"><i class="fa-solid fa-rocket"></i> 超光速ロケット (8時間)</p>
                        <p class="details"><i class="fa-solid fa-user-astronaut"></i> 専用宇宙服のレンタル込み</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">22:00</p>
                        <p class="station">月</p>
                    </div>
                </div>
            </div>`;

        cheapHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>格安ルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">いつでも</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-building-columns"></i> まずはあべのハルカスへ</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">満月の日</p>
                        <p class="station">あべのハルカス展望台</p>
                        <p class="details"><i class="fa-solid fa-person-praying"></i> タイミングを合わせて大ジャンプ</p>
                        <p class="details"><i class="fa-solid fa-triangle-exclamation"></i> 着地は自己責任</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">うまくいけば</p>
                        <p class="station">月</p>
                    </div>
                </div>
            </div>`;
        
        easyHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>らくらくルート</h2>
                    <span class="price">300ムールメント</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">月の綺麗な夜</p>
                        <p class="station">心斎橋</p>
                        <p class="details"><i class="fa-solid fa-hand-sparkles"></i> 迎えが来るのを待つ</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">丑三つ時</p>
                        <p class="station">上空</p>
                        <p class="details"><i class="fa-solid fa-cow"></i> かぐや姫の牛車をヒッチハイク</p>
                        <p class="details"><i class="fa-solid fa-question"></i> 帰りも乗せてくれるか不明</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">一晩</p>
                        <p class="station">月</p>
                    </div>
                </div>
            </div>`;
        
    } else if (start === '心斎橋' && end === '人生のゴール') {
        recommendHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>おすすめルート</h2>
                    <span class="price">プライスレス</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">〜20代</p>
                        <p class="station">迷いの森駅</p>
                        <p class="details"><i class="fa-solid fa-train"></i> 各駅停車 思春期線</p>
                        <p class="details"><i class="fa-solid fa-triangle-exclamation"></i> 急行への乗り換えに焦る時期</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">30代</p>
                        <p class="station">責任分岐点駅</p>
                        <p class="details"><i class="fa-solid fa-train-tram"></i> 急行 社会人線</p>
                        <p class="details"><i class="fa-solid fa-ring"></i> 家庭行き車両に乗り換え</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">40代</p>
                        <p class="station">板挟み駅</p>
                        <p class="details"><i class="fa-solid fa-train-bullet"></i> 特急 中間管理職線</p>
                        <p class="details"><i class="fa-solid fa-mobile-screen-button"></i> 携帯会社を楽天に乗り換え</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">50代〜</p>
                        <p class="station">見晴らし台駅</p>
                        <p class="details"><i class="fa-solid fa-bed"></i> 寝台列車 思い出巡り号</p>
                        <p class="details"><i class="fa-solid fa-chair"></i> 後続車両に席を譲る</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">家族に看取られながら死という名前の終点へ</p>
                        <p class="station">人生のゴール</p>
                    </div>
                </div>
            </div>`;

        fastHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>最速ルート</h2>
                    <span class="price">センスと努力</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">18歳</p>
                        <p class="station">ひらめき駅</p>
                        <p class="details"><i class="fa-solid fa-lightbulb"></i> 様々なセンスに開眼</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">25歳</p>
                        <p class="station">天狗高原</p>
                        <p class="details"><i class="fa-solid fa-jet-fighter"></i> 自家用ジェットで飲みに行く</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">結成10年</p>
                        <p class="station">決勝の舞台</p>
                        <p class="details"><i class="fa-solid fa-trophy"></i> 赤いスーツを身に纏いM-1優勝</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">その後</p>
                        <p class="station">人生の列車は続く</p>
                    </div>
                </div>
            </div>`;

        cheapHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>格安ルート</h2>
                    <span class="price">0円</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">いつでも</p>
                        <p class="station">現在地</p>
                        <p class="details"><i class="fa-solid fa-lightbulb"></i> 「足るを知る」の境地に至る</p>
                        <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
                    </div>
                    <div class="timeline-item">
                        <p class="time">悟りの瞬間</p>
                        <p class="station">人生のゴール</p>
                        <p class="details"><i class="fa-solid fa-hands-praying"></i> 今、ここがゴールだったと気づく</p>
                    </div>
                </div>
            </div>`;
        
        easyHTML = `
            <div class="route-card">
                <div class="route-header">
                    <h2>らくらくルート</h2>
                    <span class="price">検索不可</span>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <p class="time">---</p>
                        <p class="station">該当ルートはありません</p>
                        <p class="details"><i class="fa-solid fa-map"></i> お客様だけの路線図を作成してください</p>
                        <p class="details"><i class="fa-solid fa-triangle-exclamation"></i> 当アプリは一切の責任を負いかねます</p>
                    </div>
                </div>
            </div>`;

    } else {
        const dokodemoHTML = `
            <div class="route-card dokodemo-door">
                 <img src="https://i.imgur.com/g1f32aH.png" alt="どこでもドア">
                 <h2>どこでもドア一択！</h2>
                 <p><strong>所要時間:</strong> 0.1秒</p>
                 <p><strong>運賃:</strong> 不要 (のび太君に借りる)</p>
                 <hr>
                 <p class="station">${start} → ${end}</p>
                 <p class="details"><i class="fa-solid fa-arrow-right-arrow-left"></i> 乗り換え0回</p>
            </div>`;
        recommendHTML = fastHTML = cheapHTML = easyHTML = dokodemoHTML;
    }

    resultArea.innerHTML = `
        <div id="tab-recommend" class="tab-content active">${recommendHTML}</div>
        <div id="tab-fast" class="tab-content">${fastHTML}</div>
        <div id="tab-cheap" class="tab-content">${cheapHTML}</div>
        <div id="tab-easy" class="tab-content">${easyHTML}</div>
    `;

    tabNav.querySelector('.active').classList.remove('active');
    tabNav.querySelector('[data-tab="tab-recommend"]').classList.add('active');
}