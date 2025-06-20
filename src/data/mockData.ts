export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  likes: number;
  comments: Comment[];
  imageUrl: string;
  excerpt: string;
}

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "The World Wide Web: A Revolutionary Information Highway",
    author: "TechGuru95",
    publishDate: "October 15, 1995",
    likes: 42,
    excerpt: "The Internet's newest innovation promises to change how we access information forever. With hyperlinks and multimedia content, the Web is becoming the ultimate digital library.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    content: `The World Wide Web, invented by Tim Berners-Lee at CERN, is revolutionizing how we think about information access. This incredible network of interconnected documents uses something called "hypertext" - clickable links that transport you instantly to related information anywhere in the world!

What makes the Web so special? Unlike traditional bulletin board systems (BBS) or FTP servers, the Web presents information in a visually appealing format with graphics, formatted text, and even sounds. Companies like Netscape are making "browsers" that make navigating this information superhighway as easy as clicking a mouse.

The implications are staggering. Imagine accessing the Library of Congress, university research papers, or even shopping catalogs from your home computer! Some visionaries predict that within a decade, we'll be conducting business, reading newspapers, and even watching movies through our computer screens.

Of course, there are concerns. Not everyone has access to the high-speed modems required (at least 14.4k baud), and the phone bills for extended online sessions can be astronomical. But as technology improves and costs decrease, the Web may become as common as the telephone.

The future is digital, and it's arriving faster than anyone imagined. Companies that don't establish a "web presence" may find themselves left behind in this new economy. The question isn't whether the Web will succeed - it's whether we're ready for such a dramatic transformation of human communication.`,
    comments: [
      {
        id: 1,
        author: "CyberSurfer",
        content: "This Web thing sounds amazing! I just got a 28.8k modem and the speed is incredible. Can't wait to see what websites pop up next!",
        timestamp: "October 16, 1995 - 2:30 PM"
      },
      {
        id: 2,
        author: "DialUpDan",
        content: "Great article! Though I have to say, downloading a single image takes forever. I hope they figure out how to make this faster.",
        timestamp: "October 17, 1995 - 9:15 AM"
      }
    ]
  },
  {
    id: 2,
    title: "CD-ROM Technology: The Future of Software Distribution",
    author: "MediaMaster",
    publishDate: "September 3, 1995",
    likes: 38,
    excerpt: "With 650 megabytes of storage capacity, CD-ROMs are transforming how we install and distribute software. Say goodbye to stacks of floppy disks!",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    content: `Remember when installing Microsoft Office required swapping between 30+ floppy disks? Those days are rapidly becoming a thing of the past, thanks to Compact Disc Read-Only Memory technology - or CD-ROM as we know it.

A single CD-ROM can hold an astounding 650 megabytes of data - equivalent to about 450 floppy disks! This massive storage capacity is revolutionizing software distribution. Companies like Microsoft, Adobe, and id Software are already shipping their latest products on these silver discs.

But CD-ROMs aren't just about storage capacity. They're opening up entirely new possibilities for multimedia experiences. Games like "Myst" and "The 7th Guest" showcase stunning graphics, full-motion video, and CD-quality audio that would be impossible to distribute on floppy disks. We're witnessing the birth of "multimedia computing."

The technology isn't without its challenges. CD-ROM drives are still expensive - a good 4x speed drive costs around $300. And the drives can be finicky; many users report issues with certain brands or speeds. But prices are dropping rapidly, and speed is increasing. Some manufacturers are promising 8x drives by next year!

Educational software is another area where CD-ROMs are making a huge impact. Encyclopedia Britannica, National Geographic, and other publishers are creating interactive learning experiences that combine text, images, video, and sound in ways that print media simply cannot match.

As we look toward the future, it's clear that CD-ROM technology will continue to evolve. Some experts predict that writable CDs will eventually become affordable for consumers, allowing us to create our own multimedia presentations and backup our data. The age of digital media has truly begun.`,
    comments: [
      {
        id: 1,
        author: "FloppyFan",
        content: "I still prefer my 3.5 inch floppies - they're more reliable! But I admit, not having to swap disks 20 times during installation is pretty nice.",
        timestamp: "September 4, 1995 - 11:45 AM"
      },
      {
        id: 2,
        author: "GamePlayer92",
        content: "Myst is absolutely mind-blowing! The graphics and sound quality are unlike anything I've ever seen. This is definitely the future of gaming.",
        timestamp: "September 5, 1995 - 7:20 PM"
      },
      {
        id: 3,
        author: "TechTeacher",
        content: "I just bought Encyclopedia Britannica on CD-ROM for my classroom. The students are fascinated by the video clips and interactive maps. Education will never be the same!",
        timestamp: "September 6, 1995 - 3:10 PM"
      }
    ]
  },
  {
    id: 3,
    title: "Virtual Reality: Computing's Next Frontier",
    author: "VRVision",
    publishDate: "November 22, 1995",
    likes: 29,
    excerpt: "From Nintendo's Virtual Boy to cutting-edge VR headsets, virtual reality is poised to transform entertainment, education, and business. The future is immersive!",
    imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop",
    content: `Virtual Reality - the stuff of science fiction movies - is becoming science fact. Companies like Nintendo, Sega, and Virtuality are pioneering technologies that promise to transport us into entirely digital worlds.

Nintendo's Virtual Boy, released earlier this year, gives us a glimpse into the future of gaming. Using red LED displays and a unique 3D viewing system, it creates the illusion of depth and immersion that traditional screens simply can't match. While the current library is limited and the red-only display can be fatiguing, it represents a crucial first step toward mainstream VR.

But gaming is just the beginning. High-end VR systems like those from Virtuality are already being used in arcades and research facilities. These systems cost tens of thousands of dollars and require powerful Silicon Graphics workstations, but they offer experiences that border on the magical. Users can walk through virtual buildings, manipulate 3D objects with their hands, and collaborate with others in shared virtual spaces.

The potential applications are staggering. Architects could walk clients through buildings before construction begins. Medical students could practice surgery in risk-free virtual operating rooms. Engineers could test designs in simulated environments that would be dangerous or impossible to create in reality.

Of course, significant challenges remain. Current VR systems are expensive, bulky, and can cause motion sickness in some users. The graphics, while impressive, still look obviously computer-generated. And the computing power required for convincing VR experiences is enormous - far beyond what most home computers can provide.

But technology is advancing rapidly. Companies like 3Dfx are developing specialized graphics chips that could make VR more affordable and accessible. Some experts predict that within a decade, VR headsets will be as common as today's sound cards.

The convergence of increasing computing power, improving display technology, and growing interest from both consumers and businesses suggests that virtual reality's time has finally come. We may be on the verge of a computing revolution that makes the transition from text-based to graphical interfaces look minor by comparison.

The question isn't whether VR will succeed - it's whether our reality will ever be the same once we've experienced the limitless possibilities of virtual worlds.`,
    comments: [
      {
        id: 1,
        author: "Gamer90s",
        content: "I tried the Virtual Boy at Toys R Us - it's incredible! The 3D effect is so realistic. I can't wait to see what games they come up with next.",
        timestamp: "November 23, 1995 - 4:45 PM"
      }
    ]
  }
];