var express = require('express');
var Router = express.Router;

var partners = [
    {src: '/assets/logos/microsoft.jpg', alt: 'Microsoft'},
    {src: '/assets/logos/apc.jpg', alt: 'APC'},
    {src: '/assets/logos/cisco.jpg', alt: 'Cisco'},
    //{src: '/assets/logos/microsoft.jpg', alt: 'Microsoft'},

    {src: '/assets/logos/hp.png', alt: 'Hewlett Packard'},
    //{src: '/assets/logos/lg-nortel.jpg', alt: 'LG-Nortel'},
    {src: '/assets/logos/d-link.jpg', alt: 'D-Link'},
    {src: '/assets/logos/qnap.png', alt: 'Qnap'},
    {src: '/assets/logos/oracle.jpg', alt: 'Oracle'},
    //{src: '/assets/logos/rcot.png', alt: 'RCOT'},
    {src: '/assets/logos/transcend.jpg', alt: 'Transcend'},
    //{src: '/assets/logos/zyxel.jpg', alt: 'ZyXel'}
];
var blogposts = [
    //{lang:'ru',link:'#projects', title: 'ACBA-????? ???????? ???? - ??? ????????????? ??????? ?? ????? ??????? ? ?????? ?????? ????????? EVA ?? ????? HP Storage 3PAR.', images: [/*'assets/img/blog/photo (9).jpg', 'assets/img/blog/photo (10).jpg'*/], date: new Date()},
    //{lang:'ru',link:'#projects',title: 'Armenian Card – ???????? ? ?????? ?? ???????? ? Storage 3PAR ??? ???????? ? ???????? ????????? ??????.', images: [/*'assets/img/blog/photo (8).jpg', 'assets/img/blog/photo (11).jpg'*/], date: new Date()},

    //{lang:'en',link:'#projects', title: 'ACBA Credit Agricole bank – For virtualization the transition to new servers and replacing old HP Storage EVA to new HP Storage 3PAR.', images: [/*'assets/img/blog/photo (9).jpg', 'assets/img/blog/photo (10).jpg'*/], date: new Date()},
    //{lang:'en',link:'#projects',title: 'Armenian Card - Delivery and launch of HP servers and Storage 3PAR for the main and spare server rooms.', images: [/*'assets/img/blog/photo (8).jpg', 'assets/img/blog/photo (11).jpg'*/], date: new Date()},

    //{lang:'hy',link:'#projects', title: 'ACBA - ????? ??????? ???? - ????????????????? ?????? ???????? ??? ?????????? ????????? ? ??? Storage EVA ??? HP Storage 3PAR –?? ?????????:', images: [/*'assets/img/blog/photo (9).jpg', 'assets/img/blog/photo (10).jpg'*/], date: new Date()},
    //{lang:'hy',link:'#projects',title: 'Armenian Card - ???????? ? ?????????? ?????????? ?????????? ????? HP Storage 3PAR ? ?????????? ???????????? ? ??????????:', images: [/*'assets/img/blog/photo (8).jpg', 'assets/img/blog/photo (11).jpg'*/], date: new Date()},

    //{lang:'ru',link:'#news',title: '14 03 2012	  ? ????????? «Paradise Hotel Dilijan» ?????? 	?????????? ??????? ?? ???? « ??????? ??? ??? ?????????????  		????????»...', images: [/*'assets/img/blog/photo (8).jpg', 'assets/img/blog/photo (11).jpg'*/], date: new Date()},
    //{lang:'ru',link:'#news',title: '27 02 2012	? ?????????  8-?? ?????  ?? ???? ???????? ??????????? ????? ?? APC  UPS-?!!!', images: [/*'assets/img/blog/photo (8).jpg', 'assets/img/blog/photo (11).jpg'*/], date: new Date()}
];
var projects = [
    {lang:'ru',year: 2017, title: 'Араратбанк ОАО - Обновление и модернизация: Поставка, инсталляция, запуск и техническое обслуживание HP Blade Server-ов , а также систем хранения данных (СХД) HP 3PAR для основного и резервного датацентров банка, включая коммуникационное оборудование для СХД, источники бесперебойного питания и их устройства для распределения питания.'},
    {lang:'ru',year: 2017, title: 'ВТБ Армения Банк - Продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2017, title: 'Армениан Кард ЗАО  - Обновление и модернизация: Поставка и инсталляция HP Blade Severs и поставка, инсталляция, запуск и техническое обслуживание систем хранения данных (СХД) HP 3PAR для основного и резервного датацентров банка, включая коммуникационное оборудование для СХД, источники бесперебойного питания и их устройства для распределения питания.'},
    {lang:'ru',year: 2017, title: 'Анелик Банк ЗАО  - Поставка и инсталляция HP Blade Sever-ов и поставка, инсталляция, запуск и техническое обслуживание систем хранения данных (СХД) HP 3PAR для основного и резервного датацентров банка, включая коммуникационное оборудование для СХД, источники бесперебойного питания и их устройства для распределения питания.'},
    {lang:'ru',year: 2017, title: 'Армениан Кард ЗАО  - Поставка новых лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2017, title: 'Центральный Банк РА - Поставка новых лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2017, title: 'Ереванский Коньячный Завод  - Модернизация, поставка, инсталяция,запуск и техническое обслуживание систем хранения данных (СХД) HP 3PAR, а также сетевого оборудования HP'},
    {lang:'ru',year: 2017, title: 'Эпам Системс ООО  - Поставка и инсталяция персональных компьютеров HP ElitBook, ProBook и Prodesk'},
    
    {lang:'en',year: 2017, title: 'Araratbank OJSC - Supply, Installation, upgrade and technical support of HP Blade Servers and HP 3 PAR storage solution for main and backup Data Centers, including network and uninterruptable power supply equipment '},
    {lang:'en',year: 2017, title: 'VTB Bank Armenia CJSC - Prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2017, title: 'Armenian Card (ArCA) CJSC  - Supply, Installation, upgrade and technical support of HP Blade Servers and HP 3 PAR storage solution for main and backup Data Centers, including network and uninterruptable power supply equipment'},
    {lang:'en',year: 2017, title: 'Anelik Bank CJSC  - Supply, Installation, startup and technical support of HP Blade Servers and HP 3 PAR storage solution for main and backup Data Centers, including network and uninterruptable power supply equipment'},
    {lang:'en',year: 2017, title: 'Armenian Card (ArCA) CJSC  - Supply of New Oracle licenses and technical support'},
    {lang:'en',year: 2017, title: 'Central Bank of Armenia - Supply of New Oracle licenses and technical support'},
    {lang:'en',year: 2017, title: 'Yerevan Brandy Company  - Supply, Installation, upgrade and technical support HP 3 PAR storage solution for Data Center, including network'},
    {lang:'en',year: 2017, title: 'EPAM Systems LLC  - Supply and installation of HP Personal computers ElitBook, ProBook and Prodesk'},
    
    {lang:'hy',year: 2017, title: 'ԱՐԱՐԱՏԲԱՆԿ ԲԲԸ - HP Blade Server-ների և HP 3PAR տվյալների պահպանման համակարգերի մատակարարում, տեղադրում, գործարկում և տեխնիկական սպասարկում բանկի առաջնային և պահեստային կայքերի համար, ներառյալ նշված համակարգերի կոմունիկացիոն սարքավորումները, անխափան սնման աղբյուրներրը և նրանց բաշխիչ սարքերը.'},
    {lang:'hy',year: 2017, title: 'ՎՏԲ Հայաստան Բանկ ՓԲԸ - Նախկինում ձեռքբերված ORACLE ծրագրային ապահովման արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2017, title: 'Արմենիան քարդ ՓԲԸ  - HP Blade Server-ների և HP 3PAR տվյալների պահպանման համակարգերի մատակարարում, տեղադրում, գործարկում և տեխնիկական սպասարկում բանկի առաջնային և պահեստային կայքերի համար, ներառյալ նշված համակարգերի կոմունիկացիոն սարքավորումները, անխափան սնման աղբյուրներրը և նրանց բաշխիչ սարքերը.'},
    {lang:'hy',year: 2017, title: 'Անելիք Բանկ ՓԲԸ  - HP Blade Server-ների և HP 3PAR տվյալների պահպանման համակարգերի մատակարարում, տեղադրում, գործարկում և տեխնիկական սպասարկում բանկի առաջնային և պահեստային կայքերի համար, ներառյալ նշված համակարգերի կոմունիկացիոն սարքավորումները, անխափան սնման աղբյուրներրը և նրանց բաշխիչ սարքերը.'},
    {lang:'hy',year: 2017, title: 'Արմենիան քարդ ՓԲԸ  - ORACLE նոր ծրագրային ապահովման արտոնագրորի մատակարարում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2017, title: 'ՀՀ Կենտրոնական Բանկ - ORACLE նոր ծրագրային ապահովման արտոնագրորի մատակարարում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2017, title: 'Երևանի Կոնյակի գործարան ՓԲԸ  - HP 3PAR տվյալների պահպանման համակարգերի մատակարարում, արդիականացում, տեղադրում, գործարկում և տեխնիկական սպասարկում, ինչպես նաև HP ցանցային սարքավորումների մատակարարում'},
    {lang:'hy',year: 2017, title: 'Էպամ Սիսթեմզ ՍՊԸ  - HP ElitBook, ProBook և ProDesk անհատական համակարգիչների մատակարարում և տեղակայում'},
    
    {lang:'ru',year: 2016, title: 'Норк ИАЦ ЗАО и Министерство труда и социальных вопросов Армении - Проведение ИТ аудита в Министерстве труда и социальных вопросов Армении, “Норк ИАЦ ” ЗАО, Государственном агентстве занятости, Агентстве медико-социальной экспертизы РА'},
    {lang:'ru',year: 2016, title: 'Microsoft - Разработка новых фонтов Armenian Consolas Regular, Armenian Consolas Italic, Armenian Consolas Bold, Armenian Consolas Bold Italic'},
    {lang:'ru',year: 2016, title: 'ВТБ Армения Банк  - Продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2016, title: 'Министерство труда и социальных вопросов Армении и FFPMC Armenia  - Поставка и инсталяция Серверов, Персональных компьютеров и периферийного оборудования HP'},
    {lang:'ru',year: 2016, title: 'Армениан Кард ЗАО  - Поставка новых лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2016, title: 'Офис Совета Европы в Армении - Поставка персональных компьютеров HP и источников бесперебойного питания APC '},
    {lang:'ru',year: 2016, title: 'Microsoft  - Разработка новых фонтов Armеnian Cambria Regular, Armеnian Cambria Regular Bold'},
    {lang:'ru',year: 2016, title: 'Центральный Банк РА  - Совместно с Южно Корейской команией KFTC и Молдавской компанией QSystems SRL разработка и интеграция новой платежной системы “ARUS”, поставка и инсталяция оборудования, гарантийное и постгарантийное обслуживание'},
    {lang:'ru',year: 2016, title: 'Ардшинбанк ЗАО  - Продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2016, title: 'АКБА-КРЕДИТ АГРИКОЛЬ БАНК ЗАО  - Модернизация, поставка, инсталляция, запуск и техническое обслуживание систем хранения данных (СХД) HP 3PAR для основного и резервного датацентров банка, виртуализация,  поставка инсталяция и запуск HP Blade серверов'},
    
    {lang:'en',year: 2016, title: 'Nork Information - Analytical Center CJSC  and Ministry of Labor and Social Affairs of Armenia - IT audit for Ministry of Labor and Social Affairs of Armenia , Nork Information - Analytical Center CJSC , Employment State Agency and Health-Social State Agency '},
    {lang:'en',year: 2016, title: 'Microsoft - Development of new Fonts: Armenian Consolas Regular, Armenian Consolas Italic, Armenian Consolas Bold, Armenian Consolas Bold Italic'},
    {lang:'en',year: 2016, title: 'VTB Bank Armenia CJSC  - Prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2016, title: 'Ministry of Labor and Social Affairs of Armenia and FFPMC Armenia  - Supply and installation of HP Servers, Personal computers and various types of peripheral equipment '},
    {lang:'en',year: 2016, title: 'Armenian Card (ArCA) CJSC  - Supply of New Oracle licenses and technical support'},
    {lang:'en',year: 2016, title: 'Council of Europe Armenian office - Supply and installation of HP personal computers and various types of peripheral equipment'},
    {lang:'en',year: 2016, title: 'Microsoft  - Development of new Fonts: Armеnian Cambria Regular, Armеnian Cambria Regular Bold'},
    {lang:'en',year: 2016, title: 'Central Bank of Armenia  - Development, integration and startup of new “ARUS” payment system in cooperation with South Korean company KFTC and Moldavian company QSystems SRL, supply and installation of all equipment, warranty support and maintenance'},
    {lang:'en',year: 2016, title: 'Ardshinank CJSC  - Prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2016, title: 'ACBA-CREDIT AGRICOLE BANK CJSC  - Supply, installation, startup, upgrade and technical support of  HP 3 PAR solution for main and backup Data Centers, supply and installation of HP Blade Servers'},
    
    {lang:'hy',year: 2016, title: 'Նորք ՏՎԿ ՓԲԸ և  ՀՀ Աշխատանքի և սոցիալական հարցերի նախարարություն  - Հայաստանի Աշխատանքի և սոցիալական հարցերի նախարարությունում, Նորք ՏՎԿ ՓԲԸ-ում, Զբաղվածության պետական գործակալությունում և ՀՀ Բժշկասոցիալական Փորձաքննության գործակալությունում ԻՏ Աուդիտի անցկացում:'},
    {lang:'hy',year: 2016, title: 'Microsoft - Նոր ֆոնտերի մշակում՝ Armenian Consolas Regular, Armenian Consolas Italic, Armenian Consolas Bold, Armenian Consolas Bold Italic'},
    {lang:'hy',year: 2016, title: 'ՎՏԲ Հայաստան Բանկ ՓԲԸ  - Նախկինում ձեռքբերված ORACLE ծրագրային ապահովման արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2016, title: 'ՀՀ Աշխատանքի և սոցիալական հարցերի նախարարություն և FFPMC Armenia  - HP սերվերների, անհատական համակարգիչների և հարակից սարքավորումների մատակարարում և տեղադրում'},
    {lang:'hy',year: 2016, title: 'Արմենիան քարդ ՓԲԸ  - ORACLE նոր ծրագրային ապահովման արտոնագրորի մատակարարում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2016, title: 'Եվրոպայի խորհրդի գրասենյակը Հայաստանում - HP անհատական համակարգիչների և APC անխափան սնուցման աղբյուրների մատակարարում'},
    {lang:'hy',year: 2016, title: 'Microsoft  - Նոր ֆոնտերի մշակում՝ Armеnian Cambria Regular, Armеnian Cambria Regular Bold'},
    {lang:'hy',year: 2016, title: 'ՀՀ Կենտրոնական Բանկ  - Հարավ-Կորեական KFTC կազմակերպության և Մոլդովական QSystems SRL կազմակերպության հետ համատեղ նոր “ARUS” վճարային համակարգի նախագծման և  ինտեգրման աշխատանքներ, սարքավորումների մատակարարում և տեղակայում, երաշխիքային և ետերաշխիքային սպասարկում'},
    {lang:'hy',year: 2016, title: 'Արդշինբանկ ՓԲԸ  - Նախկինում ձեռքբերված ORACLE ծրագրային ապահովման արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2016, title: 'ԱԿԲԱ-Կրեդիտ Ագրիկոլ Բանկ ՓԲԸ  - Բանկի հիմնական և պահեստային տվյալների մշակման կենտրոնի համար HP 3PAR տվյալների պահպանման համակարգի (ՏՊՀ) արդիականացում, մատակարարում և տեղակայում, HP Blade Server-ների վիրտուալացում, մատակարարման, տեղակայման և գործարկման աշխատանքներ'},
    
    {lang:'ru',year: 2015, title: 'Араратбанк ОАО - Поставка и инсталляция HP Blade Sever-ов и поставка, инсталляция, запуск и техническое обслуживание систем хранения данных (СХД) HP 3PAR для основного и резервного датацентров банка( включая коммуникационное оборудование для СХД) источники бесперебойного питания и их устройства для распределения питания.'},
    {lang:'ru',year: 2015, title: 'ВТБ Армения Банк ЗАО - Поставка новых лицензий ORACLE, продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2015, title: 'ДЖИ-ЭН-СИ-АЛЬФА ЗАО  - Поставка крупного лота источников бесперебойного питания разной мощности APC'},
    {lang:'ru',year: 2015, title: 'Армениан Кард ЗАО  - Поставка новых лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2015, title: 'Центральный Банк РА  - Продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2015, title: 'K-Телеком ЗАО (МТС Армения) - Поставка периферийного оборудования HP различного типа и источников бесперебойного питания APC'},
    {lang:'ru',year: 2015, title: 'Армбизнес банк ЗАО  - Поставка, инсталяция и запуск Серверов HP, Сетевого оборудования и источников бесперебойного питания'},
    {lang:'ru',year: 2015, title: 'Ардшинбанк ЗАО  - Продление поддержки ранее приобретенных лицензий ORACLE и техподдержки'},
    {lang:'ru',year: 2015, title: 'Microsoft  - Разработка новых фонтов Cyrillic Extended-A,  Cyrillic Extended-B,  Georgian Tahoma Bold,  Georgian Supplement Tahoma, Georgian Supplement Tahoma Bold, Georgian  Sans Serif, Georgian Supplement Sans Serif'},
    {lang:'ru',year: 2015, title: 'ГУДКРЕДИТ (ЗАО)  - Поставка и инсталяция персональных компьютеров и периферийных устройств различного типа HP, а также  источников бесперебойного питания APC'},
    {lang:'ru',year: 2015, title: 'Центральный Банк РА  - Поставка и инсталяция персональных компьютеров и периферийных устройств различного типа HP, а также  источников бесперебойного питания Liebert и APC'},
    {lang:'ru',year: 2015, title: 'Центральный Банк РА  - Поставка новых лицензий ORACLE и техподдержки'},
    
    {lang:'en',year: 2015, title: 'Araratbank OJSC - Supply, installation, startup and technical support of HP Blade Servers and HP 3 PAR storage solution for main and backup Data Centers, including network and uninterruptible power supply'},
    {lang:'en',year: 2015, title: 'VTB Bank Armenia CJSC - Supply of New Oracle licenses, prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2015, title: 'GNC-ALFA CJSC - Supply of various types of APC uninterruptable power supply equipment'},
    {lang:'en',year: 2015, title: 'Armenian Card (ArCA) CJSC  - Supply of New Oracle licenses and technical support'},
    {lang:'en',year: 2015, title: 'Central Bank of Armenia  - Prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2015, title: 'Viva Cell –MTC Armenia - Supply and installation of various types HP peripherals and APC uninterruptable power supply equipment'},
    {lang:'en',year: 2015, title: 'Armbusinessbank CJSC  - Supply, installation and startup of HP Servers, Network  and APC uninterruptable power supply equipment  '},
    {lang:'en',year: 2015, title: 'Ardshinank CJSC  - Prolongation of existing Oracle licenses and technical support'},
    {lang:'en',year: 2015, title: 'Microsoft  - Development of new Fonts: Cyrillic Extended-A,  Cyrillic Extended-B,  Georgian Tahoma Bold,  Georgian Supplement Tahoma, Georgian Supplement Tahoma Bold, Georgian  Sans Serif, Georgian Supplement Sans Serif'},
    {lang:'en',year: 2015, title: 'GoodCredit UCO CJSC  - Supply and installation of HP personal computers, various types of peripheral  and APC uninterruptable power supply equipment'},
    {lang:'en',year: 2015, title: 'Central Bank of Armenia  - Supply and installation of HP personal computers, various types of peripheral equipment as well as APC and Liebert uninterruptable power supply equipment'},
    {lang:'en',year: 2015, title: 'Central Bank of Armenia  - Supply of New Oracle licenses and technical support'},
    
    {lang:'hy',year: 2015, title: 'ԱՐԱՐԱՏԲԱՆԿ ԲԲԸ - HP Blade Server-ների մատակարարում և տեղակայում և HP 3PAR տվյալների պահպանման համակարգերի մատակարարում, տեղադրում, գործարկում և տեխնիկական սպասարկում բանկի առաջնային և պահեստային կայքերի համար, ներառյալ նշված համակարգերի կոմունիկացիոն սարքավորումները, անխափան սնման աղբյուրներրը և նրանց բաշխիչ սարքերը.'},
    {lang:'hy',year: 2015, title: 'ՎՏԲ Հայաստան Բանկ ՓԲԸ - ORACLE նոր ծրագրային ապահովման արտոնագրերի մատակարարում, նախկինում ձեռքբերված արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2015, title: 'Ջի Էն Սի Ալֆա ՓԲԸ - Մեծ քանակությամբ տարբեր հզորության APC անխափան սնուցման աղբյուրների մատակարարում'},
    {lang:'hy',year: 2015, title: 'Արմենիան քարդ ՓԲԸ  - ORACLE նոր ծրագրային ապահովման արտոնագրորի մատակարարում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2015, title: 'ՀՀ Կենտրոնական Բանկ  - Նախկինում ձեռքբերված ORACLE ծրագրային ապահովման արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2015, title: 'Ղ-Տելեկոմ ՓԲԸ - Տարատեսակ HP հարակից սարքավորումների և APC անխափան սնուցման աղբյուրների մատակարարում'},
    {lang:'hy',year: 2015, title: 'Հայբիզնեսբանկ ՓԲԸ  - HP սերվերների,  անհատական համակարգիչների, ինչպես նաև APC անխափան սնուցման աղբյուրների մատակարարում և տեղակայում'},
    {lang:'hy',year: 2015, title: 'Արդշինբանկ ՓԲԸ  - Նախկինում ձեռքբերված ORACLE ծրագրային ապահովման արտոնագրերի սպասարկման երկարացում և տեխնիկական աջակցություն'},
    {lang:'hy',year: 2015, title: 'Microsoft  - Նոր ֆոնտերի մշակում՝ Cyrillic Extended-A,  Cyrillic Extended-B,  Georgian Tahoma Bold,  Georgian Supplement Tahoma, Georgian Supplement Tahoma Bold, Georgian  Sans Serif, Georgian Supplement Sans Serif'},
    {lang:'hy',year: 2015, title: 'Գուդկրեդիտ ՈւՎԿ ՓԲԸ  - HP անհատական համակարգիչների և հարակից սարքավորումների, ինչպես նաև APC անխափան սնուցման աղբյուրների մատակարարում և տեղակայում'},
    {lang:'hy',year: 2015, title: 'ՀՀ Կենտրոնական Բանկ  - HP անհատական համակարգիչների և հարակից սարքավորումների, ինչպես նաև APC և Liebert անխափան սնուցման աղբյուրների մատակարարում և տեղակայում'},
    {lang:'hy',year: 2015, title: 'ՀՀ Կենտրոնական Բանկ  - ORACLE նոր ծրագրային ապահովման արտոնագրորի մատակարարում և տեխնիկական աջակցություն'},
    
    {lang:'ru',year: 2014, title: 'ACBA-Кредит Агриколь Банк - Переход на новые высокопроизводительные серверы для внедрения технологий виртуализации, замена старых систем хранения данных HP EVA на новые HP 3PAR.'},
    {lang:'en',year: 2014, title: 'ACBA-Credit Agricole Bank – Migration to new high-performance servers for virtualization technologies implementation, replacing HP EVA storage with new HP 3PAR.'},
    {lang: 'hy', year: 2014, title: 'ԱԿԲԱ-Կրեդիտ Ագրիկոլ Բանկ – վիրտուալիզացիոն տեխնոլոգիաների ներդրման նպատակով բարձր արտադրողականության սերվերներին անցման նախագծի իրականացում, HP EVA պահոցի փոխարինում նոր HP 3PAR պահոցով:'},

    {lang:'ru',year: 2014, title: 'Армениан Кард – Поставка и запуск  серверных комплексов НР с системой хранения данных 3PAR  для основной и резервной серверных. '},
    {lang:'en',year: 2014, title: 'Armenian Card – HP server farms with 3PAR storage systems supply and launching for operational and bachup server rooms.'},
    {lang: 'hy', year: 2014, title: 'Արմենիան Քարդ – 3PAR  տվյալների պահեստային համակարգերով HP սերվերային համալիրների մատակարարում և գործարկում` հիմնական և պահուստային սերվերային սենյակների համար:'},

    {lang:'ru',year: 2014, title: 'Ереванский Коньячный завод  - Поставка  системы хранения данных НР 3PAR  с целью дальнейшего расширения ИТ- инфраструктуры.'},
    {lang:'en',year: 2014, title: 'Yerevan Cognac Factory – HP 3PAR Storage systems supply for IT infrastructure further expansion.'},
    {lang: 'hy', year: 2014, title: 'Երևանի Կոնյակի Գործարան - HP 3PAR Տվյալների պահեստային համակարգի մատակարարում ` ենթակառուցվածքի հետագա ընդլայնման միտումով:'},

    {lang:'ru',year: 2014, title: 'Центральный Банк РА – Поставка компьютеров, ноутбуков и APC UPS  с целью замены устаревшего оборудования.'},
    {lang:'en',year: 2014, title: 'Central Bank of RA – Delivery of the HP computers, notebooks and APC UPS  for the replacement of old equipment.'},
    {lang: 'hy', year: 2014, title: 'ՀՀ Կենտրոնական Բանկ -  HP համակարգիչների, նոութբուքերի և  APC  ԱՍՍ-ների մատակարարում ` հին սարքավորումների փոխարինման նպատակով :  '},

    {lang:'ru',year: 2014, title: 'Carrefour – Поставка серверов НР и принтеров НР для первого супермаркета сети Carrefour в Армении.'},
    {lang:'en',year: 2014, title: 'Carrefour – Supply of HP servers and HP printers for the first Carrefour supermarket chain store in Armenia.'},
    {lang: 'hy', year: 2014, title: 'Carrefour –HP սերվերների և HP տպիչների մատակարարում Carrefour ցանցի առաջին սուպերմարկետի համար:'},

    {lang:'ru',year: 2014, title: 'ВиваСел МТС   - Поставка высокопроизводительных НР принтеров.'},
    {lang:'hy',year: 2014, title: 'ՎիվաՍելլ  – բարձր արտադրողականության  НР տպիչների մատակարարում:'},
    {lang: 'en', year: 2014, title: 'Viva Cell MTS – Delivery of the high performance HP printers.'},

    {lang:'ru',year: 2014, title: 'ВиваСел МТС  - Поставка и запуск системы мониторинга окружающей среды от Schneider Electric.'},
    {lang:'en',year: 2014, title: 'VivaCell MTS - Schneider Electric environmental monitoring system supply and launch project.'},
    {lang: 'hy', year: 2014, title: 'ՎիվաՍել ՄՏՍ -  Schneider Electric շրջակա միջավայրի մոնիտորինգի համակարգի մատակարարում և գործարկում:'},

    {lang:'ru',year: 2014, title: 'Конверс Банк – Поставка и запуск 40 kVA  UPS с целью организации резервного питания серверной комнаты.'},
    {lang:'en',year: 2014, title: 'Converse Bank  - Delivery and launch of 40 kVA UPS for server room power backup'},
    {lang: 'hy', year: 2014, title: 'Կոնվերս Բանկ – Սերվերային սենյակի ռեզերվային սնուցման համար 40 kVA  UPS-ի մատակարարում և գործարկում: '},

    {lang:'ru',year: 2014, title: 'АРМБИЗНЕСБАНК  - Поставка HP серверов и сетевого оборудования  с целью расширения процессингового центра.'},
    {lang:'en',year: 2014, title: 'ARMIBUSINESSBANK- Supply of HP Servers and networking equipment for processing center expansion.'},
    {lang: 'hy', year: 2014, title: 'ՀԱՅԲԻԶՆԵՍԲԱՆԿ – Պրոցեսինգային կենտրոնի զարգացման համար  HP սերվերների և ցանցային սարքավորումների մատակարարում :'},

    {lang:'ru',year: 2014, title: 'Армянский Банк Развития – Поставка системы хранения данных HP 3PAR  с целью расширения ИТ- инфраструктуры. '},
    {lang:'en',year: 2014, title: 'Armenian Development Bank  – HP 3PAR Storage systems supply for IT infrastructure further expansion.'},
    {lang: 'hy', year: 2014, title: 'Հայկական Զարգացման Բանկ - HP 3PAR Տվյալների պահեստային համակարգի մատակարարում  ենթակառուցվածքի հետագա ընդլայնման միտումով: '},

    {lang:'ru',year: 2013, title: 'Армянский Банк Развития - Переход на виртуальные серверы на основе системы  HP Server  и  системы хранения данных HP 3PAR , с возможностью дальнейшего создания удаленной резервной серверной комнаты.'},
    {lang:'en',year: 2013, title: 'Armenian Development Bank  – Migration to HP Server and Storage HP 3PAR  based virtual servers,  with the possibility of  remote backup server room.'},
    {lang: 'hy', year: 2013, title: 'Հայկական Զարգացման Բանկ - Անցում HP Server և Storage HP 3PAR տեխնոլոգիաների վրա հիմնվված վիրտուալ սերվերներին`  հեռակա պահուստային սերվերային սենյակ ստեղծելու հնարավորությամբ: '},

    {lang:'ru',year: 2013, title: 'Армэкономбанк –  Переход с оборудования другого производителя  на  системы хранения данных HP 3PAR  (2 системы с репликацией данных).'},
    {lang:'en',year: 2013, title: 'Armekonombank – Other manufacturer equipment replacement with HP 3PAR storage (2 systems with data replication)'},
    {lang: 'hy', year: 2013, title: 'Հայէկոնոմբանկ – այլ արտադրողի սարքավորումների փոխարինում Storage HP 3PAR համակարգով (2 համակարգ` տվյալների վերարտադրման գործառույթով)'},

    {lang:'ru',year: 2012, title: 'Гостиница «Armenia Mariott» – Обновление старого оборудования на  HP Rack –mount Servers и HP Storage.'},
    {lang:'en',year: 2012, title: 'Armenia Marriott Hotel Yerevan –Օld equipment upgrade with HP Rack-mount Servers and HP Storage.'},
    {lang: 'hy', year: 2012, title: '«Armenia Mariott» հյուրանոց –  Հին սարքաոորումների նորացում HP դարակային Rack-mount սպասարկիչներով և HP Storage համակարգերով: '},

    {lang:'ru',year: 2011, title: 'Армениан Кард -  Поставка, запуск и обслуживание нового  90 kW  LIEBERT UPS-а  для организации бесперебойного питания серверной комнаты .'},
    {lang:'en',year: 2011, title: 'Armenian Card – supply, launch and maintenance of the new UPS 90 kW LIEBERT for the server room.'},
    {lang: 'hy', year: 2011, title: 'Արմենիան Քարդ –  Սերվերային սենյակի համար նոր 90 kW LIEBERT ԱՍՍ-ի մատակարարում, գործարկում և սպասարկում:'},

    {lang:'ru',year: 2010, title: 'Центральный Банк РА -  Поставка, запуск и обслуживание  HP компьютеров и ноутбоков, рабочих станций и APC UPS.'},
    {lang:'en',year: 2010, title: 'RA Central Bank –HP computers and notebooks, HP Workstation as well as  APC UPS supply, launch and maintenance.'},
    {lang: 'hy', year: 2010, title: 'ՀՀ Կենտրոնական Բանկ -  HP համակարգիչների, նոթբուքերի և աշխատակայանների, ինչպես նաև APC  ԱՍՍ-ների մատակարարում և գործարկում:'},


    {lang:'ru',year: 2010, title: 'ACBA-Кредит Агриколь Банк  -  Создание удаленной серверной комнаты на основе HP Blade Servers и  EVA Storage 4400.  В рамках контракта были произведены: проектирование, поставка, запуск и обслуживание.'},
    {lang:'en',year: 2010, title: 'ACBA-Credit Agricole bank –Remote server room creation on the basis of HP Blade Servers and EVA Storage 4400. The scope of works had included design, equipment supply, launch and maintenance.'},
    {lang: 'hy', year: 2010, title: 'ACBA-Կրեդիտ Ագրիկոլ Բանկ – Հեռակա սերվերային սենյակի նախագծում` HP Blade Server և EVA 4400 Storage համակարգի  հիման վրա: Նախագծի շրջանակներում իրականացվել է նախագծում, սարքավորումների մատակարարում, համակարգի գործարկում և սպասարկում:'},
];
var news = [
    /*{date: new Date('2012-11-10'), title: '<p>? ?????????  8-?? ?????  ?? ???? ???????? ??????????? ????? ?? APC  UPS-?!!!</p>\
        <p>????? ?????????? ? 29-?? ??????? ? ????????? ?? 8-?? ?????</p>\
        <p>?????????? ???? ?? 1 ?????:</p>\
<p>BR500CI-RS APC UPS RS  500VA / 300 Watts; 230V, without auto-shutdown software = 30,888.00</p>\
<p>BE700G-RS APC UPS Power-Saving Back ES 700VA / 405 Watts 230V Russian = 58,008.00</p>\
<p>BR650CI-RS APC Back-UPS 650VA / 390 Watts, 230V, without auto-shutdown software = 53,008.00</p>\
??? ???? ? ?????? 20% ???'},

    {date: new Date('2012-03-14'), title: '13 ?????  ? ????????? «Paradise Hotel Dilijan» ???????? ??? ? ?? ???? ??????? ?????????? ??????? . ???? ???????? - « ??????? ??? ??? ????????????? ????????».'},
      {date: new Date('2012-02-16'), title: '? ???????? - ??????? 2011 ???? ??? ???????????? ????? ??????? ???????? ?????????????  ???????? ?? ???? ????????? ??? ????????? ?? ??????? ? ???????????? ??.'},
    {date: new Date('2011-06-17'), title: '?? ?????? ?????? ?????????? ? ?? ??????? ??? ??????? ???????? ?? ???? « 			????????? ??????? ?? ??? ?????????? ??????-??????». 						?? ?????? ?? 	?????????: 										CIS Sales Lead ,HP Storage Works Division -  ?. ????????,						???????? ?? ?????? ? ??????????,??? HP Networking-?. ?????,				 	???????-???????? ?? ???????? ? ??????? HP, HP BladeSystem Ambassador ? ??????? 		???- ????????? ??????????\
        ???? ????? ?????? ??????? ????? ?? ?????? ??????????? ????? ?????.'},
    {date: new Date('2011-05-04'), title: '?? ???? ? ?????????????? ???????? «??????» ??????? ?????????? ??e???? ?? ???????? ???  ??? – ??????????? ??????????? ????????.'}
*/];
module.exports = function (app) {
    var router = new Router();

    router
        .get('/partners', function (req, res, next) {
            res.send(partners);
        });
    router.get('/blogposts', function (req, res, next) {
        var __blogposts= [];
        for(var i =0; i< blogposts.length; i++){
            if(blogposts[i].lang == req.lang){
                __blogposts.push(blogposts[i]);
            }
        }
        res.send(__blogposts);
    });
    router.get('/projects', function (req, res, next) {
        var result = {};

        for (var i = 0; i < projects.length; i++) {
            var project = projects[i];
            if(project.lang != req.lang){
                continue;
            }
            if(!result[project.year]){
                result[project.year] = [project.title];
            }else{
                result[project.year].push(project.title);
            }
        }
        res.send(result);
    });
    router.get('/news', function (req, res, next) {
        res.send(news);
    });
    app.use('/', router);

};
