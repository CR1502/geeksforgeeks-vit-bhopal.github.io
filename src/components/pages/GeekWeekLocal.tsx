//import { title } from "process";
import img1 from '../../images/GeekWeekLocal/1.png'
import img2 from '../../images/GeekWeekLocal/2.png'
import img3 from '../../images/GeekWeekLocal/3.png'
import img4 from '../../images/GeekWeekLocal/4.png'

const Card: React.FC<{
  className?: string;
  color?: "bg-white" | "bg-yellow-400";
  shadow?: boolean;
}> = ({
  children,
  color = "bg-white",
  className,
  shadow = false,
  ...props
}) => {
  return (
    <div
      className={`${
        shadow ? "" : ""
      } flex flex-col neuro hover:neuro-hover rounded-lg border-white ${className} ${color}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Shadow: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`relative z-0 bottom-14 left-2 bg-black ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AnimatedButton: React.FC<{ color: "bg-white" | "bg-yellow-400" }> = ({
  children,
  color,
  ...props
}) => {
  return (
    <div>
      <button
        className={`text-2xl focus:outline-none relative z-10 transform -translate-x-1 -translate-y-1 h-16 w-48 border-black border-4 rounded-tl-lg rounded-br-lg hover:translate-x-1 hover:translate-y-1 transition-transform ${color}`}
        {...props}
      >
        {children}
      </button>
        {/* <Shadow className="rounded-full h-14 w-45" />  */}
    </div>
  );
};

const TitlePanel: React.FC = ({ children, ...props }) => {
  return (
    <Card className="p-5 justify-center items-center text-3xl" shadow={true}>
      {children}
    </Card>
  );
};

const Challenge: React.FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  return (
    <Card className="h-72 py-4">
      <Card
        color="bg-yellow-400"
        shadow={true}
        className="relative right-5 p-3 w-10/12"
      >
        {title}
      </Card>
      <div className="p-8 font-sans font-bold tracking-normal text-lg">
        {content}
      </div>
    </Card>
  );
};

const Header = () => {
  return (
    <header className="py-6 px-5">
      <Card>
        <div className="flex justify-between p-6 bg-white text-black text-lg">
          <a>GEEK WEEK: LOCAL</a>
          <div className="relative flex space-x-8 flex-col md:flex-row">
            <span><a href="#" className="hover:text-red-500">Rank</a></span>
            <span><a href="./GeekWeekLocal/#Challenge" className="hover:text-red-500">Challenges</a></span>
            <span><a href="#" className="hover:text-red-500">Guilds</a></span>
            <span><a href="#" className="hover:text-red-500">About</a></span>
          </div>
        </div>
        <div className="flex flex-wrap">
        <div className="flex flex-col gap-16 lg:w-3/5 py-8 px-4 md:px-10 ">
          <div className="flex flex-col gap-8 mt-16">
            <div className="text-7xl">GEEK WEEK: Local</div>
            <div className="font-sans tracking-normal font-medium text-lg">
              Build your way to greatness all week long at Geek Week: Local by
              completing challenges both big and small. You’ll expand your
              network, skillset, and hacker portfolio, and earn yourself
              rewards.
            </div>
          </div>
          <div className="flex flex-wrap relative right-0 flex gap-14 sm:gap-8">
            <AnimatedButton color="bg-yellow-400">Register</AnimatedButton>
            <AnimatedButton color="bg-white">Chat with us</AnimatedButton>
          </div>
        </div>
        <div className="mt-2 mb-6 px-2 lg:w-2/5 md:px-4">
          <img src={img1}></img>
        </div>
        </div>
      </Card>
    </header>
  );
};

const DailyChallenges = ({
  daily,
}: {
  daily: { title: string; content: string }[];
}) => {
  return (
    <div id="Challenge" className="flex flex-col py-20 px-10 gap-20">
      <div className="flex flex-col items-center">
        <TitlePanel>Daily Challenges</TitlePanel>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols:2 lg:grid-cols-3">
        {daily.map(({ content, title }) => (
          <Challenge content={content} title={title} />
        ))}
      </div>
    </div>
  );
};

const WeekChallenges = ({
  week,
}: {
  week: { title: string; content: string }[];
}) => {
  return (
    <div className="flex flex-col py-20 px-10 gap-20">
      <div className="flex flex-col items-center">
        <TitlePanel>Week Long Challenges</TitlePanel>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols:2 lg:grid-cols-3">
        {week.map(({ content, title }) => (
          <Challenge content={content} title={title} />
        ))}
      </div>
    </div>
  );
};

const Ranking = ({ guild, hacker }: { guild: string[]; hacker: string[] }) => {
  return (
    <div className="flex flex-col px-6">
      <Card color="bg-white" shadow={true}>
        <div className="flex flex-col gap-16 py-24 text-left px-8 lg:px-16 md:px-16 ">
          <div className="flex flex-col gap-4">
            <div className="text-3xl">Ranking</div>
            <div className="font-sans tracking-normal font-medium text-lg">
              Build your way to greatness all week long at Geek Week: Local by
              completing challenges both big and small. You’ll expand your
              network, skillset, and hacker portfolio, and earn yourself
              rewards.
            </div>
          </div>
          <div className="flex flex-wrap gap-14">
            <div>
              <div className="text-2xl">Guild Ranking</div>
              <ul className="space-y-3 py-4">
                {guild.map((name, index) => (
                  <li>{`${index + 1} ${name}`}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-2xl">Hacker Ranking</div>
              <ul className="space-y-3 py-4">
                {hacker.map((name, index) => (
                  <li>{`${index + 1} ${name}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Guild = () => {
  return (
    <div className="flex flex-wrap flex-col px-6 my-28">
      <Card color="bg-white" shadow={true}>
        <div className="flex flex-col flex-wrap gap-16 py-24 px-12 lg:px-48 md:px-24 ">
          <div className="flex text-left flex-wrap flex-col">
            <div className="text-3xl">Guild</div>
            <div className="font-sans tracking-normal font-medium text-lg">
              One of the best parts of our community is that it allows people to
              meet and make connections with others, regardless of where you
              live. Form a guild of hackers and fight for a spot on the
              leaderboard. Every time you complete a challenge during the week
              of Geek Week: Local, you’ll earn points for your Guild. There’s
              strength in numbers so it’s important to spread the word and we
              are here to help by providing you with pre-made marketing
              templates. Use these to share the excitement with your club,
              friends, and local hackers! The more members you have, the more
              points you’ll get and the faster you’ll climb your way up the
              leaderboard.
            </div>
          </div>
          <div className="relative right-4 flex flex-wrap gap-14">
            <AnimatedButton color="bg-yellow-400">
              Create One
            </AnimatedButton>
            <AnimatedButton color="bg-white">join a guild</AnimatedButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="flex flex-col px-6 my-28">
      <Card color="bg-white" shadow={true}>
        <div className="flex flex-col gap-16 py-24 px-10 lg:px-48">
          <div className="flex flex-col gap-4">
            <div className="text-3xl">Sponsors</div>
            <div className="font-sans tracking-normal font-medium text-lg">
              Some thing about sponsor
            </div>
          </div>
          <div className="relative right-4 flex gap-14">
            <AnimatedButton color="bg-white">Nice Company</AnimatedButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

const About = () => {
return(
  <div className="flex flex-col px-6 my-28">
    <div className="flex flex-col py-10 items-center">
        <TitlePanel>About</TitlePanel>
      </div>
    
    <div className="flex flex-col lg:px-20 align-center">
      <div className="flex flex-wrap md:px-10 lg:px-25">
        <div className="md:w-1/4 mb-6 md:mb-0 px-2"><img src={img2}></img></div>
        <div className="container mx-auto md:w-3/4 md:py-8">
        <Card color="bg-white" shadow={true}>
             <div className="py-6 px-2">
               <div className="px-2 py-6 text-1xl">
                 What's Geek Week:Local?
               </div>
               <div className="font-sans tracking-normal font-medium">
                 -A week-long Event of creating hacks both small and big <br></br>
                 -Choose between daily and weekly Challenges<br></br>
                 -The more Challenges you solve the more points you wil earn.<br></br>
               </div>
             </div>
        </Card>
        </div>
      </div>

      <div className="flex flex-wrap md:px-10 hidden lg:px-25 md:flex">
        <div className="container mx-auto md:w-3/4 md:py-8">
        <Card color="bg-white" shadow={true}>
             <div className="py-6 px-2">
               <div className="px-2 py-6 text-1xl">
                 What's Geek Week:Local?
               </div>
               <div className="font-sans tracking-normal font-medium">
                 -A week-long Event of creating hacks both small and big <br></br>
                 -Choose between daily and weekly Challenges<br></br>
                 -The more Challenges you solve the more points you wil earn.<br></br>
               </div>
             </div>
        </Card>
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0 px-2"><img src={img3}></img></div>
      </div>
      
      <div className="flex flex-wrap py-6 md:px-10 lg:px-25 md:hidden">
        <div className="md:w-1/4 mb-6 md:mb-0 px-2"><img src={img3}></img></div>
        <div className="container mx-auto md:w-3/4 md:py-8">
        <Card color="bg-white" shadow={true}>
             <div className="py-6 px-2">
               <div className="px-2 py-6 text-1xl">
                 What's Geek Week:Local?
               </div>
               <div className="font-sans tracking-normal font-medium">
                 -A week-long Event of creating hacks both small and big <br></br>
                 -Choose between daily and weekly Challenges<br></br>
                 -The more Challenges you solve the more points you wil earn.<br></br>
               </div>
             </div>
        </Card>
        </div>
      </div>

      <div className="flex flex-wrap py-6 md:px-10 lg:px-25">
        <div className="md:w-1/4 mb-6 md:mb-0 px-2"><img src={img4}></img></div>
        <div className="container mx-auto md:w-3/4 md:py-8">
        <Card color="bg-white" shadow={true}>
             <div className="py-6 px-2">
               <div className="px-2 py-6 text-1xl">
                 What's Geek Week:Local?
               </div>
               <div className="font-sans tracking-normal font-medium">
                 -A week-long Event of creating hacks both small and big <br></br>
                 -Choose between daily and weekly Challenges<br></br>
                 -The more Challenges you solve the more points you wil earn.<br></br>
               </div>
             </div>
        </Card>
        </div>
      </div>
    </div>
</div>
);
};

const GeekWeekLocal: React.FC = () => {
  const daily = [
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
  ];

  const week = [
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
  ];

  const guild = ["Someone", "Someone else", "Someone again"];

  const hacker = ["Someone", "Someone else", "Someone again"];

  return (
    <div className="bg-white font-bungee tracking-widest pb-28">
      <Header />
      <DailyChallenges daily={daily} />
      <WeekChallenges week={week} />
      <Ranking guild={guild} hacker={hacker} />
      <Guild />
       <About/>
      <Sponsors />
    </div>
  );
};

export default GeekWeekLocal;
