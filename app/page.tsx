const InfoBlock = ({ title, text, bgColor, textColor }: { title: string, text: string, bgColor: string, textColor: string }) => (
  <div className={`overflow-hidden ${bgColor}`}>
    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
    <div className="px-6 py-10">
      <div className={`font-black text-3xl mb-2 leading-7 ${textColor}`}>{title}</div>
      <p className={`text-xs ${textColor}`}>{text}</p>
    </div>
  </div>
)

const landingBlocks = [
  {
    title: 'Everything you are. In one, simple link in bio.',
    text: 'Join 30M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.',
    bgColor: 'bg-lime-800',
    textColor: 'text-amber-200'
  },
  {
    title: 'Create and customize your Linktree in minutes.',
    text: 'Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.',
    bgColor: 'bg-fuchsia-200',
    textColor: 'text-purple-900'
  },
  {
    title: 'Share your Linktree from your Instagram, TikTok, Twitter and other bios.',
    text: 'Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.',
    bgColor: 'bg-red-900',
    textColor: 'text-fuchsia-200'
  },
  {
    title: 'Analyze your audience and keep your followers engaged.',
    text: 'Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-900'
  },
]

console.log('triger build')

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        {landingBlocks.map(v => 
          <InfoBlock
            key={v.title}
            title={v.title}
            text={v.text}
            textColor={v.textColor}
            bgColor={v.bgColor}
          />
        )}
      </h1>
    </>
  )
}
