var tipuesearch = {"pages": [{'title': 'About', 'text': '本課程為協同產品設計實習, 每週上課時數為 4 小時, 其中兩小時為教學時段, 另兩小時為實習時段, 課程內容包含 Programming 與 Computer aided Design 等兩大部分. \n Programming 部分包含計算機程式與網際內容管理等課程的內容: Brython, Python, Lua 與 C/C++ 等程式的編寫與 Github 整合應用. \n Computer aided Design 部分包含電腦輔助設計與實習課程的內容: Solvespace, Siemens NX, Onshape, CoppeliaSim 與 Webots 等套件的應用. \n 課程評分: 出席, 線上測驗, 協同專案與自我評量. \n 前導課程:  https://mde.tw \n 倉儲:  https://github.com/mdecycu/cd2023 \n 網站:  https://mde.tw/cd2023 \n 本課程將採兩人一組、四人一組與八人一組的方式進行協同機電整合產品開發. \n', 'tags': '', 'url': 'About.html'}, {'title': 'Blender', 'text': 'https://www.blender.org/ \n Blender history:  https://www.blender.org/about/history/ \n Blender on Github:  https://github.com/blender \n Ebooks on Springer: \n The Blender Python API  (2017) \n Beginning Blender  (2010) \n Core Blender Development  (2021) \n Modeling and Animation using Blender  (2020) \n Creating Game Environment in Blender 3D  (2020) \n Introduction to Blender 3.0  (2022) \n Foundation Blender Compositing  (2009) \n 機械設計工程師能拿 Blender 做甚麼? \n https://workwut.com/mechanical-engineers-blender/ \n https://blender.stackexchange.com/questions/53293/is-blender-actually-useable-for-engineering \n https://youtu.be/AD_jyBN09jA \n https://blendergrid.com/learn/articles/tyler-disney-interview', 'tags': '', 'url': 'Blender.html'}, {'title': 'NX2027', 'text': '\xa0NX2027.3401_lite_cad2022.7z  for @nfu \n', 'tags': '', 'url': 'NX2027.html'}, {'title': 'NX Server', 'text': 'Web based NX2027 Server \n', 'tags': '', 'url': 'NX Server.html'}, {'title': 'Onshape', 'text': 'https://www.onshape.com/en/education/ \n 如何在 Web-based 環境, 讓 human 與 machine 能夠在 手足球檯 上對陣, 且進球後以最快的方式回到球場. \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Solvespace', 'text': 'https://github.com/solvespace/solvespace \n Solvespace Forum \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'CoppeliaSim', 'text': 'https://www.coppeliarobotics.com/ \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Webots', 'text': 'https://www.cyberbotics.com \n https://webots.cloud/ \n', 'tags': '', 'url': 'Webots.html'}, {'title': 'Brython', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};