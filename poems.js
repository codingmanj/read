var poems = [
'送灵澈上人<br>刘长卿<br><br>苍苍竹林寺<br>杳杳钟声晚<br>荷笠带斜阳<br>青山独归远<br>(斜阳 一作：夕阳)<br><br>[文字已核实]<br><br>',
'锦瑟<br>李商隐<br><br>锦瑟无端五十弦<br>一弦一柱思华年<br>庄生晓梦迷蝴蝶<br>望帝春心托杜鹃<br>沧海月明珠有泪<br>蓝田日暖玉生烟<br>此情可待成追忆<br>只是当时已惘然<br><br>[文字已核实]<br><br>',
'春晓<br>孟浩然<br>春眠不觉晓<br>处处闻啼鸟<br>夜来风雨声<br>花落知多少<br><br>[文字已核实]<br>诗人早年隐居于鹿门山做此诗<br><br>',
'鹿柴<br>王维<br>空山不见人<br>但闻人语响<br>返景入深林<br>复照青苔上<br><br>[文字已核实]<br><br>',
'相思<br>王维<br>红豆生南国<br>春来发几枝<br>愿君多采撷<br>此物最相思<br><br>[文字已核实]<br><br>',
'杂诗三首<br>王维其一<br>家住孟津河<br>门对孟津口<br>常有江南船<br>寄书家中否<br><br>其二<br>君自故乡来<br>应知故乡事<br>来日绮窗前<br>寒梅著花未<br><br>其三<br>已见寒梅发<br>复闻啼鸟声<br>心心视春草<br>畏向玉阶生<br><br>[文字已核实]<br>安史之乱后诗人隐居于孟津（距洛阳23公里）<br><br>',
'终南望余雪<br>祖咏<br>终南阴岭秀<br>积雪浮云端<br>林表明霁色<br>城中增暮寒<br><br>[文字已核实]<br><br>',
'静夜思（明版本）<br>李白<br>床前明月光<br>疑是地上霜<br>举头望明月<br>低头思故乡<br><br>[文字已核实]<br>宋代版本：床前看月光 和 抬头望山月<br>',
'登鹳雀楼<br>王之涣<br>白日依山尽<br>黄河入海流<br>欲穷千里目<br>更上一层楼<br><br>[文字已核实]<br><br>',
'江雪<br>柳宗元<br>千山鸟飞绝<br>万径人踪灭<br>孤舟蓑笠翁<br>独钓寒江雪<br><br>[文字已核实]<br><br>',
'登乐游原<br>李商隐<br>向晚意不适<br>驱车登古原<br>夕阳无限好<br>只是近黄昏<br><br>[文字已核实]<br><br>乐游原是唐长安城内最高点，游览胜地，登上去后可以看到长城；向晚：傍晚；作者陷于党争不能自拔，第一句指这个事情<br><br>',
'听弹琴<br>刘长卿<br>泠泠七弦上<br>静听松风寒<br>古调虽自爱<br>今人多不弹(七弦 一作：七丝)<br><br>[文字已核实]<br><br>',
'八阵图<br>杜甫<br>功盖三分国<br>名成八阵图<br>江流石不转<br>遗恨失吞吴<br><br>[文字已核实]<br><br>',
'赋得古原草送别<br>白居易<br>离离原上草<br>一岁一枯荣<br>野火烧不尽<br>春风吹又生<br>远芳侵古道<br>晴翠接荒城<br>又送王孙去<br>萋萋满别情<br><br>[文字已核实]<br><br>',
'游子吟<br>孟郊<br>慈母手中线<br>游子身上衣<br>临行密密缝<br>意恐迟迟归<br>谁言寸草心<br>报得三春晖<br><br>[文字已核实]<br><br>',
'关山月<br>李白<br>明月出天山<br>苍茫云海间<br>长风几万里<br>吹度玉门关<br>汉下白登道<br>胡窥青海湾<br>由来征战地<br>不见有人还<br>戍客望边邑<br>思归多苦颜<br>高楼当此夜<br>叹息未应闲<br><br>[文字已核实]<br><br>',
'望月怀远<br>张九龄<br>海上生明月<br>天涯共此时<br>情人怨遥夜<br>竟夕起相思<br>灭烛怜光满<br>披衣觉露滋<br>不堪盈手赠<br>还寝梦佳期<br><br>[文字已核实]<br><br>',
'送杜少府之任蜀州<br>王勃<br>城阙辅三秦<br>风烟望五津<br>与君离别意<br>同是宦游人<br>海内存知己<br>天涯若比邻<br>无为在岐路<br>儿女共沾巾<br><br>[文字已核实]<br><br>少府是唐代县尉，据说他是唐朝开国功臣杜立德的第四个儿子，生卒字号皆不可考。两人交好，当时杜氏即将去蜀州任县尉<br><br>',
'春望<br>杜甫<br>国破山河在<br>城春草木深<br>感时花溅泪<br>恨别鸟惊心<br>烽火连三月<br>家书抵万金<br>白头搔更短<br>浑欲不胜簪<br><br>[文字已核实]<br><br>',
'登岳阳楼<br>杜甫<br>昔闻洞庭水<br>今上岳阳楼<br>吴楚东南坼<br>乾坤日夜浮<br>亲朋无一字<br>老病有孤舟<br>戎马关山北<br>凭轩涕泗流<br><br>[文字已核实]<br>该诗做于诗人去世前两年，国有灾难，自身染病需靠药物维持<br><br>',
'终南别业<br>王维<br>中岁颇好道<br>晚家南山陲<br>兴来每独往<br>胜事空自知<br>行到水穷处<br>坐看云起时<br>偶然值林叟<br>谈笑无还期<br><br>[文字已核实]<br>在所有诗人中，王维官运比较顺，但是看到仕途风险，四十多岁就开始过吃斋念佛，隐居生活，诗第一句就是说到了中年喜欢佛，此诗做于辋川<br><br>',
'凉州词二首<br>王翰<br>其一<br>葡萄美酒夜光杯<br>欲饮琵琶马上催<br>醉卧沙场君莫笑<br>古来征战几人回<br>其二<br>秦中花鸟已应阑<br>塞外风沙犹自寒<br>夜听胡笳折杨柳<br>教人意气忆长安<br><br>[文字已核实]<br><br>',
'望庐山瀑布<br>李白<br>日照香炉生紫烟<br>遥看瀑布挂前川<br>飞流直下三千尺<br>疑是银河落九天<br><br>[文字已核实]<br>该诗共两首，第一首为22句五言古诗，《全唐诗》放到一起，但是否一起写的仍有争议<br><br>',
'送孟浩然之广陵<br>李白<br>故人西辞黄鹤楼<br>烟花三月下扬州<br>孤帆远影碧空尽<br>唯见长江天际流<br><br>[文字已核实]康熙御定《全唐诗》中，碧空尽 写作 碧山尽<br><br>',
'早发白帝城<br>李白<br>朝辞白帝彩云间<br>千里江陵一日还<br>两岸猿声啼不住<br>轻舟已过万重山<br><br>[文字已核实]<br>诗又名《下江陵》<br><br>',
'枫桥夜泊<br>张继<br>月落乌啼霜满天<br>江枫渔火对愁眠<br>姑苏城外寒山寺<br>夜半钟声到客船<br><br>[文字已核实]<br><br>',
'乌衣巷<br>刘禹锡<br>朱雀桥边野草花<br>乌衣巷口夕阳斜<br>旧时王谢堂前燕<br>飞入寻常百姓家<br><br>[文字已核实]<br><br>',
'送元二使安西<br>王维<br>渭城朝雨浥轻尘<br>客舍青青柳色新<br>劝君更尽一杯酒<br>西出阳关无故人<br><br>[文字已核实]<br>后有古琴曲《阳关三叠》是根据该诗谱成<br><br>',
'出塞<br>王昌龄<br>秦时明月汉时关<br>万里长征人未还<br>但使龙城飞将在<br>不教胡马渡阴山<br><br>[文字已核实]<br><br>',
'凉州词二首<br>王之涣<br>其一<br>黄河远上白云间<br>一片孤城万仞山<br>羌笛何须怨杨柳<br>春风不度玉门关<br><br>其二<br>单于北望拂云堆<br>杀马登坛祭几回<br>汉家天子今神武<br>不肯和亲归去来<br><br>[文字已核实]<br><br>',
'咏柳<br>贺知章<br>碧玉妆成一树高<br>万条垂下绿丝绦<br>不知细叶谁裁出<br>二月春风似剪刀<br><br>[文字已核实]<br><br>',
'黄鹤楼<br>崔颢<br>昔人已乘黄鹤去<br>此地空余黄鹤楼<br>黄鹤一去不复返<br>白云千载空悠悠<br>晴川历历汉阳树<br>芳草萋萋鹦鹉洲<br>日暮乡关何处是<br>烟波江上使人愁<br><br>[文字已核实]<br><br>传闻李白登上黄鹤楼后未赋诗，因知此诗在前，说：眼前有景道不得，崔颢题诗在上头。<br><br>',
'清明<br>杜牧<br>清明时节雨纷纷<br>路上行人欲断魂<br>借问酒家何处有<br>牧童遥指杏花村<br><br>[文字已核实]<br><br>',
'山行<br>杜牧<br>远上寒山石径斜<br>白云深处有人家<br>停车坐爱枫林晚<br>霜叶红于二月花<br>(深处 一作：生处)<br><br>[文字已核实]<br><br>',
'题都城南庄<br>崔护<br>去年今日此门中<br>人面桃花相映红<br>人面不知何处去<br>桃花依旧笑春风<br><br>[文字已核实]<br><br>',
'登幽州台歌<br>陈子昂<br>前不见古人<br>后不见来者<br>念天地之悠悠<br>独怆然而涕下<br><br>[文字已核实]<br><br>',
'悯农二首<br>李绅<br>其一<br>春种一粒粟<br>秋收万颗子<br>四海无闲田<br>农夫犹饿死<br><br>其二<br>锄禾日当午<br>汗滴禾下土<br>谁知盘中餐<br>粒粒皆辛苦<br><br>[文字已核实]<br><br>',
'古朗月行<br>李白<br>小时不识月<br>呼作白玉盘<br>又疑瑶台镜<br>飞在碧云端<br>仙人垂两足<br>桂树何团团<br>白兔捣药成<br>问言与谁餐<br>蟾蜍蚀圆影<br>大明夜已残<br>羿昔落九乌<br>天人清且安<br>阴精此沦惑<br>去去不足观<br>忧来其如何<br>凄怆摧心肝<br>[(碧云 一作：青云)<br><br>[文字已核实]<br>朗月行是汉乐府诗的旧题目<br><br>',
'山中送别<br>王维<br>山中相送罢<br>日暮掩柴扉<br>春草明年绿<br>王孙归不归<br><br>[文字已核实]<br><br>',
'独坐敬亭山<br>李白<br>众鸟高飞尽<br>孤云独去闲<br>相看两不厌<br>只有敬亭山<br><br>[文字已核实]<br><br>',
'马诗<br>李贺<br>大漠沙如雪<br>燕山月似钩<br>何当金络脑<br>快走踏清秋<br><br>[文字已核实]<br>该诗为二十三首组诗中第五首<br><br>',
'山村咏怀<br>[北宋]邵雍<br>一去二三里<br>烟村四五家<br>亭台六七座<br>八九十枝花<br><br>[文字已核实]<br>一般提到蒙学诗即为该诗<br><br>',
'春夜喜雨<br>杜甫<br>好雨知时节<br>当春乃发生<br>随风潜入夜<br>润物细无声<br>野径云俱黑<br>江船火独明<br>晓看红湿处<br>花重锦官城<br><br>[文字已核实]<br>诗人在漂泊很久后终于在蜀地过上了一段较为安定的生活，种菜养花，此诗做于成都草堂<br><br>',
'夜宿山寺<br>李白<br>危楼高百尺<br>手可摘星辰<br>不敢高声语<br>恐惊天上人<br><br>[文字已核实]<br>有异议者称该诗应题为《上楼诗》<br>',
'池上二绝<br>白居易<br>其一<br>山僧对棋坐<br>局上竹阴清<br>映竹无人见<br>时闻下子声<br><br>其二<br>小娃撑小艇<br>偷采白莲回<br>不解藏踪迹<br>浮萍一道开<br><br>[文字已核实]<br><br>',
'宿建德江<br>孟浩然<br>移舟泊烟渚<br>日暮客愁新<br>野旷天低树<br>江清月近人<br><br>[文字已核实]<br><br>',
'逢雪宿芙蓉山主人<br>刘长卿<br>日暮苍山远<br>天寒白屋贫<br>柴门闻犬吠<br>风雪夜归人<br><br>[文字已核实]<br><br>',
'寻隐者不遇<br>贾岛<br>松下问童子<br>言师采药去<br>只在此山中<br>云深不知处<br><br>[文字已核实]<br><br>',
'江南逢李龟年<br>杜甫<br>岐王宅里寻常见<br>崔九堂前几度闻<br>正是江南好风景<br>落花时节又逢君<br><br>[文字已核实]<br>李龟年：唐朝开元、天宝年间的著名乐师，擅长唱歌；岐王：唐玄宗李隆基的弟弟；崔九：唐玄宗时，曾任殿中监，出入禁中，得玄宗宠幸<br><br>',
'望天门山<br>李白<br>天门中断楚江开<br>碧水东流至此回<br>两岸青山相对出<br>孤帆一片日边来<br><br>[文字已核实]<br><br>',
'客中行<br>李白<br>兰陵美酒郁金香<br>玉碗盛来琥珀光<br>但使主人能醉客<br>不知何处是他乡<br><br>[文字已核实]<br><br>',
'送崔九<br>裴迪<br><br>归山深浅去<br>须尽丘壑美<br>莫学武陵人<br>暂游桃源里<br><br>[文字已核实]<br>诗又名：崔九欲往南山马上口号与别<br><br>',
'感遇二首<br>张九龄<br><br>其一<br>兰叶春葳蕤<br>桂华秋皎洁<br>欣欣此生意<br>自尔为佳节<br>谁知林栖者<br>闻风坐相悦<br>草木有本心<br>何求美人折<br><br>其二<br>江南有丹橘<br>经冬犹绿林<br>岂伊地气暖<br>自有岁寒心<br>可以荐嘉客<br>奈何阻重深<br>运命唯所遇<br>循环不可寻<br>徒言树桃李<br>此木岂无阴<br><br>[文字已核实]<br>葳蕤：wēi ruí，指草木茂盛枝叶下垂貌<br><br>',
'浪淘沙·帘外雨潺潺<br>[五代南唐]李煜[词]<br><br>帘外雨潺潺<br>春意阑珊<br>罗衾不耐五更寒<br>梦里不知身是客<br>一晌贪欢<br><br>独自莫凭栏<br>无限江山<br>别时容易见时难<br>流水落花春去也<br>天上人间<br><br>[文字已核实]<br>作者于978年去世，作品约创作于 975 AD - 978 AD<br><br>',
'老子·三十四·论道<br><br>大道汜兮，其可左右/<br>万物恃之以生而不辞，功成而不有/<br>衣养万物而不为主，可名于小/<br>万物归焉而不为主，可名为大/<br>以其终不自为大，故能成其大<br>汜：fan，普/博 之意<br>[文字已核实]<br>有版本为：衣养万物而不为主<br>常无欲<br>可名于小<br><br>',
'老子·四十六·养生<br><br>天下有道，却走马以粪/<br>天下无道，戎马生于郊/<br>祸莫大于不知足，咎莫大于欲得/<br>故知足之足，常足矣<br><br>[文字已核实]<br><br>',
'临江仙·送钱穆父<br>[北宋]苏轼[词]<br><br>一别都门三改火<br>天涯踏尽红尘<br>依然一笑作春温<br>无波真古井<br>有节是秋筠<br>惆怅孤帆连夜发<br>送行淡月微云<br>樽前不用翠眉颦<br>人生如逆旅<br>我亦是行人<br><br>[文字已核实]<br><br>',
'行宫<br><br>唐<br><br>元稹<br><br>寥落古行宫<br>宫花寂寞红<br>白头宫女在<br>闲坐说玄宗<br><br>[文字已核实]<br>寥（liáo）落。<br>玄宗天宝末年许多宫女被“潜配”在行宫（即洛阳行宫上阳宫），与外界隔绝，一闭就是四十几年。白居易 《上阳白发人》云： “上阳人，上阳人，红颜暗老白发新。玄宗末岁初选入，入时十六今六十。”<br>',
'江南曲<br><br>唐<br><br>李益<br><br>嫁得瞿塘贾<br>朝朝误妾期<br><br>早知潮有信<br>嫁与弄潮儿<br><br>[文字已核实]<br>唐代出现了大量以闺怨为题材的诗作，这些是做主要有两大内容：一类是思征夫，另一类是怨商人。由于唐代疆域辽阔，边境多事，要征调大批将士长期戍守边疆，同时，唐代商业非常发达，从事商品远途贩卖、长年在外经商的人日渐增多，因而作为这两类人的妻子不免要独守空闺，过着孤单寂寞的生活。<br><br>',
'芙蓉楼送辛渐<br><br>唐<br><br>王昌龄<br><br>寒雨连江夜入吴<br>平明送客楚山孤<br><br>洛阳亲友如相问<br>一片冰心在玉壶<br><br>[文字已核实]<br>辛渐是王昌龄的朋友，由润州（今镇江）渡江，取道扬州，北上洛阳。当时王昌龄在江宁（今南京）任职县丞。<br><br>',
'寄扬州韩绰判官<br><br>杜牧<br><br>青山隐隐水迢迢<br>秋尽江南草未凋<br><br>二十四桥明月夜<br>玉人何处教吹箫？<br><br>[文字已核实]<br><br>一说为二十四座桥，一说有一座桥名叫二十四桥，二十四桥因古二十四美人吹箫于此，故名<br>',
'秋夕<br><br>杜牧<br><br>银烛秋光冷画屏<br>轻罗小扇扑流萤<br><br><br>天阶夜色凉如水<br>坐看牵牛织女星<br><br>[文字已核实]<br>银烛：一作红烛。天阶：一作瑶阶。卧看：一作坐看。<br>',
'金谷园<br><br>杜牧<br><br>繁华事散逐香尘<br>流水无情草自春<br><br><br>日暮东风怨啼鸟<br>落花犹似坠楼人<br><br>[文字已核实]<br>金谷原本是地名，在河南洛阳市西北。金谷园：西晋富豪石崇金谷园遗址。<br>坠楼人：谓石崇的爱妾绿珠。绿珠（？-300 ），石崇家歌妓，善吹笛。时赵王司马伦杀贾后，自称相国，专擅朝政，石崇与潘岳等谋劝淮南王司马允、齐王司马冏倚靠司马伦，谋未发。司马伦有嬖臣孙秀，家世寒微，与司马冏结仇，得司马伦赏识后，又向石崇求绿珠，石崇不许。此时力劝司马伦杀石崇，母兄妻子十五人皆死。甲士到门逮捕石崇，石崇对绿珠说：“我今为尔得罪。”绿珠边泣边说：“当效死于官前。”因自坠于楼下而死。事见《晋书·石崇传》及《世说新语·仇隙篇》。杨炫之《洛阳伽蓝记》卷一：“昭仪寺有池，······后隐士赵逸云：‘此地是晋侍中石崇家池，池南有绿珠楼。’”<br>',
'夜雨寄北<br><br>李商隐<br><br>君问归期未有期<br>巴山夜雨涨秋池<br><br><br>何当共剪西窗烛<br>却话巴山夜雨时？<br><br>[文字已核实]<br><br>',
'寄人<br><br>张泌<br><br>别梦依依到谢家<br>小廊回合曲阑斜<br><br><br>多情只有春庭月<br>犹为离人照落花<br><br>[文字已核实]<br><br>',
'杂诗<br><br>无名氏<br><br>近寒食雨草萋萋<br>著麦苗风柳映堤<br><br><br>等是有家归未得<br>杜鹃休向耳边啼<br><br>[文字已核实]<br>寒食=寒食节清明前一日，为纪念介子推死难之日不生火做饭，要吃冷食。诗的节奏独特，首两句节拍为“一、二、三”，然而却谐绝句平仄韵，这是绝句中少见的<br>',
'长信怨其三<br><br>王昌龄<br><br>奉帚平明金殿开<br>暂将团扇共徘徊<br><br><br>玉颜不及寒鸦色<br>犹带昭阳日影来<br><br>暂将团扇共徘徊，又做：且将团扇暂徘徊<br>题目又做：长信秋词<br><br>[文字已核实]<br><br>'
]
function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
