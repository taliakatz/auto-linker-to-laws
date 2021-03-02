(function (ns) {

    const uriMap = [
        {
            "Id": "5",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שכר חברי הכנסת, התש\"ט-1949",
            "NormalizeName": "חוק_שכר_חברי_הכנסת_התש_ט_1949",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=5",
            "RecentOfficialNames": [],
            "PublicationDate": "1949-06-07",
            "Uri": "/akn/il/act/PrimaryLegislation/1949-06-07/5",
            "HalahotName": {
                "Name": "חוק שכר חברי הכנסת, התש\"ט-1949",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מקצועות רפואיים (אגרות), התשל\"א-1971",
            "NormalizeName": "חוק_מקצועות_רפואיים_אגרות_התשל_א_1971",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20",
            "RecentOfficialNames": [],
            "PublicationDate": "1971-04-07",
            "Uri": "/akn/il/act/PrimaryLegislation/1971-04-07/20",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "15752",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק רשות הספנות והנמלים, התשס\"ד-2004",
            "NormalizeName": "חוק_רשות_הספנות_והנמלים_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=15752",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-22/15752",
            "HalahotName": {
                "Name": "חוק רשות הספנות והנמלים, התשס\"ד-2004",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "רשות הספנות והנמלים, התשס\"ד-2004 - חוק",
                "Score": "0.228571428571429"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק רשות הספנות והנמלים, התשס״ד–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_רשות_הספנות_והנמלים",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-07-22/15752",
                "OpenLawBookNameInNamesList": "חוק רשות הספנות והנמלים",
                "OpenLawBookInLawHeader": "חוק רשות הספנות והנמלים, התשס״ד–2004",
                "WikiHref": "חוק_רשות_הספנות_והנמלים"
            }
        },
        {
            "Id": "16126",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת המשטרה (מס' 18), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_המשטרה_מס_18_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16126",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/16126",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "16127",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להגנת חיית הבר (תיקון מס' 6), התשס\"ט-2008",
            "NormalizeName": "חוק_להגנת_חיית_הבר_תיקון_מס_6_התשס_ט_2008",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16127",
            "RecentOfficialNames": [],
            "PublicationDate": "2008-11-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2008-11-05/16127",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "16399",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 33) (הוראת שעה) (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_33_הוראת_שעה_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16399",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/16399",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "16403",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ההוצאה לפועל (תיקון מס' 24) (תיקון), התשס\"ד-2003",
            "NormalizeName": "חוק_ההוצאה_לפועל_תיקון_מס_24_תיקון_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16403",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-12/16403",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "16633",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המדיניות הכלכלית לשנת הכספים 2004 (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_המדיניות_הכלכלית_לשנת_הכספים_2004_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16633",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-01-18",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-01-18/16633",
            "HalahotName": {
                "Name": "חוק מדיניות כלכלית לשנת הכספים 2004 (תיקוני חקיקה),  התשס\"ד-2004",
                "Score": "0.032258064516129"
            },
            "TnufaName": {
                "Name": "מדיניות כלכלית לשנת הכספים 2004 (תיקוני חקיקה),   התשס\"ד-2004 - חוק",
                "Score": "0.161290322580645"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק המדיניות הכלכלית לשנת הכספים 2004 (תיקוני חקיקה), התשס״ד–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_המדיניות_הכלכלית_לשנת_הכספים_2004_(תיקוני_חקיקה)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-01-18/16633",
                "OpenLawBookNameInNamesList": "חוק המדיניות הכלכלית לשנת הכספים 2004 (תיקוני חקיקה)",
                "OpenLawBookInLawHeader": "חוק המדיניות הכלכלית לשנת הכספים 2004 (תיקוני חקיקה), התשס״ד–2004",
                "WikiHref": "חוק_המדיניות_הכלכלית_לשנת_הכספים_2004_תיקוני_חקיקה"
            }
        },
        {
            "Id": "16634",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק גיל פרישה, התשס\"ד-2004",
            "NormalizeName": "חוק_גיל_פרישה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=16634",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-01-18",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-01-18/16634",
            "HalahotName": {
                "Name": "חוק גיל פרישה, התשס\"ד-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק גיל פרישה, התשס״ד–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_גיל_פרישה",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-01-18/16634",
                "OpenLawBookNameInNamesList": "חוק גיל פרישה",
                "OpenLawBookInLawHeader": "חוק גיל פרישה, התשס״ד–2004",
                "WikiHref": "חוק_גיל_פרישה"
            }
        },
        {
            "Id": "17516",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הפיקוח על עסקי ביטוח (תיקון מס' 15), התשס\"ה-2005",
            "NormalizeName": "חוק_הפיקוח_על_עסקי_ביטוח_תיקון_מס_15_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17516",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/17516",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17655",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון סדרי הדין (חקירת עדים) (תיקון מס' 4), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_סדרי_הדין_חקירת_עדים_תיקון_מס_4_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17655",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/17655",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17673",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חופש המידע (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_חופש_המידע_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17673",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-08/17673",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17728",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העמותות (תיקון מס' 6), התשס\"ה-2005",
            "NormalizeName": "חוק_העמותות_תיקון_מס_6_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17728",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-06/17728",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17755",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הבחירות לכנסת (תיקון מס' 52), התשס\"ד-2004",
            "NormalizeName": "חוק_הבחירות_לכנסת_תיקון_מס_52_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17755",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/17755",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17756",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 80), התשס\"ד-2004",
            "NormalizeName": "חוק_העונשין_תיקון_מס_80_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17756",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/17756",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17761",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכניסה לישראל (תיקון מס' 13), התשס\"ד-2004",
            "NormalizeName": "חוק_הכניסה_לישראל_תיקון_מס_13_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17761",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-20",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-20/17761",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17778",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הממשלה (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_הממשלה_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17778",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-05-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-05-12/17778",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "17825",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכנסת (תיקון מס' 18), התשס\"ד-2004",
            "NormalizeName": "חוק_הכנסת_תיקון_מס_18_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=17825",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-08/17825",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "18437",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 15), התשס\"ה-2005",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_15_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18437",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/18437",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "18814",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השתלת אברים, התשס\"ח-2008",
            "NormalizeName": "חוק_השתלת_אברים_התשס_ח_2008",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18814",
            "RecentOfficialNames": [],
            "PublicationDate": "2008-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2008-03-31/18814",
            "HalahotName": {
                "Name": "חוק השתלת אברים, התשס\"ח-2008",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "השתלת אברים, התשס\"ח-2008 - חוק",
                "Score": "0.296296296296296"
            },
            "KahamName": {
                "Name": "חוק השתלת אברים, התשס'ח - 2008",
                "Score": "0"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק השתלת אברים, התשס״ח–2008",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_השתלת_אברים",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2008-03-31/18814",
                "OpenLawBookNameInNamesList": "חוק השתלת אברים",
                "OpenLawBookInLawHeader": "חוק השתלת אברים, התשס״ח–2008",
                "WikiHref": "חוק_השתלת_אברים"
            }
        },
        {
            "Id": "18815",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 48), התשס\"ד-2004",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_48_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18815",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/18815",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "18905",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התגמולים לנפגעי פעולות איבה (תיקון מס' 19), התשס\"ד-2004",
            "NormalizeName": "חוק_התגמולים_לנפגעי_פעולות_איבה_תיקון_מס_19_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18905",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-21/18905",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "18906",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (הגבלות קריאה לשירות מילואים של קצין - הוראת שעה) (תיקון מס' 2), התשס\"ד-2003",
            "NormalizeName": "חוק_שירות_ביטחון_הגבלות_קריאה_לשירות_מילואים_של_קצין_הוראת_שעה_תיקון_מס_2_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18906",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-12-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-12-30/18906",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "18907",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בתי הסוהר (מס' 26), התשס\"ד-2003",
            "NormalizeName": "חוק_לתיקון_פקודת_בתי_הסוהר_מס_26_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=18907",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-12-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-12-31/18907",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "19183",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שוויון ההזדמנויות בעבודה (תיקון מס' 9), התשס\"ד-2004",
            "NormalizeName": "חוק_שוויון_ההזדמנויות_בעבודה_תיקון_מס_9_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19183",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-04/19183",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "19186",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק למניעת הטרדה מינית (תיקון מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_למניעת_הטרדה_מינית_תיקון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19186",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/19186",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "19277",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרבנות הראשית לישראל (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_הרבנות_הראשית_לישראל_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19277",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-17/19277",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "19448",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "הנוער (טיפול והשגחה) (תיקון - העדפת משפחה אומנת מדרגה ראשונה), התשס\"ד-2004",
            "NormalizeName": "הנוער_טיפול_והשגחה_תיקון_העדפת_משפחה_אומנת_מדרגה_ראשונה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19448",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/19448",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "19798",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הדגל, הסמל והמנון המדינה, התש\"ט-1949",
            "NormalizeName": "חוק_הדגל_הסמל_והמנון_המדינה_התש_ט_1949",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19798",
            "RecentOfficialNames": [
                "חוק הדגל והסמל, התש\"ט-1949"
            ],
            "PublicationDate": "2004-11-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-17/19798",
            "HalahotName": {
                "Name": "חוק דגל, סמל והמנון המדינה, התש\"ט-1949",
                "Score": "0.0526315789473684"
            },
            "TnufaName": {
                "Name": "דגל, סמל והמנון המדינה, התש\"ט-1949 - חוק",
                "Score": "0.263157894736842"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הדגל, הסמל והמנון המדינה, תש״ט–1949",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הדגל,_הסמל_והמנון_המדינה",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-11-17/19798",
                "OpenLawBookNameInNamesList": "חוק הדגל, הסמל והמנון המדינה",
                "OpenLawBookInLawHeader": "חוק הדגל, הסמל והמנון המדינה, תש״ט–1949",
                "WikiHref": "חוק_הדגל_הסמל_והמנון_המדינה"
            }
        },
        {
            "Id": "19991",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק איסור התערבות גנטית (שיבוט אדם ושינוי גנטי בתאי רביה) (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_איסור_התערבות_גנטית_שיבוט_אדם_ושינוי_גנטי_בתאי_רביה_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=19991",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/19991",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20003",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 75), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_75_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20003",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/20003",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20406",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השבת קצבה לבן זוג שנישא בשנית ונישואיו השניים פקעו (תיקוני חקיקה), התשס\"ה-2005",
            "NormalizeName": "חוק_השבת_קצבה_לבן_זוג_שנישא_בשנית_ונישואיו_השניים_פקעו_תיקוני_חקיקה_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20406",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-04/20406",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20407",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המועצות האזוריות (מועד בחירות כלליות) (תיקון מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_המועצות_האזוריות_מועד_בחירות_כלליות_תיקון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20407",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/20407",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20488",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בתי משפט לעניינים מינהליים (תיקון מס' 15), התשס\"ה-2005",
            "NormalizeName": "חוק_בתי_משפט_לעניינים_מינהליים_תיקון_מס_15_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20488",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-08/20488",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20513",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 52), התשס\"ה-2005",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_52_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20513",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/20513",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "20589",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ארוחה יומית לתלמיד, התשס\"ה-2005",
            "NormalizeName": "חוק_ארוחה_יומית_לתלמיד_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=20589",
            "RecentOfficialNames": [
                "חוק ארוחה יומית לתלמיד, התשס\"ה-2004"
            ],
            "PublicationDate": "2005-01-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-06/20589",
            "HalahotName": {
                "Name": "חוק ארוחה יומית לתלמיד, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק ארוחה יומית לתלמיד, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_ארוחה_יומית_לתלמיד",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-01-06/20589",
                "OpenLawBookNameInNamesList": "חוק ארוחה יומית לתלמיד",
                "OpenLawBookInLawHeader": "חוק ארוחה יומית לתלמיד, התשס״ה–2005",
                "WikiHref": "חוק_ארוחה_יומית_לתלמיד"
            }
        },
        {
            "Id": "21125",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התכנון והבנייה (תיקון מס' 73), התשס\"ה-2005",
            "NormalizeName": "חוק_התכנון_והבנייה_תיקון_מס_73_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21125",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-05/21125",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21473",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המועצה להשכלה גבוהה (תיקון מס' 13), התשס\"ו-2006",
            "NormalizeName": "חוק_המועצה_להשכלה_גבוהה_תיקון_מס_13_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21473",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-01/21473",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21552",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכניסה לישראל (תיקון מס' 12), התשס\"ד-2004",
            "NormalizeName": "חוק_הכניסה_לישראל_תיקון_מס_12_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21552",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-11/21552",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21553",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התרבות והאמנות (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_התרבות_והאמנות_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21553",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-22/21553",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21666",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 79), התשס\"ד-2004",
            "NormalizeName": "חוק_העונשין_תיקון_מס_79_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21666",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-19/21666",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21672",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 41), התשס\"ד-2004",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_41_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21672",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-21/21672",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21740",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שוויון זכויות לאנשים עם מוגבלות (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_שוויון_זכויות_לאנשים_עם_מוגבלות_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21740",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/21740",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "21863",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 51), התשס\"ה-2005",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_51_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=21863",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/21863",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "22345",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק למניעת הונאה בספרי תורה ובמגילות, בתפילין ובמזוזות, התשל\"ה-1974",
            "NormalizeName": "חוק_למניעת_הונאה_בספרי_תורה_ובמגילות_בתפילין_ובמזוזות_התשל_ה_1974",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=22345",
            "RecentOfficialNames": [
                "חוק למניעת הונאה בתפילין ובמזוזות, התשל\"ה-1974"
            ],
            "PublicationDate": "2004-12-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-29/22345",
            "HalahotName": {
                "Name": "חוק מניעת הונאה בספרי תורה ובמגילות, בתפילין ובמזוזות, התשל\"ה-1974",
                "Score": "0.0153846153846154"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק למניעת הונאה בספרי תורה ובמגילות, בתפילין ובמזוזות, תשל״ה–1974",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_למניעת_הונאה_בספרי_תורה_ובמגילות,_בתפילין_ובמזוזות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-12-29/22345",
                "OpenLawBookNameInNamesList": "חוק למניעת הונאה בספרי תורה ובמגילות, בתפילין ובמזוזות",
                "OpenLawBookInLawHeader": "חוק למניעת הונאה בספרי תורה ובמגילות, בתפילין ובמזוזות, תשל״ה–1974",
                "WikiHref": "חוק_למניעת_הונאה_בספרי_תורה_ובמגילות_בתפילין_ובמזוזות"
            }
        },
        {
            "Id": "22564",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכנסת (מספר חברי ועדת הכספים בתקופת כהונתה של הכנסת השש-עשרה), התשס\"ד-2004",
            "NormalizeName": "חוק_הכנסת_מספר_חברי_ועדת_הכספים_בתקופת_כהונתה_של_הכנסת_השש_עשרה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=22564",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-30/22564",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "22645",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "ביטוח בריאות ממלכתי (תיקון פרסום נגיש של סל הבריאות למבוטחים), התשס\"ד-2004",
            "NormalizeName": "ביטוח_בריאות_ממלכתי_תיקון_פרסום_נגיש_של_סל_הבריאות_למבוטחים_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=22645",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/22645",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "22772",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משפחות חיילים שנספו במערכה (תגמולים ושיקום) (תיקון מס' 27), התשס\"ד-2004",
            "NormalizeName": "חוק_משפחות_חיילים_שנספו_במערכה_תגמולים_ושיקום_תיקון_מס_27_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=22772",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-05-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-05-17/22772",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "22790",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשויות המקומיות (ערר על קביעת ארנונה כללית) (תיקון - ועדת ערר וערר וערעור), התשס\"ד-2004",
            "NormalizeName": "חוק_הרשויות_המקומיות_ערר_על_קביעת_ארנונה_כללית_תיקון_ועדת_ערר_וערר_וערעור_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=22790",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/22790",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23023",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק יום הזכרון לחללי מערכות ישראל ויום העצמאות (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_יום_הזכרון_לחללי_מערכות_ישראל_ויום_העצמאות_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23023",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-11/23023",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23024",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק רשות התעופה האזרחית, התשס\"ה-2005",
            "NormalizeName": "חוק_רשות_התעופה_האזרחית_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23024",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-13",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-13/23024",
            "HalahotName": {
                "Name": "חוק רשות התעופה האזרחית, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק רשות התעופה האזרחית, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_רשות_התעופה_האזרחית",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-02-13/23024",
                "OpenLawBookNameInNamesList": "חוק רשות התעופה האזרחית",
                "OpenLawBookInLawHeader": "חוק רשות התעופה האזרחית, התשס״ה–2005",
                "WikiHref": "חוק_רשות_התעופה_האזרחית"
            }
        },
        {
            "Id": "23065",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להסדרת הפיקוח על כלבים (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_להסדרת_הפיקוח_על_כלבים_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23065",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-30/23065",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23140",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מעונות יום שיקומיים (תיקון מס' 3), התשס\"ח-2008",
            "NormalizeName": "חוק_מעונות_יום_שיקומיים_תיקון_מס_3_התשס_ח_2008",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23140",
            "RecentOfficialNames": [],
            "PublicationDate": "2008-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2008-08-11/23140",
            "HalahotName": {
                "Name": "חוק מעונות יום שיקומיים (תיקון מס' 3), התשס\"ח-2008",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23271",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מיסוי מקרקעין (שבח, מכירה ורכישה) (תיקון מס' 53), התשס\"ד-2004",
            "NormalizeName": "חוק_מיסוי_מקרקעין_שבח_מכירה_ורכישה_תיקון_מס_53_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23271",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-19/23271",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23381",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 72), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_72_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23381",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/23381",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23522",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 106), התשס\"ו-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_106_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23522",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-01/23522",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23658",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ביטוח בריאות ממלכתי (תיקון מס' 28 והוראת שעה), התשס\"ה-2005",
            "NormalizeName": "חוק_ביטוח_בריאות_ממלכתי_תיקון_מס_28_והוראת_שעה_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23658",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-13",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-13/23658",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23895",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שילוב סטודנטים במערכת החינוך, התשס\"ה-2005",
            "NormalizeName": "חוק_שילוב_סטודנטים_במערכת_החינוך_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23895",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-26/23895",
            "HalahotName": {
                "Name": "חוק שילוב סטודנטים במערכת החינוך, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק שילוב סטודנטים במערכת החינוך, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_שילוב_סטודנטים_במערכת_החינוך",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-06-26/23895",
                "OpenLawBookNameInNamesList": "חוק שילוב סטודנטים במערכת החינוך",
                "OpenLawBookInLawHeader": "חוק שילוב סטודנטים במערכת החינוך, התשס״ה–2005",
                "WikiHref": "חוק_שילוב_סטודנטים_במערכת_החינוך"
            }
        },
        {
            "Id": "23916",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסניגוריה הציבורית (תיקון מס' 7), התשס\"ד-2004",
            "NormalizeName": "חוק_הסניגוריה_הציבורית_תיקון_מס_7_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23916",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/23916",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23920",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ניירות ערך (תיקון מס' 23), התשס\"ד-2004",
            "NormalizeName": "חוק_ניירות_ערך_תיקון_מס_23_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23920",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/23920",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "23921",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 74), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_74_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=23921",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/23921",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24030",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק זכויות התלמיד (תיקון), התשס\"ה-2004",
            "NormalizeName": "חוק_זכויות_התלמיד_תיקון_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24030",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-22/24030",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24082",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מס הכנסה (תיקוני חקיקה), התשס\"ה-2004",
            "NormalizeName": "חוק_מס_הכנסה_תיקוני_חקיקה_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24082",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-02",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-02/24082",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24170",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הפיקוח על עסקי ביטוח (תיקון מס' 12), התשס\"ד-2004",
            "NormalizeName": "חוק_הפיקוח_על_עסקי_ביטוח_תיקון_מס_12_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24170",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-04-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-04-04/24170",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24225",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בנימין זאב הרצל (ציון זכרו ופועלו), התשס\"ד-2004",
            "NormalizeName": "חוק_בנימין_זאב_הרצל_ציון_זכרו_ופועלו_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24225",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/24225",
            "HalahotName": {
                "Name": "חוק בנימין זאב הרצל (ציון זכרו ופועלו), התשס\"ד-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק בנימין זאב הרצל (ציון זכרו ופועלו), התשס״ד–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_בנימין_זאב_הרצל_(ציון_זכרו_ופועלו)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-07-11/24225",
                "OpenLawBookNameInNamesList": "חוק בנימין זאב הרצל (ציון זכרו ופועלו)",
                "OpenLawBookInLawHeader": "חוק בנימין זאב הרצל (ציון זכרו ופועלו), התשס״ד–2004",
                "WikiHref": "חוק_בנימין_זאב_הרצל_ציון_זכרו_ופועלו"
            }
        },
        {
            "Id": "24293",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התכנון והבנייה (תיקון מס' 72), התשס\"ה-2005",
            "NormalizeName": "חוק_התכנון_והבנייה_תיקון_מס_72_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24293",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/24293",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24394",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות התעסוקה (תיקון מס' 14), התשס\"ד-2004",
            "NormalizeName": "חוק_שירות_התעסוקה_תיקון_מס_14_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24394",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-09-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-09-06/24394",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24587",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 102), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_102_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24587",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-14",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-14/24587",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "24641",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק למניעת העסקה של עברייני מין במוסדות מסוימים, התשס\"א-2001",
            "NormalizeName": "חוק_למניעת_העסקה_של_עברייני_מין_במוסדות_מסוימים_התשס_א_2001",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24641",
            "RecentOfficialNames": [
                "חוק למניעת העסקה של עברייני מין במוסד המכוון למתן שירות לקטינים, התשס\"א-2001"
            ],
            "PublicationDate": "2005-01-18",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-18/24641",
            "HalahotName": {
                "Name": "חוק מניעת העסקה של עברייני מין במוסדות מסוימים, התשס\"א-2001",
                "Score": "0.0169491525423729"
            },
            "TnufaName": {
                "Name": "מניעת העסקה של עברייני מין במוסדות מסוימים, התשס\"א-2001 - חוק",
                "Score": "0.152542372881356"
            },
            "KahamName": {
                "Name": "חוק למניעת העסקה של עברייני מין במוסד קטינים, התשס'א - 2001",
                "Score": "0.101694915254237"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק למניעת העסקה של עברייני מין במוסדות מסוימים, התשס״א–2001",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_למניעת_העסקה_של_עברייני_מין_במוסדות_מסוימים",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-01-18/24641",
                "OpenLawBookNameInNamesList": "חוק למניעת העסקה של עברייני מין במוסדות מסוימים",
                "OpenLawBookInLawHeader": "חוק למניעת העסקה של עברייני מין במוסדות מסוימים, התשס״א–2001",
                "WikiHref": "חוק_למניעת_העסקה_של_עברייני_מין_במוסדות_מסוימים"
            }
        },
        {
            "Id": "24719",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 90), התשס\"ו-2006",
            "NormalizeName": "חוק_העונשין_תיקון_מס_90_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=24719",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-03/24719",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "25155",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 77), התשס\"ה-2005",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_77_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25155",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/25155",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "25662",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית), התשס\"ו-2005",
            "NormalizeName": "חוק_הליכי_חקירה_והעדה_התאמה_לאנשים_עם_מוגבלות_שכלית_או_נפשית_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25662",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-08/25662",
            "HalahotName": {
                "Name": "חוק הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית), התשס\"ו-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית), התשס\"ו-2005 - חוק",
                "Score": "0.111111111111111"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית), התשס״ו–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הליכי_חקירה_והעדה_(התאמה_לאנשים_עם_מוגבלות_שכלית_או_נפשית)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-12-08/25662",
                "OpenLawBookNameInNamesList": "חוק הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית)",
                "OpenLawBookInLawHeader": "חוק הליכי חקירה והעדה (התאמה לאנשים עם מוגבלות שכלית או נפשית), התשס״ו–2005",
                "WikiHref": "חוק_הליכי_חקירה_והעדה_התאמה_לאנשים_עם_מוגבלות_שכלית_או_נפשית"
            }
        },
        {
            "Id": "25663",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגבלת הפרסומת והשיווק של מוצרי טבק, התשמ\"ג-1983",
            "NormalizeName": "חוק_הגבלת_הפרסומת_והשיווק_של_מוצרי_טבק_התשמ_ג_1983",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25663",
            "RecentOfficialNames": [
                "חוק הגבלת הפרסומת למוצרי טבק לעישון, התשמ\"ג-1983",
                "חוק איסור פרסומת והגבלת השיווק של מוצרי טבק ועישון, התשמ\"ג-1983"
            ],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/25663",
            "HalahotName": {
                "Name": "חוק איסור פרסומת והגבלת השיווק של מוצרי טבק ועישון, התשמ\"ג-1983ים",
                "Score": "0.328125"
            },
            "TnufaName": "",
            "KahamName": {
                "Name": "חוק הגבלת הפרסומת והשיווק של מוצרי טבק ועישון, תשמ'ג-1983",
                "Score": "0.125"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק איסור פרסומת והגבלת השיווק של מוצרי טבק ועישון, התשמ״ג–1983",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_איסור_פרסומת_והגבלת_השיווק_של_מוצרי_טבק_ועישון",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-08-12/25663",
                "OpenLawBookNameInNamesList": "חוק איסור פרסומת והגבלת השיווק של מוצרי טבק ועישון",
                "OpenLawBookInLawHeader": "חוק איסור פרסומת והגבלת השיווק של מוצרי טבק ועישון, התשמ״ג–1983",
                "WikiHref": "חוק_איסור_פרסומת_והגבלת_השיווק_של_מוצרי_טבק_ועישון"
            }
        },
        {
            "Id": "25742",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 97), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_97_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25742",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-24",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-24/25742",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "25822",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 95), התשס\"ז-2007",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_95_התשס_ז_2007",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25822",
            "RecentOfficialNames": [],
            "PublicationDate": "2007-05-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2007-05-30/25822",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "25944",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העמותות (תיקון מס' 8), התשס\"ו-2006",
            "NormalizeName": "חוק_העמותות_תיקון_מס_8_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=25944",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-03/25944",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "26783",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הבטיחות במקומות ציבוריים (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_הבטיחות_במקומות_ציבוריים_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=26783",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-14",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-14/26783",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "26851",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הלוואות לדיור (תיקון מס' 11), התשס\"ד-2004",
            "NormalizeName": "חוק_הלוואות_לדיור_תיקון_מס_11_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=26851",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/26851",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "26858",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מיסוי מקרקעין (שבח, מכירה ורכישה) (תיקון מס' 55), התשס\"ה-2005",
            "NormalizeName": "חוק_מיסוי_מקרקעין_שבח_מכירה_ורכישה_תיקון_מס_55_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=26858",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-12/26858",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "26983",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק-יסוד: מבקר המדינה (תיקון מס' 2)",
            "NormalizeName": "חוק_יסוד_מבקר_המדינה_תיקון_מס_2",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=26983",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/26983",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "26992",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לפיצוי נפגעי גזזת (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_לפיצוי_נפגעי_גזזת_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=26992",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/26992",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "27015",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 76), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_76_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=27015",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/27015",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "27375",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "איסור ייצור מסחר או ייבוא סיגריות בישראל",
            "NormalizeName": "איסור_ייצור_מסחר_או_ייבוא_סיגריות_בישראל",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=27375",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/27375",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "27409",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני הרשויות המקומיות (ייצוג הולם) (תיקוני חקיקה), התשס\"ה-2004",
            "NormalizeName": "חוק_לתיקון_דיני_הרשויות_המקומיות_ייצוג_הולם_תיקוני_חקיקה_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=27409",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-29/27409",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "27818",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 28), התשס\"ה-2005",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_28_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=27818",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-06/27818",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "28598",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשות השניה לטלוויזיה ורדיו (תיקון מס' 22), התשס\"ה-2005",
            "NormalizeName": "חוק_הרשות_השניה_לטלוויזיה_ורדיו_תיקון_מס_22_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=28598",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-06/28598",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "28910",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מימון מפלגות (תיקון מס' 27), התשס\"ה-2005",
            "NormalizeName": "חוק_מימון_מפלגות_תיקון_מס_27_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=28910",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-29/28910",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "28914",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הספריה הלאומית, התשס\"ח-2007",
            "NormalizeName": "חוק_הספריה_הלאומית_התשס_ח_2007",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=28914",
            "RecentOfficialNames": [],
            "PublicationDate": "2007-11-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2007-11-29/28914",
            "HalahotName": {
                "Name": "חוק ספריה לאומית, התשס\"ח-2007",
                "Score": "0.0666666666666667"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הספריה הלאומית, התשס״ח–2007",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הספריה_הלאומית",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2007-11-29/28914",
                "OpenLawBookNameInNamesList": "חוק הספריה הלאומית",
                "OpenLawBookInLawHeader": "חוק הספריה הלאומית, התשס״ח–2007",
                "WikiHref": "חוק_הספריה_הלאומית"
            }
        },
        {
            "Id": "29221",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (סמכויות אכיפה - חיפוש בגוף ונטילת אמצעי זיהוי), התשנ\"ו-1996",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_סמכויות_אכיפה_חיפוש_בגוף_ונטילת_אמצעי_זיהוי_התשנ_ו_1996",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29221",
            "RecentOfficialNames": [
                "חוק סדר הדין הפלילי (סמכויות אכיפה - חיפוש בגוף החשוד), התשנ\"ו-1996"
            ],
            "PublicationDate": "2005-06-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-19/29221",
            "HalahotName": {
                "Name": "חוק סדר הדין הפלילי (סמכויות אכיפה - חיפוש בגוף ונטילת אמצעי זיהוי), התשנ\"ו-1996",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "סדר הדין הפלילי (סמכויות אכיפה - חיפוש בגוף ונטילת אמצעי זיהוי), התשנ\"ו-1996 - חוק",
                "Score": "0.106666666666667"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק סדר הדין הפלילי (סמכויות אכיפה – חיפוש בגוף ונטילת אמצעי זיהוי), התשנ״ו–1996",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_סדר_הדין_הפלילי_(סמכויות_אכיפה_–_חיפוש_בגוף_ונטילת_אמצעי_זיהוי)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-06-19/29221",
                "OpenLawBookNameInNamesList": "חוק סדר הדין הפלילי (סמכויות אכיפה – חיפוש בגוף ונטילת אמצעי זיהוי)",
                "OpenLawBookInLawHeader": "חוק סדר הדין הפלילי (סמכויות אכיפה – חיפוש בגוף ונטילת אמצעי זיהוי), התשנ״ו–1996",
                "WikiHref": "חוק_סדר_הדין_הפלילי_סמכויות_אכיפה_חיפוש_בגוף_ונטילת_אמצעי_זיהוי"
            }
        },
        {
            "Id": "29233",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת המועצות המקומיות (מס' 36), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_המועצות_המקומיות_מס_36_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29233",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/29233",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29234",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק גלי צה\"ל - שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות), התשס\"ה-2005",
            "NormalizeName": "חוק_גלי_צה_ל_שידורי_רדיו_של_צבא_הגנה_לישראל_שידורי_חסות_ותשדירי_שירות_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29234",
            "RecentOfficialNames": [
                "חוק גלי צה\"ל - שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות) (הוראת שעה), התשס\"ה-2005"
            ],
            "PublicationDate": "2005-02-13",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-13/29234",
            "HalahotName": {
                "Name": "חוק גלי צה\"ל - שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות), התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק גלי צה״ל – שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות), התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_גלי_צה\"ל_–_שידורי_רדיו_של_צבא_הגנה_לישראל_(שידורי_חסות_ותשדירי_שירות)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-02-13/29234",
                "OpenLawBookNameInNamesList": "חוק גלי צה\"ל – שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות)",
                "OpenLawBookInLawHeader": "חוק גלי צה״ל – שידורי רדיו של צבא הגנה לישראל (שידורי חסות ותשדירי שירות), התשס״ה–2005",
                "WikiHref": "חוק_גלי_צה_ל_שידורי_רדיו_של_צבא_הגנה_לישראל_שידורי_חסות_ותשדירי_שירות"
            }
        },
        {
            "Id": "29332",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בית התפוצות, התשס\"ו-2005",
            "NormalizeName": "חוק_בית_התפוצות_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29332",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-15/29332",
            "HalahotName": {
                "Name": "חוק בית התפוצות, התשס\"ו-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק בית התפוצות, התשס״ו–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_בית_התפוצות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-12-15/29332",
                "OpenLawBookNameInNamesList": "חוק בית התפוצות",
                "OpenLawBookInLawHeader": "חוק בית התפוצות, התשס״ו–2005",
                "WikiHref": "חוק_בית_התפוצות"
            }
        },
        {
            "Id": "29406",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חסינות חברי הכנסת, זכויותיהם וחובותיהם (תיקון מס' 32), התשס\"ה-2005",
            "NormalizeName": "חוק_חסינות_חברי_הכנסת_זכויותיהם_וחובותיהם_תיקון_מס_32_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29406",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-24",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-24/29406",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29411",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשות השניה לטלוויזיה ורדיו (תיקון מס' 23), התשס\"ה-2005",
            "NormalizeName": "חוק_הרשות_השניה_לטלוויזיה_ורדיו_תיקון_מס_23_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29411",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/29411",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29578",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "הגבלת גישה לאתרי אינטרנט למבוגרים, התשס\"ד-2004",
            "NormalizeName": "הגבלת_גישה_לאתרי_אינטרנט_למבוגרים_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29578",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/29578",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29613",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ביטוח בריאות ממלכתי (תיקון מס' 27), התשס\"ה-2004",
            "NormalizeName": "חוק_ביטוח_בריאות_ממלכתי_תיקון_מס_27_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29613",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-29/29613",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29614",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק רישוי עסקים (תיקון מס' 21), התשס\"ד-2004",
            "NormalizeName": "חוק_רישוי_עסקים_תיקון_מס_21_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29614",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/29614",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29621",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 49), התשס\"ד-2004",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_49_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29621",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-19/29621",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29624",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 67), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_67_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29624",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-06/29624",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29663",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק איסור הונאה בכשרות (תיקון מס' 2), התשס\"ו-2005",
            "NormalizeName": "חוק_איסור_הונאה_בכשרות_תיקון_מס_2_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29663",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-15/29663",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29752",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 18), התשס\"ו-2005",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_18_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29752",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-22/29752",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29798",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות לאומי בהתנדבות (תכנית נסיונית לבנים) (הוראת שעה) (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_שירות_לאומי_בהתנדבות_תכנית_נסיונית_לבנים_הוראת_שעה_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29798",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/29798",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29800",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ניירות ערך (תיקון מס' 26), התשס\"ה-2004",
            "NormalizeName": "חוק_ניירות_ערך_תיקון_מס_26_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29800",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-17/29800",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "29804",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מעונות יום שיקומיים (תיקון מס' 2), התשס\"ה-2005",
            "NormalizeName": "חוק_מעונות_יום_שיקומיים_תיקון_מס_2_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=29804",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/29804",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30061",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שיווי זכויות האישה (תיקון מס' 4), התשס\"ה-2005",
            "NormalizeName": "חוק_שיווי_זכויות_האישה_תיקון_מס_4_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30061",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/30061",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30070",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 103), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_103_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30070",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-08/30070",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30173",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 45), התשס\"ד-2004",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_45_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30173",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-09/30173",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30183",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשויות המקומיות (משמעת) (תיקון מס' 4), התשס\"ה-2004",
            "NormalizeName": "חוק_הרשויות_המקומיות_משמעת_תיקון_מס_4_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30183",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-06/30183",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30184",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 83), התשס\"ה-2004",
            "NormalizeName": "חוק_העונשין_תיקון_מס_83_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30184",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-13",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-13/30184",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30185",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת האגודות השיתופיות (מס' 7), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_האגודות_השיתופיות_מס_7_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30185",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-18",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-18/30185",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30331",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק גנים בוטניים, התשס\"ו-2006",
            "NormalizeName": "חוק_גנים_בוטניים_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30331",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-04/30331",
            "HalahotName": {
                "Name": "חוק גנים בוטניים, התשס\"ו-2006",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק גנים בוטניים, התשס״ו–2006",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_גנים_בוטניים",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2006-01-04/30331",
                "OpenLawBookNameInNamesList": "חוק גנים בוטניים",
                "OpenLawBookInLawHeader": "חוק גנים בוטניים, התשס״ו–2006",
                "WikiHref": "חוק_גנים_בוטניים"
            }
        },
        {
            "Id": "30357",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 69), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_69_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30357",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-08/30357",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30371",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "הצת חוק העונשין (תיקון - איסור מכירת כרטיסי הגרלה לקטין), התשס\"ד-2004",
            "NormalizeName": "הצת_חוק_העונשין_תיקון_איסור_מכירת_כרטיסי_הגרלה_לקטין_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30371",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/30371",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30394",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (תיקון מס' 7 והוראת שעה) (שירות במשטרה ושירות מוכר) (תיקון מס' 6), התשס\"ד-2004",
            "NormalizeName": "חוק_שירות_ביטחון_תיקון_מס_7_והוראת_שעה_שירות_במשטרה_ושירות_מוכר_תיקון_מס_6_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30394",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/30394",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30395",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסעה בטיחותית לילדים ולפעוטות עם מוגבלות (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_הסעה_בטיחותית_לילדים_ולפעוטות_עם_מוגבלות_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30395",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-11/30395",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30414",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חינוך מיוחד (תיקון מס' 8), התשס\"ה-2005",
            "NormalizeName": "חוק_חינוך_מיוחד_תיקון_מס_8_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30414",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-04/30414",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30452",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק צער בעלי חיים (הגנה על בעלי חיים) (תיקון מס' 4), התשס\"ו-2005",
            "NormalizeName": "חוק_צער_בעלי_חיים_הגנה_על_בעלי_חיים_תיקון_מס_4_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30452",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-29/30452",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30534",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 66), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_66_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30534",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-12/30534",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30578",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק צער בעלי חיים (הגנה על בעלי חיים) (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_צער_בעלי_חיים_הגנה_על_בעלי_חיים_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30578",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/30578",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30641",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 68), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_68_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30641",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/30641",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30643",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 99), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_99_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30643",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-03/30643",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30759",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגבלת העישון במקומות ציבוריים (תיקון), התשס\"ה-2005",
            "NormalizeName": "חוק_הגבלת_העישון_במקומות_ציבוריים_תיקון_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30759",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-21/30759",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30792",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התקשורת (בזק ושידורים) (תיקון מס' 31), התשס\"ה-2005",
            "NormalizeName": "חוק_התקשורת_בזק_ושידורים_תיקון_מס_31_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30792",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-06/30792",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30793",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק איסור שידורים שלא כדין (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_איסור_שידורים_שלא_כדין_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30793",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/30793",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30799",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות המדינה (מינויים) (תיקון מס' 13), התשס\"ה-2005",
            "NormalizeName": "חוק_שירות_המדינה_מינויים_תיקון_מס_13_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30799",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/30799",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30882",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 85), התשס\"ה-2005",
            "NormalizeName": "חוק_העונשין_תיקון_מס_85_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30882",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/30882",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30896",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סימון כלי רכב (מניעת גניבות) (הוראת שעה) (תיקון מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_סימון_כלי_רכב_מניעת_גניבות_הוראת_שעה_תיקון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30896",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-28",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-28/30896",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30938",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת מס הכנסה (מס' 142), התשס\"ה-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_מס_הכנסה_מס_142_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30938",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-30/30938",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30939",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השקעות משותפות בנאמנות (תיקון מס' 9), התשס\"ה-2004",
            "NormalizeName": "חוק_השקעות_משותפות_בנאמנות_תיקון_מס_9_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30939",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-15/30939",
            "HalahotName": {
                "Name": "חוק השקעות משותפות בנאמנות (תיקון מס' 9), התשס\"ה-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "30940",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסדרת העיסוק בייעוץ השקעות ובניהול תיקי השקעות (תיקון מס' 7), התשס\"ה-2004",
            "NormalizeName": "חוק_הסדרת_העיסוק_בייעוץ_השקעות_ובניהול_תיקי_השקעות_תיקון_מס_7_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=30940",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-15/30940",
            "HalahotName": {
                "Name": "חוק הסדרת העיסוק בייעוץ השקעות ובניהול תיקי השקעות (תיקון מס' 7), התשס\"ה-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31046",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מילווה המדינה (תיקון מס' 14), התשס\"ה-2005",
            "NormalizeName": "חוק_מילווה_המדינה_תיקון_מס_14_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31046",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/31046",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31076",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "יסודות התקציב (תיקון - פטור מדמי חכירה למסגדים וכנסיות), התשס\"ד-2004",
            "NormalizeName": "יסודות_התקציב_תיקון_פטור_מדמי_חכירה_למסגדים_וכנסיות_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31076",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/31076",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31213",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק אנשי צבא דרום לבנון ומשפחותיהם, התשס\"ה-2004",
            "NormalizeName": "חוק_אנשי_צבא_דרום_לבנון_ומשפחותיהם_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31213",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-15/31213",
            "HalahotName": {
                "Name": "חוק אנשי צבא דרום לבנון ומשפחותיהם, התשס\"ה-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק אנשי צבא דרום לבנון ומשפחותיהם, התשס״ה–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_אנשי_צבא_דרום_לבנון_ומשפחותיהם",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-12-15/31213",
                "OpenLawBookNameInNamesList": "חוק אנשי צבא דרום לבנון ומשפחותיהם",
                "OpenLawBookInLawHeader": "חוק אנשי צבא דרום לבנון ומשפחותיהם, התשס״ה–2004",
                "WikiHref": "חוק_אנשי_צבא_דרום_לבנון_ומשפחותיהם"
            }
        },
        {
            "Id": "31218",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 95), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_95_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31218",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-04/31218",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31222",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להסדרת תוצרת אורגנית, התשס\"ה-2005",
            "NormalizeName": "חוק_להסדרת_תוצרת_אורגנית_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31222",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-09/31222",
            "HalahotName": {
                "Name": "חוק הסדרת תוצרת אורגנית, התשס\"ה-2005",
                "Score": "0.0277777777777778"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק להסדרת תוצרת אורגנית, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_להסדרת_תוצרת_אורגנית",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-06-09/31222",
                "OpenLawBookNameInNamesList": "חוק להסדרת תוצרת אורגנית",
                "OpenLawBookInLawHeader": "חוק להסדרת תוצרת אורגנית, התשס״ה–2005",
                "WikiHref": "חוק_להסדרת_תוצרת_אורגנית"
            }
        },
        {
            "Id": "31225",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 91), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_91_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31225",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/31225",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31251",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בריאות הציבור (מזון) (מס' 3), התשס\"ה-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_בריאות_הציבור_מזון_מס_3_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31251",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-22/31251",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31252",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות), התשס\"ה-2005",
            "NormalizeName": "חוק_משק_הדלק_איסור_מכירת_דלק_לתחנות_תדלוק_מסוימות_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31252",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-06/31252",
            "HalahotName": {
                "Name": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות), התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות), התשס\"ה-2005 - חוק",
                "Score": "0.131147540983607"
            },
            "KahamName": {
                "Name": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסויימות), התשס'ה - 2005",
                "Score": "0.0161290322580645"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות), תשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_משק_הדלק_(איסור_מכירת_דלק_לתחנות_תדלוק_מסוימות)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-01-06/31252",
                "OpenLawBookNameInNamesList": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות)",
                "OpenLawBookInLawHeader": "חוק משק הדלק (איסור מכירת דלק לתחנות תדלוק מסוימות), תשס״ה–2005",
                "WikiHref": "חוק_משק_הדלק_איסור_מכירת_דלק_לתחנות_תדלוק_מסוימות"
            }
        },
        {
            "Id": "31254",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק זכויות החולה (תיקון מס' 2), התשס\"ה-2004",
            "NormalizeName": "חוק_זכויות_החולה_תיקון_מס_2_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31254",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-29/31254",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31255",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "סדר הדין הפלילי (תיקון - ערכאת ערעור), התשס\"ד-2004",
            "NormalizeName": "סדר_הדין_הפלילי_תיקון_ערכאת_ערעור_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31255",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/31255",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31321",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הבנקאות (רישוי) (תיקון מס' 13), התשס\"ד-2004",
            "NormalizeName": "חוק_הבנקאות_רישוי_תיקון_מס_13_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31321",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/31321",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31336",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 63 והוראת שעה), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_63_והוראת_שעה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31336",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/31336",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "31692",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק יום חינוך ארוך ולימודי העשרה (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_יום_חינוך_ארוך_ולימודי_העשרה_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=31692",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-09-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-09-06/31692",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "34692",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 61), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_61_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=34692",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-20",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-20/34692",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "37656",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הנהיגה הספורטיבית, התשס\"ו-2005",
            "NormalizeName": "חוק_הנהיגה_הספורטיבית_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37656",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-29/37656",
            "HalahotName": {
                "Name": "חוק נהיגה ספורטיבית, התשס\"ו-2005",
                "Score": "0.0606060606060606"
            },
            "TnufaName": {
                "Name": "נהיגה ספורטיבית, התשס\"ו-2005 - חוק",
                "Score": "0.303030303030303"
            },
            "KahamName": {
                "Name": "חוק הנהיגה הספורטיבית תשס\"ו-2005",
                "Score": "0.0303030303030303"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק הנהיגה הספורטיבית, התשס״ו–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הנהיגה_הספורטיבית",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-12-29/37656",
                "OpenLawBookNameInNamesList": "חוק הנהיגה הספורטיבית",
                "OpenLawBookInLawHeader": "חוק הנהיגה הספורטיבית, התשס״ו–2005",
                "WikiHref": "חוק_הנהיגה_הספורטיבית"
            }
        },
        {
            "Id": "37658",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 14), התשס\"ד-2004",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_14_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37658",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-19/37658",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "37668",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המים (תיקון מס' 19), התשס\"ד-2004",
            "NormalizeName": "חוק_המים_תיקון_מס_19_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37668",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-04/37668",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "37669",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 62), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_62_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37669",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/37669",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "37671",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משק הגז הטבעי (תיקון), התשס\"ג-2003",
            "NormalizeName": "חוק_משק_הגז_הטבעי_תיקון_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37671",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/37671",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "37672",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 13), התשס\"ד-2004",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_13_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=37672",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/37672",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67525",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (שירות מילואים) (הוראת שעה), התשס\"ג-2003",
            "NormalizeName": "חוק_שירות_ביטחון_שירות_מילואים_הוראת_שעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67525",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-03-31/67525",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67526",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (הגבלות קריאה לשירות מילואים של קצין - הוראת שעה) (תיקון), התשס\"ג-2002",
            "NormalizeName": "חוק_שירות_ביטחון_הגבלות_קריאה_לשירות_מילואים_של_קצין_הוראת_שעה_תיקון_התשס_ג_2002",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67526",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-03-31/67526",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67527",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (הוראת שעה) (תיקון מס' 6), התשס\"ג-2003",
            "NormalizeName": "חוק_שירות_ביטחון_הוראת_שעה_תיקון_מס_6_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67527",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-03-31/67527",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67528",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 43), התשס\"ד-2003",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_43_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67528",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-12/67528",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67529",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (תיקון מס' 13), התשס\"ד-2004",
            "NormalizeName": "חוק_שירות_ביטחון_תיקון_מס_13_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67529",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-09/67529",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67538",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חסינות חברי הכנסת, זכויותיהם וחובותיהם (תיקון מס' 30), התשס\"ג-2003",
            "NormalizeName": "חוק_חסינות_חברי_הכנסת_זכויותיהם_וחובותיהם_תיקון_מס_30_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67538",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/67538",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "67540",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משכן הכנסת, רחבתו ומשמר הכנסת, התשכ\"ח-1968",
            "NormalizeName": "חוק_משכן_הכנסת_רחבתו_ומשמר_הכנסת_התשכ_ח_1968",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67540",
            "RecentOfficialNames": [
                "חוק משכן הכנסת ורחבתו, התשכ\"ח-1968"
            ],
            "PublicationDate": "2004-06-16",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-16/67540",
            "HalahotName": {
                "Name": "חוק משכן הכנסת, רחבתו ומשמר הכנסת, התשכ\"ח-1968",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": {
                "Name": "חוק מישכן הכנסת רחבתו ומשמר הכנסת , התשכ'ח - 1968",
                "Score": "0.0222222222222222"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק משכן הכנסת, רחבתו ומשמר הכנסת, תשכ״ח–1968",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_משכן_הכנסת,_רחבתו_ומשמר_הכנסת",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-06-16/67540",
                "OpenLawBookNameInNamesList": "חוק משכן הכנסת, רחבתו ומשמר הכנסת",
                "OpenLawBookInLawHeader": "חוק משכן הכנסת, רחבתו ומשמר הכנסת, תשכ״ח–1968",
                "WikiHref": "חוק_משכן_הכנסת_רחבתו_ומשמר_הכנסת"
            }
        },
        {
            "Id": "67544",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שידורי ערוץ הכנסת, התשס\"ד-2003",
            "NormalizeName": "חוק_שידורי_ערוץ_הכנסת_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=67544",
            "RecentOfficialNames": [
                "חוק שידורי טלוויזיה מהכנסת, התשס\"ד-2003"
            ],
            "PublicationDate": "2003-12-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-12-29/67544",
            "HalahotName": {
                "Name": "חוק שידורי ערוץ הכנסת, התשס\"ד-2003",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "שידורי ערוץ הכנסת, התשס\"ד-2003 - חוק",
                "Score": "0.242424242424242"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק שידורי ערוץ הכנסת, התשס״ד–2003",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_שידורי_ערוץ_הכנסת",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2003-12-29/67544",
                "OpenLawBookNameInNamesList": "חוק שידורי ערוץ הכנסת",
                "OpenLawBookInLawHeader": "חוק שידורי ערוץ הכנסת, התשס״ד–2003",
                "WikiHref": "חוק_שידורי_ערוץ_הכנסת"
            }
        },
        {
            "Id": "74943",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המרכז לגביית קנסות, אגרות והוצאות (תיקון מס' 2), התשס\"ג-2003",
            "NormalizeName": "חוק_המרכז_לגביית_קנסות_אגרות_והוצאות_תיקון_מס_2_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74943",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-19",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-19/74943",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "74949",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הירושה (תיקון מס' 12), התשס\"ה-2005",
            "NormalizeName": "חוק_הירושה_תיקון_מס_12_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74949",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/74949",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "74963",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חילוט רווחים מפרסומים שעניינם עבירות, התשס\"ה-2005",
            "NormalizeName": "חוק_חילוט_רווחים_מפרסומים_שעניינם_עבירות_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74963",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/74963",
            "HalahotName": {
                "Name": "חוק חילוט רווחים מפרסומים שעניינם עבירות, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק חילוט רווחים מפרסומים שענינם עבירות, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_חילוט_רווחים_מפרסומים_שענינם_עבירות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-04-03/74963",
                "OpenLawBookNameInNamesList": "חוק חילוט רווחים מפרסומים שענינם עבירות",
                "OpenLawBookInLawHeader": "חוק חילוט רווחים מפרסומים שענינם עבירות, התשס״ה–2005",
                "WikiHref": "חוק_חילוט_רווחים_מפרסומים_שענינם_עבירות"
            }
        },
        {
            "Id": "74965",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגבלת שימוש במקום לשם מניעת ביצוע עבירות, התשס\"ה-2005",
            "NormalizeName": "חוק_הגבלת_שימוש_במקום_לשם_מניעת_ביצוע_עבירות_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74965",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-11/74965",
            "HalahotName": {
                "Name": "חוק הגבלת שימוש במקום לשם מניעת ביצוע עבירות, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הגבלת שימוש במקום לשם מניעת ביצוע עבירות, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הגבלת_שימוש_במקום_לשם_מניעת_ביצוע_עבירות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-04-11/74965",
                "OpenLawBookNameInNamesList": "חוק הגבלת שימוש במקום לשם מניעת ביצוע עבירות",
                "OpenLawBookInLawHeader": "חוק הגבלת שימוש במקום לשם מניעת ביצוע עבירות, התשס״ה–2005",
                "WikiHref": "חוק_הגבלת_שימוש_במקום_לשם_מניעת_ביצוע_עבירות"
            }
        },
        {
            "Id": "74969",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העמותות (תיקון מס' 5), התשס\"ה-2005",
            "NormalizeName": "חוק_העמותות_תיקון_מס_5_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74969",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-03/74969",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "74972",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק תובענות ייצוגיות, התשס\"ו-2006",
            "NormalizeName": "חוק_תובענות_ייצוגיות_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74972",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-03-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-03-12/74972",
            "HalahotName": {
                "Name": "חוק תובענות ייצוגיות, התשס\"ו-2006",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק תובענות ייצוגיות, התשס״ו–2006",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_תובענות_ייצוגיות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2006-03-12/74972",
                "OpenLawBookNameInNamesList": "חוק תובענות ייצוגיות",
                "OpenLawBookInLawHeader": "חוק תובענות ייצוגיות, התשס״ו–2006",
                "WikiHref": "חוק_תובענות_ייצוגיות"
            }
        },
        {
            "Id": "74997",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 84), התשס\"ה-2005",
            "NormalizeName": "חוק_העונשין_תיקון_מס_84_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=74997",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-26/74997",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75058",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסדרת העיסוק בייצוג על-ידי יועצי מס, התשס\"ה-2005",
            "NormalizeName": "חוק_הסדרת_העיסוק_בייצוג_על_ידי_יועצי_מס_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75058",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-27",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-27/75058",
            "HalahotName": {
                "Name": "חוק הסדרת העיסוק בייצוג על ידי יועצי מס, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "הסדרת העיסוק בייצוג על ידי יועצי מס, התשס\"ה-2005 - חוק",
                "Score": "0.156862745098039"
            },
            "KahamName": {
                "Name": "חוק הסדרת העיסוק בייצוג על ידי יועצי מס, תשס\"ה- 2005",
                "Score": "0.0196078431372549"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק הסדרת העיסוק בייצוג על ידי יועצי מס, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הסדרת_העיסוק_בייצוג_על_ידי_יועצי_מס",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-01-27/75058",
                "OpenLawBookNameInNamesList": "חוק הסדרת העיסוק בייצוג על ידי יועצי מס",
                "OpenLawBookInLawHeader": "חוק הסדרת העיסוק בייצוג על ידי יועצי מס, התשס״ה–2005",
                "WikiHref": "חוק_הסדרת_העיסוק_בייצוג_על_ידי_יועצי_מס"
            }
        },
        {
            "Id": "75059",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק איסור מימון טרור, התשס\"ה-2005",
            "NormalizeName": "חוק_איסור_מימון_טרור_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75059",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-10/75059",
            "HalahotName": {
                "Name": "חוק איסור מימון טרור, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "איסור מימון טרור, התשס\"ה-2005 - חוק",
                "Score": "0.25"
            },
            "KahamName": {
                "Name": "חוק איסור מימון טרור, התשס'ה - 2005",
                "Score": "0"
            },
            "OpenLawBook": ""
        },
        {
            "Id": "75060",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני הראיות (הגנת ילדים) (תיקון מס' 11), התשס\"ה-2004",
            "NormalizeName": "חוק_לתיקון_דיני_הראיות_הגנת_ילדים_תיקון_מס_11_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75060",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-30/75060",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75082",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק יסודות התקציב (תיקון מס' 32), התשס\"ה-2005",
            "NormalizeName": "חוק_יסודות_התקציב_תיקון_מס_32_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75082",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/75082",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75098",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מס הכנסה (מכירת נייר ערך או יחידה בקרן נאמנות בשנת המס 2003) (הוראת שעה), התשס\"ה-2004",
            "NormalizeName": "חוק_מס_הכנסה_מכירת_נייר_ערך_או_יחידה_בקרן_נאמנות_בשנת_המס_2003_הוראת_שעה_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75098",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-17/75098",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75101",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ניירות ערך (תיקון מס' 25), התשס\"ה-2004",
            "NormalizeName": "חוק_ניירות_ערך_תיקון_מס_25_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75101",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-17/75101",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75103",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להסדרת סמכות לכבילת עצור או אסיר במקום ציבורי (תיקוני חקיקה), התשס\"ד-2003",
            "NormalizeName": "חוק_להסדרת_סמכות_לכבילת_עצור_או_אסיר_במקום_ציבורי_תיקוני_חקיקה_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75103",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-12-16",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-12-16/75103",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75106",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המפלגות (תיקון מס' 13), התשס\"ד-2004",
            "NormalizeName": "חוק_המפלגות_תיקון_מס_13_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75106",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-01-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-01-26/75106",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75107",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 59), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_59_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75107",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-01/75107",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75109",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק נכי רדיפות הנאצים (תיקון מס' 14), התשס\"ד-2004",
            "NormalizeName": "חוק_נכי_רדיפות_הנאצים_תיקון_מס_14_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75109",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-17/75109",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75110",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת הבנקאות (מס' 21), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_הבנקאות_מס_21_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75110",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/75110",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75111",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני הרכישה לצורכי ציבור (תיקון מס' 9), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_דיני_הרכישה_לצורכי_ציבור_תיקון_מס_9_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75111",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75111",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75113",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לעידוד השקעות הון (תיקון מס' 58), התשס\"ד-2003",
            "NormalizeName": "חוק_לעידוד_השקעות_הון_תיקון_מס_58_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75113",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-01-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-01-05/75113",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75114",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסדרים במשק המדינה (תיקוני חקיקה) (תיקון מס' 10), התשס\"ד-2004",
            "NormalizeName": "חוק_הסדרים_במשק_המדינה_תיקוני_חקיקה_תיקון_מס_10_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75114",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/75114",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75115",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת מס הכנסה (תיקון מס' 137 והוראת שעה), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_מס_הכנסה_תיקון_מס_137_והוראת_שעה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75115",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/75115",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75116",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת מס הכנסה (מס' 139), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_מס_הכנסה_מס_139_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75116",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-17/75116",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75117",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק יסודות התקציב (תיקון מס' 31 והוראת שעה), התשס\"ד-2004",
            "NormalizeName": "חוק_יסודות_התקציב_תיקון_מס_31_והוראת_שעה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75117",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-16",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-16/75117",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75118",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הפיקוח על עסקי ביטוח (תיקון מס' 12) (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_הפיקוח_על_עסקי_ביטוח_תיקון_מס_12_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75118",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/75118",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75119",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "תקציב המדינה לשנת הכספים 2004",
            "NormalizeName": "תקציב_המדינה_לשנת_הכספים_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75119",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-03/75119",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75120",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ניירות ערך (תיקון מס' 24), התשס\"ד-2004",
            "NormalizeName": "חוק_ניירות_ערך_תיקון_מס_24_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75120",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/75120",
            "HalahotName": {
                "Name": "חוק ניירות ערך (תיקון מס' 24), התשס\"ד-2004",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75121",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מימון מפלגות (תיקון מס' 26), התשס\"ד-2004",
            "NormalizeName": "חוק_מימון_מפלגות_תיקון_מס_26_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75121",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-24",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-24/75121",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75137",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הירושה (תיקון מס' 11), התשס\"ד-2004",
            "NormalizeName": "חוק_הירושה_תיקון_מס_11_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75137",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-11/75137",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75138",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק נושאי משרה שיפוטית (שיקול דעת של חברי ועדה לבחירת נושאי משרה שיפוטית) (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_נושאי_משרה_שיפוטית_שיקול_דעת_של_חברי_ועדה_לבחירת_נושאי_משרה_שיפוטית_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75138",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-21/75138",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75139",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בתי דין רבניים (קיום פסקי דין של גירושין) (תיקון מס' 5), התשס\"ד-2004",
            "NormalizeName": "חוק_בתי_דין_רבניים_קיום_פסקי_דין_של_גירושין_תיקון_מס_5_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75139",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/75139",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75140",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 78), התשס\"ד-2003",
            "NormalizeName": "חוק_העונשין_תיקון_מס_78_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75140",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/75140",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75141",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכשרות המשפטית והאפוטרופסות (תיקון מס' 12), התשס\"ד-2004",
            "NormalizeName": "חוק_הכשרות_המשפטית_והאפוטרופסות_תיקון_מס_12_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75141",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/75141",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75142",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ההתיישנות (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_ההתיישנות_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75142",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/75142",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75143",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק רשות השידור (תיקון מס' 15), התשס\"ד-2003",
            "NormalizeName": "חוק_רשות_השידור_תיקון_מס_15_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75143",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-01-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-01-05/75143",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75146",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 42), התשס\"ד-2004",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_42_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75146",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/75146",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75158",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת המבחן (מס' 4), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_המבחן_מס_4_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75158",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/75158",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75159",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת המסים (גבייה) (מס' 5), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_המסים_גבייה_מס_5_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75159",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/75159",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75160",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מאבק בארגוני פשיעה, התשס\"ג-2003",
            "NormalizeName": "חוק_מאבק_בארגוני_פשיעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75160",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-06-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-06-17/75160",
            "HalahotName": {
                "Name": "חוק מאבק בארגוני פשיעה, התשס\"ג-2003",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "מאבק בארגוני פשיעה, התשס\"ג-2003 - חוק",
                "Score": "0.235294117647059"
            },
            "KahamName": {
                "Name": "חוק מאבק בארגוני פשיעה, התשס'ג - 2003",
                "Score": "0"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק מאבק בארגוני פשיעה, התשס״ג–2003",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_מאבק_בארגוני_פשיעה",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2003-06-17/75160",
                "OpenLawBookNameInNamesList": "חוק מאבק בארגוני פשיעה",
                "OpenLawBookInLawHeader": "חוק מאבק בארגוני פשיעה, התשס״ג–2003",
                "WikiHref": "חוק_מאבק_בארגוני_פשיעה"
            }
        },
        {
            "Id": "75184",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שחרור על-תנאי ממאסר (תיקון מס' 3), התשס\"ג-2003",
            "NormalizeName": "חוק_שחרור_על_תנאי_ממאסר_תיקון_מס_3_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75184",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-06-25",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-06-25/75184",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75185",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני העבירות המינהליות (תיקון והוראת שעה), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_דיני_העבירות_המינהליות_תיקון_והוראת_שעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75185",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-06-25",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-06-25/75185",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75187",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בתי המשפט (תיקון מס' 35), התשס\"ג-2003",
            "NormalizeName": "חוק_בתי_המשפט_תיקון_מס_35_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75187",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-07-16",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-07-16/75187",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75188",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק האזרחות (תיקון מס' 8), התשס\"ד-2004",
            "NormalizeName": "חוק_האזרחות_תיקון_מס_8_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75188",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/75188",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75194",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 25), התשס\"ד-2004",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_25_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75194",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/75194",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75198",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חניה לנכים (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_חניה_לנכים_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75198",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-30/75198",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75200",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לשכת עורכי הדין (תיקון מס' 29), התשס\"ג-2003",
            "NormalizeName": "חוק_לשכת_עורכי_הדין_תיקון_מס_29_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75200",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-05-27",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-05-27/75200",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75201",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק-יסוד: משק המדינה (תיקון מס' 6)",
            "NormalizeName": "חוק_יסוד_משק_המדינה_תיקון_מס_6",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75201",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-06-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-06-01/75201",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": {
                "Name": "חוק העתיקת מס' 51 לשנת 1966(כפי שתוקן בצו איו'ש מס' 1166",
                "Score": "0.666666666666667"
            },
            "OpenLawBook": ""
        },
        {
            "Id": "75203",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת ביטוח רכב מנועי (מס' 15), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_פקודת_ביטוח_רכב_מנועי_מס_15_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75203",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75203",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75204",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת סימני מסחר (מס' 5), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_פקודת_סימני_מסחר_מס_5_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75204",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75204",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75205",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק זכויות מבצעים ומשדרים (תיקון מס' 5), התשס\"ג-2003",
            "NormalizeName": "חוק_זכויות_מבצעים_ומשדרים_תיקון_מס_5_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75205",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75205",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75206",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חובת המכרזים (תיקון מס' 16), התשס\"ג-2003",
            "NormalizeName": "חוק_חובת_המכרזים_תיקון_מס_16_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75206",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75206",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75207",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 26 והוראת שעה) (תיקון), התשס\"ג-2003",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_26_והוראת_שעה_תיקון_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75207",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75207",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75208",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 42), התשס\"ד-2003",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_42_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75208",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-03/75208",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75209",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בתי המשפט (תיקון מס' 36), התשס\"ד-2003",
            "NormalizeName": "חוק_בתי_המשפט_תיקון_מס_36_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75209",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-03/75209",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75210",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הדיינים (תיקון מס' 20), התשס\"ד-2004",
            "NormalizeName": "חוק_הדיינים_תיקון_מס_20_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75210",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-09/75210",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75212",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 33) (הוראת שעה) (תיקון מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_33_הוראת_שעה_תיקון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75212",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-04/75212",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75215",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לסילוק ולמיחזור צמיגים, התשס\"ז-2007",
            "NormalizeName": "חוק_לסילוק_ולמיחזור_צמיגים_התשס_ז_2007",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75215",
            "RecentOfficialNames": [],
            "PublicationDate": "2007-02-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2007-02-01/75215",
            "HalahotName": {
                "Name": "חוק סילוק ומיחזור צמיגים, התשס\"ז-2007",
                "Score": "0.0526315789473684"
            },
            "TnufaName": "",
            "KahamName": {
                "Name": "חוק לסילוק ולמיחזור צמיגים, התשס'ז - 2007",
                "Score": "0"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק לסילוק ולמיחזור צמיגים, התשס״ז–2007",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_לסילוק_ולמיחזור_צמיגים",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2007-02-01/75215",
                "OpenLawBookNameInNamesList": "חוק לסילוק ולמיחזור צמיגים",
                "OpenLawBookInLawHeader": "חוק לסילוק ולמיחזור צמיגים, התשס״ז–2007",
                "WikiHref": "חוק_לסילוק_ולמיחזור_צמיגים"
            }
        },
        {
            "Id": "75242",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 98), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_98_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75242",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-24",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-24/75242",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75262",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מניעת זיהום הים ממקורות יבשתיים (תיקון מס' 2), התשס\"ה-2005",
            "NormalizeName": "חוק_מניעת_זיהום_הים_ממקורות_יבשתיים_תיקון_מס_2_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75262",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-22/75262",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75263",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להארכת תקפן של תקנות שעת חירום (יהודה והשומרון וחבל עזה- שיפוט בעבירות ועזרה משפטית ), התשס\"ג-2003",
            "NormalizeName": "חוק_להארכת_תקפן_של_תקנות_שעת_חירום_יהודה_והשומרון_וחבל_עזה_שיפוט_בעבירות_ועזרה_משפטית_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75263",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75263",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75281",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 93), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_93_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75281",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/75281",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75283",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק קריאת שמות של מקומות ציבוריים ושינוים (תיקוני חקיקה), התשס\"ד-2003",
            "NormalizeName": "חוק_קריאת_שמות_של_מקומות_ציבוריים_ושינוים_תיקוני_חקיקה_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75283",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-23",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-23/75283",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75284",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הצהרת אמונים של חברי מועצת רשות מקומית (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_הצהרת_אמונים_של_חברי_מועצת_רשות_מקומית_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75284",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-20",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-20/75284",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75285",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ראש הרשות המקומית (הצהרת הון) (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_ראש_הרשות_המקומית_הצהרת_הון_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75285",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/75285",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75286",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת המועצות המקומיות (מס' 37), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_המועצות_המקומיות_מס_37_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75286",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/75286",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75287",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת העיריות (מס' 94), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_העיריות_מס_94_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75287",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-12/75287",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75290",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשויות המקומיות (בחירות ברשויות מקומיות מסוימות) (הוראת שעה), התשס\"ג-2003",
            "NormalizeName": "חוק_הרשויות_המקומיות_בחירות_ברשויות_מקומיות_מסוימות_הוראת_שעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75290",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-03-27",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-03-27/75290",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75291",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכניסה לישראל (תיקון מס' 11), התשס\"ג-2003",
            "NormalizeName": "חוק_הכניסה_לישראל_תיקון_מס_11_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75291",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75291",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75292",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק האזרחות והכניסה לישראל (הוראת שעה), התשס\"ג-2003",
            "NormalizeName": "חוק_האזרחות_והכניסה_לישראל_הוראת_שעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75292",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75292",
            "HalahotName": {
                "Name": "חוק אזרחות וכניסה לישראל (הוראת שעה), התשס\"ג-2003",
                "Score": "0.0416666666666667"
            },
            "TnufaName": {
                "Name": "אזרחות וכניסה לישראל (הוראת שעה), התשס\"ג-2003 - חוק",
                "Score": "0.208333333333333"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק האזרחות והכניסה לישראל (הוראת שעה), התשס״ג–2003",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_האזרחות_והכניסה_לישראל_(הוראת_שעה)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2003-08-06/75292",
                "OpenLawBookNameInNamesList": "חוק האזרחות והכניסה לישראל (הוראת שעה)",
                "OpenLawBookInLawHeader": "חוק האזרחות והכניסה לישראל (הוראת שעה), התשס״ג–2003",
                "WikiHref": "חוק_האזרחות_והכניסה_לישראל_הוראת_שעה"
            }
        },
        {
            "Id": "75293",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני בחירות לרשויות המקומיות, התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_דיני_בחירות_לרשויות_המקומיות_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75293",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/75293",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75294",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בתי הסוהר (מס' 28), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_בתי_הסוהר_מס_28_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75294",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/75294",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75296",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התכנון והבנייה (תיקון מס' 68), התשס\"ד-2004",
            "NormalizeName": "חוק_התכנון_והבנייה_תיקון_מס_68_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75296",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-10/75296",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75304",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת הבטיחות בעבודה (מס' 6), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_הבטיחות_בעבודה_מס_6_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75304",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-14",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-14/75304",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75305",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון דיני הרשויות המקומיות (הוראת שעה), התשס\"ה-2004",
            "NormalizeName": "חוק_לתיקון_דיני_הרשויות_המקומיות_הוראת_שעה_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75305",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-10-28",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-10-28/75305",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75314",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 40), התשס\"ז-2007",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_40_התשס_ז_2007",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75314",
            "RecentOfficialNames": [],
            "PublicationDate": "2007-08-07",
            "Uri": "/akn/il/act/PrimaryLegislation/2007-08-07/75314",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75316",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 32), התשס\"ז-2006",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_32_התשס_ז_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75316",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-12-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-12-21/75316",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75325",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חיילים משוחררים (החזרה לעבודה) (תיקון מס' 13), התשס\"ג-2003",
            "NormalizeName": "חוק_חיילים_משוחררים_החזרה_לעבודה_תיקון_מס_13_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75325",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/75325",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75326",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הנוער (טיפול והשגחה) (תיקון מס' 16), התשס\"ד-2004",
            "NormalizeName": "חוק_הנוער_טיפול_והשגחה_תיקון_מס_16_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75326",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-11/75326",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75328",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 24), התשס\"ד-2004",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_24_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75328",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-31/75328",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75329",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 70), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_70_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75329",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-30/75329",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75330",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הבטחת הכנסה (תיקון מס' 23), התשס\"ד-2004",
            "NormalizeName": "חוק_הבטחת_הכנסה_תיקון_מס_23_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75330",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/75330",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75332",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הסדרת מקומות רחצה (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_הסדרת_מקומות_רחצה_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75332",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/75332",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75333",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חיילים משוחררים (החזרה לעבודה) (תיקון מס' 14), התשס\"ד-2004",
            "NormalizeName": "חוק_חיילים_משוחררים_החזרה_לעבודה_תיקון_מס_14_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75333",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/75333",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75339",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק אימוץ ילדים (תיקון מס' 6), התשס\"ד-2004",
            "NormalizeName": "חוק_אימוץ_ילדים_תיקון_מס_6_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75339",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-22/75339",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75341",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בריאות הציבור (מזון) (מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_בריאות_הציבור_מזון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75341",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-01/75341",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75344",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנה על עובדים בשעת חירום (הוראת שעה), התשס\"ג-2003",
            "NormalizeName": "חוק_הגנה_על_עובדים_בשעת_חירום_הוראת_שעה_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75344",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-03-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-03-31/75344",
            "HalahotName": {
                "Name": "חוק הגנה על עובדים בשעת חירום (הוראת שעה), התשס\"ג-2003",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75348",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לימוד חובה (תיקון מס' 26), התשס\"ד-2004",
            "NormalizeName": "חוק_לימוד_חובה_תיקון_מס_26_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75348",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-11/75348",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75349",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להנצחת זכרו של מנחם בגין (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_להנצחת_זכרו_של_מנחם_בגין_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75349",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/75349",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75350",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המרכז להנצחת זכרו של יצחק רבין (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_המרכז_להנצחת_זכרו_של_יצחק_רבין_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75350",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/75350",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75352",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הספורט (תיקון מס' 5), התשס\"ד-2003",
            "NormalizeName": "חוק_הספורט_תיקון_מס_5_התשס_ד_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75352",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-11-27",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-27/75352",
            "HalahotName": {
                "Name": "חוק סימני מסחר (מס' 5), התשס\"ג-2003 לתיקון הפקודת",
                "Score": "0.555555555555556"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75353",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק למניעת הטרדה מינית (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_למניעת_הטרדה_מינית_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75353",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-09/75353",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75354",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 26), התשס\"ד-2004",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_26_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75354",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-05-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-05-17/75354",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75356",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשות הלאומית למלחמה בסמים ובשימוש לרעה באלכוהול, התשמ\"ח-1988",
            "NormalizeName": "חוק_הרשות_הלאומית_למלחמה_בסמים_ובשימוש_לרעה_באלכוהול_התשמ_ח_1988",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75356",
            "RecentOfficialNames": [
                "חוק הרשות למלחמה בסמים, התשמ\"ח-1988",
                "חוק הרשות הלאומית למלחמה בסמים, התשמ\"ח-1998"
            ],
            "PublicationDate": "2003-11-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-11-12/75356",
            "HalahotName": {
                "Name": "חוק רשות לאומית למלחמה בסמים ובשימוש לרעה באלכוהול, התשמ\"ח-1988",
                "Score": "0.03125"
            },
            "TnufaName": {
                "Name": "רשות לאומית למלחמה בסמים ובשימוש לרעה באלכוהול, התשמ\"ח-1988 - חוק",
                "Score": "0.15625"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הרשות הלאומית למלחמה בסמים ובשימוש לרעה באלכוהול, התשמ״ח–1988",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הרשות_הלאומית_למלחמה_בסמים_ובשימוש_לרעה_באלכוהול",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2003-11-12/75356",
                "OpenLawBookNameInNamesList": "חוק הרשות הלאומית למלחמה בסמים ובשימוש לרעה באלכוהול",
                "OpenLawBookInLawHeader": "חוק הרשות הלאומית למלחמה בסמים ובשימוש לרעה באלכוהול, התשמ״ח–1988",
                "WikiHref": "חוק_הרשות_הלאומית_למלחמה_בסמים_ובשימוש_לרעה_באלכוהול"
            }
        },
        {
            "Id": "75357",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משפחות חיילים שנספו במערכה (תגמולים ושיקום) (תיקון מס' 25), התשס\"ד-2004",
            "NormalizeName": "חוק_משפחות_חיילים_שנספו_במערכה_תגמולים_ושיקום_תיקון_מס_25_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75357",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-15/75357",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75358",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 69), התשס\"ד-2004",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_69_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75358",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/75358",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75359",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק משפחות חיילים שנספו במערכה (תגמולים ושיקום) (תיקון מס' 26), התשס\"ד-2004",
            "NormalizeName": "חוק_משפחות_חיילים_שנספו_במערכה_תגמולים_ושיקום_תיקון_מס_26_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75359",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-15/75359",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75360",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הנכים (תגמולים ושיקום) (תיקון מס' 23), התשס\"ד-2004",
            "NormalizeName": "חוק_הנכים_תגמולים_ושיקום_תיקון_מס_23_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75360",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-15/75360",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75361",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק עבודת נשים (תיקון מס' 14) (הוראת שעה) (תיקון מס' 2), התשס\"ד-2004",
            "NormalizeName": "חוק_עבודת_נשים_תיקון_מס_14_הוראת_שעה_תיקון_מס_2_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75361",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-28",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-28/75361",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75362",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העובדים הסוציאליים (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_העובדים_הסוציאליים_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75362",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-30/75362",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "75363",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק אימוץ ילדים (תיקון מס' 5), התשס\"ד-2004",
            "NormalizeName": "חוק_אימוץ_ילדים_תיקון_מס_5_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=75363",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-07-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-07-11/75363",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "76027",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מקרקעי ציבור (סילוק פולשים) (תיקון), התשס\"ה-2005",
            "NormalizeName": "חוק_מקרקעי_ציבור_סילוק_פולשים_תיקון_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=76027",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-26/76027",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "76028",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת הנזיקין (מס' 10), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_הנזיקין_מס_10_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=76028",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-10/76028",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "76098",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מבקר המדינה (תיקון מס' 35), התשס\"ה-2005",
            "NormalizeName": "חוק_מבקר_המדינה_תיקון_מס_35_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=76098",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-04",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-04/76098",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "76267",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ביטוח בריאות ממלכתי (תיקון מס' 32), התשס\"ה-2005",
            "NormalizeName": "חוק_ביטוח_בריאות_ממלכתי_תיקון_מס_32_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=76267",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-14",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-14/76267",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77105",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 88), התשס\"ו-2005",
            "NormalizeName": "חוק_העונשין_תיקון_מס_88_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77105",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-11-28",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-11-28/77105",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77287",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 16), התשס\"ה-2005",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_16_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77287",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/77287",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77290",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הבטחת הכנסה (תיקון מס' 26), התשס\"ה-2005",
            "NormalizeName": "חוק_הבטחת_הכנסה_תיקון_מס_26_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77290",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-09-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-09-11/77290",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77363",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק להנצחת זכרו של רחבעם זאבי, התשס\"ה-2005",
            "NormalizeName": "חוק_להנצחת_זכרו_של_רחבעם_זאבי_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77363",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-25",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-25/77363",
            "HalahotName": {
                "Name": "חוק הנצחת זכרו של רחבעם זאבי, התשס\"ה-2005",
                "Score": "0.024390243902439"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק להנצחת זכרו של רחבעם זאבי, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_להנצחת_זכרו_של_רחבעם_זאבי",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-07-25/77363",
                "OpenLawBookNameInNamesList": "חוק להנצחת זכרו של רחבעם זאבי",
                "OpenLawBookInLawHeader": "חוק להנצחת זכרו של רחבעם זאבי, התשס״ה–2005",
                "WikiHref": "חוק_להנצחת_זכרו_של_רחבעם_זאבי"
            }
        },
        {
            "Id": "77518",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק החברות (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_החברות_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77518",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-03-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-03-17/77518",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77708",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סדר הדין הפלילי (תיקון מס' 43), התשס\"ה-2005",
            "NormalizeName": "חוק_סדר_הדין_הפלילי_תיקון_מס_43_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77708",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-17",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-17/77708",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77724",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התקנים (תיקון מס' 7), התשס\"ה-2005",
            "NormalizeName": "חוק_התקנים_תיקון_מס_7_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77724",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/77724",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77726",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק האחריות לפיצוי נזקי זיהום בשמן, התשס\"ד-2004",
            "NormalizeName": "חוק_האחריות_לפיצוי_נזקי_זיהום_בשמן_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77726",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-02-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-02-05/77726",
            "HalahotName": {
                "Name": "חוק אחריות לפיצוי נזקי זיהום בשמן, התשס\"ד-2004",
                "Score": "0.0217391304347826"
            },
            "TnufaName": {
                "Name": "אחריות לפיצוי נזקי זיהום בשמן, התשס\"ד-2004 - חוק",
                "Score": "0.195652173913043"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק האחריות לפיצוי נזקי זיהום בשמן, התשס״ד–2004",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_האחריות_לפיצוי_נזקי_זיהום_בשמן",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2004-02-05/77726",
                "OpenLawBookNameInNamesList": "חוק האחריות לפיצוי נזקי זיהום בשמן",
                "OpenLawBookInLawHeader": "חוק האחריות לפיצוי נזקי זיהום בשמן, התשס״ד–2004",
                "WikiHref": "חוק_האחריות_לפיצוי_נזקי_זיהום_בשמן"
            }
        },
        {
            "Id": "77741",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 58), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_58_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77741",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/77741",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77742",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (תיקון מס' 60), התשס\"ד-2004",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_תיקון_מס_60_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77742",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-30/77742",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77758",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המתווכים במקרקעין (תיקון מס' 4), התשס\"ד-2004",
            "NormalizeName": "חוק_המתווכים_במקרקעין_תיקון_מס_4_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77758",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/77758",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77772",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשות השניה לטלוויזיה ורדיו (תיקון מס' 19), התשס\"ג-2003",
            "NormalizeName": "חוק_הרשות_השניה_לטלוויזיה_ורדיו_תיקון_מס_19_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77772",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/77772",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77958",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שיפוט בענייני התרת נישואין (מקרים מיוחדים וסמכות בין-לאומית), התשכ\"ט-1969",
            "NormalizeName": "חוק_שיפוט_בענייני_התרת_נישואין_מקרים_מיוחדים_וסמכות_בין_לאומית_התשכ_ט_1969",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77958",
            "RecentOfficialNames": [
                "חוק שיפוט בענייני התרת נישואין (מקרים מיוחדים), התשכ\"ט-1969"
            ],
            "PublicationDate": "2005-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-10/77958",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק שיפוט בעניני התרת נישואין (מקרים מיוחדים וסמכות בין־לאומית), תשכ״ט–1969",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_שיפוט_בעניני_התרת_נישואין_(מקרים_מיוחדים_וסמכות_בין-לאומית)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-08-10/77958",
                "OpenLawBookNameInNamesList": "חוק שיפוט בעניני התרת נישואין (מקרים מיוחדים וסמכות בין-לאומית)",
                "OpenLawBookInLawHeader": "חוק שיפוט בעניני התרת נישואין (מקרים מיוחדים וסמכות בין־לאומית), תשכ״ט–1969",
                "WikiHref": "חוק_שיפוט_בעניני_התרת_נישואין_מקרים_מיוחדים_וסמכות_בין_לאומית"
            }
        },
        {
            "Id": "77972",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק בתי המשפט (תיקון מס' 42 והוראת שעה), התשס\"ו-2006",
            "NormalizeName": "חוק_בתי_המשפט_תיקון_מס_42_והוראת_שעה_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77972",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-03-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-03-12/77972",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77977",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 74), התשס\"ג-2003",
            "NormalizeName": "חוק_העונשין_תיקון_מס_74_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77977",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-07-16",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-07-16/77977",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77986",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק-יסוד: נשיא המדינה (תיקון מס' 6)",
            "NormalizeName": "חוק_יסוד_נשיא_המדינה_תיקון_מס_6",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77986",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/77986",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "77997",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק-יסוד: נשיא המדינה (תיקון מס' 7)",
            "NormalizeName": "חוק_יסוד_נשיא_המדינה_תיקון_מס_7",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=77997",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/77997",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78019",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק נושאי משרה שיפוטית (מניעה מלשבת בדין) (תיקוני חקיקה), התשס\"ד-2004",
            "NormalizeName": "חוק_נושאי_משרה_שיפוטית_מניעה_מלשבת_בדין_תיקוני_חקיקה_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78019",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-21/78019",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78028",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק החוזים האחידים (תיקון), התשס\"ד-2004",
            "NormalizeName": "חוק_החוזים_האחידים_תיקון_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78028",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-06-09",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-06-09/78028",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78036",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הכשרות המשפטית והאפוטרופסות (תיקון מס' 13), התשס\"ה-2005",
            "NormalizeName": "חוק_הכשרות_המשפטית_והאפוטרופסות_תיקון_מס_13_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78036",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/78036",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78081",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שידורי טלוויזיה (כתוביות ושפת סימנים), התשס\"ה-2005",
            "NormalizeName": "חוק_שידורי_טלוויזיה_כתוביות_ושפת_סימנים_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78081",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-10/78081",
            "HalahotName": {
                "Name": "חוק שידורי טלוויזיה (כתוביות ושפת סימנים), התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "שידורי טלוויזיה (כתוביות ושפת סימנים), התשס\"ה-2005 - חוק",
                "Score": "0.156862745098039"
            },
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק שידורי טלוויזיה (כתוביות ושפת סימנים), התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_שידורי_טלויזיה_(כתוביות_ושפת_סימנים)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-08-10/78081",
                "OpenLawBookNameInNamesList": "חוק שידורי טלויזיה (כתוביות ושפת סימנים)",
                "OpenLawBookInLawHeader": "חוק שידורי טלוויזיה (כתוביות ושפת סימנים), התשס״ה–2005",
                "WikiHref": "חוק_שידורי_טלויזיה_כתוביות_ושפת_סימנים"
            }
        },
        {
            "Id": "78093",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק מבקר המדינה (תיקון מס' 34), התשס\"ג-2003",
            "NormalizeName": "חוק_מבקר_המדינה_תיקון_מס_34_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78093",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/78093",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78100",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק טיפול בחולי נפש (תיקון מס' 5), התשס\"ד-2004",
            "NormalizeName": "חוק_טיפול_בחולי_נפש_תיקון_מס_5_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78100",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-03-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-03-15/78100",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78111",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ביטוח בריאות ממלכתי (תיקון מס' 23), התשס\"ג-2003",
            "NormalizeName": "חוק_ביטוח_בריאות_ממלכתי_תיקון_מס_23_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78111",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-06",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-06/78111",
            "HalahotName": {
                "Name": "חוק ביטוח לאומי (הצמדת גמלאות למדד החל בשנת 2006), התשס\"ג-2003",
                "Score": "0.474576271186441"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78160",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק יישום תכנית ההתנתקות, התשס\"ה-2005",
            "NormalizeName": "חוק_יישום_תכנית_ההתנתקות_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78160",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-02-18",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-02-18/78160",
            "HalahotName": {
                "Name": "חוק יישום תכנית ההתנתקות, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "יישום תכנית ההתנתקות, התשס\"ה-2005 - חוק",
                "Score": "0.222222222222222"
            },
            "KahamName": {
                "Name": "חוק יישום תכנית ההתנתקות, התשס'ה - 2005",
                "Score": "0"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק יישום תכנית ההתנתקות, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_יישום_תכנית_ההתנתקות",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-02-18/78160",
                "OpenLawBookNameInNamesList": "חוק יישום תכנית ההתנתקות",
                "OpenLawBookInLawHeader": "חוק יישום תכנית ההתנתקות, התשס״ה–2005",
                "WikiHref": "חוק_יישום_תכנית_ההתנתקות"
            }
        },
        {
            "Id": "78216",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "תקציב המדינה לשנת הכספים 2005",
            "NormalizeName": "תקציב_המדינה_לשנת_הכספים_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78216",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-29/78216",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78361",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק סמכויות לשם שמירה על ביטחון הציבור, התשס\"ה-2005",
            "NormalizeName": "חוק_סמכויות_לשם_שמירה_על_ביטחון_הציבור_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78361",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-08/78361",
            "HalahotName": {
                "Name": "חוק סמכויות לשם שמירה על ביטחון הציבור, התשס\"ה-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק סמכויות לשם שמירה על ביטחון הציבור, התשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_סמכויות_לשם_שמירה_על_ביטחון_הציבור",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-08-08/78361",
                "OpenLawBookNameInNamesList": "חוק סמכויות לשם שמירה על ביטחון הציבור",
                "OpenLawBookInLawHeader": "חוק סמכויות לשם שמירה על ביטחון הציבור, התשס״ה–2005",
                "WikiHref": "חוק_סמכויות_לשם_שמירה_על_ביטחון_הציבור"
            }
        },
        {
            "Id": "78447",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בתי הסוהר (מס' 24), התשס\"ג-2003",
            "NormalizeName": "חוק_לתיקון_פקודת_בתי_הסוהר_מס_24_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78447",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/78447",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78517",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הרשות הלאומית למורשת יהדות לוב, התשס\"ז-2007",
            "NormalizeName": "חוק_הרשות_הלאומית_למורשת_יהדות_לוב_התשס_ז_2007",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78517",
            "RecentOfficialNames": [],
            "PublicationDate": "2007-02-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2007-02-01/78517",
            "HalahotName": {
                "Name": "חוק רשות לאומית למורשת יהדות לוב, התשס\"ז-2007",
                "Score": "0.0434782608695652"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הרשות הלאומית למורשת יהדות לוב, תשס״ז–2007",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הרשות_הלאומית_למורשת_יהדות_לוב",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2007-02-01/78517",
                "OpenLawBookNameInNamesList": "חוק הרשות הלאומית למורשת יהדות לוב",
                "OpenLawBookInLawHeader": "חוק הרשות הלאומית למורשת יהדות לוב, תשס״ז–2007",
                "WikiHref": "חוק_הרשות_הלאומית_למורשת_יהדות_לוב"
            }
        },
        {
            "Id": "78527",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 74), התשס\"ו-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_74_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78527",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-26/78527",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78572",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בתי הסוהר (מס' 31), התשס\"ו-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_בתי_הסוהר_מס_31_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78572",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-02",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-02/78572",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78573",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הקולנוע (הוראת שעה), התשס\"ה-2004",
            "NormalizeName": "חוק_הקולנוע_הוראת_שעה_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78573",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-11-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-11-29/78573",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "78696",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התאגידים הבטחוניים (הגנה על אינטרסים ביטחוניים), התשס\"ו-2005",
            "NormalizeName": "חוק_התאגידים_הבטחוניים_הגנה_על_אינטרסים_ביטחוניים_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78696",
            "RecentOfficialNames": [
                "חוק התאגידים הבטחוניים (הגנה על אינטרסים ביטחוניים), התשס\"ו-2006"
            ],
            "PublicationDate": "2006-01-02",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-02/78696",
            "HalahotName": {
                "Name": "חוק תאגידים ביטחוניים (הגנה על אינטרסים ביטחוניים), התשס\"ו-2005",
                "Score": "0.0491803278688525"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק התאגידים הביטחוניים (הגנה על אינטרסים ביטחוניים), תשס״ו–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_התאגידים_הביטחוניים_(הגנה_על_אינטרסים_ביטחוניים)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2006-01-02/78696",
                "OpenLawBookNameInNamesList": "חוק התאגידים הביטחוניים (הגנה על אינטרסים ביטחוניים)",
                "OpenLawBookInLawHeader": "חוק התאגידים הביטחוניים (הגנה על אינטרסים ביטחוניים), תשס״ו–2005",
                "WikiHref": "חוק_התאגידים_הביטחוניים_הגנה_על_אינטרסים_ביטחוניים"
            }
        },
        {
            "Id": "78901",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הפיקוח על עסקי ביטוח (תיקון מס' 14), התשס\"ה-2005",
            "NormalizeName": "חוק_הפיקוח_על_עסקי_ביטוח_תיקון_מס_14_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=78901",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-29/78901",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79007",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת סדר הדין הפלילי (מעצר וחיפוש) (תיקון מס' 12) (חיפוש ותפיסת מחשב), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_סדר_הדין_הפלילי_מעצר_וחיפוש_תיקון_מס_12_חיפוש_ותפיסת_מחשב_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79007",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-29",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-29/79007",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79150",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק העונשין (תיקון מס' 89), התשס\"ו-2005",
            "NormalizeName": "חוק_העונשין_תיקון_מס_89_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79150",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-08/79150",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79401",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות נתוני אשראי (תיקון מס' 2), התשס\"ג-2003",
            "NormalizeName": "חוק_שירות_נתוני_אשראי_תיקון_מס_2_התשס_ג_2003",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79401",
            "RecentOfficialNames": [],
            "PublicationDate": "2003-08-05",
            "Uri": "/akn/il/act/PrimaryLegislation/2003-08-05/79401",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79414",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק תאגידי מים וביוב (תיקון מס' 3), התשס\"ד-2004",
            "NormalizeName": "חוק_תאגידי_מים_וביוב_תיקון_מס_3_התשס_ד_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79414",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-08-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-08-11/79414",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79554",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הספנות (כלי שיט זר בשליטה של גורם ישראלי), התשס\"ה-2005",
            "NormalizeName": "חוק_הספנות_כלי_שיט_זר_בשליטה_של_גורם_ישראלי_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79554",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-21",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-21/79554",
            "HalahotName": {
                "Name": "חוק ספנות (כלי שיט זר בשליטה של גורם ישראלי), התשס\"ה-2005",
                "Score": "0.0181818181818182"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק הספנות (כלי שיט זר בשליטה של גורם ישראלי), תשס״ה–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הספנות_(כלי_שיט_זר_בשליטה_של_גורם_ישראלי)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-08-21/79554",
                "OpenLawBookNameInNamesList": "חוק הספנות (כלי שיט זר בשליטה של גורם ישראלי)",
                "OpenLawBookInLawHeader": "חוק הספנות (כלי שיט זר בשליטה של גורם ישראלי), תשס״ה–2005",
                "WikiHref": "חוק_הספנות_כלי_שיט_זר_בשליטה_של_גורם_ישראלי"
            }
        },
        {
            "Id": "79681",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הצרכן (תיקון מס' 17), התשס\"ו-2005",
            "NormalizeName": "חוק_הגנת_הצרכן_תיקון_מס_17_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79681",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-15",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-15/79681",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79796",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק התכנית להבראת כלכלת ישראל (תיקוני חקיקה להשגת יעדי התקציב והמדיניות הכלכלית לשנות הכספים 2003 ו-2004) (תיקון מס' 10), התשס\"ו-2006",
            "NormalizeName": "חוק_התכנית_להבראת_כלכלת_ישראל_תיקוני_חקיקה_להשגת_יעדי_התקציב_והמדיניות_הכלכלית_לשנות_הכספים_2003_ו_2004_תיקון_מס_10_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79796",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-01/79796",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "79830",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת התעבורה (מס' 64), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_התעבורה_מס_64_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=79830",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-12",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-12/79830",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80009",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות ביטחון (הוראת שעה) (תיקון מס' 8), התשס\"ה-2004",
            "NormalizeName": "חוק_שירות_ביטחון_הוראת_שעה_תיקון_מס_8_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80009",
            "RecentOfficialNames": [],
            "PublicationDate": "2004-12-30",
            "Uri": "/akn/il/act/PrimaryLegislation/2004-12-30/80009",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80188",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות המדינה (משמעת) (תיקון מס' 10), התשס\"ה-2005",
            "NormalizeName": "חוק_שירות_המדינה_משמעת_תיקון_מס_10_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80188",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/80188",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80477",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירות בטחון (הגבלות קריאה לשירות מילואים של קצין-הוראת שעה) (תיקון מס' 3), התשס\"ה-2004",
            "NormalizeName": "חוק_שירות_בטחון_הגבלות_קריאה_לשירות_מילואים_של_קצין_הוראת_שעה_תיקון_מס_3_התשס_ה_2004",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80477",
            "RecentOfficialNames": [],
            "PublicationDate": "1000-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/1000-01-01/80477",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80478",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ועדות חקירה (תיקון מס' 5), התשס\"ה-2005",
            "NormalizeName": "חוק_ועדות_חקירה_תיקון_מס_5_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80478",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-01-26",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-01-26/80478",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80741",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק היטלי סחר (תיקון מס' 3), התשס\"ה-2005",
            "NormalizeName": "חוק_היטלי_סחר_תיקון_מס_3_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80741",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-07",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-07/80741",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80742",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק ספנות חופית (היתר לכלי שיט זר), התשס\"ו-2005",
            "NormalizeName": "חוק_ספנות_חופית_היתר_לכלי_שיט_זר_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80742",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-11-22",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-11-22/80742",
            "HalahotName": {
                "Name": "חוק ספנות חופית (היתר לכלי שיט זר), התשס\"ו-2005",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק ספנות חופית (היתר לכלי שיט זר), התשס״ו–2005",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_ספנות_חופית_(היתר_לכלי_שיט_זר)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-11-22/80742",
                "OpenLawBookNameInNamesList": "חוק ספנות חופית (היתר לכלי שיט זר)",
                "OpenLawBookInLawHeader": "חוק ספנות חופית (היתר לכלי שיט זר), התשס״ו–2005",
                "WikiHref": "חוק_ספנות_חופית_היתר_לכלי_שיט_זר"
            }
        },
        {
            "Id": "80744",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק לתיקון פקודת בתי הסוהר (תיקון מס' 30), התשס\"ה-2005",
            "NormalizeName": "חוק_לתיקון_פקודת_בתי_הסוהר_תיקון_מס_30_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80744",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-07-25",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-25/80744",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "80759",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), התשנ\"ח-1998",
            "NormalizeName": "חוק_הגבלת_השימוש_ורישום_פעולות_בחלקי_רכב_משומשים_מניעת_גניבות_התשנ_ח_1998",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=80759",
            "RecentOfficialNames": [
                "חוק סימון כלי רכב (מניעת גניבות) (הוראת שעה), התשנ\"ח-1998"
            ],
            "PublicationDate": "2005-07-31",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-07-31/80759",
            "HalahotName": {
                "Name": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), התשנ\"ח-1998",
                "Score": "0"
            },
            "TnufaName": {
                "Name": "הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), התשנ\"ח-1998 - חוק",
                "Score": "0.10958904109589"
            },
            "KahamName": {
                "Name": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), תשנ\"ח - 1998",
                "Score": "0.0136986301369863"
            },
            "OpenLawBook": {
                "OpenLawBookName": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), התשנ״ח–1998",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_הגבלת_השימוש_ורישום_פעולות_בחלקי_רכב_משומשים_(מניעת_גניבות)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2005-07-31/80759",
                "OpenLawBookNameInNamesList": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות)",
                "OpenLawBookInLawHeader": "חוק הגבלת השימוש ורישום פעולות בחלקי רכב משומשים (מניעת גניבות), התשנ״ח–1998",
                "WikiHref": "חוק_הגבלת_השימוש_ורישום_פעולות_בחלקי_רכב_משומשים_מניעת_גניבות"
            }
        },
        {
            "Id": "81391",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק השיפוט הצבאי (תיקון מס' 50), התשס\"ה-2005",
            "NormalizeName": "חוק_השיפוט_הצבאי_תיקון_מס_50_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=81391",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-04-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-04-03/81391",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "81392",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק נכסים של נספי השואה (השבה ליורשים והקדשה למטרות סיוע והנצחה), התשס\"ו-2006",
            "NormalizeName": "חוק_נכסים_של_נספי_השואה_השבה_ליורשים_והקדשה_למטרות_סיוע_והנצחה_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=81392",
            "RecentOfficialNames": [],
            "PublicationDate": "2006-01-03",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-03/81392",
            "HalahotName": {
                "Name": "חוק נכסים של נספי השואה (השבה ליורשים והקדשה למטרות סיוע והנצחה), התשס\"ו-2006",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק נכסים של נספי השואה (השבה ליורשים והקדשה למטרות סיוע והנצחה), התשס״ו–2006",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_נכסים_של_נספי_השואה_(השבה_ליורשים_והקדשה_למטרות_סיוע_והנצחה)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2006-01-03/81392",
                "OpenLawBookNameInNamesList": "חוק נכסים של נספי השואה (השבה ליורשים והקדשה למטרות סיוע והנצחה)",
                "OpenLawBookInLawHeader": "חוק נכסים של נספי השואה (השבה ליורשים והקדשה למטרות סיוע והנצחה), התשס״ו–2006",
                "WikiHref": "חוק_נכסים_של_נספי_השואה_השבה_ליורשים_והקדשה_למטרות_סיוע_והנצחה"
            }
        },
        {
            "Id": "81552",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק שירותי הובלה (תיקון מס' 2), התשס\"ו-2005",
            "NormalizeName": "חוק_שירותי_הובלה_תיקון_מס_2_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=81552",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-11-28",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-11-28/81552",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "81555",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הנזיקים האזרחיים (אחריות המדינה) (תיקון מס' 7), התשס\"ה-2005",
            "NormalizeName": "חוק_הנזיקים_האזרחיים_אחריות_המדינה_תיקון_מס_7_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=81555",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-10",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-10/81555",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "81557",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הפסיכולוגים (תיקון מס' 4), התשס\"ה-2005",
            "NormalizeName": "חוק_הפסיכולוגים_תיקון_מס_4_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=81557",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-06-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-06-08/81557",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "83702",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הגנת הפרטיות (תיקון מס' 8), התשס\"ו-2005",
            "NormalizeName": "חוק_הגנת_הפרטיות_תיקון_מס_8_התשס_ו_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=83702",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-12-08",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-12-08/83702",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "83979",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק המקרקעין (תיקון מס' 26), התשס\"ה-2005",
            "NormalizeName": "חוק_המקרקעין_תיקון_מס_26_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=83979",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/83979",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "84259",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק הביטוח הלאומי (תיקון מס' 81), התשס\"ה-2005",
            "NormalizeName": "חוק_הביטוח_הלאומי_תיקון_מס_81_התשס_ה_2005",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=84259",
            "RecentOfficialNames": [],
            "PublicationDate": "2005-08-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2005-08-01/84259",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "84397",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק חינוך ממלכתי (תיקון מס' 9), התשס\"ח-2008",
            "NormalizeName": "חוק_חינוך_ממלכתי_תיקון_מס_9_התשס_ח_2008",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=84397",
            "RecentOfficialNames": [],
            "PublicationDate": "2008-06-11",
            "Uri": "/akn/il/act/PrimaryLegislation/2008-06-11/84397",
            "HalahotName": "",
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": ""
        },
        {
            "Id": "84484",
            "Type": "Primary",
            "LawSource": "OData",
            "LawSubSource": "KNS_Bill",
            "OfficialName": "חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי), התשס\"ו-2006",
            "NormalizeName": "חוק_פינוי_ובינוי_עידוד_מיזמי_פינוי_ובינוי_התשס_ו_2006",
            "KnessetUrl": "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawBill.aspx?t=LawReshumot&lawitemid=84484",
            "RecentOfficialNames": [
                "חוק פינוי ובינוי (פיצויים), התשס\"ו-2006"
            ],
            "PublicationDate": "2006-01-01",
            "Uri": "/akn/il/act/PrimaryLegislation/2006-01-01/84484",
            "HalahotName": {
                "Name": "חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי), התשס\"ו-2006",
                "Score": "0"
            },
            "TnufaName": "",
            "KahamName": "",
            "OpenLawBook": {
                "OpenLawBookName": "חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי), התשס״ו–2006",
                "OpenLawBookUrl": "https://he.wikisource.org/wiki/חוק_פינוי_ובינוי_(עידוד_מיזמי_פינוי_ובינוי)",
                "OpenLawBookUri": "/akn/il/act/PrimaryLegislation/2006-01-01/84484",
                "OpenLawBookNameInNamesList": "חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי)",
                "OpenLawBookInLawHeader": "חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי), התשס״ו–2006",
                "WikiHref": "חוק_פינוי_ובינוי_עידוד_מיזמי_פינוי_ובינוי"
            }
        }
    ];

    //Test browser support
    var supports = !!document.querySelectorAll && !!window.addEventListener && !!Object.getOwnPropertyNames && !!document.body.textContent;
    if (!supports) {
        return
    };

    //Libraries
    //XRegExp 2.0.0 <xregexp.com> MIT License
    var XRegExp; XRegExp = XRegExp || function (n) { "use strict"; function v(n, i, r) { var u; for (u in t.prototype) t.prototype.hasOwnProperty(u) && (n[u] = t.prototype[u]); return n.xregexp = { captureNames: i, isNative: !!r }, n } function g(n) { return (n.global ? "g" : "") + (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.extended ? "x" : "") + (n.sticky ? "y" : "") } function o(n, r, u) { if (!t.isRegExp(n)) throw new TypeError("type RegExp expected"); var f = i.replace.call(g(n) + (r || ""), h, ""); return u && (f = i.replace.call(f, new RegExp("[" + u + "]+", "g"), "")), n = n.xregexp && !n.xregexp.isNative ? v(t(n.source, f), n.xregexp.captureNames ? n.xregexp.captureNames.slice(0) : null) : v(new RegExp(n.source, f), null, !0) } function a(n, t) { var i = n.length; if (Array.prototype.lastIndexOf) return n.lastIndexOf(t); while (i--) if (n[i] === t) return i; return -1 } function s(n, t) { return Object.prototype.toString.call(n).toLowerCase() === "[object " + t + "]" } function d(n) { return n = n || {}, n === "all" || n.all ? n = { natives: !0, extensibility: !0 } : s(n, "string") && (n = t.forEach(n, /[^\s,]+/, function (n) { this[n] = !0 }, {})), n } function ut(n, t, i, u) { var o = p.length, s = null, e, f; y = !0; try { while (o--) if (f = p[o], (f.scope === "all" || f.scope === i) && (!f.trigger || f.trigger.call(u)) && (f.pattern.lastIndex = t, e = r.exec.call(f.pattern, n), e && e.index === t)) { s = { output: f.handler.call(u, e, i), match: e }; break } } catch (h) { throw h; } finally { y = !1 } return s } function b(n) { t.addToken = c[n ? "on" : "off"], f.extensibility = n } function tt(n) { RegExp.prototype.exec = (n ? r : i).exec, RegExp.prototype.test = (n ? r : i).test, String.prototype.match = (n ? r : i).match, String.prototype.replace = (n ? r : i).replace, String.prototype.split = (n ? r : i).split, f.natives = n } var t, c, u, f = { natives: !1, extensibility: !1 }, i = { exec: RegExp.prototype.exec, test: RegExp.prototype.test, match: String.prototype.match, replace: String.prototype.replace, split: String.prototype.split }, r = {}, k = {}, p = [], e = "default", rt = "class", it = { "default": /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?+]\?|{\d+(?:,\d)?}\??)/, "class": /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/ }, et = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g, h = /([\s\S])(?=[\s\S]\1)/g, nt = /^(?:[?+]|{\d+(?:,\d*)?})\??/, ft = i.exec.call(/()??/, "")[1] === n, l = RegExp.prototype.sticky !== n, y = !1, w = "gim" + (l ? "y" : ""); return t = function (r, u) { if (t.isRegExp(r)) { if (u !== n) throw new TypeError("can't supply flags when constructing one RegExp from another"); return o(r) } if (y) throw new Error("can't call the XRegExp constructor within token definition functions"); var l = [], a = e, b = { hasNamedCapture: !1, captureNames: [], hasFlag: function (n) { return u.indexOf(n) > -1 } }, f = 0, c, s, p; if (r = r === n ? "" : String(r), u = u === n ? "" : String(u), i.match.call(u, h)) throw new SyntaxError("invalid duplicate regular expression flag"); for (r = i.replace.call(r, /^\(\?([\w$]+)\)/, function (n, t) { if (i.test.call(/[gy]/, t)) throw new SyntaxError("can't use flag g or y in mode modifier"); return u = i.replace.call(u + t, h, ""), "" }), t.forEach(u, /[\s\S]/, function (n) { if (w.indexOf(n[0]) < 0) throw new SyntaxError("invalid regular expression flag " + n[0]); }); f < r.length;)c = ut(r, f, a, b), c ? (l.push(c.output), f += c.match[0].length || 1) : (s = i.exec.call(it[a], r.slice(f)), s ? (l.push(s[0]), f += s[0].length) : (p = r.charAt(f), p === "[" ? a = rt : p === "]" && (a = e), l.push(p), ++f)); return v(new RegExp(l.join(""), i.replace.call(u, /[^gimy]+/g, "")), b.hasNamedCapture ? b.captureNames : null) }, c = { on: function (n, t, r) { r = r || {}, n && p.push({ pattern: o(n, "g" + (l ? "y" : "")), handler: t, scope: r.scope || e, trigger: r.trigger || null }), r.customFlags && (w = i.replace.call(w + r.customFlags, h, "")) }, off: function () { throw new Error("extensibility must be installed before using addToken"); } }, t.addToken = c.off, t.cache = function (n, i) { var r = n + "/" + (i || ""); return k[r] || (k[r] = t(n, i)) }, t.escape = function (n) { return i.replace.call(n, /[-[\]{}()+?.,\\^$|#\s]/g, "\\$&") }, t.exec = function (n, t, i, u) { var e = o(t, "g" + (u && l ? "y" : ""), u === !1 ? "y" : ""), f; return e.lastIndex = i = i || 0, f = r.exec.call(e, n), u && f && f.index !== i && (f = null), t.global && (t.lastIndex = f ? e.lastIndex : 0), f }, t.forEach = function (n, i, r, u) { for (var e = 0, o = -1, f; f = t.exec(n, i, e);)r.call(u, f, ++o, n, i), e = f.index + (f[0].length || 1); return u }, t.globalize = function (n) { return o(n, "g") }, t.install = function (n) { n = d(n), !f.natives && n.natives && tt(!0), !f.extensibility && n.extensibility && b(!0) }, t.isInstalled = function (n) { return !!f[n] }, t.isRegExp = function (n) { return s(n, "regexp") }, t.matchChain = function (n, i) { return function r(n, u) { for (var o = i[u].regex ? i[u] : { regex: i[u] }, f = [], s = function (n) { f.push(o.backref ? n[o.backref] || "" : n[0]) }, e = 0; e < n.length; ++e)t.forEach(n[e], o.regex, s); return u === i.length - 1 || !f.length ? f : r(f, u + 1) }([n], 0) }, t.replace = function (i, u, f, e) { var c = t.isRegExp(u), s = u, h; return c ? (e === n && u.global && (e = "all"), s = o(u, e === "all" ? "g" : "", e === "all" ? "" : "g")) : e === "all" && (s = new RegExp(t.escape(String(u)), "g")), h = r.replace.call(String(i), s, f), c && u.global && (u.lastIndex = 0), h }, t.split = function (n, t, i) { return r.split.call(n, t, i) }, t.test = function (n, i, r, u) { return !!t.exec(n, i, r, u) }, t.uninstall = function (n) { n = d(n), f.natives && n.natives && tt(!1), f.extensibility && n.extensibility && b(!1) }, t.union = function (n, i) { var l = /(\()(?!\?)|\\([1-9]\d)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])]/g, o = 0, f, h, c = function (n, t, i) { var r = h[o - f]; if (t) { if (++o, r) return "(?<" + r + ">" } else if (i) return "\\" + (+i + f); return n }, e = [], r, u; if (!(s(n, "array") && n.length)) throw new TypeError("patterns must be a nonempty array"); for (u = 0; u < n.length; ++u)r = n[u], t.isRegExp(r) ? (f = o, h = r.xregexp && r.xregexp.captureNames || [], e.push(t(r.source).source.replace(l, c))) : e.push(t.escape(r)); return t(e.join("|"), i) }, t.version = "2.0.0", r.exec = function (t) { var r, f, e, o, u; if (this.global || (o = this.lastIndex), r = i.exec.apply(this, arguments), r) { if (!ft && r.length > 1 && a(r, "") > -1 && (e = new RegExp(this.source, i.replace.call(g(this), "g", "")), i.replace.call(String(t).slice(r.index), e, function () { for (var t = 1; t < arguments.length - 2; ++t)arguments[t] === n && (r[t] = n) })), this.xregexp && this.xregexp.captureNames) for (u = 1; u < r.length; ++u)f = this.xregexp.captureNames[u - 1], f && (r[f] = r[u]); this.global && !r[0].length && this.lastIndex > r.index && (this.lastIndex = r.index) } return this.global || (this.lastIndex = o), r }, r.test = function (n) { return !!r.exec.call(this, n) }, r.match = function (n) { if (t.isRegExp(n)) { if (n.global) { var u = i.match.apply(this, arguments); return n.lastIndex = 0, u } } else n = new RegExp(n); return r.exec.call(n, this) }, r.replace = function (n, r) { var e = t.isRegExp(n), u, f, h, o; return e ? (n.xregexp && (u = n.xregexp.captureNames), n.global || (o = n.lastIndex)) : n += "", s(r, "function") ? f = i.replace.call(String(this), n, function () { var t = arguments, i; if (u) for (t[0] = new String(t[0]), i = 0; i < u.length; ++i)u[i] && (t[0][u[i]] = t[i + 1]); return e && n.global && (n.lastIndex = t[t.length - 2] + t[0].length), r.apply(null, t) }) : (h = String(this), f = i.replace.call(h, n, function () { var n = arguments; return i.replace.call(String(r), et, function (t, i, r) { var f; if (i) { if (f = +i, f <= n.length - 3) return n[f] || ""; if (f = u ? a(u, i) : -1, f < 0) throw new SyntaxError("backreference to undefined group " + t); return n[f + 1] || "" } if (r === "$") return "$"; if (r === "&" || +r == 0) return n[0]; if (r === "`") return n[n.length - 1].slice(0, n[n.length - 2]); if (r === "'") return n[n.length - 1].slice(n[n.length - 2] + n[0].length); if (r = +r, !isNaN(r)) { if (r > n.length - 3) throw new SyntaxError("backreference to undefined group " + t); return n[r] || "" } throw new SyntaxError("invalid token " + t); }) })), e && (n.lastIndex = n.global ? 0 : o), f }, r.split = function (r, u) { if (!t.isRegExp(r)) return i.split.apply(this, arguments); var e = String(this), h = r.lastIndex, f = [], o = 0, s; return u = (u === n ? -1 : u) >>> 0, t.forEach(e, r, function (n) { n.index + n[0].length > o && (f.push(e.slice(o, n.index)), n.length > 1 && n.index < e.length && Array.prototype.push.apply(f, n.slice(1)), s = n[0].length, o = n.index + s) }), o === e.length ? (!i.test.call(r, "") || s) && f.push("") : f.push(e.slice(o)), r.lastIndex = h, f.length > u ? f.slice(0, u) : f }, u = c.on, u(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/, function (n, t) { if (n[1] === "B" && t === e) return n[0]; throw new SyntaxError("invalid escape " + n[0]); }, { scope: "all" }), u(/\[(\^?)]/, function (n) { return n[1] ? "[\\s\\S]" : "\\b\\B" }), u(/(?:\(\?#[^)]\))+/, function (n) { return i.test.call(nt, n.input.slice(n.index + n[0].length)) ? "" : "(?:)" }), u(/\\k<([\w$]+)>/, function (n) { var t = isNaN(n[1]) ? a(this.captureNames, n[1]) + 1 : +n[1], i = n.index + n[0].length; if (!t || t > this.captureNames.length) throw new SyntaxError("backreference to undefined group " + n[0]); return "\\" + t + (i === n.input.length || isNaN(n.input.charAt(i)) ? "" : "(?:)") }), u(/(?:\s+|#.*)+/, function (n) { return i.test.call(nt, n.input.slice(n.index + n[0].length)) ? "" : "(?:)" }, { trigger: function () { return this.hasFlag("x") }, customFlags: "x" }), u(/\./, function () { return "[\\s\\S]" }, { trigger: function () { return this.hasFlag("s") }, customFlags: "s" }), u(/\(\?P?<([\w$]+)>/, function (n) { if (!isNaN(n[1])) throw new SyntaxError("can't use integer as capture name " + n[0]); return this.captureNames.push(n[1]), this.hasNamedCapture = !0, "(" }), u(/\\(\d+)/, function (n, t) { if (!(t === e && /^[1-9]/.test(n[1]) && +n[1] <= this.captureNames.length) && n[1] !== "0") throw new SyntaxError("can't use octal escape or backreference to undefined group " + n[0]); return n[0] }, { scope: "all" }), u(/\((?!\?)/, function () { return this.hasFlag("n") ? "(?:" : (this.captureNames.push(null), "(") }, { customFlags: "n" }), typeof exports != "undefined" && (exports.XRegExp = t), t }()
    /*! atomic v1.0.0 | (c) 2014 @toddmotto | github.com/toddmotto/atomic */
    !function (a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b : a.atomic = b(a) }(this, function (a) { "use strict"; var b = {}, c = function (a) { var b; try { b = JSON.parse(a.responseText) } catch (c) { b = a.responseText } return [b, a] }, d = function (b, d, e) { var f = { success: function () { }, error: function () { } }, g = a.XMLHttpRequest || ActiveXObject, h = new g("MSXML2.XMLHTTP.3.0"); return h.open(b, d, !0), h.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), h.onreadystatechange = function () { 4 === h.readyState && (200 === h.status ? f.success.apply(f, c(h)) : f.error.apply(f, c(h))) }, h.send(e), { success: function (a) { return f.success = a, f }, error: function (a) { return f.error = a, f } } }; return b.get = function (a) { return d("GET", a) }, b.put = function (a, b) { return d("PUT", a, b) }, b.post = function (a, b) { return d("POST", a, b) }, b["delete"] = function (a) { return d("DELETE", a) }, b });
    /* findAndReplaceDOMText v 0.4.3 | https://github.com/padolsey/findAndReplaceDOMText */
    !function (e, t) { "object" == typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.findAndReplaceDOMText = t() }(this, function () { function e(e) { return String(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") } function t() { return n.apply(null, arguments) || r.apply(null, arguments) } function n(e, n, i, o, d) { if (n && !n.nodeType && arguments.length <= 2) return !1; var a = "function" == typeof i; a && (i = function (e) { return function (t, n) { return e(t.text, n.startIndex) } }(i)); var s = r(n, { find: e, wrap: a ? null : i, replace: a ? i : "$" + (o || "&"), prepMatch: function (e, t) { if (!e[0]) throw "findAndReplaceDOMText cannot handle zero-length matches"; if (o > 0) { var n = e[o]; e.index += e[0].indexOf(n), e[0] = n } return e.endIndex = e.index + e[0].length, e.startIndex = e.index, e.index = t, e }, filterElements: d }); return t.revert = function () { return s.revert() }, !0 } function r(e, t) { return new i(e, t) } function i(e, n) { var r = n.preset && t.PRESETS[n.preset]; if (n.portionMode = n.portionMode || o, r) for (var i in r) s.call(r, i) && !s.call(n, i) && (n[i] = r[i]); this.node = e, this.options = n, this.prepMatch = n.prepMatch || this.prepMatch, this.reverts = [], this.matches = this.search(), this.matches.length && this.processMatches() } var o = "retain", d = "first", a = document, s = ({}.toString, {}.hasOwnProperty); return t.NON_PROSE_ELEMENTS = { br: 1, hr: 1, script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1, input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1 }, t.NON_CONTIGUOUS_PROSE_ELEMENTS = { address: 1, article: 1, aside: 1, blockquote: 1, dd: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, nav: 1, noscript: 1, ol: 1, output: 1, p: 1, pre: 1, section: 1, ul: 1, br: 1, li: 1, summary: 1, dt: 1, details: 1, rp: 1, rt: 1, rtc: 1, script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1, input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1, table: 1, tbody: 1, thead: 1, th: 1, tr: 1, td: 1, caption: 1, col: 1, tfoot: 1, colgroup: 1 }, t.NON_INLINE_PROSE = function (e) { return s.call(t.NON_CONTIGUOUS_PROSE_ELEMENTS, e.nodeName.toLowerCase()) }, t.PRESETS = { prose: { forceContext: t.NON_INLINE_PROSE, filterElements: function (e) { return !s.call(t.NON_PROSE_ELEMENTS, e.nodeName.toLowerCase()) } } }, t.Finder = i, i.prototype = { search: function () { function t(e) { for (var d = 0, p = e.length; p > d; ++d) { var h = e[d]; if ("string" == typeof h) { if (o.global) for (; n = o.exec(h);)a.push(s.prepMatch(n, r++, i)); else (n = h.match(o)) && a.push(s.prepMatch(n, 0, i)); i += h.length } else t(h) } } var n, r = 0, i = 0, o = this.options.find, d = this.getAggregateText(), a = [], s = this; return o = "string" == typeof o ? RegExp(e(o), "g") : o, t(d), a }, prepMatch: function (e, t, n) { if (!e[0]) throw new Error("findAndReplaceDOMText cannot handle zero-length matches"); return e.endIndex = n + e.index + e[0].length, e.startIndex = n + e.index, e.index = t, e }, getAggregateText: function () { function e(r, i) { if (3 === r.nodeType) return [r.data]; if (t && !t(r)) return []; var i = [""], o = 0; if (r = r.firstChild) do if (3 !== r.nodeType) { var d = e(r); n && 1 === r.nodeType && (n === !0 || n(r)) ? (i[++o] = d, i[++o] = "") : ("string" == typeof d[0] && (i[o] += d.shift()), d.length && (i[++o] = d, i[++o] = "")) } else i[o] += r.data; while (r = r.nextSibling); return i } var t = this.options.filterElements, n = this.options.forceContext; return e(this.node) }, processMatches: function () { var e, t, n, r = this.matches, i = this.node, o = this.options.filterElements, d = [], a = i, s = r.shift(), p = 0, h = 0, l = 0, c = [i]; e: for (; ;) { if (3 === a.nodeType && (!t && a.length + p >= s.endIndex ? t = { node: a, index: l++, text: a.data.substring(s.startIndex - p, s.endIndex - p), indexInMatch: p - s.startIndex, indexInNode: s.startIndex - p, endIndexInNode: s.endIndex - p, isEnd: !0 } : e && d.push({ node: a, index: l++, text: a.data, indexInMatch: p - s.startIndex, indexInNode: 0 }), !e && a.length + p > s.startIndex && (e = { node: a, index: l++, indexInMatch: 0, indexInNode: s.startIndex - p, endIndexInNode: s.endIndex - p, text: a.data.substring(s.startIndex - p, s.endIndex - p) }), p += a.data.length), n = 1 === a.nodeType && o && !o(a), e && t) { if (a = this.replaceMatch(s, e, d, t), p -= t.node.data.length - t.endIndexInNode, e = null, t = null, d = [], s = r.shift(), l = 0, h++, !s) break } else if (!n && (a.firstChild || a.nextSibling)) { a.firstChild ? (c.push(a), a = a.firstChild) : a = a.nextSibling; continue } for (; ;) { if (a.nextSibling) { a = a.nextSibling; break } if (a = c.pop(), a === i) break e } } }, revert: function () { for (var e = this.reverts.length; e--;)this.reverts[e](); this.reverts = [] }, prepareReplacementString: function (e, t, n) { var r = this.options.portionMode; return r === d && t.indexInMatch > 0 ? "" : (e = e.replace(/\$(\d+|&|`|')/g, function (e, t) { var r; switch (t) { case "&": r = n[0]; break; case "`": r = n.input.substring(0, n.startIndex); break; case "'": r = n.input.substring(n.endIndex); break; default: r = n[+t] }return r }), r === d ? e : t.isEnd ? e.substring(t.indexInMatch) : e.substring(t.indexInMatch, t.indexInMatch + t.text.length)) }, getPortionReplacementNode: function (e, t, n) { var r = this.options.replace || "$&", i = this.options.wrap; if (i && i.nodeType) { var o = a.createElement("div"); o.innerHTML = i.outerHTML || (new XMLSerializer).serializeToString(i), i = o.firstChild } if ("function" == typeof r) return r = r(e, t, n), r && r.nodeType ? r : a.createTextNode(String(r)); var d = "string" == typeof i ? a.createElement(i) : i; return r = a.createTextNode(this.prepareReplacementString(r, e, t, n)), r.data && d ? (d.appendChild(r), d) : r }, replaceMatch: function (e, t, n, r) { var i, o, d = t.node, s = r.node; if (d === s) { var p = d; t.indexInNode > 0 && (i = a.createTextNode(p.data.substring(0, t.indexInNode)), p.parentNode.insertBefore(i, p)); var h = this.getPortionReplacementNode(r, e); return p.parentNode.insertBefore(h, p), r.endIndexInNode < p.length && (o = a.createTextNode(p.data.substring(r.endIndexInNode)), p.parentNode.insertBefore(o, p)), p.parentNode.removeChild(p), this.reverts.push(function () { i === h.previousSibling && i.parentNode.removeChild(i), o === h.nextSibling && o.parentNode.removeChild(o), h.parentNode.replaceChild(p, h) }), h } i = a.createTextNode(d.data.substring(0, t.indexInNode)), o = a.createTextNode(s.data.substring(r.endIndexInNode)); for (var l = this.getPortionReplacementNode(t, e), c = [], u = 0, f = n.length; f > u; ++u) { var x = n[u], g = this.getPortionReplacementNode(x, e); x.node.parentNode.replaceChild(g, x.node), this.reverts.push(function (e, t) { return function () { t.parentNode.replaceChild(e.node, t) } }(x, g)), c.push(g) } var N = this.getPortionReplacementNode(r, e); return d.parentNode.insertBefore(i, d), d.parentNode.insertBefore(l, d), d.parentNode.removeChild(d), s.parentNode.insertBefore(N, s), s.parentNode.insertBefore(o, s), s.parentNode.removeChild(s), this.reverts.push(function () { i.parentNode.removeChild(i), l.parentNode.replaceChild(d, l), o.parentNode.removeChild(o), N.parentNode.replaceChild(s, N) }), N } }, t });
    var hasOwn = {}.hasOwnProperty; // Used with findAndReplaceDOMText
    /* Adapted from: https://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/ */
    function unwrap(el) { var parent = el.parentNode; while (el.firstChild) parent.insertBefore(el.firstChild, el); parent.removeChild(el); }


    var options = {};
    var mode = options.mode || "popup-hover"; // "link", "popup-hover", "popup-click"
    var popupStyles = options.popupStyles || {};
    if (window.screen.width < 820) { mode = "link"; }  // If the screen is small, fallback to link mode

    var popUpElem;
    var heBox;
    var enBox;
    var heNotice;
    var heTitle;
    var enTitle;
    var heElems;
    var enElems;


    var setupPopup = function (styles, mode) {
        popUpElem = document.createElement("div");
        popUpElem.id = "sefaria-popup";

        var html = "";
        // Set default content for the popup
        html += '<style scoped>' +
            '#sefaria-popup {' +
            'max-width: 400px;' +
            'font-size: 16px;' +
            'border: 1px black solid;' +
            'background-color: #fff3da;' +
            'color: #222222;' +
            'padding: 10px 20px 5px 20px;' +
            '}' +
            '.sefaria-text {' +
            'padding-top: 10px;' +
            '}' +
            '#sefaria-title {' +
            'font-weight: bold;' +
            'text-align: center;' +
            'text-decoration: underline;' +
            '}';

        if (mode == "popup-click") {
            html += '#sefaria-close {' +
                '    font-family: Helvetica,Arial,sans-serif;' +
                '    font-size: 14px;' +
                '    font-weight: 700;' +
                '    line-height: 12px;' +
                '    position: absolute;' +
                '    top: 5px;' +
                '    right: 5px;' +
                '    padding: 5px 5px 3px;' +
                '    cursor: pointer;' +
                '    color: #fff;' +
                '    border: 0;' +
                '    outline: none;' +
                '    background: #c74c3c;' +
                '}' +
                '</style>' +
                '<div id="sefaria-close">X</div>';
        } else {
            html += '</style>'
        }

        html += '<div id="sefaria-title"><div class="he" dir="rtl"></div><div class="en"></div></div>' +
            '<div class="sefaria-text he" dir="rtl"></div>' +
            '<div class="sefaria-text en"></div>' +
            '<div class = "sefaria-notice" style="font-size: 10px; margin-top: 10px;">';


        html += '<div class="en">English for test Yuval</div>' +
            '<div class="he" dir="rtl">תוכן תוכן תוכן יובל בדיקה</div>';


        html += '</div>';

        popUpElem.innerHTML = html;
        // Apply any override styles
        if (styles) {
            for (var n in styles) {
                if (styles.hasOwnProperty(n)) {
                    popUpElem.style[n] = styles[n];
                }
            }
        }

        // Apply function-critical styles
        popUpElem.style.position = "fixed";
        popUpElem.style.overflow = "hidden";
        popUpElem.style.display = "none";
        popUpElem.style.zIndex = 1000;

        popUpElem = document.body.appendChild(popUpElem);

        //heBox = popUpElem.querySelector(".sefaria-text.he");
        heBox = {};
        //enBox = popUpElem.querySelector(".sefaria-text.en");
        enBox = {};
        //heTitle = popUpElem.querySelector("#sefaria-title .he");
        heTitle = 'כותרת';
        //enTitle = popUpElem.querySelector("#sefaria-title .en");
        enTitle = 'headerfff';
        //heNotice = popUpElem.querySelector(".sefaria-notice .he");
        heNotice = 'notice 123';
        heElems = popUpElem.querySelectorAll(".he");
        enElems = popUpElem.querySelectorAll(".en");
    };
    setupPopup(popupStyles, mode);

    var showPopup = function (e, mode) {

        //var source = { en: 'english here bla bl blah', he: 'עברית עברית' };
        enBox.innerHTML = '1';
        heBox.innerHTML = '2';
        enTitle.textContent = '3';
        heTitle.textContent = '4';

        var rect = e.getBoundingClientRect();
        popUpElem.style.top = (rect.top > 100) ? rect.top - 50 + "px" : rect.top + 30 + "px";
        if (rect.left < window.innerWidth / 2) {
            popUpElem.style.left = rect.right + 10 + "px";
            popUpElem.style.right = "auto";
        } else {
            popUpElem.style.left = "auto";
            popUpElem.style.right = window.innerWidth - rect.left + "px";
        }

        popUpElem.style.display = "block";

        var popUpRect = popUpElem.getBoundingClientRect();
        if (window.innerHeight < popUpRect.bottom) { // popup drops off the screen
            var pos = ((window.innerHeight - popUpRect.height) - 10);
            popUpElem.style.top = (pos > 0) ? pos + "px" : "10px";
        }
    };
    var hidePopup = function () {
        popUpElem.style.display = "none";
    };

    ns.matches = [];
    ns.sources = {};

    var regexAndLinks = [];
    // var globalCounter = 1;

    var generateRegExp = function (item) {
        let sp = item.OfficialName.split(/(?: )+/);
        if (sp && sp[0] !== '') {
            let newKey = `[\u05d4\u05d1\u05dc\u05de]*${createRegexHebrewWord(sp[0])}`;
            for (let i = 1; i < sp.length; i++) {
                let word = sp[i];
                if (sp[i - 1].charAt(sp[i - 1].length - 1) == ',' || (word !== `` && (word.charAt(0) == '(' || word.charAt(0) == ')'))) {
                    break;
                }
                if (word.charAt(word.length - 1) == ',') {
                    word = word.substring(0, word.length - 1);
                }
                if (word.charAt(0) == '\u05d4') {
                    word = word.substring(1, word.length);
                }
                newKey = `${newKey}[ ,_-\u05d4\u05d1\u05dc\u05de]*${createRegexHebrewWord(word)}`; // [ ,_-\u05d4\u05d1\u05dc\u05de] = ה ב ל מ 
            }
            let keyRegex = new RegExp(newKey, "gu");

            let kv = {
                key: keyRegex,
                value: item.KnessetUrl
            };
            regexAndLinks.push(kv);
        }
    };

    //returns a string that represent a regExp of one word
    var createRegexHebrewWord = function (word) {
        word = word.replace(/[(){}[\],]+/g, "");
        let len = word.length;
        let j = 0;
        while (j < len) {
            let ch = word.charAt(j);
            let before = word.substring(0, j);
            let after = word.substring(j + 1, word.length);
            switch (ch) {
                case '\u05d5':  //case of ו
                    if (j !== 0 && j !== len - 1) {
                        word = `${before}[\u05d5]?${after}`;
                        len = word.length;
                        j += 4;
                    }
                    else j++;
                    break;

                case '\u05d9':  //case of י
                    if (after.charAt(0) == '\u05d9') {
                        after = after.substring(1, after.length);
                    }
                    word = `${before}[\u05d9]*${after}`;
                    len = word.length;
                    j += 4;
                    break;

                // case '\u05d4':  //case of ה

                default:
                    j++;
                    break;
            }
        }
        return word;
    };

    var findAndLink = function (keyval) { // keyval = one element of the dictionary of {key: regExp, value: url link}
        var elems = document.querySelectorAll('body');

        for (var i = 0; i < elems.length; i++) {  // call to findAndReplaceDOMText for each element in the dom
            // findAndReplaceDOMText is an imported function
            findAndReplaceDOMText(elems[i], {   // elem[i] = one elemnt of the page html
                preset: 'prose',
                find: keyval.key,
                replace: function (portion, match) {
                    var matched_ref = match[0]
                        .replace(/[\r\n\t ]+/g, " ") // Filter out multiple spaces
                        .replace(/[(){}[\]]+/g, ""); // Filter out internal parenthesis 
                    ns.matches.push(matched_ref);
                    var node = document.createElement("a"); // create an a tag for link
                    node.target = "_blank";
                    node.className = "talia-ref";
                    node.href = keyval.value; // the href is the apropriate url link
                    node.setAttribute('data-ref', matched_ref);
                    node.textContent = portion.text;

                    // var popupnode = document.createElement("span");
                    // popupnode.className = "popup-uri";
                    // popupnode.id = `popup-uri-${globalCounter}`;
                    // popupnode.onmouseenter = "showPopupUri(this)";
                    // popupnode.onmouseleave = "hidePopupUri(this)";
                    // node.appendChild(popupnode);
                    // globalCounter++;
                    return node;
                },
                wrap: 'span',
                wrapClass: 'uriPopup',
                filterElements: function (el) {
                    return !(
                        hasOwn.call(findAndReplaceDOMText.NON_PROSE_ELEMENTS, el.nodeName.toLowerCase())
                        || (el.tagName == "A")
                    );
                }
            });

            //////
            //ns.sources = [];

            // Bind a click event and a mouseover event to each link
            [].forEach.call(document.querySelectorAll('.talia-ref'), function (e) {
                e.addEventListener('mouseover', function (event) {
                    showPopup(this, mode);
                }, false);
                e.addEventListener('mouseout', hidePopup, false);
            });
            //////

        }
    };

    var replaceAllNames = function () {

        //create a array of {key: regExp, value: url link} of the laws in the uri map
        uriMap.forEach(function (item) {
            generateRegExp(item);
        });

        for (var a = 0; a < regexAndLinks.length; a++) {
            findAndLink(regexAndLinks[a]);
        }
    };

    // var showPopupUri = function (node) {
    //     node.classList.toggle("show");
    // };

    // var hidePopupUri = function (node) {
    //     node.classList.toggle("hide");
    // };

    replaceAllNames();

}({}));