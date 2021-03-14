import React from 'react'
import ButtonSecondary from './ButtonSecondary'

interface ListFollowSuggestionsProps {}

export const ListFollowSuggestions: React.FC<ListFollowSuggestionsProps> = ({}) => {
  return (
    <section className="bg-gray rounded-xl">
      <div className="py-3 px-5 border-b border-gray-600">
        <h4 className="text-xl font-bold">Trends for you</h4>
      </div>
      <ul>
        <li className="flex items-center justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1246452594152574977/Ivwut-hd_reasonably_small.png"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Kelly Vaughn</h6>
            <span className="text-sm text-gray-400">@kvlly</span>
          </div>
          <ButtonSecondary>Follow</ButtonSecondary>
        </li>
        <li className="flex items-center justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1246452594152574977/Ivwut-hd_reasonably_small.png"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Kelly Vaughn</h6>
            <span className="text-sm text-gray-400">@kvlly</span>
          </div>
          <ButtonSecondary>Follow</ButtonSecondary>
        </li>
        <li className="flex items-center justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1246452594152574977/Ivwut-hd_reasonably_small.png"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Kelly Vaughn</h6>
            <span className="text-sm text-gray-400">@kvlly</span>
          </div>
          <ButtonSecondary>Follow</ButtonSecondary>
        </li>
      </ul>
      <div className="px-5 py-4 text-primary">
        <button>Show More</button>
      </div>
    </section>
  )
}

export default ListFollowSuggestions
