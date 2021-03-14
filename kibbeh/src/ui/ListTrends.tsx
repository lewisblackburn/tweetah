import React from 'react'
import {FaCog, FaChevronDown} from 'react-icons/fa'

interface ListTrendsProps {}

export const ListTrends: React.FC<ListTrendsProps> = ({}) => {
  return (
    <section className="bg-gray rounded-xl">
      <div className="py-3 px-5 border-b border-gray-600 flex justify-between">
        <h4 className="text-xl font-bold">Trends for you</h4>
        <span className="text-primary">
          <FaCog />
        </span>
      </div>
      <ul>
        <li className="flex justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <span className="text-sm text-gray-400">Trending in India</span>
            <h6 className="text-lg">Google and Apple</h6>
            <span className="text-sm text-gray-400">36.7K Tweets</span>
          </div>
          <span>
            <FaChevronDown className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="flex justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <span className="text-sm text-gray-400">Trending in India</span>
            <h6 className="text-lg">Google and Apple</h6>
            <span className="text-sm text-gray-400">36.7K Tweets</span>
          </div>
          <span>
            <FaChevronDown className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="flex justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <span className="text-sm text-gray-400">Trending in India</span>
            <h6 className="text-lg">Google and Apple</h6>
            <span className="text-sm text-gray-400">36.7K Tweets</span>
          </div>
          <span>
            <FaChevronDown className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="flex justify-between px-5 py-2 border-b border-gray-600 hover:bg-gray-900">
          <div>
            <span className="text-sm text-gray-400">Trending in India</span>
            <h6 className="text-lg">Google and Apple</h6>
            <span className="text-sm text-gray-400">36.7K Tweets</span>
          </div>
          <span>
            <FaChevronDown className="mt-1 text-gray-400" />
          </span>
        </li>
      </ul>
      <div className="px-5 py-4 text-primary">
        <button>Show More</button>
      </div>
    </section>
  )
}

export default ListTrends
