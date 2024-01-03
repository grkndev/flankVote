import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import requestIp from "request-ip";
const montserrat = Montserrat({ subsets: ["latin"] });
type Answer = {
  questionId: number;
  team: {
    teamId: number;
    name: string;
    icon: string;
  };
};
const data = [
  {
    id: 1,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Türk Espor Organizasyonu",
  },
  {
    id: 2,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En İyi Takımı",
  },
  {
    id: 3,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Türk Erkek Esporcusu",
  },
  {
    id: 4,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Türk Kadın Esporcusu",
  },
  {
    id: 5,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Türk Espor Koçu",
  },
  {
    id: 6,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Çıkış Yapan Genç Türk Esporcusu",
  },
  {
    id: 7,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Çıkış Yapan Türk Espor Organizasyonu",
  },
  {
    id: 8,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En İyi Milli Takım Kadrosu",
  },
  {
    id: 9,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın Turnuva Performansı",
  },
  {
    id: 10,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En Heyecan Veren Karşılaşması",
  },
  {
    id: 11,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Sosyal Medyayı En İyi Kullanan Türk Espor Organizasyonu",
  },
  {
    id: 12,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En İyi Merchandise Ürünü",
  },
  {
    id: 13,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En İyi Takım Etkinliği",
  },
  {
    id: 14,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En Büyük Başarısı",
  },
  {
    id: 15,
    teams: [
      {
        teamId: 30,
        name: "BBL Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 31,
        name: "Eternal Fire",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 32,
        name: "Fire Flux Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
      {
        teamId: 33,
        name: "FUT Esports",
        icon: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BBL_Esports_yeni_logo.png",
      },
    ],
    title: "Yılın En Heyecanlandıran Türk Transfer Hamlesi",
  },
];

export async function getServerSideProps({req}:any) {
  // Fetch data from external API
  const res = await axios.get(`https://flank-vote.vercel.app/api/hello`);
  const myip = requestIp.getClientIp(req);
   console.log(res.data)
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { myip,ip: res?.status === 200 ? res.data : null } };
}

export default function Home({ myip,ip }: any) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(data[currentIndex]);

  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {console.log("Myip: ",myip); console.log("IP: ",ip); setFinished(ip.isFinished);}, []);
  useEffect(() => {
    setCurrent(data[currentIndex]);
    let ain = answers.findIndex(
      (answer) => answer.questionId === data[currentIndex].id
    );
    if (!answers[ain] || !answers || ain < 0 || answers.length == 0) {
      setSelectedItem(data[currentIndex].teams[0].teamId);
    } else setSelectedItem(answers[ain].team.teamId);
  }, [currentIndex]);

  function saveStep({ team, questionId }: Answer) {
    const existingAnswerIndex = answers.findIndex(
      (answer) => answer.questionId === questionId
    );

    if (existingAnswerIndex !== -1) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        ...updatedAnswers[existingAnswerIndex],
        team: {
          name: team.name,
          icon: team.icon,
          teamId: team.teamId,
        },
      };
      setAnswers(updatedAnswers);
    } else {
      setAnswers((prevAnswers) => [...prevAnswers, { questionId, team }]);
    }
  }

  function nextStep() {
    if (currentIndex == data.length - 1) return;
    if (selectedItem == undefined) return;

    let team =
      data[currentIndex].teams.find((team) => team.teamId === selectedItem) ||
      data[currentIndex].teams[0];
    saveStep({
      team,
      questionId: current.id,
    });
    let curr = currentIndex + 1 > data.length ? 0 : currentIndex + 1;

    setCurrentIndex(curr);
    // setCurrent(data[curr]);
  }
  function backStep() {
    if (currentIndex == 0) return;
    let curr = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    setCurrentIndex(curr);
    // setCurrent(data[curr]);
  }

  function onSelect(teamId: number) {
    setSelectedItem(teamId);
  }
  async function onFinish() {
    setFinished(true);
    let res = await axios.post(
      "/api/db/save",
      {
        answers,
      },
      { withCredentials: true }
    );
    if (res.status === 200 && res?.data?.data?.status) return router.reload();
    else {
      console.log("err", res.data.message)
    }
  }

  if (finished) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-3 ">
        <div>
          <Image src={"/logo.png"} width={470} height={"100"} alt="logo" />
        </div>
        <h1 className="font-bold text-4xl">
          Düşünceleriniz bizim için önemli :)
        </h1>
        <h1 className="font-bold text-4xl">
          {" "}
          Etkinliğe katıldığınız için teşekkür ederiz
        </h1>
      </div>
    );
  } else {
    return (
      <div
        className={`flex items-center justify-between mx-32 h-screen ${montserrat.className}`}
      >
        <div className="flex-col flex gap-y-10 h-full justify-evenly">
          <div>
            <Image src={"/logo.png"} width={470} height={"100"} alt="logo" />
          </div>

          <div className="justify-center items-start space-y-[10px]">
            {data.map(({ title }: any, _index: any) => (
              <div
                // onClick={() => setCurrentIndex(_index)}
                className={`cursor-pointer font-semibold flex items-center gap-2 ${
                  _index == currentIndex ? " opacity-100 " : " opacity-50"
                }`}
                key={_index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  fill="none"
                >
                  <circle cx={5} cy={5} r={5} fill="#000" />
                </svg>
                {title}
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col justify-between items-center gap-10 max-w-[650px] text-center">
          <div className="flex flex-wrap">
            <p className="font-bold text-4xl flex flex-wrap">{current.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {current.teams.map(({ name, icon, teamId }: any, index: any) => (
              <div
                key={index}
                className="bg-gray-300 w-[300px] h-[300px] rounded-xl items-end overflow-hidden transition-all"
              >
                {selectedItem == teamId && (
                  <div className="absolute bg-black rounded-full p-2 scale-50 flex ">
                    <svg
                      // className="bg-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        d="M13.42 27.352a2.25 2.25 0 0 1-1.425-.51l-6.72-5.505a2.25 2.25 0 0 1 2.85-3.48l5.204 4.26 15-13.815a2.25 2.25 0 1 1 3 3.3l-16.38 15.15a2.22 2.22 0 0 1-1.53.6Z"
                      />
                    </svg>
                  </div>
                )}
                <button
                  onClick={() => onSelect(teamId)}
                  className="h-full w-full font-semibold flex flex-col justify-center items-center"
                >
                  <Image
                    src={icon.toString()}
                    height={100}
                    width={100}
                    alt="teamlogo"
                  />
                  <p className="mb-4 ">{name}</p>
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-16">
            <button
              disabled={currentIndex == 0}
              onClick={backStep}
              className=" disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-50 transition-all bg-black/25 h-20 w-[300px] font-semibold text-2xl text-black items-center justify-center gap-x-2 flex rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="none"
              >
                <path
                  fill="#000"
                  d="M14.72 6.93H9.5l.37-.37a1.52 1.52 0 1 0-2.18-2.12L4.77 7.37a1.51 1.51 0 0 0-.33.49 1.54 1.54 0 0 0 0 1.09c.072.203.185.39.33.55l2.92 2.93a1.51 1.51 0 1 0 2.13-2.14l-.32-.36h5.27a3 3 0 0 1 3 3v2.17a2.93 2.93 0 0 1-2.81 2.95h-8a1.5 1.5 0 0 0 0 3h8a5.93 5.93 0 0 0 5.76-5.95v-2.22a6 6 0 0 0-6-5.95Z"
                />
              </svg>
              Önceki
            </button>
            <button
              onClick={currentIndex + 1 == data.length ? onFinish : nextStep}
              className="hover:opacity-50 transition-all bg-black h-20 w-[300px] font-semibold text-2xl text-white items-center justify-center gap-x-2 flex rounded-xl"
            >
              {currentIndex + 1 == data.length ? "Bitir" : "Sonraki"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M17.8 17.82a.75.75 0 0 1-.75-.75V7.94H7.93a.75.75 0 1 1 0-1.5h9.88a.74.74 0 0 1 .53.21.75.75 0 0 1 .22.54v9.88a.74.74 0 0 1-.76.75Z"
                />
                <path
                  fill="#fff"
                  d="M7.19 18.56a.74.74 0 0 1-.754-.745.75.75 0 0 1 .224-.535L17.28 6.66a.75.75 0 1 1 1.06 1.06L7.72 18.35a.77.77 0 0 1-.53.21Z"
                />
                <path
                  fill="#fff"
                  d="M17.8 18.57a1.5 1.5 0 0 1-1.5-1.5V8.69H7.93a1.5 1.5 0 1 1 0-3h9.89a1.47 1.47 0 0 1 1.5 1.5v9.88a1.5 1.5 0 0 1-1.52 1.5Z"
                />
                <path
                  fill="#fff"
                  d="M7.19 19.31a1.48 1.48 0 0 1-1.06-.43 1.5 1.5 0 0 1 0-2.13L16.75 6.13a1.5 1.5 0 1 1 2.12 2.12L8.25 18.88a1.52 1.52 0 0 1-1.06.43Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
