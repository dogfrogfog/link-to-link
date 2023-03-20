'use client'
import { useState } from "react";

const InfoBlock = ({ title, text }: { title: string, text: string }) => (
  <div className="mx-4 mb-8 max-w-sm rounded overflow-hidden shadow-lg">
    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{text}</p>
    </div>
    {/* <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div> */}
  </div>
)

const QuestionsBlock = ({ question, answer } : { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className="shadow-lg rounded p-2 mb-4">
    <div className="mb-1" onClick={() => setIsOpen(!isOpen)}>{question}</div>
    {isOpen && <div className="text-sm">{answer}</div>}
  </div>
  )
}


// add button
const landingBlocks = [
  {
    title: 'Everything you are. In one, simple link in bio.',
    text: 'Join 30M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.'
  },
  {
    title: 'Create and customize your Linktree in minutes.',
    text: 'Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.'
  },
  {
    title: 'Share your Linktree from your Instagram, TikTok, Twitter and other bios.',
    text: 'Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.'
  },
  {
    title: 'Analyze your audience and keep your followers engaged.',
    text: 'Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.'
  },
  {
    title: 'Analyze your audience and keep your followers engaged.',
    text: 'Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.'
  },
]

const questions = [
  {
    question: 'Why do I need a link in bio tool?',
    answer: 'Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.'
  },
  {
    question: 'Is Linktree the original link in bio tool?',
    answer: 'Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.'
  },
  {
    question: 'Is Linktree safe to use on all of my social media profiles?',
    answer: 'Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.'
  },
]

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold">
      {landingBlocks.map(v => <InfoBlock key={v.title} title={v.title} text={v.text} />)}
    </h1>
      <div className="px-4">
        <div className="text-center font-bold text-2xl">Got questions?</div>
        {questions.map(v => <QuestionsBlock key={v.question} question={v.question} answer={v.answer} />)}
      </div>
    </>
  )
}
