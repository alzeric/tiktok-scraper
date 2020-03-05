/* eslint-disable */

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
window.HTMLCanvasElement.prototype.getContext = () => {};

const makeid = length => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

function generateSignature(url, userAgent) {
    this.navigator = {
        userAgent,
    };
    global.tac =
        'i+2gv20gljwiss!i$158bs"yZl!%s"l"u&kLs#l l#vr*charCodeAtx0[!cb^i$1em7b*0d#>>>s j\uffeel  s#0y\u01ea,(|fY\x7f~d`hs g,(lfi~ah`{ms!g,&qnfme|ms"g,)gk}ejo{\x7fcms#,)|doikgauus$ul"d\',typeofl$d#===v!kA}l"vl mx[ c,/T\x7fsxvwa6@qw~tk@d#!==v!k\\}gr&Object,)yxdxbzv`tml mvr$callxl"[!c,/T\x7fsxvwa6@qw~tk@d#!==v!k4}ul!d\',typeofl$d#===v!kG}l!vl mx[ cv,\'nfmosCkmx,(Lfi~ah`{[!c0b<v!k4}ul#d\',typeofl$d#===v!kD}l#vl mx[ c,2I|v\x7fstl9Tzjty~TNP~d#!==v!k=}ugr(locationd\',typeofl$d#===k"t fv!k4}l!,,hbmz}t|gYzrrm!!!kjg,\'oaz~d~tms%ul%d\',typeofl$d#===v!kB}l%vl mx[ c,0K~pyqvb7PpiosogBd#!==k"t f z[ cb|1d<y\xe2g,&qnfme|ms l vk-}l ,\'dggyd`hmvk7}l ,\'dggyd`hm,\'aa{oiyjmk"t ugr.InstallTriggerd\',typeof,)|doikgauud#!==kwl vkn}l ,*e~xh|Xyuf{ml ,*cebh|Xyuf{mb-\x94b>v!kF}l ,+dyyk}Xt{t|aml ,+bbck}Xt{t|amb-\x94b>k"t f z[ cb|1d<y\xa0g,&akgkkgms g,&Iebli\x7fms!ul d\',typeof,)|doikgauud#!==vkh}l!,)yxdxbzv`tm,(|fY\x7f~d`hmvr$callxl ,\'wzfin\x7f~m[!c,0K~pyqvb7hkuxynmBd#=== z[ cb|1d<y\u011eg,(lfi~ah`{ms g,)gk}ejo{\x7fcms!g,&qnfme|ms"fv!k4}l ,,hbmz}t|gYzrrm!!!k\xd7,\'wd|mbb~l!d"in!v!kI}l!,\'wd|mbb~mg,+[`xif~P`aulmd*instanceof!v!k1},(Wybjbyabl"d"inv!k4},+hmab_xp|g{xl"d"inv!k4},+TScghxe\x7frfpl"d"inv!kP},%Dscafl"d"in,8[xtm}nLzNEGQMKAdGG^NTY\x1ckl"d"inb< f z[ cb|1d<y\u02a1g,&qnfme|ms g,)gk}ejo{\x7fcms!g,&Iebli\x7fms"l!,)~oih\x7fgyucmk"t (\x80,.jjvx|vDgyg}knbl"d"inkfl"v,.jjvx|vDgyg}knbmxl!.,)~oih\x7fgyucgr&Objectn vuq%valuevfq(writable[#c}) %{s#t ,4KJarz}hrjxl@EWCOQDRB,3LKfs{}wsnqB{iAMWBP@,;DCj{}DSKUAWyTK[C[XrHZ^RFZ[[,7HGn\x7fyxowiES}PGWOW\\vL^BN,5JI`}{~iuk{m\x7fRAQMURxNG,3LKsnsjpl~nB{iAMWBP@,2MLpg\x7fa}kEnrjl~PQGG,5JI`}{~iuk{m\x7fTLTVDVWMM,1NMwf|`rjF\x7fm}qk~TD,4KJert|tripAjNVPBTUCC,4KJpo|ksmyoAjNVPBTUCC[+s#,)Vyn`h`fe|,,olbcCt~vz|cz,6ID}u\x7fuuhs@ieg|v@EHZMOY[#s$l$*%s%l%u&k4s&l$l&ms\'l l\'mk"t j\x06l#*%s%l%u&k?s&l#l&ms\'l ,(lfi~ah`{ml\'mk"t j\ufffbl ,(lfi~ah`{m*%s%l%u&kls&l&vr%matchxgr&RegExp$*\\$[a-z]dc_$ n"[!cvk:}l ,(lfi~ah`{ml&m,&efkaoTmk"t j\uffcef z[ cb|1d<y\u024fg,&qnfme|ms gr&RegExp$+constructor$!in"vr$testxl ,+CX@BJ|t\x7fvzam[!cv!k\xb2}yZl vr(toStringx[ c,AzMAN@ES\x08zKMM_G}U\\]GQ{YCQ_SX]IWP.\x1cd#=== l ,.&ufnhxbm!v!kd}ugr&safarid\',typeof,)|doikgauud#!==vk=}gr&safari,0`da{Zzb~~pyzhtqqm&k\u010e(=l v,,c}kaTpfrvtermxzzzz[$c}) %{s!t (\x85l ,.}jcb{|zFbxjx}~mvr\'setItemx,+xc`kDuhZvfp, ["c}l ,.}jcb{|zFbxjx}~mvr*removeItemx,+xc`kDuhZvfp[!c}) \x7f{s!l!,$gjbbmgr,DOMException,2CF[AWH]AY^YY[[\x7fdpqmd#===vkC}l ,.}jcb{|zFbxjx}~m,&jbfn~cm0d#===k"t f fv!k>}g,(lfi~ah`{m,,hbmz}t|gYzrrm!!k`l ,)`doiukkTSm!vkJ}l ,,\\bgadt`Vbpxcmv!k4}l ,.C\\@~{}`pdRn|tomk"t f z[ cb|1d<y\u0165g,(lfi~ah`{ms g,)gk}ejo{\x7fcms!,(|fY\x7f~d`hs",\'nfmosCks#fv!k4}l ,,hbmz}t|gYzrrm!!!k\u0113l v,-n|jqewVxp{rvmmx,&eff\x7fkx[!cs$l$,)}eOmyoZB]mvl"mx[ cv,\'umyfjohmxgr&RegExp$#\\s*$!gn"$ ["cvl#mx,*djxdxjs~vv[!c0b<v!kh}l!l"mvl"mx[ cvr\'replacexgr&RegExp$#\\s*$!gn"$ ["cvl#mx,*djxdxjs~vv[!c0b<v!kP}l!,\'wd|mbb~mvl"mx[ c,4Ozt}}zn;LqkxIOcQVD_zd#!== f z[ cb|1d<1b|';

    let e;
    const l = {};
    Function(
        ((e = 'v[x++]=\x10v[--x]\x10t.charCodeAt(b++)-32\x10function \x10return \x10))\x10++\x10.substr\x10var \x10.length\x10()\x10,b+=\x10;break;case \x10;break}'.split(
            '\x10',
        )),
        '\x13e(e,a,r){\x14(b[e]||(b[e]=t("x,y","\x14x "+e+" y"\x15)(r,a)}\x13a(e,a,r){\x14(k[r]||(k[r]=t("x,y","\x14new x[y]("+Array(r+1).join(",x[\x16y]")\x17(1)+")"\x15)(e,a)}\x13r(e,a,r){\x18n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t\x16)s[n="$"+t]=r[n];for(t=0,b=s\x19=a\x19;t<b;t\x16)s[t]=a[t];\x14c(e,0,s)}\x13c(t,b,k){\x13u(e){v[x\x16]=e}\x13f\x1a{\x14g=\x12,t\x17ing(b\x1bg)}\x13l\x1a{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(\x18h,y,d,g,v=[],x=0;;)switch(g=\x12){case 1:u(!\x11)\x1c4:\x10f\x1a\x1c5:u(\x13(e){\x18a=0,r=e\x19;\x14\x13\x1a{\x18c=a<r;\x14c&&u(e[a\x16]),c}}(\x11\x15\x1c6:y=\x11,u(\x11(y\x15\x1c8:if(g=\x12,l\x1a\x1bg,g=\x12,y===c)b+=g;else if(y!==l)\x14y\x1c9:\x10c\x1c10:u(s(\x11\x15\x1c11:y=\x11,u(\x11+y)\x1c12:for(y=f\x1a,d=[],g=0;g<y\x19;g\x16)d[g]=y.charCodeAt(g)^g+y\x19;u(String.fromCharCode.apply(null,d\x15\x1c13:y=\x11,h=delete \x11[y]\x1c14:\x10\x12\x1c59:u((g=\x12)?(y=x,v.slice(x-=g,y\x15:[])\x1c61:u(\x11[\x12])\x1c62:g=\x11,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>0\x1c65:h=\x11,y=\x11,\x11[y]=h\x1c66:u(e(t[b\x16],\x11,\x11\x15\x1c67:y=\x11,d=\x11,u((g=\x11).x===c?r(g.y,y,g.z):g.apply(d,y\x15\x1c68:u(e((g=t[b\x16])<"<"?(b--,f\x1a):g+g,\x11,\x11\x15\x1c70:u(!1)\x1c71:\x10n\x1c72:\x10+f\x1a\x1c73:u(parseInt(f\x1a,36\x15\x1c75:if(\x11){b\x16\x1dcase 74:g=\x12<<16>>16\x1bg\x1c76:u(k[\x12])\x1c77:y=\x11,u(\x11[y])\x1c78:g=\x12,u(a(v,x-=g+1,g\x15\x1c79:g=\x12,u(k["$"+g])\x1c81:h=\x11,\x11[f\x1a]=h\x1c82:u(\x11[f\x1a])\x1c83:h=\x11,k[\x12]=h\x1c84:\x10!0\x1c85:\x10void 0\x1c86:u(v[x-1])\x1c88:h=\x11,y=\x11,\x10h,\x10y\x1c89:u(\x13\x1a{\x13e\x1a{\x14r(e.y,arguments,k)}\x14e.y=f\x1a,e.x=c,e.z=k,e}\x1a)\x1c90:\x10null\x1c91:\x10h\x1c93:h=\x11\x1c0:\x14\x11;default:u((g<<16>>16)-16)}}\x18n=this,t=n.Function,s=Object.keys||\x13(e){\x18a={},r=0;for(\x18c in e)a[r\x16]=c;\x14a\x19=r,a},b={},k={};\x14r'.replace(
            /[\x10-\x1f]/g,
            t => e[15 & t.charCodeAt(0)],
        )),
    )()(
        'g,$@drbms!l!n \u0418b/s"g,&Usz`dlms#g,.}jcb{|zFbxjx}~ms$g,(lfi~ah`{ms%g,)gk}ejo{\x7fcms&g,&qnfme|ms\',!^s(,)|doikgauus),,j\x7fabSysaWzrrs*,(|fY\x7f~d`hs+,&jbfn~cs,,\'nfmosCks-,*icm\x7fM`ttSgs.,&eoi{K\x7fs/,)z\x7fi\x7fy|f~vs0l#l*ms10s2yWl ._b&s o ]1l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!\x1f+& s3yPo ]3s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s4y=o o ]7q"21o l q"18o ]4l 2d>& s6{s5yMo o ]8q"21o ]2Ld<l 4d#>>>b|s!o l q"18o ]4l!& s7yIo o ]6q"21o ]4o ]2Jd<l 6d#>>>b|&o ]3l &+ s8y\u01fd,`\x04*&3#-r\x1d\x03:\x1b\tt}a\x026\'%`b\r\x1ff\nkop\v\b\x1f3%\bU-(\x07\t\x161=%;\x19\x17\x03)\x1a;\x1c\x01\r\rO?.>\x19\x1a/\t=\x1as!$ s"0s$l o ],ml$3+d">=k\xddl vo ].mxl$v1+s$[!c\u012fb&@d<l vo ].mxl$v1+s$[!c\u012fb&8d<b|l vo ].mxl$v1+s$[!c\u012fb&b|s#l"l!vo ]/mxl#i%9tz40b&Bd>[!c+s"l"l!vo ]/mxl#i$5j40b&<d>[!c+s"l"l!vo ]/mxl#\u0ff0b&6d>[!c+s"l"l!vo ]/mxl#._b&[!c+s"j\uff52l o ],ml$b-0b>k\xd1l vo ].mxl$v1+s$[!c\u012fb&@d<l o ],ml$b>k6l vo ].mxl$[!c\u012fb&8d<j!0b|s#l"l!vo ]/mxl#i%9tz40b&Bd>[!c+s"l"l!vo ]/mxl#i$5j40b&<d>[!c+s"l"l o ],ml$b>k6l!vo ]/mxl#\u0ff0b&6d>[!cj#$!=+s"l"$!=+s"l" s9y\u0136o ]%v,-n|jqewVxp{rvmmx,&eff\x7fkx[!cs"l",%roc|a.Pal",&nbanb\x7f@al"v,*mnxNaadtjg[!mx$"2d[!cs#l#,$bjhs,*;?|u.|uc{ual#v,(n`fgXhv{mx$$\u9f98\u0e11\u0e20\uacbd2<[#c}l#,*ycmiaxR}ga2al#,+xdby@vwav`M1al#,)zbd{Nac\x7fc,$hlkbal#v,#bvfmx88802[%c}l#v,&uszfanmx[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k4l l!o ],mb%^l$1+s$j\x05l  s:y:(1o ]:i\'1ps9wxb& ) %{s /  s;y>0s"l"l!o ],mb<k+l"^l"1+s"j\bl  s<y\xb6o ]!n s l vr\'setDatex1[!c}l vr(setMonthx5[!c}0l v,1vwg@|{rbvt~S{xlEUmx[ cb-s!l vr(setMonthx;[!c}0l v,1vwg@|{rbvt~S{xlEUmx[ cb-s"gr$Mathvr#minxl!l"["c s=y\u010f(\u0105o ]%v,-n|jqewVxp{rvmmx,&eff\x7fkx[!cs l v,*mnxNaadtjgmx,%rceoe[!cs!l!v,,khzJhew}g|yymx,9N_Y[QA{ECWD{WCILLXN^rGAV^[!cs"l!v,,khz_qcs~qasemxl",5@XZYJQ^XBHZnemq{rceoem[!cs#l!v,,khz_qcs~qasemxl",7BVT[HWXZ@rdlgawcuw~oikam[!cs$l#$!/+l$+ ) &{s $   s>y\u0129[ s o ]&,\'wd|mbb~ms!l!v!k#}[ s"0s#l#l"o ],mb<k\xe9(\xdel"l#ms$[ s%0s&l&l$o ],mb<k\\l$vr$itemxl&[!ckCl%vr$pushxl$vr$itemxl&[!cr$type[!c}l&1+s&j\uffd7l$r$name$ +s&l$r\'versionk3l&l$r\'version$ ++s&l&l$r(filename$ ++s&l&l%vr$joinx$ [!c+s&l vr$pushxl&[!c})  l#1+s#j\uff4al vr$joinx$!_[!c s?y\u1c6b,)deec~~nst,*yjb~#|uc{u,%vcuao[#s gr&Objectn s!gr&Objectn s"l %s#l#u&k\u0101s$o ]%v,-n|jqewVxp{rvmmx,$wugi[!cs%l%,)`dei\x7fF[]],-`cb}|\x7f~yx{{tpal%,%vr~dlm,(nfd\x7f_dtj,$37v\x7fal%,%vr~dlm,*ldbyHn}x~jl$ao ]%,$fjb~mv,+j|}katRzzxqmxl%[!c}l!l$l%r+offsetWidthal"l$l%r,offsetHeightao ]%,$fjb~mv,+yi`ayuRzzxqmxl%[!c}j\uff39,+Jbiocu1_|zz,%Dtnie,+J~doc0S~rw~,,M\x7fgn|1Zvvgs`,(I{cj`-C[,,M\x7fgn|1\\rfgy`,5Td~yu:Ishp{EE\x02np\x05dHDM,0Qc{rx5Cyqzu\x7fy=SL,8Zpnhho{~M\x01tFVD\x06tIGY\vaB@@,,Nbad0P|g}dcv,1S}|\x7fxwy8Vv\x7f<NjfLD,\'Dieci~d,\'Didhyel,,Olcmbxs3Ytb\x7f,\'Dmg~~~t,.Mj~egam5Qxlqsx,2Qvzacea9IxtrqsBNMH,*Idadm/Cp|`,-Nabyr2@u{e7UJ,(Kfdxcao|,\'Dg|xbi\x7f,+Hcx|fuc2]qb,(Ohxjab`k,&Abfl|j,\'@mfxlel,)Aogzhzfsp,.Fj|gwg}vw7V|o~,&Ojxhi\x7f,-A{lyus3Vg\x7fppm,2^fw|rv8Z{wptymAQJZ,.Bzsxvr4Vyykvv~,*F~odjn0Wsk,-A[LYUS3SGWY\\\\,2^fw|rv8Q{uxjlvTHLD,+Gyngkq1Arzf,6Zb{p~z<N\x7fqS\x01vZT@QUA]OY,3_av\x7fsy9Izrn>JNHAL@@,4Y|uewju}h=M~NR\x02pAWOA,&Khfhid,0]~||`lfr8Zuioth~,)DY+Kbzgyr,*GX,B{{|~}x,*GX,]I`dy{p,7ZK9H~zxlzNBG\x03wDHT\bzOYEK,-@]/Cp|`4Fseq\x7f,(EZ*Xi\x7fgi,&K^Z@KO,*GR^DOK0A@\\,(Xhfjxd``,1As\x7fua\x7fyw9VrrrjfPD,+Xijaj0A`zza,,_hi`u1Apf|fc,([lmdi-[F,.]jw~w3A\\6[q~ro,1Bwt{p6BQ9I~qt|pLE,/\\uv}v4@_7K`wysq,&Rf`fgj,%Qojmz,/[y|w`4[s`8Kuv}s,2Fzype7V|m;Nrs~N\x01rp,,X\x7fkmerzv`5[D,\'Qm{njbl,)^cekigawb,+\\eciky\x7fu`4\',+\\eciky\x7fu`4&,8Y{{\x7fu=SK\0bMM@@HTMM\ngEJF[,4Uvws}tc;YsymAWGG\x04ics,0QU]QQ5UVKUUU<MLP,.Ok\x7fsw3Stdvuvt\x7f,2SW[WS7_XHZQRP[\0qpl,)Hmnbnw/VS,\'F`hxdbd,3Rxwselli;YejmA\x01`LHA,/N|swa``e7U|~rip,(Iemn~doa,*Kfmwaau1PG,3Rypd~{xt;HdnzWSKWAW,=\\szRHABJ\x05r^XL]YEYK]\x10r]]PPXD]],.ObucFjdp6Z|9XO,\'Ffmkgy~,+Jbj}n~p2]qb,*Kek~oaqDBP,-L`{y`gv4Zz~n|,)Hzj~ldfdp,.O\x7f`}w3W}wy{|hb,1Pbcxp6Twuui<XspJH,3Rdezr8J^;[rjwIB\x02mAJ,2Sauw\x7ft8Mckyn{kTHLD,&GUKAOY,(I[DD,]\\@,(I{x~\x7f-L[,,Mx|`bp2Pz5TC,0Qgs}`Rwe||:Yw=\\K,0Qgs}`Rwe||:Vx=\\K,&GQMGCY,(Ip\x7f\x7fdlwn,%Ggilp,0Rp|txt6Dyw}zq=SQ,+Imce/W~f{}v,0Rp|xSzb\x7fqz:Vx=\\K,+Im~ejbg{\x7fxp,4Vte|}klrpq{?oMF\x03bDEB,&Df|hdl,)Kk\x7fmciLxt,,Nl{jb1P|pzx~,*Hjyeozc1+ ,\'Eisedgl,\'Emef+AY,%Gcjjf,.Lj~vgzua6Us9XO,.Ljb}{}4Fwyk9\\Y,3Qqgz~v9Izrn>Yb\x01fFIL,4Vpdyyk~;QI>\\OOFFJVCC,2Pvf{~vj}\\zouwpN\x01`w,.Ljb\x7fzrfq[x|9XO,*Hbk-Mnc}}},\'Eagdn~I,.Lcqryrpqse8PNX,-Obnyc_w]AU7LM,)Keoccg/\'#,2P|pzx~8.(;SqzlTXNF,3Q{qyyq9-)<Ns~LMABTV,)Keoccg/]E,/M\x7fu}}}5[C8[vz\x7fv,3Q{qyyq9WO<^qqDDLPAA,;YsyqqI\x01ow\x04uIT\\LX\voBC_BTA@QQ,2P|{~e\x7f}u|;Ods}OM\x02\x14,\'Eg|foi\x7f,,N\x7fok|tk3\\txs,0Rcswxpo7Pxt\x7f<TJ\\,,N\x7fkbu\x7f2Qp5TC,.L}yes}z|u7Zvv\x7f,(J{ejhzov,-O|`gp~\x7f}t6Y}n,,N\x7faxq}~zu@FT,/Mbda{4Fueqin;QI,.Mn|xt|f{\x7fvv9\\Y,*Ij`d}{\x7f1_G,,Olbcyv`rd}se,\'Dignj~l,0Spa\x7f{{Ygv\x7f{xy=\\K,)Jkxxhbcqc,\'Dmg~jy\x7f,\'Dmskebh,(KN*Dahin,(KN*_e`k|,*Icmaem\x7fp`w,-Nfn|zp|ugr7K\\,+Hdlbdtdagqg,,Oeo}|tad{gb\x7f,-Nfnbewa4Wr7ZM,*Icm\x7fzjb1PG,\'D`h\x7fhi\x7f,0Syw\x7f`}{^LZ:Yw=\\K,\'D``fgi\x7f,)Jfj~h`k\x7f\x7f,3Pxtdrv}uu<^qqDDLPAA,0S}}zgaseZu{xw=\\K,&Ehkace,*Id`b`aq1_G,*Idb~zn~e{r,,Oba\x7fuc2Qxtu|,+Hc}~jba~r`p,2Q|desehu{oy=YpTIK@,7Twij~nmr~TD\x02dKQNNK\thD@I,8[vjkyonsAUG\x03cJROAJ\ngEJF[,2Q|desehu]thu>]D\x01`w,&Ehzkog,*Id~ign0_wd,)JeyhdoZ@R,+Hc\x7f`jbbf|zp,\'Dg{eeiy,&Erkbed,(K|xgv-C[,(Lh\x7fe\\h`g,\'Ci|zcec,%Agqam,+ON-BLT1Fvye,)MOGENG@EB,\'Cmggj~f,(LOAje ]M,%Aocg},+Oeabj~xsFDV,#GMK,)Me`Oeob`p,%Ais}d,(Lf~~aNfj,&Cez`gj,4Qqavj}szr=M|RHRW\x04lrd,(Meo{dl`{,5Pxptpis<,/.\0wKUEFC\x07j},,Ici}qgwag5[C,2W}sgwa}ki\\sivvC\x01`w,-H|nc1P|xq6^LZ,-H|nc1Vvy|6^LZ,.K}qb2_}r~c8PNX,/Jbpa3Ypr~mt:RH^,+Nyn|`cxsFDV,(M|zci`gn,-H{\x7fxt\x7fzu5CTYJ,)L_YC^ZF\\T,.Kw\x7feq !%6U|9XO,(Nhdl_b`h,-Kkcyi2G}az~v~,(N`rnh~w|,&@HF]CE,2T|{az~\x7fqn;QI>SIFJW,%Ciu|l,*Lymce]etz\x7f,*Lymc}fcrs},1W`vqsdz/++;^qu?bu,*Lyih}fqDBP,0Vcwvgao{}9Ixntnk,0Vcw}w}6D{kskh=SK,1W`}\x7fRycpPNX<_u?bu,(N{\x7fbxjk},(N[__EJK],&@r||xj,,Jxzzbp2Q\x7f5TC,,Jxzzbp2_`5TC,,Jxzzbp2^p5TC,.Hzdd`r4OT{s9XO,.Hzdd`rVywts9XO,(Ohhyebbn,+Lmabfqcv3VA,\'@i|~jad,)Nonvl._b~,-Jk`}tfa&&\'7ZM,0Wt}~qad%+(:Sj=\\K,0Wt}~qad%+(:Wh=\\K,1Vw|Gywu8.*(<Qj?bu,2Uv{Fzvz9-+/=F]D\x01`w,$Clan,)Ncg`-]n~b,,Kdbc0Bs}g5[C,6Q~tu:H}sm?mu\x02`KKBBFZOO,?XIMN\x03wDHT\bd~\viUZ\x0fs^\\WQ[ER\\\x19xTPY,4S|z{8J{uo=KsTSC\x03fJJC,>YvLM\x02pEKU\x07}E^YM\rl@\\U\x12p[[RRVJ__,%Bot`h,=ZrpUBGPP@T\x07e}\nnTY\\N\x10r]]PPXD]],&AH\\AKF,+LCYFN]1P\\XQ,/H\x7fdvj4Zzs8Jnbpx,+Lcxjv0Bf|aa,2U|aqo_yw~osrrzD\x01`w,,Kb{ki^^@`5TC,2Uf~tdvlp:H}sy~M\x01om,%Bskad,(O|fbaNfj,\'@}gmxye,*M~bj}zxRzv,+Ly\x7fcz{y{3Y[,0Xpwg`pxd{qm~uq{m,3[ugzxo9Itptz?iUCOMF,*Bj~\x7fgawe}},\'Omh~ci\x7f,(@lc\x7fe-]L,(@lc\x7fe-ZL,$L@JQ,&Nbzhfo,/Gyvz3@zarj9N~di,9Qsi}zwqO\x01iBOP\x06`G]BBO\r~]_\x7f,4\\|dv\x7fptt<PwqCIM\x03tWIi,,Dbki|t`3@pnc,1Yg~u{ec8,(*<^p?bu,-E{bq\x7fag!\'\'7ZM,0Xd\x7frzfb"*(:Wh=\\K,1X\x7fcf|xc8TN;Ou\x7f{OV,0Y\x7fqzgpr.((:Yx=\\K,-D`lybww-%\'7ZM,0Y\x7fqzgpr.((:Wh=\\K,+BBNAAC^^R@T,.Gav~`~uy6Ewt{u,.Gav~`~uy&&)9XO,*CEXH\\\\DPFV,\'Nz`y^\\N,,E~e`\x7f}s3Dzbv,*@j\x7f`gauDBP,(Bhpq,AK[,&Lbfzee,&Lb{}oy,(Bfan~`oa,)C\x7fboh.FDR,+@mokc0Sy3VA,,Gllj|1G\x7f`5TC,\'Li`fj\x7fl,%Ngn\\`,\'Liecekl,1Zs}ztrv8J{u{|s?mo,\'Li{~bgl,.Enew\x7frz{6U|9XO,+@mxhbq\x7f|3VA,(Cagn~-[F,,Gbjlxxs}s@FT,&Mhc`fj,*Ad~d`aq1PG,+@~d}{u\x7f2Z@V,)Bx~bjzgua,/De\x7fagxpd7Kzhrli,&Jfg)_B,%Igs`h,*Fniaoxquwv,-Ak{dt`3Szb\x7fqz,*Fnzh`f}1_G,\'Kaes^\\N,*Fbxeahbpb{,0\\xf{{rdvhq:Wuzvk,+Gcci/Yb~rzq,)Esoel`/RE,\'Jindnxb,+Fmdoatcs3SQ,3^uywnyu{v<N\x7fqG@O\x03ik,-@ocwd|3Szb\x7fqz,&Kffnkg,(Ehxbkbbk,&Kfz`ee,+Fm\x7fejb1Tvxa,&Kfzbo\x7f,\'Ji{fnxy,+Fmyg|ct2Z@V,9T{oio\x7f?mu\x02pGWOW\\\tiJ\\DZN\\B,&Kba{sd,)Dob~ta/EX,2_zwgydw\x7fn;Tts~L@[B,2_zwgydw\x7fn;Vu{qGiGJ,5X\x7ftjvitzi>QEV\x02wEL\x06k]L,1\\{pfzex~m:Kt|ylp@,0]xqa{fyql9Nzu=Rz,0]xqa{fyql9Or{ukm,/Byr`|gzpc8@{Syt,2_zwgydw\x7fn;Et>]AHVJ,\'JagmGeX,-@gaw]{FK]]D[J,2_zzrZ~MFRPO^M2eYVa,,Ad`h\\xG>QmbU,&Knf`ee,*Gbbdaa0A`|,&Knz`kf,,Ad|fq|2U}mss,\'Jaz~yma,&Khllxe,-@akuc|3Zz87*),6[xvx:Wun\x7f?sNNJ@\x05osk\t~\x7f,/B\x7f\x7fu|x|wy8[{rht,$IJHH,)Ded`Oa}q\x7f,)Dxx,Hoyub,+F_-Bf~tVaub,)DY+Ad`lx~,*GX,]Cf~rz|,6[D8K\x7f}yo{qCD\x02pT@ENIE^R,,A^.ZY1U|`}\x7ft,(E]*Nty|n,%HSTMF,\'J^)Hd`d,&Hfllof,(Fhx`e~gb,%KCQAZ,+Eiz}/W~f{}v,-Ckxc1U|`}\x7ftUM,+Eiz}H\x7fez3VA,0^xstugw7]w}i}k{{,-Cgnwp`r4Fy{q},*Ddxhy`bezj,\'I[`gXyc,%K\x7ffdh,.ALB1S3Qmbrv}\x7f\x7f,+D`i.Lu\x7ffffl,3\\xq6Rv~vrou>KEYV\x03iq,$Kk\x7f\x7f,\'Hfpr+NY,&IW\\@GJ,/@bxkr4Fwy\x7fxw;QS,%JUFCH,/@jYs}p|uey\x7fn;^I,0@p~rwp6D{kskh=SK,\'Wiysyy~,)Ykyoecj~e,)Ykyxt.CUE,\'Wmnkxy~,(Xlx{iy{n,3Cqgfrll{;HtjsIOE\x03iq,*ZnxdznR~~w,(X`i`{dmd,4Dywylx}~rxj?cIGQKNCB,(Xekrndbc,(XDcekAgZ,-]Cf~v^zA8Sol[,,\\ba}0C{p|tds,&Vh{}oy,/_\x7fbfvfWyswws;^I,.^]Y_QV@ZAY8U_O,(X{cxxd`n,+[XOo}~d\x7f3VA,*Zrxeoh\x7fcs`,%Wgf~`,+Ymjk/Yes\x7f}v,%Wgqal,/]ysp|z$%&8[~;^I,(Zfi`{hbc,2@|w~artu:XsszzNRGG,3A{v}`}uv;YejmA\x01`LHA,#Qka,%Wijig,.]n{zs\x7f4Xw}yuvz,,_l`{q1Tv4YSC,*Yjzbwj0]WG,\'Tklz\x7f~h,&Udz`z\x7f,.]lbxbg4XB7Zvv\x7f,)ZIYE]ZF^P,&Ubz`lj,)Zoyeko/RE,,_h|fvp2G|5TC,1BzvxysnNvvzri{?bu,([aoy{bak,-^f`~p`3Vtxptx,/\\x~epugr7_vnsu~,&Uoz|~b,)Zclboanbu,*YB@F]LBTW],&UneAob,1B{~dy\x7fqq|~;]o\x7f}IB,7Dqtjwu{wzD\x01cQEGOD\boCSII,&UneZ\x7fe,+Xe`]z~<Wk`W,1B{}|tzv8J{u{|s?mo,/\\{tfp|5Dx{rm~pq,$Wnof,+Xalbc0W}}`f,([gk{,DZL,/\\~t~\x7f4Gybv}rzry,&Uhkbo\x7f,.]`egw}}g6[l9XO,.]{qrqr`z$%*9XO,\'T|lkfi\x7f,\'T|ldhea,)Z~d~tl`\x7fz,&Usqefd,&Urj~kr,0Cf{`#\'\'7Zuq^d=\\K,/\\gxa`-$\'7@Zw;^I,\'Tqeljic,+Xucmgb~2_QA,&U~{}of,/[q|{\x7f4Fwy\x7fxw;QS,)]ohdcglq},(\\lfnxt~j,0Dt~fs`6Dyw}zq=SQ,/[u|bfg5Evvj:RH^,(\\lxfecoc,(\\aeenx|f,2Fauq\x7fcqvtzp=_mACK@,&Ruicke,*^YMGOA0A@\\,\'Sz`y\x7fmc,\'S}k\x7fgm\x7f,%Qsioh,)]}+Oh`/]E,3Gc5Urv9WO<^qqDDLPAA,>Jh\0bGM\x04hr\x07kFDOIC]JT\x11wK@GW\x17zVV_,.Zv`~Gcf|q\x7fl9XO,\'Rf`id~c,\'Rf`|n~~,4A{\x7fa}ki;_X>*\x15\x01oF@LSJ,1D|zbpdd8ZuuxxplEE,&Ss{hkc,(^hmjnb`k,$Rdhn,&Pnbhsj,.Xf~t`3\\txs8PNX,(^`y~ma[F,\'Qa\x7fkghd,/Y|pvzy|d7Kzhrli,&Puagnj,+\\i~zby\x7fagqg,\'P@@^EIT,*]bhh.Cqe{},-Wo\x7fvT~\x7f}eb7ZM,-Wo\x7fvYg~zfb7ZM,0Jpbu\\`{ykm:_q=\\K,\']iylbbb,/Uec{p|5T{s\\b;^I,,Vx|fsy2Vl5TC,(R^KocokI[\u0206s#[ s$l#%s%l%u&k\u014as&l %s\'l\'u&k\u013bs(o ]%v,-n|jqewVxp{rvmmx,$wugi[!cs)l),)`dei\x7fF[]],-`cb}|\x7f~yx{{tpal),%vr~dlm,(nfd\x7f_dtj,$37v\x7fal),%vr~dlm,*ldbyHn}x~jl&$!,+l(+ao ]%,$fjb~mv,+j|}katRzzxqmxl)[!c}l)r+offsetWidthl!l(md#!==v!k;}l)r,offsetHeightl"l(md#!==s*o ]%,$fjb~mv,+yi`ayuRzzxqmxl)[!c}l*k>l$vr$pushxl#vo ]-mxl&[!c[!c}j"j\ufeffj\ufef0l$vr$joinx$!,[!c s@ysul d\',typeofo ])d#===v!k)}l zd#===k#$  ul d\',typeof,\'egffnmcd#===k-l k%$!1j#$!0 l  sAyC(:o ]\',.}jcb{|zFbxjx}~m!! ) %{s t  sByA(8o ]\',,`bmn|Bf|ftqrm!! ) %{s t  sCy>(5o ]\',)`doiukkTSm!! ) %{s t  sDy6o ]!n v,\'`m}^bahmx[ c sEyJo ]Ao ]Dz[ c&o ]Ao ]Cz[ c&+o ]Ao ]Bz[ c&+ sFy`o ]\',&udzloems l ,%roc|amo ](+l ,&nbanb\x7fm+o ](+l ,*id`b|Kuaf{m+ sGyUo ]\',&udzloems l ,*k}mdbXyuf{mo ](+l ,+jzlgcXt{t|am+ sHy\xc7gr\'Promisey\xb8,*mnxOo{dt`jo ]&d"ink\x9bo ]&v,*mnxOo{dt`jmx[ cvr$thenxyuo"] l ,(kakykd`hmo ](+l ,,oeo}wx|t@|{rm+o ](+l ,/kybq{ugq~v~Nrqxm+o ](+l ,%icqmem+&} [!c}j&l $ &} n! sIy\xdb,.cnhE}fw}Fxqwnhs 0s!uo ]&l md\',typeofo ])d#!==k+o ]&l ms!jEuo ]&l md\',typeofo ])d#!==k)o ]&l ms!(Ho ]%vr+createEventx,*^dynfJft|g[!c}ts") &{s#fs",,ccz`erz``tdco ]\'d"ins#l!$!_+l"+$!_+l#+ sJy\xe5ul!d\',typeof,&usz`dld#!==k! l $!=+s"l!vr%splitxgr&RegExp$$[;&]$ n"[!cs#0s&l&l#o ],mb<k\x8dl#l&ms%l%vl#mx0[!c$! d#===k8l%vo ]0mx1l%o ],m["cs%j\ufff3l%vo ]-mxl"[!c0d#===k;l%vo ]0mxl"o ],ml%o ],m["c l&1+s&j\uffa6 sKyo(e$ s!o ]$k=o ]$vr\'getItemxl [!cs!l!k#l! o ]Kzl o ]%,&ehgbcnm["cs!l! ) &{s!$   sLy\xf1(\xedo ]$k7o ]$vr\'setItemxl l!["c}i\'ehjpxc0s"o ]%,&ehgbcnl ,Q\f\t\x13QMF^J\\I\x06qRP\x13`src\x17 6gzy{{l}~u`ahcdu\x03\x03\x1bbz+=)6bOZ+ao ]%,&ehgbcnl $!=+l!+,*1+iu~fbta.+o ]!o ]!n v,\'`m}^bahmx[ cl"+n!vr+toGMTStringx[ c+,)2*{myf2?*+a)   sMyJ(7gr)WebSocket,$bdokn!}) /{s l r\'message  sNy7gr$evalvo ]+mx[ co ],m sOy\u031co ]\',1CFPDpse[vtuy~jvOOmv!k<}o ]\',4yzlELZJ~yo]pNOG@PLIImv!k?}o ]\',7`}{qrhOJ\\pDGQgJHIMJ^BCCms gr\'Promisey\u02b0(\u02a3o!] k\u0295o!] gr&Objectn vgr&Objectn v,<oikq\x1aRVVJ\vJ\tOFEL@H\0L_\\\b\x02\r\x06\x06\x05q$urls[!q*iceServersn!s!y! s"gr&RegExp$^([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})$ n"s#gr&RegExp$U^(192\\.168\\.|169\\.254\\.|10\\.|172\\.(1[6-9]|2\\d|3[01]))$!gn"s$l!vr1createDataChannelx$ [!c}gr*setTimeoutzy)o"] $ &} \u0224["c}l!vr+createOfferx[ cs%l%gr\'Promised*instanceofkal%vr$thenxyAo"]!vr3setLocalDescriptionxl [!c [!cvr$thenxy! [!c}jcl!vr+createOfferxyJo"]!vr3setLocalDescriptionxl o"]"o"]"[#c} l"["c}l!y\xa3l vk.}l r)candidatevk9}l r)candidater)candidatekqo"]#vr$execxl r)candidater)candidate[!cs!l!kDl!] vr%matchxo"]$[!cs"l"k*o"] l!] &} q.onicecandidatej&l $ &}) ){s!l $ &} n! sPy\xa8,@XYZ[\\]^_PQRS\x18UVWIIJKLMNO@ABCDEFGvr\'replacexgr&RegExp$$[xy]$!gn"yagr$Mathvr&randomx[ c@b*0b|s!l $!xd=k$l!j(l!3b&8b|s"l"vo ]+mx@[!c ["c sQyxl r&lengthRd#===keo ]<z0l vo ]0mx0P["c["cs!l!vo ]+mx[ cvo ]0mx02["cl vo ]0mxPR["cd#===  sRywo ]L,%qrdam&s l vk(}o ]Rl &k#l  o ]Qz[ cs o ]Mz,%qrdaml o ]<z0l ["c+vo ]0mx0R["c["c}l  sSy\u0107o ]%,$fjb~ms"o ]%v,-n|jqewVxp{rvmmx,&udz`z\x7f[!cs#o ](gr(parseIntz\u2740gr$Mathvr&randomx[ cb*:["c+$!_+o ]!n vr\'getTimex[ c+s$l ,)jkg`ool{,l$++s l#l q#srco ]\'l$ySo!]!l &}(Go!]"v,+yi`ayuRzzxqmxo!]#[!c}o ]\'o!]$-)   al"vr+appendChildxl#[!c} sTy\u0116[ s"0s#$ s%0s&l&\u0130b<k/l"l&l&al&1+s&j\n0s&l&\u0130b<kel#l"l&m+l vo ].mxl&l o ],mb%[!c+\u0130b%s#l"l&ms$l"l&l"l#mal"l#l$al&1+s&j\uffd40s&0s\'0s(l(l!o ],mb<k\x8al&1+\u0130b%s&l\'l"l&m+\u0130b%s\'l"l&ms$l"l&l"l\'mal"l\'l$al%o ]#vo ]*mxl!vo ].mxl([!cl"l"l&ml"l\'m+\u0130b%mb^[!c+s%l(1+s(j\uffa9l% sUy\u01bbl!kW0s"0s#l#l o ],mb<kDl l#mr!pk2l l#ml!l"v1+s"mq!rl#1+s#j\uffef$ s"l vr\'forEachxy9o!v]"o ]Al r!r&,"\\]++q!2 [!c}l"o ]Ez[ c+s"o ]Qz[ cs#gr$Mathvr%floorxl#vo ].mx3[!c8b/[!cl#vo ].mx3[!c8b%+s$l#vo ]0mx44l$+["cs%o ]9o ]Uzl%l"["cl#+&s",T\\ABGK\x03\x15\x14N^\x10L.21\'/k%(%f=..b**&816\v<817v\fis>13\f\x04\x01\x17\r\n\bXs&l&,"s>gr2encodeURIComponentl"&+$!&++s&o ]Tzl&yngr$lcspvk+}l ,%rceammkVo ]\',,`bmn|Bf|ftqrmv,\'tm}C\x7fi`mx,\'XW~oieil ,%rceamm["c} ["c} sVl y\u0676o ]&vk%}o ]\'vk%}o ]%!k! gr&Objectn v,)z~j~yZf}tq!nv3q!fvo ]Eq!tgr&Objectn v,)hhb`dzfubq!nv3q!fvo ]Fq!tgr&Objectn v,&eff\x7fkxq!nv3q!fvo ];q!tgr&Objectn v,*~bah}{q|b"q!nv3q!fvo ]Eq!tgr&Objectn v,(xek\x7fjb|bq!nv0q!fgr&Objectn v,3{ugr`yk\x7fXss}jRSGMG\\q!nv0q!fgr&Objectn v,,hhxfst_vyzdnq!nv0q!fgr&Objectn v,(dhdlylijq!nv0q!fgr&Objectn v,)ekekxohubq!nv0q!fgr&Objectn v,*xn\x7fbbzdx}}q!nv3q!fvo ]Gq!tgr&Objectn v,/nfp{\x7fFpextlnrssq!nv3q!fvo ]Hq!tgr&Objectn v,)ziyih`[\x7faq!nv1q!fgr&Objectn v,*yh~hka\\ttgq!nv1q!fgr&Objectn v,0ttdzwpF~`|vI}iwpq!nv1q!fgr&Objectn v,*zyci{ldBgqq!nv0q!fgr&Objectn v,\'ei}~n~tq!nv3q!fvo ]Iq!tv1q!pgr&Objectn v,)}e~oeGav~q!nv3q!fvo ]Jq!tgr&Objectn v,(|`gnvb`jq!nv3q!fvo ]=q!tgr&Objectn v,*~bah}{q|b!q!nv3q!fvo ]Eq!tgr&Objectn v,\'`x|Cejbq!nv3q!fvo ]>q!tgr&Objectn v,+a\x7fKaadb^zgaq!nv3q!fvo ]@q!tgr&Objectn v,+{`xif~b^zgaq!nv3q!fvo ]?q!tgr&Objectn v,*~bah}{q|b q!nv3q!fvo ]Eq!tgr&Objectn v,)|yn~Lij~eq!nv0q!fgr&Objectn v,*o}i\x7fM`\x7fz{vq!nv3q!fvo ]Lq!tv,(|}U|iogkq!mgr&Objectn v,+xucznhT`a{gq!nv3q!fvo ]Nq!tgr&Objectn v,,blzfft^vzrb\x7fq!nv3q!fvo ]Oq!tgr&Objectn v,%wrdAYq!nv3q!fvo ]Pq!tv1q!pgr&Objectn v,(dfijxdaaq!nv1q!fgr&Objectn v,)oz]i\x7f}f\x7f\x7fq!nv4q!fv,%4(1&9q!rgr&Objectn v,(kecnbyGkq!nv3q!fvo ]Sq!tgr&Objectn v,*~bah}{q|b\'q!nv3q!fvo ]Eq!tgr&Objectn v,+ntykatW{vxqq!nv4q!f[As [ s!l *%s"l"u&k\u0116s#l l#mr!f0d#===k<l l#mo ]Ao ]&l l#mr!nm&q!rj\xe6l l#mr!f1d#===k7l l#mo ]\'l l#mr!nmq!rj\xbfl l#mr!f2d#===k7l l#mo ]%l l#mr!nmq!rj\x98l l#mr!f3d#===k\x88l l#mr!pkYgr\'PromisekKl!vr$pushxl l#mr!tvr$callxl l#mgr!mm[!c[!c}jEl l#ml l#mr!tvr$callxl l#mgr!mm[!cq!rj\uff24gr\'PromisekVgr\'Promisevr#allxl![!cvr$thenxy0o ]Vzo!] l ["c} [!c}j(o ]Vl &}gr\'queries q#dfpl y\u0533i$1ek1s$ugr#tacd\',typeofo ])d#===k&o ]<s#ugr#tacd\',typeofo ])d#!==vk\'}gr#tack4)zgr#tac$! +0o![#cj?o ]"l$b%s"o ]"l"l$b*b^0d#>>>s!0s%l#z0l!$ +["cs&y\xb3l !v!kE}g,$NVIImv,)z~yecifvhmxl [!c$"{}d#===k#$  g,&Iebli\x7fmv,$o`\x7ftmxl [!cv,$wjtsmx[ cs!$ s"0s#l#l!o ],mb<kEl"l!l#m[!$!=+l l!l#mm+$!&++s"l#1+s#j\uffeel" s\'y\xd1l !v!kE}g,$NVIImv,)z~yecifvhmxl [!c$"{}d#===k,gr&Objectn  g,&Iebli\x7fmv,$o`\x7ftmxl [!cv,$wjtsmx[ cs"gr&Objectn s#0s$l$l"o ],mb<kQl!k5l#l"l$ml l"l$mm$ +aj0l#l"l$ml l"l$mmal$1+s$j\uffe2l# s(y\xb9l v!k#}$ s!l!v,\'umyfjohmxgr&RegExp$=(http:\\/\\/|https:\\/\\/)?[^\\/]*$ n"$ ["cs!l!vo ]-mx$!?[!c/d#!==kBl!v,&urjz~ymx0l!vo ]-mx$!?[!c["cj"l!s!l!k$l!j#$!/s!l! s)y\xeel v!k#}$ s!l!v,%hgskamxgr&RegExp$.[?](\\w+=.*&?)*$ n"[!cs"l"k5l"] v,&urjz~ymx1[!cj"$ s!l!k4l!v,%vvka}mx$!&[!cj!zs#gr&Objectn s$l#ki0s%l%l#o ],mb<kYl$l#l%mv,%vvka}mx$!=[!c] l#l%mv,%vvka}mx$!=[!c]!al%1+s%j\uffdal$ s*$ s+ul d\',typeof,&iebli\x7fd#===k\u0130l r$bodyvkK}g,$NVIImv,)z~yecifvhmxl r$body[!c$"{}d#!==kr,*hdhtQgqbz.o ]<z0g,$NVIImv,)z~yecifvhmxl(zl r$bodyl r+bodyVal2str["c[!c["c+$!&+s+l*l r#url&s,l ,%tsbzpmkEg,&Iebli\x7fmv,&gt{`memxl,l r%query["cj"l,s,l+l\'l,&+s+l+,)yk\x7fdcobu,+l)l ,#vvim&+$!&+s+l+,)}~T{hlft,+,& r}`n6+s+j$l s+o ];z[ cs,o ]5l!&o ]5l!i\'1z141z4b/0d#>>>&+o ]5l,l!b^&+o ]5l#zl&o ]&,)|yn~Lij~em["cl$b%@d<l#zl&l+$ +["cl$b%b|&+o ]5l%8d<@b|l!b^&+o ]4l"&+s-o ]50&}l- q$sign ',
        [
            Object.defineProperty(l, '__esModule', {
                value: !0,
            }),
        ],
    );

    return l.sign({
        url,
    });
}

global.window = window;
global.document = window.document;

module.exports = generateSignature;