var ICONSZ = 150;
var PADDING = 20;
var model = {
  cursor: {
    x: 0,
    y: 0
  },
  columns: {
	 "QUICK": {
      index: 0,
      title: "QUICK",
      selectedIndex: 0,
      active: false,
      icon: 'style',
      items: [{ title: "HEN 1.8", desc: "Inc: self spawn & usermode printf to klog patches", version: "1.8 by Zecoxao", active: false, icon: "", expage: "payloads/vtxhen18.html" }, { title: "BINLOADER", desc: "Enable only BIN LOADER function on port:9020", version: "1.7 by OpenOrbisTeam", active: false, icon: "send", expage: "payloads/binloader.html" }, { title: "DUMPER", desc: "Dump disc/PSN games to USB: with/without patches, merged/unmerged", version: "1.8 by xVortex", active: false, icon: "archive", expage: "payloads/vtxdump.html"}, { title: "FTP SERVER", desc: "Start an ftp server and connect to your PC to your PS4", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"}]
  },    
	"HEN 4.74": {
      index: 1,
      title: "HEN 4.74",
      selectedIndex: 0,
      active: false,
      icon: 'gamepad',
      items: [{ title: "4.74 HEN", desc: "Inc: self spawn & usermode printf to klog patches", version: "4.74 by Zecoxao", active: false, icon: "lock", expage: "payloads/PS4Brew4.74.html" }]
  },
  "HEN 5.05": {
      index: 2,
      title: "HEN 5.05",
      selectedIndex: 0,
      active: false,
      icon: 'gamepad',
      items: [{ title: "HEN 1.8", desc: "Inc: self spawn & usermode printf to klog patches", version: "1.8 by Zecoxao", active: false, icon: "", expage: "payloads/vtxhen18.html" }, { title: "HEN 1.7", desc: "Runs fake signed content from internal & external storage", version: "1.7 by xVortex", active: false, icon: "lock", expage: "payloads/vtxhen17.html" }, { title: "HEN 1.6", desc: "Runs fake signed content (out dated)", version: "1.6 by xVortex", active: false, icon: "", expage: "payloads/vtxhen16.html" }, {title: "HEN 1.8 + VR", desc: "Enables HEN 1.8 and spoofs 9.00", version: "1.8 mod by Stooged", active: false, icon: "polymer", expage: "payloads/hen18vrmod.html" }, { title: "HEN 1.7 + VR", desc: "Enable VTX HEN 1.7 and VR all in one", version: "1.7 mod by Stooged", active: false, icon: "polymer", expage: "payloads/vtxhenvrmod.html" }, {title: "HEN + SCREENSHOT", desc: "Enable VTX HEN 1.7 with no in app screenshot limitations", version: "1.7 mod by BIORN", active: false, icon: "tab", expage: "payloads/screenshot.html" }, {title: "HEN (LITE)", desc: "Enable VTX HEN 1.7 without the update blocker", version: "1.7 mod by C0d3m4st4", active: false, icon: "loupe", expage: "payloads/vtxhenc0d3mod.html" }, { title: "HEN + AUTH", desc: "Enables VTX HEN 1.7 with AUTH patches", version: "1.7 mod by Björn", active: false, icon: "texture", expage: "payloads/henauth.html" }, { title: "HEN 1.8 + VR + MIRA", desc: "AIO: PSVR homebrew with klog", version: "1.8 by DEFAULTDNB", active: false, icon: "", expage: "payloads/mirahen18vr.html" }, { title: "HEN 1.8 + MIRA", desc: "Run fake signed content. Inc: debug settings, Kernel logging (port 9999/9998)", version: "1.8 by OpenOrbisTeam", active: false, icon: "apps", expage: "payloads/mirahen18.html" }, { title: "HEN 1.7 + MIRA", desc: "Run fake signed content. Inc: debug settings, Kernel logging (port 9999/9998)", version: "1.7 by OpenOrbisTeam", active: false, icon: "apps", expage: "payloads/mirahen.html" }, { title: "HEN 1.7 + BINLOADER + MIRA", desc: "Enable MIRA HEN 1.7 with BINLOADER", version: "1.7 by OpenOrbisTeam", active: false, icon: "input", expage: "payloads/mirabin.html" }]
    },
    "BLOCK": {
      index: 3,
      title: "BLOCK",
      selectedIndex: 0,
      active: false,
      icon: "",
      items: [{ title: "BLOCKER + FTP", desc:"Run to block updates permanently, and start FTP server.", version: "1.3 by Lightningmods & CelesteBlue", active: false, icon: "block", expage: "payloads/blockftp.html"  }, { title: "UPDATE DISABLER", desc:"Run once to disable updates permanently", version: "1.0 by Al-Azif", active: false, icon: "clear", expage: "payloads/blocker.html"  }, { title: "UPDATE ENABLER", desc:"Re-allow updates to download/install", version: "1.0 by Al-Azif", active: false, icon: "undo", expage: "payloads/unblock.html" }, { title: "UPDATE BLOCKER EXTREME", desc:" Blocks every possibly update location permanently", version: "1.0 by Lightningmods", active: false, icon: "language", expage: "payloads/blockEX.html" }, { title: "UPDATE UNBLOCKER EXTREME", desc:"Re-allow updates to download/install", version: "1.0 by Lightningmods", active: false, icon: "sync_disabled", expage: "payloads/unblockEX.html" }]
    },
    "LINUX": {
      index: 4,
      title: "LINUX",
      selectedIndex: 0,
      active: false,
      icon: "laptop",
      items: [{ title: "VRAM1 PSXITARCH LINUX V2", desc:"1GB VRAM + 7GB RAM Linux kernel loader (requires usbstick)", version: "VRAM1 by PSXITA", active: false, icon: "", expage: "payloads/1gblinux.html"}, { title: "VRAM2 PSXITARCH LINUX V2", desc:"2GB VRAM + 6GB RAM Linux kernel loader (requires usbstick)", version: "VRAM2 by PSXITA", active: false, icon: "", expage: "payloads/2gblinux.html"},{ title: "VRAM3 PSXITARCH LINUX V2 (DON'T USE TO INSTALL)", desc:"3GB VRAM + 5GB RAM Linux kernel loader (requires usbstick)", version: "VRAM3 by PSXITA", active: false, icon: "", expage: "payloads/3gblinux.html"},{ title: "PSXITA NOEDID LINUX V2 (VRAM2)", desc:"Set video out to 1080p + unplug PSVR before use (requires usbstick)", version: "NOEDID by PSXITA", active: false, icon: "web", expage: "payloads/linuxnoedid.html"}, { title: "LINUX", desc:"Lightweight Linux kernel loader (requires usbstick)", version: "1.0 by EEPLY", active: false, icon: "camera", expage: "payloads/eeplinux.html"}, { title: "LINUX", desc:"Boots linux kernel from a USB stick", version: "1.0 by Vultra", active: false, icon: "keyboard", expage: "payloads/linux.html"}, { title: "KEXEC", desc:"Kernel loader direct from Orbis OS", version: "1.0 by ValentineBreize", active: false, icon: "widgets", expage: "payloads/kexec.html"}]
    },
    "BACKUP": {
      index: 5,
      title: "BACKUP",
      selectedIndex: 0,
      active: false,
      icon: "backup",
      items: [{ title: "VTX DUMPER", desc: "Dump disc/PSN games to USB: with/without patches, merged/unmerged", version: "1.8 by xVortex", active: false, icon: "archive", expage: "payloads/vtxdump.html"},{title: "DISC DUMP", desc:"Copy content from disc to USB", version: "1.0 by Stooged", active: false, icon: "eject", expage: "payloads/discdump.html"},{title: "PKG BACKUP", desc:"Copy PKG files back to USB easily", version: "2.0 by Stooged", active: false, icon: "redo", expage: "payloads/pkgbackup.html"},{ title: "DB SG BACKUP", desc:"Back up your game saves and important databases", version:"3.0 by Stooged", active: false, icon: "save", expage: "payloads/dbsg.html" }, { title: "DB RESTORE", desc:"Restore your backed up databases", version: "2.0 by Stooged", active: false, icon: "publish", expage: "payloads/dbrestore1.html" }, { title: "DB RESTORE UNDO", desc:"Undo an accidental DB restoration", version: "2.0 by Stooged modded by Leeful", active: false, icon: "delete", expage: "payloads/dbrestoreUNDO1.html" },{title: "APPTOUSB", desc:"Specify mount point and move games to external EXFAT USB for extra storage", version: "4.0 by Stooged", active: false, icon: "storage", expage: "payloads/apptousb.html"}, { title: "APPTOUSB ALT", desc:"Like AppToUsb but purely for USB1", version: "1.0 mod by Jakkal", active: false, icon: "dns", expage: "payloads/apptousb1alt.html"}, { title: "USB FAKE PACKAGES", desc:"An alternative based on pkg2usb by SiSTRO and AppToUsb by Stooged", version: "1.1b by Specialfood", active: false, icon: "usb", expage: "payloads/usbfpkgs.html" }, { title: "DUMPER + AUTH", desc:"Experimental APP + AUTH dumper", version: "0.1(Zer0xFF)", active: false, icon: "gradient", expage: "payloads/dumpauth.html"},]
    },
    "SYSTEM": {
	  index: 6,
      title: "SYSTEM",
      selectedIndex: 0,
      active: false,
      icon: "home",
      items: [{title: "fan_control_505", desc:"control your Fan.", version: "1.0 ", active: false, icon: "whatshot", expage: "payloads/fancontrol505.html" },{title: "AVATAR DUMPER", desc:"Dumps avatar files from user profile. Requires exFAT formatted USB.", version: "1.0 by Red-J", active: false, icon: "contacts", expage: "payloads/avadump.html" },{title: "AVATAR INJECTOR", desc:"Injects avatar files to user profile. Requires files on exFAT formatted USB.", version: "1.0 by Red-J", active: false, icon: "portrait", expage: "payloads/avainject.html" },{title: "AUTH INFO DUMPER", desc:"Dumps auth_info.log. Requires exFAT formatted USB.", version: "1.0 by Stooged", active: false, icon: "details", expage: "payloads/authdump.html" }, { title: "EVERSION", desc:"Dumps kernel to USB. Works on 4.05/4.55/4.74/5.01/5.05 OFW", version: "1.4 by CelesteBlue", active: false, icon: "memory", expage: "payloads/everkdump.html" }, { title: "KERNEL DUMPER", desc:"Dumps your kernel to USB", version: "2.0 by Stooged", active: false, icon: "work", expage: "payloads/kdumper.html" }, { title: "FS DUMPER", desc:"Dumps your consoles file system to USB", version: "1.0 by Stooged", active: false, icon: "pageview", expage: "payloads/fsdumper.html" }, { title: "MIRA", desc: "Enable only MIRA Kernel Logging (port 9999/9998)", version: "1.0 by OpenOrbisTeam", active: false, icon: "nfc", expage: "payloads/mira.html" }, { title: "BINLOADER", desc: "Enable only BIN LOADER function on port:9020", version: "1.0 by OpenOrbisTeam", active: false, icon: "send", expage: "payloads/binloader.html" }]
	},
  "TOOLS": {
      index: 7,
      title: "TOOLS",
      selectedIndex: 0,
      active: false,
      icon: "settings",
      items: [{title: "PS4REN", desc:"Remote Play Enabler, simulates IDU mode", version: "1.0 by SiSTRO", active: false, icon: "tablet", expage: "payloads/GTA/PS4REN.html" },{title: "SAVE MOUNTER", desc:"No need for save wizard!", version: "1.4 by Chendochap", active: false, icon: "folder", expage: "payloads/savemounter.html" },{ title: "ORBISAFR", desc:"Application file redirector for game modding", version: "1.0 by TheoryWrong", active: false, icon: "layers", expage: "payloads/orbisafr.html" },{ title: "SYSCALL 9", desc: "Unjail with UART", version: "1.0 by Lightningmods", active: false, icon: "", expage: "payloads/GTA/sys9.html" },{ title: "VR ENABLER", desc:"Enables VR headset even after HEN has been run", version: "1.0 by Stooged", active: false, icon: "visibility", expage: "payloads/vr.html" }, { title: "VTX FTP", desc: "Start an ftp server and connect to your PC to your PS4", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"}, { title: "FTP + FULL R/W", desc:"Starts an ftp server with full R/W on all 16 partitions of your PS4.", version: "1.0 by Lightningmods", active: false, icon: "warning", expage: "payloads/ftprw.html" }, { title: "REACTPSPLUS", desc:"Turn your consoles RTC back to play expired PSPLUS games", version: "2012 edition by Zer0xFF", active: false, icon: "restore", expage: "payloads/react.html" }, { title: "UNREACTPSPLUS", desc:"Turn your consoles RTC back to 2018", version: "2018 edition by Zer0xFF", active: false, icon: "update", expage: "payloads/unreact.html" }, { title: "REACTPSPLUS", desc:"Change your consoles RTC to whatever you want", version: "1.0 by Zer0xFF mod by Leeful", active: false, icon: "timelapse", expage: "payloads/reactloader.html" }]
    },
	"CHEATS": {
      index: 8,
      title: "CHEATS",
      selectedIndex: 0,
      active: false,
      icon: "search",
      items: [{ title: "WEBRTE", desc:"Use http://ps4trainer.com/trainer + enter your PS4 IP", version: "1.00 by Tylermods", active: false, icon: "whatshot", expage: "payloads/webrte.html" },{ title: "ORBISDBG", desc:"Memory/process debugger. (Use: ORBISDBGUI)", version: "1.00 by Skiffaw", active: false, icon: "gradient", expage: "payloads/orbdbg.html" },{ title: "MEMAPI", desc:"Server, debugger and library tools", version: "1.00 by McCaulay", active: false, icon: "subject", expage: "payloads/memapi.html" }, { title: "IH RTM EDITOR", desc:"Cheat tool with RTM functions", version: "1.0.0.0 by Intention Hackers", active: false, icon: "dvr", expage: "payloads/ihrtm.html" },{ title: "COMMUNITY TRAINER", desc:"Community driven cheat tool", version: "2.1.0.0 by DeathRGH", active: false, icon: "comment", expage: "payloads/community.html" }, { title: "PS4 TRAINER", desc:"Game trainer tool for cheating", version: "1.4.91.113 by Tylermods", active: false, icon: "code", expage: "payloads/tylermods.html" }, { title: "JKPATCH", desc:"RPC server for finding cheats", version: "1.0 by XEMIO", active: false, icon: "timeline", expage: "payloads/jkpatch.html" }, { title: "DEATHRGH", desc:"Cheat toolbox with peek/poke and notifications", version: "1.6.0.0 by DeathRGH", active: false, icon: "attachment", expage: "payloads/deathrgh.html" }, { title: "PS4 CHEATER", desc:"Tool to help find and implement cheats", version: "1.4.7 by Chendochap", active: false, icon: "create", expage: "payloads/cheater.html" }, { title: "PS4API SERVER", desc:"Allows control of game memory for RTE/RTM tools", version: "1.0 by Helloitu", active: false, icon: "flag", expage: "payloads/ps4api.html" }, { title: "PS4API SERVER", desc:"Allows control of game memory for RTE/RTM tools", version: "1.1 by Bisoon", active: false, icon: "transform", expage: "payloads/ps4apibisoon.html" },{title:"DEBUGWATCH", desc:"Full featured debugging utility", version: "1.0.0.0 by Golden", active: false, icon: "watch", expage: "payloads/GTA/Debugwatch.html" },{title:"PLAYENGINE", desc:"Scan & edit PS4 process memory", version: "2.0 Berkay2578/EpicFail78", active: false, icon: "traffic", expage: "payloads/GTA/Playengine.html" }]
    },
  "GTAV MENUS": {
      index: 9,
      title: "GTAV MENUS",
      selectedIndex: 0,
      active: false,
      icon: "tune",
	  txt1:"[Press ",
      txt2:"+ ",
      txt3:"to activate]",
      items: [{title: "LOTUS 127 - ", button1:"DRBUTTON", button2:"SBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "1.02 by 0x199", active: false, icon: "spa", expage: "payloads/GTA/GTA_Lotus127.html" },{title: "NOTYOURDOPES 127 - ", button1: "R1BUTTON", button2: "DDBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "1.0 by Vicodin10", active: false, icon: "casino", expage: "payloads/GTA/GTA_NotYourDopes127.html" }, { title: "LTSMENU 127 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "1.0 by CMTFrosty (LastTeamStanding)", active: false, icon: "group", expage: "payloads/GTA/GTA_LTS127.html" }, { title: "NOTANOTHERMENU - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "0.1 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother.html" }, { title: "NOTANOTHERMENU 127 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "0.2 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother127.html" }, { title: "AP II INTENSE V2 - ", button1: "R1BUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "1.1 by EROOTIIK", active: false, icon: "extension", expage: "payloads/GTA/GTA_Intense.html" }, { title: "AP II INTENSE V2 1.27 - ", button1: "R1BUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU game version 1.27", version: "1.5 by EROOTIIK", active: false, icon: "extension", expage: "payloads/GTA/GTA_Intense127.html" }, { title: "LAMANCE - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance.html" }, { title: "LAMANCE 1.27 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance127.html" }, { title: "WILDEMODZ - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "1.1 by Wildemodz", active: false, icon: "accessibility", expage: "payloads/GTA/GTA_WildeModz.html" }, { title: "WILDEMODZ 127 - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.27", version: "1.2 by Wildemodz", active: false, icon: "accessibility", expage: "payloads/GTA/GTA_WildeModz127.html" }, { title: "TEAM PSYCH0S - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "1.0 by AlFaMoDz", active: false, icon: "build", expage: "payloads/GTA/GTA_Psych0s.html" }, { title: "ARABICGUY - ", button1: "L1BUTTON", button2: "R1BUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "1.1 by RF0oDxM0Dz", active: false, icon: "face", expage: "payloads/GTA/GTA_ArabicGuy.html"}, { title: "TRAINER - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"GTAV mod menu for EU/US game version 1.00", version: "1.0 by David1337hax", active: false, icon: "shop", expage: "payloads/GTA/GTA_Trainer.html"}]
    },
	"OTHER MENUS": {
      index: 10,
      title: "OTHER MENUS",
      selectedIndex: 0,
      active: false,
      icon: "vibration",
	  txt4:"[ ",
      txt5:"+ ",
      txt6:"] = Quick Menu, ",
	  txt7:"] = Dev Menu, ",
	  txt8:"] = Fly Mode",
      items: [{ title: "THE LAST OF US 1.08", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON", version: "2.0 by Vicodin10", active: false, icon: "accessibility", expage: "payloads/GTA/TLOUR.html" },{ title: "UNCHARTED 4 1.00/1.18/1.32", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON",button9:"L3BUTTON",button10:"OPBUTTON",txt9:", [ ", txt10:"+ ",txt11:"] = Fav Menu", version: "2.0 by Vicodin10", active: false, icon: "exposure", expage: "payloads/GTA/UC4.html" },{ title: "UNCHARTED THE LOST LEGACY 1.00", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON",button9:"L3BUTTON",button10:"OPBUTTON",txt9:", [ ", txt10:"+ ",txt11:"] = Fav Menu", version: "2.0 by Vicodin10", active: false, icon: "motorcycle", expage: "payloads/GTA/UCTLL.html" } ] 
	 },
	"LAN PLAY": {
      index: 11,
      title: "LAN PLAY",
      selectedIndex: 0,
      active: false,
      icon: "",
      items: [{ title: "BO3 COD:ONLINE", desc:"Play BO3 LAN games online in private servers", version: "1.0 by TheoryWrong", active: false, icon: "language", expage: "payloads/codonline/BO3.html" }]
	},  		
	"CACHE": {
      index: 12,
      title: "CACHE",
      selectedIndex: 0,
      active: false,
      icon: "copyright",
      items: [{title: "X-PROJECT HOST CACHE", desc:"Cache X-Project to your web browser for offline use", version: "1.0 by Al-Azif", active: false, icon: "", expage: "payloads/xmbcache.html" }, { title: "USB CACHE INSTALL", desc:"Installs an ApplicationCache.db from USB for offline use", version: "10.0 by Stooged", active: false, icon: "beenhere", expage: "payloads/usbcacheinstall.html" }, { title: "CACHE INSTALL", desc:"Installs an ApplicationCache.db for offline use", version: "10.0 by Stooged", active: false, icon: "book", expage: "payloads/cacheinstall.html" }, { title: "APPLICATION CACHE", desc:"Installs an ApplicationCache.db that is a modified version of Al-Azif's exploit host", version: "2.0 by Hotdogwithmustard", active: false, icon: "loyalty", expage: "payloads/applicationcache.html" }, { title: "HISTORY BLOCKER", desc:"Toggle auto loading the last page used in webbrowser", version: "2.0 by Stooged", active: false, icon: "bookmarks", expage: "payloads/history.html" }]
	},
	"PKG": {
      index: 13,
      title: "INSTALL PKG",
      selectedIndex: 0,
      active: false,
      icon: "weekend",
      items: [{ title: "HOST PKG", desc:"RPI-GUI install pkgs to your web browser for offline use", version: "WEB GUI by Sc0rpion 1.0 ", active: false, icon: "weekend", expage: "Utility/rpigui/RPILOADER.html" }]
	},
	"ARCADE": {
      index: 14,
      title: "ARCADE",
      selectedIndex: 0,
      active: false,
      icon: "web",
      items: [{title: "INFINITE MARIO", desc:"Randomized Mario game made in JS", version: "1.0 by Markus Persson mod by DEFAULTDNB", active: false, icon: "IM", expage: "payloads/games/infmario/infmarioloader.html" }, {title: "FLAPPYBIRD", desc:"Classic Flappy Bird made in JS", version: "1.0 by Fatiherikli mod by DEFAULTDNB", active: false, icon: "whatshot", expage: "payloads/games/flappybird/flappyloader.html" }, {title: "SNAKE", desc:"Classic Snake game made in JS", version: "1.0 by Patorjk mod by DEFAULTDNB", active: false, icon: "pages", expage: "payloads/games/snake/snakeloader.html" }]
	},
	  "★WebKit": {
      index: 15,
      title: "★WebKit",
      selectedIndex: 0,
      active: false,
      icon: "help",
      items: [{ title: "★WEBKIT 5.55", desc: "Quickly TEST WEBKIT", version:"BETA by 84Ciss", active: false, icon: "healing", expage: "Utility/5.55/5.55.html"  },{ title: "★PS4 Breacher", desc: "Quickly TEST WEBKIT", version:"BETA by 84Ciss", active: false, icon: "healing", expage: "Utility/test/6.00.html" }]
	},
  	"MEDIA": {
      index: 16,
      title: "MEDIA",
      selectedIndex: 0,
      active: false,
      icon: "subscriptions",
      items: [{title: "MP4PLAYER", desc:"Media player for MP4 movies over network", version: "1.0 by DEFAULTDNB", active: false, icon: "airplay", expage: "payloads/playerloader.html" }]
	},
	"ABOUT": {
      index: 17,
      title: "ABOUT",
      selectedIndex: 0,
      active: false,
      icon: "help",
      items: [{title: "CREDITS", desc:"Without these people none of this would be possible", version: "1.5 by DEFAULTDNB", active: false, icon: "fingerprint", expage: "payloads/creditsloader.html" }, {title: "DETAILS", desc:"Tell us your suggestions & issues", version: "1.0 by DEFAULTDNB", active: false, icon: "", expage: "payloads/detailsloader.html" },{title: "PAYLOAD STATISTICS", desc:"Logs how many times a payload has been loaded. (VTX HEN/DUMP/FTP only)", version: "0.1 POC by DEFAULTDNB", active: false, icon: "info", expage: "payloads/statsloader.html" }]
    },
	"★DEBUG": {
      index: 18,
      title: "★DEBUG",
      selectedIndex: 0,
      active: false,
      icon: "grade",
      items: [{title: "★PAYLOAD", desc: "Test experimental payloads", version:"1.0 by DEFAULTDNB", active: false, icon: "", expage: "payloads/test.html"}]
	},
	
  }
  //add zero position to each column and item
};_.each(model.columns, function (c) {
  c.position = { x: 0, y: 0 };
  _.each(c.items, function (i) {
    i.position = {
      x: 0,
      y: 0
    };
  });
});
	  
var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey: function handleKey(dir, val) {
      this.cursor[dir] += val;
      var nCols = this.nColumns;
      // wrap x
      this.cursor.x = this.cursor.x % nCols;
      if (this.cursor.x < 0) {
        this.cursor.x = this.cursor.x + nCols;
      }

      //wrap y
      var nRows = this.nRows;
      this.cursor.y = this.cursor.y % nRows;
      if (this.cursor.y < 0) {
        this.cursor.y = this.cursor.y + nRows;
      }

      this.highlightCell(this.cursor.x, this.cursor.y);
    },
    highlightCell: function highlightCell(column, row) {

      console.log(column, row);
	  //alert(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICONSZ);
      if (column == 0) {
        xAccum += ICONSZ;
      }
      var yAccum;

      _.each(this.columns, function (col, colKey) {
        col.active = false;
        yAccum =  - (ICONSZ) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICONSZ;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICONSZ;
        }

        _.each(col.items, function (item, rowN) {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;
          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICONSZ;
          }
          yAccum += ICONSZ;
          item.position.y = yAccum;
        });
      });
      this.cursor.y = row;
      this.cursor.x = column;
    }
  },
  watch: {
    cursor: function cursor(e) {
      console.log('cursor mutated', e);
    }
  },
  computed: {
    nColumns: function nColumns() {
      return Object.keys(this.columns).length;
    },
    nRows: function nRows() {
      //get the row at the current index
      var row = this.columnsArray[this.cursor.x];
      if (!row) {
        console.log('invalid row index: ', this.cursor.x);
        return 0;
      }
      return row.items.length; //todo: number of columns in this row
    },
    columnsArray: function columnsArray() {
      var _this = this;

      //get columns in an array
      var arr = [];
      Object.keys(this.columns).forEach(function (key) {
        arr.push(_this.columns[key]);
      });
      return _.sortBy(arr, 'index');
    }
  },
  created: function created() {
    _.each(this.columns, function (column) {
      _.each(column.items, function (item) {
        item.active = false;
      });
    });
    this.highlightCell(this.cursor.x, this.cursor.y);
  }
});

$('body').on("mousewheel", _.debounce(scrollHandler, 50));

function scrollHandler(e) {
  console.log(e);
  if (e.deltaX) {
    xmbVue.handleKey('x', Math.sign(e.deltaX));
  }
  if (e.deltaY) {
    xmbVue.handleKey('y', Math.sign(e.deltaY));
  }
}
// REMAP TO D-PAD EXPERIMENTAL
// 27 = O, 112 = /\, 113 = [], 114 = options, 
// 116 = L1, 117 = R1, 118 = L2, 119 = R2, 120 = L3, 121 = R3,
// 37 = left dpad, 38 = up dpad, 39 = right dpad, 40 = down dpad,
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 37) {
   xmbVue.handleKey('x', -1);
   } else if (key == 39) {
   xmbVue.handleKey('x', 1);
   } else if (key  == 38) {
   xmbVue.handleKey('y', -1);
   } else if (key  == 40) {
   xmbVue.handleKey('y', 1);
   } else if (key == 116) {
   window.open("payloads/hen18vrmod.html", "content");
   } else if (key == 117) {
   window.open("payloads/ftprw.html", "content");
   }
};
