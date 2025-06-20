export interface GuestbookEntry {
  id: number;
  name: string;
  email: string;
  website?: string;
  comment: string;
  timestamp: string;
}

export const mockGuestbookEntries: GuestbookEntry[] = [
  {
    id: 1,
    name: "Brittany Spheres",
    email: "bspheres@hotmail.com",
    website: "http://www.geocities.com/brittyspage",
    comment: "OMG! This site is SO cool! Just like my homepage! Can't wait for my new album to drop next year! 💿✨",
    timestamp: "November 28, 1995 - 3:45 PM"
  },
  {
    id: 2,
    name: "Will Smyth",
    email: "freshprince@aol.com",
    comment: "Yo yo yo! This site is da bomb! Just finished filming Independence Day - aliens better watch out! 👽 Keep up the fresh content!",
    timestamp: "November 25, 1995 - 7:22 PM"
  },
  {
    id: 3,
    name: "Tom Hanx",
    email: "thanx@compuserve.com",
    comment: "Life is like a box of chocolates... and this website is definitely a good piece! Great work on the articles. Forrest would approve! 🍫",
    timestamp: "November 23, 1995 - 11:30 AM"
  },
  {
    id: 4,
    name: "Madonno",
    email: "materialworld@earthlink.net",
    website: "http://www.madonna-wannabe.com",
    comment: "Vogue! Strike a pose! This site has style and substance. My Tamagotchi died while I was reading your CD-ROM article... 💔",
    timestamp: "November 20, 1995 - 4:15 PM"
  },
  {
    id: 5,
    name: "Leonadro DiCaprico",
    email: "ldicaprio@netscape.net",
    comment: "Just saw this after watching Romeo + Juliet. Technology is the future! Can't wait to see what the new millennium brings! 🎭",
    timestamp: "November 18, 1995 - 9:33 PM"
  },
  {
    id: 6,
    name: "Jim Carrey-On",
    email: "alllllrighty@yahoo.com",
    comment: "Smokin'! This site is better than The Mask! B-E-A-utiful work on the Virtual Reality article. The future is NOW! 🎭🤖",
    timestamp: "November 15, 1995 - 1:20 PM"
  },
  {
    id: 7,
    name: "Sandra Bollocks",
    email: "speedracer@prodigy.com",
    comment: "Just finished Speed and I'm RACING to check out more sites like this! Your Web article is spot-on. The information superhighway is here! 🚌💨",
    timestamp: "November 12, 1995 - 6:45 PM"
  },
  {
    id: 8,
    name: "Brad Pittman",
    email: "sevendays@msn.com",
    comment: "Seven... that's how many times I've visited this site! Great content about technology. What's in the box? More articles I hope! 📦",
    timestamp: "November 10, 1995 - 2:17 AM"
  },
  {
    id: 9,
    name: "Kevan Costner",
    email: "waterworldfan@inet.com",
    website: "http://www.drylandisafable.org",
    comment: "If you build it, they will come... and you've built something great here! Dry land is not a myth, and neither is good web content! 🌊",
    timestamp: "November 8, 1995 - 8:55 AM"
  },
  {
    id: 10,
    name: "Nicole Kidwoman",
    email: "batman4ever@dial-up.net",
    comment: "Holy homepage Batman! This site is better than Gotham City's BBS! My modem may be slow but your content is fast-paced! 🦇",
    timestamp: "November 5, 1995 - 10:42 PM"
  },
  {
    id: 11,
    name: "Morgan Freewoman",
    email: "sevenwonders@worldnet.att.net",
    comment: "What's in the box? Quality content, that's what! I've been narrating my experience browsing this site. Magnificent work! 🎬",
    timestamp: "November 3, 1995 - 5:28 PM"
  },
  {
    id: 12,
    name: "Winona Ryler",
    email: "reality_bites@isp.net",
    comment: "Reality bites, but this website doesn't! Your articles about the future of technology are totally alternative. Generation X approves! ⚡",
    timestamp: "October 30, 1995 - 12:33 PM"
  },
  {
    id: 13,
    name: "Bruce Willys",
    email: "diehard@bellatlantic.net",
    comment: "Yippee-ki-yay! This website is the bomb (the good kind)! Your VR article blew my mind harder than Nakatomi Plaza! 💥",
    timestamp: "October 28, 1995 - 7:11 PM"
  },
  {
    id: 14,
    name: "Robin Williamson",
    email: "mrsdoubtfire@email.com",
    comment: "Good morning Vietnam... I mean, good morning Blog95! This site brings me more joy than Jumanji! What year is it?! 🎭🎲",
    timestamp: "October 25, 1995 - 9:15 AM"
  },
  {
    id: 15,
    name: "Mel Gibsons",
    email: "braveheart@highland.net",
    website: "http://www.freedom-scotland.co.uk",
    comment: "FREEDOM! And this website gives me the freedom to learn about technology! They may take our dial-up, but they'll never take our Web! ⚔️",
    timestamp: "October 22, 1995 - 11:47 AM"
  },
  {
    id: 16,
    name: "Whoopi Goldenbear",
    email: "sisteract@convent.org",
    comment: "Sister, this website is blessed! Reading your articles while my Furby sleeps. Technology and spirituality can coexist! 🙏",
    timestamp: "October 20, 1995 - 3:22 PM"
  },
  {
    id: 17,
    name: "Anthony Hoppingz",
    email: "silence@hannibal.net",
    comment: "I ate his liver with some fava beans and a nice Chianti... just kidding! But I did devour your excellent articles! *slurp* 🍷",
    timestamp: "October 18, 1995 - 11:59 PM"
  },
  {
    id: 18,
    name: "Denzel Washingmachine",
    email: "malcolm@by-any-means.net",
    comment: "By any means necessary... we must embrace this World Wide Web! Your articles about the future are inspiring and educational! ✊",
    timestamp: "October 15, 1995 - 4:30 PM"
  },
  {
    id: 19,
    name: "Sean Connerys",
    email: "bond007@mi6.gov.uk",
    website: "http://www.shaken-not-stirred.com",
    comment: "The name'sh Bond... James Bond. And thish webshite ish absolutely shpectacular! Better than any gadget Q ever gave me! 🍸",
    timestamp: "October 12, 1995 - 6:07 PM"
  },
  {
    id: 20,
    name: "Danny DeVitamin",
    email: "batman_returns@gotham.net",
    comment: "I'm the Penguin of the World Wide Web! Wak wak wak! This site is cooler than an iceberg in Gotham Harbor! 🐧❄️",
    timestamp: "October 10, 1995 - 8:44 AM"
  }
];

// Fake visitor counter - in a real app this would be dynamic
export const visitorCount = 47293;